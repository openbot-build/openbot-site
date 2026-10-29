export const docsOrigin = "https://docs.openbot.build"

/** Make a docs address without allowing the path to change its host. */
export const docsUrl = (path: string): string => {
	const url = new URL(docsOrigin)
	url.pathname = path
	return url.href
}
