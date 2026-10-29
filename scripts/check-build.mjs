import assert from "node:assert/strict"
import sharp from "sharp"
import { readdir, readFile, stat } from "node:fs/promises"
import { fileURLToPath } from "node:url"
import { homeLocales } from "../src/i18n.ts"

const output = new URL("../dist/", import.meta.url)
const read = (path) => readFile(new URL(path, output), "utf8")
const tags = (html, name) => html.match(new RegExp(`<${name}\\b[^>]*>`, "g")) ?? []
const attribute = (tag, name) =>
	tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1]

assert.equal(homeLocales.length, 35, "Keep all 35 languages.")
const messages = await readdir(new URL("../src/landing/messages/", import.meta.url))
assert.equal(messages.filter((name) => !["index.ts", "types.ts"].includes(name)).length, 35)

for (const locale of homeLocales) {
 for (const suffix of ["", "developers/"]) {
	const path = `${locale.path === "" ? "/" : `/${locale.path}/`}${suffix}`
	const html = await read(`${path.slice(1)}index.html`)
	const root = tags(html, "html")[0]
	assert.equal(attribute(root, "lang"), locale.lang, `${path}: language`)
	assert.equal(attribute(root, "dir"), locale.dir, `${path}: text direction`)
	const links = tags(html, "link")
	const canonical = links.find((tag) => attribute(tag, "rel") === "canonical")
	assert.equal(attribute(canonical, "href"), `https://openbot.build${path}`)
	const alternates = links.filter((tag) => attribute(tag, "rel") === "alternate")
	assert.equal(alternates.length, 36, `${path}: language metadata`)
	for (const other of homeLocales) {
		const link = alternates.find((tag) => attribute(tag, "hreflang") === other.lang)
		const target = `${other.path === "" ? "/" : `/${other.path}/`}${suffix}`
		assert.equal(attribute(link, "href"), `https://openbot.build${target}`)
	}
	const anchors = tags(html, "a").map((tag) => attribute(tag, "href"))
	const docsPath = ["de", "zh-cn"].includes(locale.path) ? `/${locale.path}/` : "/"
	const docs = `https://docs.openbot.build${docsPath}`
	assert.ok(anchors.includes(docs), `${path}: docs link`)
	if (suffix) assert.ok(anchors.includes(`${docs}developers/quickstart/`), `${path}: quick start link`)
 else {
  assert.ok(!html.includes("<pre"), `${path}: keep code on developer pages`)
  assert.ok(html.includes('id="availability"') && html.includes("data-demo") && html.includes("data-result"), `${path}: demo and availability`)
  assert.ok(!html.includes("data-approve") && !html.includes("data-approval"), `${path}: uninterrupted delivery`)
  assert.ok(!anchors.some(href => href?.startsWith("#")), `${path}: no in-page jumps`)
  assert.ok(/data-result[^>]*hidden|hidden[^>]*data-result/.test(html), `${path}: delivery starts hidden`)
  assert.ok(!html.includes("download="), `${path}: outcomes live in the connected destination`)
  const storyData = html.match(/<script\b[^>]*data-story-data[^>]*>([\s\S]*?)<\/script>/)?.[1]
  assert.ok(storyData, `${path}: scene data`)
  const stories = JSON.parse(storyData)
  assert.equal(stories.length, 7, `${path}: seven work and life scenarios`)
  assert.deepEqual(stories.map(story => story.kind), ["channel", "purchase", "share", "calendar", "schedule", "crm", "computer"], `${path}: distinct destinations`)
  for (const story of stories) {
   assert.ok(story.title && story.task && story.steps.length === 2 && story.outcome, `${path}: complete scene`)
   assert.ok(html.includes(`data-receipt="${story.kind}"`), `${path}: scene has its own receipt`)
  }

  assert.ok(!html.includes('class="preview-lines"') && !html.includes('class="progress-visual"'), `${path}: no placeholder lines`)
  assert.ok(html.includes('class="coming-soon"'), `${path}: Online experience is coming soon`)
  assert.ok(anchors.includes(`${path}developers/`), `${path}: developer page`)
 }
	assert.equal(anchors.filter((href) => href === "https://docs.openbot.build/api/").length, suffix ? 2 : 1)
	assert.ok(!anchors.some((href) => /^\/(?:de\/|zh-cn\/)?docs(?:\/|$)/.test(href)))
	for (const other of homeLocales) {
		assert.ok(anchors.includes(`${other.path === "" ? "/" : `/${other.path}/`}${suffix}`))
	}
	for (const href of anchors.filter((href) => href?.startsWith("/"))) {
		const address = new URL(href, "https://openbot.build")
		assert.equal(address.origin, "https://openbot.build")
		assert.ok((await stat(new URL(`${address.pathname.slice(1)}index.html`, output))).isFile())
	}
 }
}

const notFound = await read("404.html")
assert.ok(notFound.includes('href="/"'), "The missing-page link returns home.")
const countHtml = async (directory) => {
	let count = 0
	for (const entry of await readdir(directory, { withFileTypes: true })) {
		const path = new URL(entry.name + (entry.isDirectory() ? "/" : ""), directory)
		if (entry.isDirectory()) count += await countHtml(path)
		else if (entry.name.endsWith(".html")) count++
	}
	return count
}
assert.equal(await countHtml(output), 71, "Build 35 product pages, 35 developer pages, and 404.")
console.log(`Checked 35 product pages, 35 developer pages, docs links, and 404 in ${fileURLToPath(output)}.`)

const iconLinks = [
 ["/favicon.ico", "icon"], ["/favicon.svg", "icon"],
 ["/favicon-16x16.png", "icon"], ["/favicon-32x32.png", "icon"],
 ["/favicon-48x48.png", "icon"], ["/apple-touch-icon.png", "apple-touch-icon"],
 ["/safari-pinned-tab.svg", "mask-icon"], ["/site.webmanifest", "manifest"],
]
for (const page of ["404.html", ...homeLocales.flatMap(locale => {
 const prefix = locale.path ? `${locale.path}/` : ""
 return [`${prefix}index.html`, `${prefix}developers/index.html`]
})]) {
 const links = tags(await read(page), "link")
 for (const [href, rel] of iconLinks) {
  assert.ok(links.some(link => attribute(link, "href") === href && attribute(link, "rel") === rel), `${page}: ${href}`)
  assert.ok((await stat(new URL(href.slice(1), output))).isFile())
 }
}
const manifest = JSON.parse(await read("site.webmanifest"))
assert.equal(manifest.name, "OpenBot")
assert.ok(manifest.icons.some(icon => icon.purpose === "maskable"))
for (const [filename, size] of [
 ["favicon-16x16.png", 16], ["favicon-32x32.png", 32], ["favicon-48x48.png", 48],
 ["apple-touch-icon.png", 180], ...manifest.icons.map(icon => [icon.src.slice(1), Number(icon.sizes.split("x")[0])]),
]) {
 const metadata = await sharp(await readFile(new URL(filename, output))).metadata()
 assert.equal(metadata.format, "png")
 assert.equal(metadata.width, size, filename)
 assert.equal(metadata.height, size, filename)
}
const ico = await readFile(new URL("favicon.ico", output))
assert.equal(ico.readUInt16LE(2), 1)
assert.equal(ico.readUInt16LE(4), 3)
for (const [index, size] of [16, 32, 48].entries()) {
 const entry = 6 + index * 16
 assert.equal(ico[entry], size)
 assert.equal(ico[entry + 1], size)
 const offset = ico.readUInt32LE(entry + 12)
 assert.equal(ico.readInt32LE(offset + 4), size)
 assert.equal(ico.readInt32LE(offset + 8), size * 2)
 assert.ok(offset + ico.readUInt32LE(entry + 8) <= ico.length)
}
console.log("Checked icon links on all pages, PNG sizes, manifest, and ICO frames.")
