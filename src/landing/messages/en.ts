import type { Messages } from "./types.ts"

export default {
 experienceSections: ["Work happens in your tools.", "Work continues beyond the chat.", "Share the way you work.", "A shared role and method", "Your own accounts and data"],
 diagram: {"verify": "Verify the source and identify the sender", "return": "Send results back to the original thread", "parallel": "Tasks run independently and return results to this chat", "resume": "Reconnect and continue from the last received event", "message": "Message", "work": "Process", "reply": "Reply", "appFlow": ["Find the service", "Read connection details", "Use tools and views"]},
	linkLabels: {"deploy": "Deployment guide", "apps": "App publishing specification", "channels": "Channel integration guide", "delegation": "Task delegation guide", "chats": "Chat and event stream guide", "models": "Extend model backends", "source": "Source code"},
	developerSections: ["Publish a capability.", "Meet people where they work.", "Let long work keep running.", "Run it on your infrastructure."],
	applications: [
	  {
	    "title": "Customer support",
	    "task": "In Slack, triage today’s tickets using my connected support App and route urgent cases.",
	    "steps": [
	      "Read 12 tickets through the connected App; identify 3 urgent cases.",
	      "Assign the urgent cases to engineering and update the ticket records."
	    ],
	    "outcome": "Posted case owners and next steps back to #support. The team continues in the same thread."
	  },
	  {
	    "title": "Retail operations",
	    "task": "Use my inventory and purchasing Apps to replenish SKU-203 and notify our Lark purchasing group.",
	    "steps": [
	      "Check stock and supplier lead time; flag a 12-unit gap before delivery.",
	      "Create expedited purchase order PO-203 for 12 units through the purchasing App."
	    ],
	    "outcome": "The purchase order is recorded and its reference is posted to the Lark group for follow-up."
	  },
	  {
	    "title": "Shared teaching Bot",
	    "task": "Share my lesson-planning Bot with another teacher so they can use it with their own materials.",
	    "steps": [
	      "Keep the Bot’s teaching role and lesson-planning instructions.",
	      "Create an email invitation for teacher@example.com."
	    ],
	    "outcome": "After accepting, the teacher gets a linked Bot in their organization, using their own Apps. Our Chats stay separate."
	  },
	  {
	    "title": "Family travel",
	    "task": "Use our saved travel preferences and booking App to arrange Rome in my calendar; send it to Telegram.",
	    "steps": [
	      "Recall the family’s slower pace and afternoon breaks; read existing bookings.",
	      "Add three days of activities through the connected calendar App, leaving breaks between stops."
	    ],
	    "outcome": "The calendar is updated and the itinerary is delivered to our Telegram chat, ready to adjust there."
	  },
	  {
	    "title": "Moving coordinator",
	    "task": "Organize my move next week and remind me on Telegram at each stage, in my local time zone.",
	    "steps": [
	      "Create tasks for utilities, packing, and key handover.",
	      "Set one-time triggers for 7 days before, 3 days before, and moving day."
	    ],
	    "outcome": "Three reminders are scheduled. Each trigger will start the next task and send the update through Telegram."
	  },
	  {
	    "title": "Sales follow-up",
	    "task": "Use my connected CRM and calendar Apps to follow up opportunity OPP-204 after our meeting.",
	    "steps": [
	      "Read the meeting notes and the current opportunity record.",
	      "Update the CRM next step and add the follow-up meeting to the calendar."
	    ],
	    "outcome": "OPP-204 now has a next action and a scheduled follow-up. The customer email is sent through the connected mail App."
	  },
	  {
	    "title": "Release preparation",
	    "task": "Give the API and UI checks to two Bots. Use the connected test Computer and bring the results back here.",
	    "steps": [
	      "Delegate API tests and UI checks to separate tasks while this Chat remains available.",
	      "Run checks on the Computer; collect the two task results and changed files."
	    ],
	    "outcome": "Both tasks returned here: 28 tests passed, 2 files changed. The release candidate is ready for the team to inspect."
	  }
	],
	demo: {
		"send": "Send",
	  "label": "Interactive demo",
	  "task": "Review 12 support tickets, prepare a report, and email it to the team.",
	  "read": "Read 12 tickets",
	  "grouped": "Grouped into 3 topics",
	  "report": "Support report",

	  "sent": "Email sent",
	  "reset": "Replay",
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
		results: "Pick up the result",

	  "title": "From idea to action.",
	  "ui": "From idea to action.",
	  "core": "Agents that get to work.",
	  "developers": "For developers",
	  "soon": "Coming soon"
	},
	description: "A headless, API-first Bot platform.",
	nav: {
		label: "Site",
		docs: "Docs",
		api: "API",
		language: "Language",
	},
	hero: {
		title: ["Your agents.", "Your rules."],
		body: "OpenBot is an open source Bot platform with no user interface. You give work to a Bot over HTTP.",
		quickStart: "Quick start",
		apiReference: "API reference",
		visual: "Start a Turn",
		prompt: "Plan three days in Rome.",
	},
	scenarios: {
		title: "What will you build?",
		label: "Clients",
		script: {
			label: "A script",
			prompt: "Every morning, read the new support tickets and sort them.",
			meaning: "Call one endpoint from a cron job. Read the answer as JSON.",
		},
		service: {
			label: "A service",
			prompt: "Check each new order and flag the ones that look wrong.",
			meaning:
				"Your server starts a Turn. Then it reads a stream or waits with a long poll.",
		},
		bot: {
			label: "A chat bot",
			prompt:
				"Answer questions in our team chat. Ask me before you send email.",
			meaning: "Risky tool calls wait until a person says yes.",
		},
	},
	contract: {
		visual: "One contract",
		title: ["Every feature is an HTTP call.", "One typed contract."],
		body: "The server, the TypeScript client, and the API reference all come from one contract. Use an API key from any program.",
	},
	features: {
		title: ["Bring your own client.", "Keep people in control."],
		items: [
			{
				title: "One chat with each Bot",
				text: "You have one chat with each Bot. It always answers at once, and long work runs in parallel.",
			},
			{
				title: "Approvals",
				text: "Risky tool calls wait until a person says yes. Every answer keeps its history.",
			},
			{
				title: "Open Apps",
				text: "Bots find and use Apps that publishers put on the open web with the OpenBot App Protocol.",
			},
			{
				title: "Your models",
				text: "Use OpenAI, Anthropic, or any server that speaks Chat Completions.",
			},
		],
	},
	closing: {
		title: ["Start in", "three steps."],
		label: "Steps",
		steps: [
			{
				title: "Start the server",
				text: "Run OpenBot on your computer with Docker and devenv. It comes with a test account and test models.",
			},
			{
				title: "Make an API key",
				text: "Sign in once in a browser, make a key, and call the API from any program.",
			},
			{
				title: "Start a Turn",
				text: "Send work in plain language. Read the answer, the tool calls, and the history.",
			},
		],
	},
	license: {
		tagline: "Open by design.",
		label: "License",
		body: "OpenBot is free software under AGPL-3.0-only. You can read the code, change it, and run it on your own servers.",
		link: "Read the code",
	},
} satisfies Messages
