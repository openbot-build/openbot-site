import type { Messages } from "./types.ts"

export default {
 experienceSections: ["Ana yin aiki a kayan aikinka.", "Aiki yana ci gaba bayan hira.", "Raba hanyar aikinka.", "Matsayi da hanya ɗaya", "Asusunka da bayananka"],
 diagram: {"verify": "Tabbatar da tushe da wanda ya aika", "return": "Mayar da sakamako zuwa tattaunawar asali", "parallel": "Ayyuka suna gudana dabam suna dawo da sakamako nan", "resume": "Sake haɗawa daga abin da aka karɓa na ƙarshe", "message": "Aika saƙo", "work": "Gudanar da aiki", "reply": "Karɓi amsa", "appFlow": ["Nemo sabis", "Karanta saitunan haɗi", "Yi amfani da kayan aiki da fuska"]},
	linkLabels: {"deploy": "Jagorar girkawa", "apps": "Ƙa'idodin wallafa App", "channels": "Jagorar haɗa tashoshi", "delegation": "Jagorar wakilta ayyuka", "chats": "Jagorar hira da jerin abubuwan da suka faru", "models": "Faɗaɗa bayanan tsarin samfur", "source": "Lambar tushe"},
	developerSections: ["Wallafa wata dama.", "Haɗa inda mutane suke aiki.", "Bari dogayen ayyuka su ci gaba.", "Gudanar a kan tsarin ka."],
	applications: [
	  {
	    "title": "Tallafin abokan ciniki",
	    "task": "Yi aiki da tikiti a Slack ta App tallafi na, ka rarraba masu gaggawa.",
	    "steps": [
	      "Karanta tikiti 12; gano 3 na gaggawa.",
	      "Miƙa ga injiniyoyi kuma sabunta tikiti."
	    ],
	    "outcome": "Masu aiki da mataki na gaba sun koma asalin zancen #support."
	  },
	  {
	    "title": "Aikin shago",
	    "task": "Cika SKU-203 ta App ajiya da saye, ka sanar da ƙungiyar Lark.",
	    "steps": [
	      "Duba ajiya da lokacin kaya: an rasa 12.",
	      "Ƙirƙiri odar gaggawa PO-203 ta kaya 12."
	    ],
	    "outcome": "An ajiye oda, an aika lambarta zuwa Lark don bi diddigi."
	  },
	  {
	    "title": "Raba Bot koyarwa",
	    "task": "Raba Bot darasina da wani malami don kayansa da asusunsa.",
	    "steps": [
	      "Riƙe aikin malami da umarnin Bot.",
	      "Ƙirƙiri gayyatar imel ga teacher@example.com."
	    ],
	    "outcome": "Bayan karɓa malamin yana da Bot haɗe da App nasa. Chat ɗinmu sun bambanta."
	  },
	  {
	    "title": "Tafiyar iyali",
	    "task": "Yi amfani da abubuwan da aka tuna da ajiyar tafiya don kalandar Roma da Telegram.",
	    "steps": [
	      "Tuna tafiya a hankali da hutu; karanta ajiyar tafiya.",
	      "Saka kwanaki uku ta App kalanda da aka haɗa."
	    ],
	    "outcome": "An sabunta kalanda, an aika shiri zuwa Telegram inda za a iya gyarawa."
	  },
	  {
	    "title": "Mai kula da ƙaura",
	    "task": "Shirya ƙaurata mako mai zuwa, ka tunatar ta Telegram bisa yankin lokacina.",
	    "steps": [
	      "Ƙirƙiri ayyukan sabis, kaya da miƙa maɓalli.",
	      "Saita farawa sau ɗaya kwana 7 kafin, kwana 3 kafin da ranar ƙaura."
	    ],
	    "outcome": "An tsara tunatarwa uku; kowanne zai fara aiki ya aika labari zuwa Telegram."
	  },
	  {
	    "title": "Bin ciniki",
	    "task": "Bi OPP-204 ta App CRM da kalandata bayan taro.",
	    "steps": [
	      "Karanta bayanin taro da damar ciniki.",
	      "Sabunta mataki na gaba a CRM da sanya taron gaba."
	    ],
	    "outcome": "OPP-204 na da aiki da lokaci; an aika imel ga abokin ciniki ta App wasiƙa."
	  },
	  {
	    "title": "Shirya fitarwa",
	    "task": "Ba Bots biyu gwajin API da UI a Computer gwaji.",
	    "steps": [
	      "Raba ayyuka biyu; wannan Chat yana nan.",
	      "Gudanar da gwaji da tattara sakamako da fayiloli."
	    ],
	    "outcome": "Ayyukan sun dawo: gwaji 28 sun wuce, fayiloli 2 sun canza. An shirya dubawa."
	  }
	],
	demo: {
		"send": "Aika",
	  "label": "Gwaji mai hulɗa",
	  "task": "Duba tikitin tallafi 12, shirya rahoto ka aika wa ƙungiya.",
	  "read": "An karanta tikiti 12",
	  "grouped": "An raba zuwa batutuwa 3",
	  "report": "Rahoton tallafi",

	  "sent": "An aika imel",
	  "reset": "Sake gwadawa",
	  "download": "Sauke rahoto",
	  "categories": [
	    "Shiga",
	    "Biyan kuɗi",
	    "Fitarwa"
	  ]
	},
	product: {
		online: "Amfani ta intanet",
		progress: "Bi aikin",
		results: "Samu sakamakon",

	  "title": "Daga tunani zuwa aiki.",
	  "ui": "Daga tunani zuwa aiki.",
	  "core": "Wakilai masu aiki.",
	  "developers": "Ga masu haɓakawa",
	  "soon": "Yana zuwa nan ba da jimawa ba"
	},
	description: "Dandalin Bot marar fuska, wanda ke aiki ta API.",
	nav: {
		label: "Shafi",
		docs: "Takardu",
		api: "API",
		language: "Harshe",
	},
	hero: {
		title: ["Wakilanka.", "Dokokinka."],
		body: "OpenBot dandalin Bot ne na buɗaɗɗen tushe, ba shi da fuskar mai amfani. Kana ba Bot aiki ta HTTP.",
		quickStart: "Fara da sauri",
		apiReference: "Bayanin API",
		visual: "Fara Turn",
		prompt: "Shirya tafiyar kwana uku a Rome.",
	},
	scenarios: {
		title: "Me za ka gina?",
		label: "Abokan hulɗa",
		script: {
			label: "Rubutun umarni",
			prompt:
				"Kowace safiya, karanta sababbin tikitin taimako kuma ka tsara su.",
			meaning:
				"Kira endpoint ɗaya daga aikin cron (aikin da ke gudana a lokaci). Karanta amsar a matsayin JSON.",
		},
		service: {
			label: "Sabis",
			prompt:
				"Duba kowane sabon oda kuma ka yi alama ga waɗanda suke kama da kuskure.",
			meaning:
				"Sabar ka tana fara Turn. Sannan tana karanta rafi ko tana jira da long poll.",
		},
		bot: {
			label: "Bot na hira",
			prompt:
				"Amsa tambayoyi a hirar ƙungiyarmu. Tambaye ni kafin ka aika imel.",
			meaning: "Kiran kayan aiki masu haɗari suna jira har sai mutum ya ce eh.",
		},
	},
	contract: {
		visual: "Yarjejeniya ɗaya",
		title: ["Kowane fasali kiran HTTP ne.", "Yarjejeniya ɗaya mai nau'i."],
		body: "Sabar, abokin hulɗa na TypeScript, da bayanin API duk sun fito daga yarjejeniya ɗaya. Yi amfani da maɓallin API daga kowace manhaja.",
	},
	features: {
		title: ["Kawo abokin hulɗarka.", "Mutane suna da iko."],
		items: [
			{
				title: "Hira ɗaya da kowane Bot",
				text: "Kana da hira ɗaya da kowane Bot. Bot yana amsawa nan take koyaushe, kuma dogon aiki yana tafiya a lokaci guda.",
			},
			{
				title: "Amincewa",
				text: "Kiran kayan aiki masu haɗari suna jira har sai mutum ya ce eh. Kowace amsa tana adana tarihinta.",
			},
			{
				title: "Buɗaɗɗun App",
				text: "Bot suna samo kuma suna amfani da App da masu wallafa suka sa a buɗaɗɗen yanar gizo tare da OpenBot App Protocol.",
			},
			{
				title: "Samfuranka",
				text: "Yi amfani da OpenAI, Anthropic, ko kowace sabar da ke magana da Chat Completions.",
			},
		],
	},
	closing: {
		title: ["Fara cikin", "matakai uku."],
		label: "Matakai",
		steps: [
			{
				title: "Fara sabar",
				text: "Gudanar da OpenBot a kwamfutarka da Docker da devenv. Yana zuwa da asusun gwaji da samfuran gwaji.",
			},
			{
				title: "Yi maɓallin API",
				text: "Shiga sau ɗaya a burauza, yi maɓalli, sannan ka kira API daga kowace manhaja.",
			},
			{
				title: "Fara Turn",
				text: "Aika aiki da harshe mai sauƙi. Karanta amsar, kiran kayan aiki, da tarihin.",
			},
		],
	},
	license: {
		tagline: "An gina shi a buɗe.",
		label: "Lasisi",
		body: "OpenBot manhaja ce ta 'yanci ƙarƙashin AGPL-3.0-only. Za ka iya karanta lambar, canza ta, kuma ka gudanar da ita a sabobinka.",
		link: "Karanta lambar",
	},
} satisfies Messages
