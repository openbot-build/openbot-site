import type { Messages } from "./types.ts"

export default {
 experienceSections: ["Kazi hufanyika kwenye zana zako.", "Kazi inaendelea nje ya mazungumzo.", "Shiriki namna unavyofanya kazi.", "Jukumu na mbinu za pamoja", "Akaunti na data zako mwenyewe"],
 diagram: {"verify": "Thibitisha chanzo na mtumaji", "return": "Rudisha matokeo kwenye mazungumzo ya awali", "parallel": "Kazi zinaendeshwa kando na kurudisha matokeo kwenye mazungumzo haya", "resume": "Unganisha tena kutoka tukio la mwisho lililopokelewa", "message": "Tuma ujumbe", "work": "Fanya kazi", "reply": "Pokea jibu", "appFlow": ["Tafuta huduma", "Soma mipangilio", "Tumia zana na mwonekano"]},
	linkLabels: {"deploy": "Mwongozo wa usakinishaji", "apps": "Masharti ya kuchapisha App", "channels": "Mwongozo wa kuunganisha njia za mazungumzo", "delegation": "Mwongozo wa kukabidhi kazi", "chats": "Mwongozo wa mazungumzo na mitiririko ya matukio", "models": "Panua mifumo ya nyuma ya modeli", "source": "Msimbo chanzo"},
	developerSections: ["Chapisha uwezo mpya.", "Unganisha watu wanapofanya kazi.", "Acha kazi ndefu ziendelee.", "Endesha kwenye miundombinu yako."],
	applications: [
	  {
	    "title": "Huduma kwa wateja",
	    "task": "Shughulikia tiketi Slack kupitia App yangu ya msaada na gawa za dharura.",
	    "steps": [
	      "Soma tiketi 12; tambua 3 za dharura.",
	      "Wape wahandisi na usasishe tiketi."
	    ],
	    "outcome": "Wahusika na hatua zinazofuata zimerudi kwenye mazungumzo ya #support."
	  },
	  {
	    "title": "Uendeshaji duka",
	    "task": "Jaza SKU-203 kupitia App za bidhaa na manunuzi; julisha kundi la Lark.",
	    "steps": [
	      "Kagua bidhaa na muda: upungufu wa vipande 12.",
	      "Unda agizo la haraka PO-203 la vipande 12."
	    ],
	    "outcome": "Agizo limerekodiwa na namba imetumwa Lark kwa ufuatiliaji."
	  },
	  {
	    "title": "Bot ya kufundisha pamoja",
	    "task": "Shiriki Bot yangu ya masomo na mwalimu mwingine kwa vifaa na akaunti zake.",
	    "steps": [
	      "Hifadhi jukumu na maagizo ya kufundisha.",
	      "Unda mwaliko wa barua kwa teacher@example.com."
	    ],
	    "outcome": "Akikubali anapata Bot iliyounganishwa na App zake. Chat zetu zinabaki tofauti."
	  },
	  {
	    "title": "Safari ya familia",
	    "task": "Tumia mapendeleo yaliyokumbukwa na nafasi zilizohifadhiwa kupanga Roma katika kalenda na Telegram.",
	    "steps": [
	      "Kumbuka mwendo wa polepole na mapumziko; soma nafasi zilizohifadhiwa.",
	      "Ongeza siku tatu kupitia App ya kalenda iliyounganishwa."
	    ],
	    "outcome": "Kalenda imesasishwa; ratiba imetumwa Telegram na inaweza kubadilishwa humo."
	  },
	  {
	    "title": "Mratibu wa kuhama",
	    "task": "Panga kuhama wiki ijayo na unikumbushe Telegram kwa saa za eneo langu.",
	    "steps": [
	      "Unda kazi za huduma, mizigo na funguo.",
	      "Weka vichocheo vya mara moja siku 7 kabla, siku 3 kabla na siku ya kuhama."
	    ],
	    "outcome": "Vikumbusho vitatu vimepangwa; kila kichocheo kitaanza kazi na kusasisha Telegram."
	  },
	  {
	    "title": "Ufuatiliaji mauzo",
	    "task": "Fuatilia OPP-204 kupitia App zangu za CRM na kalenda.",
	    "steps": [
	      "Soma kumbukumbu za mkutano na fursa.",
	      "Sasisha hatua ya CRM na panga mkutano wa kufuatilia."
	    ],
	    "outcome": "OPP-204 ina hatua na muda; barua ya mteja imetumwa kupitia App ya barua."
	  },
	  {
	    "title": "Kuandaa toleo",
	    "task": "Wape Bots wawili majaribio API na UI kwenye Computer ya majaribio.",
	    "steps": [
	      "Gawa kazi mbili huku Chat hii ikiendelea.",
	      "Endesha majaribio na kusanya matokeo na faili."
	    ],
	    "outcome": "Kazi zote zimerudi: majaribio 28 yamefaulu, faili 2 zimebadilika. Toleo liko tayari kukaguliwa."
	  }
	],
	demo: {
		"send": "Tuma",
	  "label": "Onyesho shirikishi",
	  "task": "Kagua tiketi 12 za msaada, andaa ripoti na uitume kwa timu.",
	  "read": "Tiketi 12 zimesomwa",
	  "grouped": "Zimegawanywa katika mada 3",
	  "report": "Ripoti ya msaada",

	  "sent": "Barua imetumwa",
	  "reset": "Rudia",
	  "download": "Pakua ripoti",
	  "categories": [
	    "Kuingia",
	    "Malipo",
	    "Uhamishaji"
	  ]
	},
	product: {
		online: "Matumizi mtandaoni",
		progress: "Fuatilia kazi",
		results: "Pata matokeo",

	  "title": "Kutoka wazo hadi hatua.",
	  "ui": "Kutoka wazo hadi hatua.",
	  "core": "Mawakala wanaofanya kazi.",
	  "developers": "Kwa wasanidi",
	  "soon": "Inakuja hivi karibuni"
	},
	description: "Jukwaa la Bot lisilo na kiolesura, linaloanza na API.",
	nav: {
		label: "Tovuti",
		docs: "Nyaraka",
		api: "API",
		language: "Lugha",
	},
	hero: {
		title: ["Mawakala wako.", "Sheria zako."],
		body: "OpenBot ni jukwaa huria la Bot lisilo na kiolesura cha mtumiaji. Unampa Bot kazi kupitia HTTP.",
		quickStart: "Anza haraka",
		apiReference: "Marejeo ya API",
		visual: "Anza Turn",
		prompt: "Panga safari ya siku tatu Roma.",
	},
	scenarios: {
		title: "Utajenga nini?",
		label: "Wateja",
		script: {
			label: "Skripti",
			prompt: "Kila asubuhi, soma tiketi mpya za msaada na uzipange.",
			meaning:
				"Ita endpoint moja kutoka kwa kazi ya cron (kazi inayoendeshwa kwa ratiba). Soma jibu kama JSON.",
		},
		service: {
			label: "Huduma",
			prompt:
				"Kagua kila oda mpya na uweke alama kwa zile zinazoonekana kuwa na kosa.",
			meaning:
				"Seva yako inaanza Turn. Kisha inasoma mtiririko au inasubiri kwa long poll.",
		},
		bot: {
			label: "Bot ya gumzo",
			prompt:
				"Jibu maswali kwenye gumzo la timu yetu. Niulize kabla ya kutuma barua pepe.",
			meaning: "Miito hatari ya zana inasubiri hadi mtu aseme ndiyo.",
		},
	},
	contract: {
		visual: "Mkataba mmoja",
		title: ["Kila kipengele ni mwito wa HTTP.", "Mkataba mmoja wenye aina."],
		body: "Seva, mteja wa TypeScript, na marejeo ya API vyote vinatoka kwenye mkataba mmoja. Tumia ufunguo wa API kutoka programu yoyote.",
	},
	features: {
		title: ["Leta mteja wako mwenyewe.", "Watu wanabaki na udhibiti."],
		items: [
			{
				title: "Gumzo moja na kila Bot",
				text: "Una gumzo moja na kila Bot. Bot hujibu mara moja kila wakati, na kazi ndefu huendelea kwa wakati mmoja.",
			},
			{
				title: "Idhini",
				text: "Miito hatari ya zana inasubiri hadi mtu aseme ndiyo. Kila jibu linahifadhi historia yake.",
			},
			{
				title: "App huria",
				text: "Bot hupata na kutumia App ambazo wachapishaji huweka kwenye wavuti huria kwa OpenBot App Protocol.",
			},
			{
				title: "Modeli zako",
				text: "Tumia OpenAI, Anthropic, au seva yoyote inayozungumza Chat Completions.",
			},
		],
	},
	closing: {
		title: ["Anza kwa", "hatua tatu."],
		label: "Hatua",
		steps: [
			{
				title: "Washa seva",
				text: "Endesha OpenBot kwenye kompyuta yako kwa Docker na devenv. Inakuja na akaunti ya majaribio na modeli za majaribio.",
			},
			{
				title: "Tengeneza ufunguo wa API",
				text: "Ingia mara moja kwenye kivinjari, tengeneza ufunguo, na uite API kutoka programu yoyote.",
			},
			{
				title: "Anza Turn",
				text: "Tuma kazi kwa lugha rahisi. Soma jibu, miito ya zana, na historia.",
			},
		],
	},
	license: {
		tagline: "Wazi tangu mwanzo.",
		label: "Leseni",
		body: "OpenBot ni programu huru chini ya AGPL-3.0-only. Unaweza kusoma msimbo, kuubadilisha, na kuuendesha kwenye seva zako.",
		link: "Soma msimbo",
	},
} satisfies Messages
