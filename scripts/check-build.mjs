import assert from "node:assert/strict"
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
	const path = locale.path === "" ? "/" : `/${locale.path}/`
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
		const target = other.path === "" ? "/" : `/${other.path}/`
		assert.equal(attribute(link, "href"), `https://openbot.build${target}`)
	}
	const anchors = tags(html, "a").map((tag) => attribute(tag, "href"))
	const docsPath = ["de", "zh-cn"].includes(locale.path) ? `/${locale.path}/` : "/"
	const docs = `https://docs.openbot.build${docsPath}`
	assert.ok(anchors.includes(docs), `${path}: docs link`)
	assert.ok(anchors.includes(`${docs}quickstart/`), `${path}: quick start link`)
	assert.equal(anchors.filter((href) => href === "https://docs.openbot.build/api/").length, 2)
	assert.ok(!anchors.some((href) => /^\/(?:de\/|zh-cn\/)?docs(?:\/|$)/.test(href)))
	for (const other of homeLocales) {
		assert.ok(anchors.includes(other.path === "" ? "/" : `/${other.path}/`))
	}
	for (const href of anchors.filter((href) => href?.startsWith("/"))) {
		const address = new URL(href, "https://openbot.build")
		assert.equal(address.origin, "https://openbot.build")
		assert.ok((await stat(new URL(`${address.pathname.slice(1)}index.html`, output))).isFile())
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
assert.equal(await countHtml(output), 36, "Build only the 35 home pages and 404.")
console.log(`Checked 35 language pages, docs links, and 404 in ${fileURLToPath(output)}.`)
