import type { Messages } from "./types.ts"

export default {
 experienceSections: ["Work dey happen inside your tools.", "Work continues outside the chat.", "Share how you dey work.", "The same role and method", "Your own accounts and data"],
 diagram: {"verify": "Check the source and who send the message", "return": "Send results back to the original thread", "parallel": "Tasks run separately and bring results back to this chat", "resume": "Reconnect and continue from the last event wey arrive", "message": "Send message", "work": "Run task", "reply": "Get reply", "appFlow": ["Find service", "Read connection details", "Use tools and views"]},
	linkLabels: {"deploy": "Guide to deploy OpenBot", "apps": "Rules for publishing Apps", "channels": "Guide to connect chat channels", "delegation": "Guide to delegate tasks", "chats": "Guide to chats and event streams", "models": "Extend model backends", "source": "Source code"},
	developerSections: ["Publish wetin your service fit do.", "Connect where people dey work.", "Make long tasks continue to run.", "Run am for your own infrastructure."],
	applications: [
	  {
	    "title": "Customer support",
	    "task": "Use my connected support App handle tickets for Slack and assign urgent ones.",
	    "steps": [
	      "Read 12 tickets; find 3 urgent cases.",
	      "Assign urgent cases to engineers and update tickets."
	    ],
	    "outcome": "Owners and next steps don return to the same #support thread."
	  },
	  {
	    "title": "Shop operations",
	    "task": "Restock SKU-203 through my stock and purchase Apps; tell the Lark group.",
	    "steps": [
	      "Check stock and delivery: 12 items go short.",
	      "Create urgent purchase order PO-203 for 12 items."
	    ],
	    "outcome": "Order don save; the number dey Lark for follow-up."
	  },
	  {
	    "title": "Share teaching Bot",
	    "task": "Share my lesson Bot with another teacher to use their own materials and accounts.",
	    "steps": [
	      "Keep the Bot teaching role and instructions.",
	      "Create email invitation for teacher@example.com."
	    ],
	    "outcome": "After acceptance, teacher gets linked Bot with their own Apps. Our Chats stay separate."
	  },
	  {
	    "title": "Family travel",
	    "task": "Use remembered preferences and bookings put Rome for my calendar and Telegram.",
	    "steps": [
	      "Remember slow pace and breaks; read bookings.",
	      "Add three days through the connected calendar App."
	    ],
	    "outcome": "Calendar don update; itinerary dey Telegram and fit change there."
	  },
	  {
	    "title": "Moving coordinator",
	    "task": "Organize next week move and remind me on Telegram with my time zone.",
	    "steps": [
	      "Create utility, packing and key handover tasks.",
	      "Set one-time triggers 7 days before, 3 days before and moving day."
	    ],
	    "outcome": "Three reminders don schedule; each one starts the task and updates Telegram."
	  },
	  {
	    "title": "Sales follow-up",
	    "task": "Follow up OPP-204 through my CRM and calendar Apps.",
	    "steps": [
	      "Read meeting notes and opportunity state.",
	      "Update CRM next step and book follow-up meeting."
	    ],
	    "outcome": "OPP-204 get next action and time; customer email don send through mail App."
	  },
	  {
	    "title": "Release preparation",
	    "task": "Give API and UI checks to two Bots on the test Computer.",
	    "steps": [
	      "Delegate two tasks while this Chat stays open.",
	      "Run checks and collect results and changed files."
	    ],
	    "outcome": "Both tasks don return: 28 tests pass, 2 files change. Release ready for inspection."
	  }
	],
	demo: {
		"send": "Send",
	  "label": "Interactive demo",
	  "task": "Check 12 support tickets, prepare report and email the team.",
	  "read": "12 tickets don read",
	  "grouped": "Grouped into 3 topics",
	  "report": "Support report",

	  "sent": "Email don send",
	  "reset": "Run am again",
	  "download": "Download report",
	  "categories": [
	    "Sign-in",
	    "Billing",
	    "Export"
	  ]
	},
	product: {
		online: "Online experience",
		progress: "Follow the work",
		results: "Collect the result",

	  "title": "From idea to action.",
	  "ui": "From idea to action.",
	  "core": "Agents wey dey work.",
	  "developers": "For developers",
	  "soon": "E dey come soon"
	},
	description: "Bot platform wey no get screen, wey put API first.",
	nav: {
		label: "Site",
		docs: "Docs",
		api: "API",
		language: "Language",
	},
	hero: {
		title: ["Your agents.", "Your rules."],
		body: "OpenBot na open source Bot platform wey no get user interface. You go give Bot work through HTTP.",
		quickStart: "Start sharp sharp",
		apiReference: "API reference",
		visual: "Start one Turn",
		prompt: "Plan three days for Rome.",
	},
	scenarios: {
		title: "Wetin you wan build?",
		label: "Clients",
		script: {
			label: "One script",
			prompt: "Every morning, read the new support tickets come arrange dem.",
			meaning:
				"Call one endpoint from cron job (work wey dey run for set time). Read the answer as JSON.",
		},
		service: {
			label: "One service",
			prompt: "Check every new order, mark the ones wey no look correct.",
			meaning:
				"Your server go start one Turn. Then e go read stream or wait with long poll.",
		},
		bot: {
			label: "One chat bot",
			prompt:
				"Answer questions for our team chat. Ask me first before you send email.",
			meaning: "Tool calls wey get risk go wait until person talk yes.",
		},
	},
	contract: {
		visual: "One contract",
		title: ["Every feature na HTTP call.", "One typed contract."],
		body: "The server, the TypeScript client, and the API reference all come from one contract. Use API key from any program.",
	},
	features: {
		title: ["Bring your own client.", "Make people still dey control."],
		items: [
			{
				title: "One chat with each Bot",
				text: "You get one chat with each Bot. The Bot dey answer you sharp sharp every time, and long work dey run at the same time.",
			},
			{
				title: "Approvals",
				text: "Tool calls wey get risk go wait until person talk yes. Every answer dey keep im history.",
			},
			{
				title: "Open Apps",
				text: "Bots dey find and use Apps wey publishers put for open web with OpenBot App Protocol.",
			},
			{
				title: "Your own models",
				text: "Use OpenAI, Anthropic, or any server wey sabi talk Chat Completions.",
			},
		],
	},
	closing: {
		title: ["Start am for", "three steps."],
		label: "Steps",
		steps: [
			{
				title: "Start the server",
				text: "Run OpenBot for your computer with Docker and devenv. E come with test account and test models.",
			},
			{
				title: "Make API key",
				text: "Sign in one time for browser, make key, then call the API from any program.",
			},
			{
				title: "Start one Turn",
				text: "Send work for simple language. Read the answer, the tool calls, and the history.",
			},
		],
	},
	license: {
		tagline: "E open from the start.",
		label: "License",
		body: "OpenBot na free software under AGPL-3.0-only. You fit read the code, change am, and run am for your own servers.",
		link: "Read the code",
	},
} satisfies Messages
