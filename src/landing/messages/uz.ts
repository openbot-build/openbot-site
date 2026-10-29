import type { Messages } from "./types.ts"

export default {
 experienceSections: ["Ish o‘z vositalaringizda bajariladi.", "Ish chatdan tashqarida ham davom etadi.", "Ishlash usulingizni ulashing.", "Umumiy rol va usul", "Shaxsiy hisoblar va ma’lumotlar"],
 diagram: {"verify": "Manbani tekshirish va yuboruvchini aniqlash", "return": "Natijani asl suhbatga qaytarish", "parallel": "Vazifalar mustaqil bajarilib, natijalar shu chatga qaytadi", "resume": "Qayta ulanib, oxirgi olingan hodisadan davom etish", "message": "Xabar yuborish", "work": "Vazifani bajarish", "reply": "Javob olish", "appFlow": ["Xizmatni topish", "Sozlamalarni o‘qish", "Vosita va ko‘rinishlardan foydalanish"]},
	linkLabels: {"deploy": "Joylashtirish qo‘llanmasi", "apps": "App nashr qilish spetsifikatsiyasi", "channels": "Kanal integratsiyasi qo‘llanmasi", "delegation": "Vazifa topshirish qo‘llanmasi", "chats": "Chat va hodisalar oqimi qo‘llanmasi", "models": "Model backendlarini kengaytirish", "source": "Manba kodi"},
	developerSections: ["Xizmatni imkoniyatga aylantiring.", "Odamlar ishlaydigan joyga ulaning.", "Uzoq vazifalar davom etsin.", "O‘z infratuzilmangizda ishga tushiring."],
	applications: [
	  {
	    "title": "Mijozlar yordami",
	    "task": "Slackdagi so‘rovlarni ulangan yordam App orqali ko‘rib, shoshilinchlarini taqsimla.",
	    "steps": [
	      "12 so‘rovni o‘qi; 3 shoshilinch holatni top.",
	      "Muhandislarga biriktir va yozuvlarni yangila."
	    ],
	    "outcome": "Mas’ullar va keyingi qadamlar asl #support suhbatiga qaytarildi."
	  },
	  {
	    "title": "Do‘kon boshqaruvi",
	    "task": "SKU-203 ni ombor va xarid App orqali to‘ldir, Lark guruhiga xabar ber.",
	    "steps": [
	      "Qoldiq va muddatni tekshir: 12 dona yetishmaydi.",
	      "12 dona uchun tezkor PO-203 buyurtmasini yarat."
	    ],
	    "outcome": "Buyurtma saqlandi, raqami kuzatish uchun Larkka yuborildi."
	  },
	  {
	    "title": "Ta’lim Botini ulashish",
	    "task": "Dars Botimni boshqa o‘qituvchiga o‘z materiallari va hisoblari uchun ulash.",
	    "steps": [
	      "Botning o‘qituvchilik vazifasi va ko‘rsatmalarini saqla.",
	      "teacher@example.com uchun email taklif yarat."
	    ],
	    "outcome": "Qabul qilgach o‘z App bilan bog‘langan Bot oladi. Chatlarimiz alohida qoladi."
	  },
	  {
	    "title": "Oilaviy sayohat",
	    "task": "Esda qolgan istaklar va bandlovlar bilan Rimni kalendarimga joyla, Telegramga yubor.",
	    "steps": [
	      "Sekin sur’at va dam olishni esla; bandlovlarni o‘qi.",
	      "Ulangan kalendar App orqali uch kunlik reja qo‘sh."
	    ],
	    "outcome": "Kalendar yangilandi; reja Telegramda, o‘sha yerda o‘zgartirish mumkin."
	  },
	  {
	    "title": "Ko‘chish koordinatori",
	    "task": "Kelasi hafta ko‘chishni tashkil et, mening vaqt mintaqamda Telegram orqali eslat.",
	    "steps": [
	      "Xizmatlar, qadoqlash va kalit topshirish vazifalarini yarat.",
	      "7 kun oldin, 3 kun oldin va ko‘chish kuni bir martalik triggerlar qo‘y."
	    ],
	    "outcome": "Uch eslatma rejalandi; har biri vazifani boshlab Telegramga xabar yuboradi."
	  },
	  {
	    "title": "Savdo kuzatuvi",
	    "task": "OPP-204 ni CRM va kalendar App orqali uchrashuvdan keyin davom ettir.",
	    "steps": [
	      "Uchrashuv qaydlari va imkoniyat holatini o‘qi.",
	      "CRM keyingi qadamini yangila, navbatdagi uchrashuvni belgilа."
	    ],
	    "outcome": "OPP-204 da keyingi qadam va vaqt bor; mijoz xati ulangan pochta App orqali yuborildi."
	  },
	  {
	    "title": "Reliz tayyorlash",
	    "task": "API va UI tekshiruvini ikki Botga sinov Computerida topshir.",
	    "steps": [
	      "Ikki vazifani ajrat, bu Chat ochiq qoladi.",
	      "Tekshiruvlarni bajar, natijalar va fayllarni jamla."
	    ],
	    "outcome": "Ikkala vazifa qaytdi: 28 test o‘tdi, 2 fayl o‘zgardi. Reliz tekshirishga tayyor."
	  }
	],
	demo: {
		"send": "Yuborish",
	  "label": "Interaktiv namoyish",
	  "task": "12 yordam so‘rovini tekshir, hisobot tayyorla va jamoaga yubor.",
	  "read": "12 so‘rov o‘qildi",
	  "grouped": "3 mavzuga ajratildi",
	  "report": "Yordam hisoboti",

	  "sent": "Xat yuborildi",
	  "reset": "Qayta ko‘rish",
	  "download": "Hisobotni yuklab olish",
	  "categories": [
	    "Kirish",
	    "To‘lov",
	    "Eksport"
	  ]
	},
	product: {
		online: "Onlayn tajriba",
		progress: "Jarayonni kuzating",
		results: "Natijani oling",

	  "title": "G‘oyadan amalga.",
	  "ui": "G‘oyadan amalga.",
	  "core": "Ishlaydigan agentlar.",
	  "developers": "Dasturchilar uchun",
	  "soon": "Tez kunda"
	},
	description: "Interfeyssiz, API asosidagi Bot platformasi.",
	nav: {
		label: "Sayt",
		docs: "Hujjatlar",
		api: "API",
		language: "Til",
	},
	hero: {
		title: ["Sizning agentlaringiz.", "Sizning qoidalaringiz."],
		body: "OpenBot – foydalanuvchi interfeysi yo‘q ochiq kodli Bot platformasi. Siz Botga HTTP orqali ish berasiz.",
		quickStart: "Tez boshlash",
		apiReference: "API ma’lumotnomasi",
		visual: "Turn boshlash",
		prompt: "Rimda uch kunlik sayohatni rejalashtir.",
	},
	scenarios: {
		title: "Siz nima yaratasiz?",
		label: "Mijozlar",
		script: {
			label: "Skript",
			prompt: "Har tongda yangi yordam so‘rovlarini o‘qib, ularni sarala.",
			meaning:
				"Cron vazifasidan (jadval bo‘yicha ishlaydigan vazifa) bitta endpointni chaqiring. Javobni JSON sifatida o‘qing.",
		},
		service: {
			label: "Xizmat",
			prompt:
				"Har bir yangi buyurtmani tekshirib, noto‘g‘ri ko‘ringanlarini belgila.",
			meaning:
				"Serveringiz Turn boshlaydi. Keyin u oqimni o‘qiydi yoki long poll bilan kutadi.",
		},
		bot: {
			label: "Chat bot",
			prompt:
				"Jamoa chatimizdagi savollarga javob ber. Email yuborishdan oldin mendan so‘ra.",
			meaning: "Xavfli vosita chaqiruvlari inson “ha” demaguncha kutadi.",
		},
	},
	contract: {
		visual: "Bitta kontrakt",
		title: [
			"Har bir funksiya – bitta HTTP chaqiruv.",
			"Bitta turlangan kontrakt.",
		],
		body: "Server, TypeScript mijozi va API ma’lumotnomasi bitta kontraktdan yaratiladi. Istalgan dasturdan API kalitidan foydalaning.",
	},
	features: {
		title: ["O‘z mijozingizni olib keling.", "Nazorat odamlar qo‘lida."],
		items: [
			{
				title: "Har bir Bot bilan bitta chat",
				text: "Har bir Bot bilan sizda bitta chat bor. Bot doim darhol javob beradi, uzun ishlar esa parallel boradi.",
			},
			{
				title: "Tasdiqlar",
				text: "Xavfli vosita chaqiruvlari inson “ha” demaguncha kutadi. Har bir javob o‘z tarixini saqlaydi.",
			},
			{
				title: "Ochiq Applar",
				text: "Botlar nashriyotchilar OpenBot App Protocol orqali ochiq vebga qo‘ygan Applarni topadi va ishlatadi.",
			},
			{
				title: "Sizning modellaringiz",
				text: "OpenAI, Anthropic yoki Chat Completions bilan ishlaydigan istalgan serverdan foydalaning.",
			},
		],
	},
	closing: {
		title: ["Uch qadamda", "boshlang."],
		label: "Qadamlar",
		steps: [
			{
				title: "Serverni ishga tushiring",
				text: "OpenBot’ni kompyuteringizda Docker va devenv bilan ishga tushiring. U test akkaunti va test modellari bilan keladi.",
			},
			{
				title: "API kalitini yarating",
				text: "Brauzerda bir marta kiring, kalit yarating va istalgan dasturdan API’ni chaqiring.",
			},
			{
				title: "Turn boshlang",
				text: "Ishni oddiy tilda yuboring. Javobni, vosita chaqiruvlarini va tarixni o‘qing.",
			},
		],
	},
	license: {
		tagline: "Boshidanoq ochiq.",
		label: "Litsenziya",
		body: "OpenBot – AGPL-3.0-only litsenziyasi ostidagi erkin dastur. Siz kodni o‘qishingiz, o‘zgartirishingiz va o‘z serverlaringizda ishga tushirishingiz mumkin.",
		link: "Kodni o‘qish",
	},
} satisfies Messages
