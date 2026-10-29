interface Item {
	readonly title: string
	readonly text: string
}

interface Scenario {
	readonly label: string
	readonly prompt: string
	readonly meaning: string
}

// All the text of the home page in one language. Every language has a file
// in this folder with the name of its URL path, and `en.ts` is the source.
export interface Messages {
 readonly experienceSections: readonly [string, string, string, string, string]
 readonly diagram: {
 readonly verify: string
 readonly return: string
 readonly parallel: string
 readonly resume: string
 readonly message: string
 readonly work: string
 readonly reply: string
 readonly appFlow: readonly [string, string, string]
 }
 readonly linkLabels: {
  readonly deploy: string
  readonly apps: string
  readonly channels: string
  readonly delegation: string
  readonly chats: string
  readonly models: string
  readonly source: string
 }
 readonly developerSections: readonly [string, string, string, string]
 readonly applications: readonly {
  readonly title: string
  readonly task: string
  readonly steps: readonly [string, string]
  readonly outcome: string
 }[]
 readonly demo: {
  readonly send: string
  readonly label: string
  readonly task: string
  readonly read: string
  readonly grouped: string
  readonly report: string
  readonly sent: string
  readonly reset: string
  readonly download: string
  readonly categories: readonly [string, string, string]
 }

	readonly product: {
		readonly online: string
		readonly progress: string
		readonly results: string
		readonly title: string
		readonly ui: string
		readonly core: string
		readonly developers: string
		readonly soon: string
	}
	readonly description: string
	readonly nav: {
		readonly label: string
		readonly docs: string
		readonly api: string
		readonly language: string
	}
	readonly hero: {
		readonly title: readonly [string, string]
		readonly body: string
		readonly quickStart: string
		readonly apiReference: string
		readonly visual: string
		/** The example work in the `curl` call. */
		readonly prompt: string
	}
	readonly scenarios: {
		readonly title: string
		readonly label: string
		readonly script: Scenario
		readonly service: Scenario
		readonly bot: Scenario
	}
	readonly contract: {
		readonly visual: string
		readonly title: readonly [string, string]
		readonly body: string
	}
	readonly features: {
		readonly title: readonly [string, string]
		readonly items: readonly [Item, Item, Item, Item]
	}
	readonly closing: {
		readonly title: readonly [string, string]
		readonly label: string
		readonly steps: readonly [Item, Item, Item]
	}
	readonly license: {
		readonly tagline: string
		readonly label: string
		readonly body: string
		readonly link: string
	}
}
