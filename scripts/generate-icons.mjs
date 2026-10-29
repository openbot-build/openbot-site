import { readFile, writeFile } from "node:fs/promises"
import sharp from "sharp"

const publicDir = new URL("../public/", import.meta.url)
const source = await readFile(new URL("OB.svg", publicDir), "utf8")
const path = source.match(/<path[^>]*\sd="([^"]+)"/)?.[1]
if (!path) throw new Error("The brand SVG must contain a path.")
const svg = (maskable = false) => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 106 106"><rect x="-3" y="-3" width="106" height="106" fill="#fff"/><path fill="#000" d="${path}"${maskable ? ' transform="translate(50 50) scale(.75) translate(-50 -50)"' : ""}/></svg>`)
await writeFile(new URL("favicon.svg", publicDir), svg())
await writeFile(new URL("safari-pinned-tab.svg", publicDir), source)
const raster = (size, maskable = false) => sharp(svg(maskable), { density: 384 }).resize(size, size)
for (const [name, size, maskable] of [
 ["favicon-16x16.png", 16], ["favicon-32x32.png", 32], ["favicon-48x48.png", 48],
 ["apple-touch-icon.png", 180], ["icon-192.png", 192], ["icon-512.png", 512],
 ["icon-maskable-512.png", 512, true],
]) {
 await raster(size, maskable).png().toFile(new URL(name, publicDir).pathname)
}

// Uncompressed bitmap frames also work in older ICO readers.
const sizes = [16, 32, 48]
const frames = []
for (const size of sizes) {
 const pixels = await raster(size).ensureAlpha().raw().toBuffer()
 const maskBytes = Math.ceil(size / 32) * 4 * size
 const frame = Buffer.alloc(40 + size * size * 4 + maskBytes)
 frame.writeUInt32LE(40, 0)
 frame.writeInt32LE(size, 4)
 frame.writeInt32LE(size * 2, 8)
 frame.writeUInt16LE(1, 12)
 frame.writeUInt16LE(32, 14)
 frame.writeUInt32LE(size * size * 4 + maskBytes, 20)
 for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
   const from = (y * size + x) * 4
   const to = 40 + ((size - 1 - y) * size + x) * 4
   frame[to] = pixels[from + 2]
   frame[to + 1] = pixels[from + 1]
   frame[to + 2] = pixels[from]
   frame[to + 3] = 255
  }
 }
 frames.push(frame)
}
const header = Buffer.alloc(6 + 16 * sizes.length)
header.writeUInt16LE(1, 2)
header.writeUInt16LE(sizes.length, 4)
let offset = header.length
frames.forEach((frame, index) => {
 const entry = 6 + index * 16
 header[entry] = header[entry + 1] = sizes[index]
 header.writeUInt16LE(1, entry + 4)
 header.writeUInt16LE(32, entry + 6)
 header.writeUInt32LE(frame.length, entry + 8)
 header.writeUInt32LE(offset, entry + 12)
 offset += frame.length
})
await writeFile(new URL("favicon.ico", publicDir), Buffer.concat([header, ...frames]))
console.log("Generated browser icons from public/OB.svg.")
