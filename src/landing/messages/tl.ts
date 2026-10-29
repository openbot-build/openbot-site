import type { Messages } from "./types.ts"

export default {
 experienceSections: ["Natapos ang gawain sa mga gamit mo.", "Tuloy ang gawain sa labas ng chat.", "Ibahagi ang paraan mo ng paggawa.", "Iisang papel at paraan", "Sariling account at datos"],
 diagram: {"verify": "Suriin ang pinagmulan at kilalanin ang nagpadala", "return": "Ibalik ang resulta sa orihinal na usapan", "parallel": "Hiwalay na tumatakbo ang mga gawain at ibinabalik ang resulta sa chat na ito", "resume": "Kumonekta muli at magpatuloy mula sa huling natanggap na event", "message": "Magpadala", "work": "Gawin ang gawain", "reply": "Tumanggap", "appFlow": ["Hanapin ang serbisyo", "Basahin ang koneksyon", "Gamitin ang mga tool at view"]},
	linkLabels: {"deploy": "Gabay sa pag-deploy", "apps": "Detalye ng paglalathala ng App", "channels": "Gabay sa pagkonekta ng mga channel", "delegation": "Gabay sa pagtatalaga ng gawain", "chats": "Gabay sa chat at event stream", "models": "Palawakin ang mga model backend", "source": "Source code"},
	developerSections: ["Maglathala ng kakayahan.", "Kumonekta kung saan nagtatrabaho ang mga tao.", "Hayaang magpatuloy ang mahahabang gawain.", "Patakbuhin sa sarili mong imprastraktura."],
	applications: [
	  {
	    "title": "Suporta sa customer",
	    "task": "Asikasuhin ang Slack tickets gamit ang konektadong support App at italaga ang urgent.",
	    "steps": [
	      "Basahin ang 12 ticket, tukuyin ang 3 urgent.",
	      "Italaga sa engineering at i-update ang mga ticket."
	    ],
	    "outcome": "Naibalik ang mga may-ari at susunod na hakbang sa orihinal na #support thread."
	  },
	  {
	    "title": "Operasyon ng tindahan",
	    "task": "Dagdagan ang SKU-203 gamit ang stock at purchase Apps, abisuhan ang Lark group.",
	    "steps": [
	      "Suriin ang stock at delivery: kulang ng 12.",
	      "Gumawa ng urgent order PO-203 para sa 12 piraso."
	    ],
	    "outcome": "Naitala ang order at naipadala sa Lark ang numero para sundan ng team."
	  },
	  {
	    "title": "Ibahagi ang teaching Bot",
	    "task": "Ibahagi ang lesson Bot ko sa guro para gamitin ang sarili niyang materyales at account.",
	    "steps": [
	      "Panatilihin ang tungkulin at tagubilin ng Bot.",
	      "Gumawa ng email invitation para sa teacher@example.com."
	    ],
	    "outcome": "Pagkatanggap, may linked Bot at sariling Apps ang guro. Hiwalay ang aming Chats."
	  },
	  {
	    "title": "Biyahe ng pamilya",
	    "task": "Gamitin ang naalalang hilig at bookings para ilagay ang Rome sa kalendaryo at Telegram.",
	    "steps": [
	      "Alalahanin ang mabagal na takbo at pahinga; basahin ang bookings.",
	      "Magdagdag ng tatlong araw gamit ang konektadong calendar App."
	    ],
	    "outcome": "Na-update ang kalendaryo at nasa Telegram ang itinerary para baguhin doon."
	  },
	  {
	    "title": "Tagapag-ayos ng lipat",
	    "task": "Ayusin ang lipat sa susunod na linggo at magpaalala sa Telegram sa time zone ko.",
	    "steps": [
	      "Gumawa ng utilities, packing at key handover na gawain.",
	      "Magtakda ng one-time trigger 7 araw bago, 3 araw bago at mismong araw."
	    ],
	    "outcome": "Nakatakda ang tatlong paalala; bawat isa ay magsisimula ng gawain at mag-uupdate sa Telegram."
	  },
	  {
	    "title": "Sales follow-up",
	    "task": "Sundan ang OPP-204 pagkatapos ng meeting gamit ang CRM at calendar Apps.",
	    "steps": [
	      "Basahin ang meeting notes at opportunity.",
	      "I-update ang susunod na CRM action at magtakda ng follow-up meeting."
	    ],
	    "outcome": "May aksyon at oras na ang OPP-204; naipadala ang customer email sa konektadong mail App."
	  },
	  {
	    "title": "Paghahanda ng release",
	    "task": "Ibigay ang API at UI checks sa dalawang Bots sa test Computer.",
	    "steps": [
	      "Mag-delegate ng dalawang gawain habang bukas ang Chat.",
	      "Patakbuhin ang checks at tipunin ang resulta at files."
	    ],
	    "outcome": "Bumalik ang dalawa: 28 test pumasa, 2 file nabago. Handa nang suriin ang release."
	  }
	],
	demo: {
		"send": "Ipadala",
	  "label": "Interactive demo",
	  "task": "Suriin ang 12 support ticket, gumawa ng ulat at i-email sa team.",
	  "read": "Nabasa ang 12 ticket",
	  "grouped": "Hinati sa 3 paksa",
	  "report": "Ulat ng suporta",

	  "sent": "Naipadala ang email",
	  "reset": "Ulitin",
	  "download": "I-download ang ulat",
	  "categories": [
	    "Pag-login",
	    "Pagsingil",
	    "Pag-export"
	  ]
	},
	product: {
		online: "Online na karanasan",
		progress: "Subaybayan ang gawain",
		results: "Kunin ang resulta",

	  "title": "Mula ideya tungo sa gawa.",
	  "ui": "Mula ideya tungo sa gawa.",
	  "core": "Mga agent na nagtatrabaho.",
	  "developers": "Mga developer",
	  "soon": "Malapit na"
	},
	description: "Isang Bot platform na walang interface at API ang inuuna.",
	nav: {
		label: "Site",
		docs: "Docs",
		api: "API",
		language: "Wika",
	},
	hero: {
		title: ["Mga agent mo.", "Mga patakaran mo."],
		body: "Ang OpenBot ay isang open source na Bot platform na walang user interface. Binibigyan mo ng trabaho ang Bot gamit ang HTTP.",
		quickStart: "Mabilis na simula",
		apiReference: "API reference",
		visual: "Magsimula ng Turn",
		prompt: "Gumawa ng plano para sa tatlong araw sa Rome.",
	},
	scenarios: {
		title: "Ano ang gagawin mo?",
		label: "Mga client",
		script: {
			label: "Isang script",
			prompt:
				"Tuwing umaga, basahin ang mga bagong support ticket at ayusin ang mga ito.",
			meaning:
				"Tumawag ng isang endpoint mula sa isang cron job. Basahin ang sagot bilang JSON.",
		},
		service: {
			label: "Isang service",
			prompt: "Suriin ang bawat bagong order at markahan ang mga mukhang mali.",
			meaning:
				"Nagsisimula ng Turn ang server mo. Pagkatapos, nagbabasa ito ng stream o naghihintay gamit ang long poll.",
		},
		bot: {
			label: "Isang chat bot",
			prompt:
				"Sagutin ang mga tanong sa team chat namin. Magtanong muna sa akin bago magpadala ng email.",
			meaning:
				"Naghihintay ang mga delikadong tool call hanggang may taong pumayag.",
		},
	},
	contract: {
		visual: "Isang kontrata",
		title: ["Bawat feature ay isang HTTP call.", "Isang typed na kontrata."],
		body: "Galing sa iisang kontrata ang server, ang TypeScript client, at ang API reference. Gumamit ng API key mula sa kahit anong program.",
	},
	features: {
		title: ["Gamitin ang sarili mong client.", "Tao pa rin ang may kontrol."],
		items: [
			{
				title: "Isang chat sa bawat Bot",
				text: "May isang chat ka sa bawat Bot. Laging sumasagot agad ang Bot, at sabay-sabay na tumatakbo ang mahahabang trabaho.",
			},
			{
				title: "Mga pag-apruba",
				text: "Naghihintay ang mga delikadong tool call hanggang may taong pumayag. Bawat sagot ay may sariling history.",
			},
			{
				title: "Mga bukas na App",
				text: "Hinahanap at ginagamit ng mga Bot ang mga App na inilagay ng mga publisher sa bukas na web gamit ang OpenBot App Protocol.",
			},
			{
				title: "Ang sarili mong mga model",
				text: "Gamitin ang OpenAI, Anthropic, o kahit anong server na marunong ng Chat Completions.",
			},
		],
	},
	closing: {
		title: ["Magsimula sa", "tatlong hakbang."],
		label: "Mga hakbang",
		steps: [
			{
				title: "Simulan ang server",
				text: "Patakbuhin ang OpenBot sa computer mo gamit ang Docker at devenv. May kasama na itong test account at mga test model.",
			},
			{
				title: "Gumawa ng API key",
				text: "Mag-sign in nang isang beses sa browser, gumawa ng key, at tawagin ang API mula sa kahit anong program.",
			},
			{
				title: "Magsimula ng Turn",
				text: "Ipadala ang trabaho sa simpleng salita. Basahin ang sagot, ang mga tool call, at ang history.",
			},
		],
	},
	license: {
		tagline: "Bukas mula sa simula.",
		label: "Lisensya",
		body: "Ang OpenBot ay libreng software sa ilalim ng AGPL-3.0-only. Puwede mong basahin ang code, baguhin ito, at patakbuhin ito sa sarili mong mga server.",
		link: "Basahin ang code",
	},
} satisfies Messages
