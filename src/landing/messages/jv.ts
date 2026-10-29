import type { Messages } from "./types.ts"

export default {
 experienceSections: ["Gawe rampung ing piranti sampeyan.", "Gawe terus sanajan metu saka obrolan.", "Bagekna cara nyambut gawe sampeyan.", "Peran lan cara bebarengan", "Akun lan data dhewe"],
 diagram: {"verify": "Priksa sumber lan kenali pangirim", "return": "Kirim asil menyang obrolan asline", "parallel": "Tugas mlaku dhewe lan mbalekake asil menyang obrolan iki", "resume": "Sambung maneh saka kedadeyan pungkasan sing ditampa", "message": "Kirim pesen", "work": "Proses tugas", "reply": "Tampa wangsulan", "appFlow": ["Golek layanan", "Waca konfigurasi", "Gunakake alat lan tampilan"]},
	linkLabels: {"deploy": "Pandhuan deployment", "apps": "Spesifikasi nerbitake App", "channels": "Pandhuan integrasi kanal", "delegation": "Pandhuan delegasi tugas", "chats": "Pandhuan obrolan lan aliran kedadeyan", "models": "Ngembangake backend model", "source": "Kode sumber"},
	developerSections: ["Terbitake kemampuan.", "Sambung ing papan wong nyambut gawe.", "Tugas dawa tetep mlaku.", "Jalakna ing infrastruktur dhewe."],
	applications: [
	  {
	    "title": "Layanan pelanggan",
	    "task": "Tangani tiket ing Slack nganggo App pitulungan sing disambungake lan terusake sing mendesak.",
	    "steps": [
	      "Waca 12 tiket; temokake 3 sing mendesak.",
	      "Tugasake menyang teknisi lan anyarake tiket."
	    ],
	    "outcome": "Penanggung jawab lan langkah sabanjure dikirim menyang utas #support asli."
	  },
	  {
	    "title": "Operasi toko",
	    "task": "Isi SKU-203 nganggo App stok lan tuku, kabari grup Lark.",
	    "steps": [
	      "Priksa stok lan wektu kirim: kurang 12 barang.",
	      "Gawe pesenan cepet PO-203 kanggo 12 barang."
	    ],
	    "outcome": "Pesenan kacathet lan nomere dikirim menyang Lark kanggo diterusake."
	  },
	  {
	    "title": "Bot guru bareng",
	    "task": "Bagekake Bot piwulangku marang guru liya kanggo bahan lan akune dhewe.",
	    "steps": [
	      "Tetepake peran lan pandhuan mulang.",
	      "Gawe undhangan email kanggo teacher@example.com."
	    ],
	    "outcome": "Sawise nampa, guru nggunakake Bot sambungan lan App dhewe. Chat tetep kapisah."
	  },
	  {
	    "title": "Lelungan kulawarga",
	    "task": "Gunakake pilihan sing dielingi lan pesenan kanggo jadwal Roma ing kalender lan Telegram.",
	    "steps": [
	      "Elingi lelungan alon lan leren; waca pesenan.",
	      "Tambah telung dina kegiatan nganggo App kalender."
	    ],
	    "outcome": "Kalender anyar lan jadwal dikirim menyang Telegram, bisa diowahi ing kana."
	  },
	  {
	    "title": "Koordinator pindhah",
	    "task": "Atur pindhahan minggu ngarep lan elingake liwat Telegram miturut zona waktuku.",
	    "steps": [
	      "Gawe tugas listrik banyu, ngemas lan kunci.",
	      "Setel pemicu sepisan 7 dina sadurunge, 3 dina sadurunge lan dina pindhah."
	    ],
	    "outcome": "Telung pangeling wis dijadwal; saben pemicu miwiti tugas lan ngabarake Telegram."
	  },
	  {
	    "title": "Tindak lanjut dodolan",
	    "task": "Terusake OPP-204 nganggo App CRM lan kalenderku.",
	    "steps": [
	      "Waca cathetan rapat lan peluang.",
	      "Anyarake langkah CRM lan jadwal patemon sabanjure."
	    ],
	    "outcome": "OPP-204 duwe tumindak lan jadwal; email pelanggan dikirim nganggo App surat."
	  },
	  {
	    "title": "Nyiyapake rilis",
	    "task": "Tugasake tes API lan UI marang loro Bots ing Computer tes.",
	    "steps": [
	      "Loro tugas kapisah; Chat iki tetep bisa digunakake.",
	      "Jalanke tes lan kumpulake asil lan berkas."
	    ],
	    "outcome": "Loro tugas bali: 28 tes lulus, 2 berkas owah. Versi siap dipriksa."
	  }
	],
	demo: {
		"send": "Kirim",
	  "label": "Demo interaktif",
	  "task": "Priksa 12 tiket pitulungan, gawe laporan, banjur kirim menyang tim.",
	  "read": "12 tiket wis diwaca",
	  "grouped": "Diklompokake dadi 3 topik",
	  "report": "Laporan pitulungan",

	  "sent": "Email wis dikirim",
	  "reset": "Baleni",
	  "download": "Undhuh laporan",
	  "categories": [
	    "Mlebu",
	    "Tagihan",
	    "Ekspor"
	  ]
	},
	product: {
		online: "Pengalaman online",
		progress: "Deleng kemajuane",
		results: "Tampa asile",

	  "title": "Saka gagasan dadi tumindak.",
	  "ui": "Saka gagasan dadi tumindak.",
	  "core": "Agen sing nyambut gawe.",
	  "developers": "Kanggo pangembang",
	  "soon": "Bakal teka"
	},
	description: "Platform Bot tanpa antarmuka, sing ngutamakake API.",
	nav: {
		label: "Situs",
		docs: "Dokumentasi",
		api: "API",
		language: "Basa",
	},
	hero: {
		title: ["Agenmu.", "Aturanmu."],
		body: "OpenBot iku platform Bot open source tanpa antarmuka pangguna. Kowe menehi gawean marang Bot liwat HTTP.",
		quickStart: "Wiwitan cepet",
		apiReference: "Referensi API",
		visual: "Miwiti Turn",
		prompt: "Gawekake rencana telung dina ing Roma.",
	},
	scenarios: {
		title: "Kowe arep nggawe apa?",
		label: "Klien",
		script: {
			label: "Skrip",
			prompt: "Saben esuk, wacanen tiket dhukungan sing anyar lan urutna.",
			meaning:
				"Undang siji endpoint saka cron job (gawean sing mlaku ing wektu tartamtu). Wacanen wangsulane minangka JSON.",
		},
		service: {
			label: "Layanan",
			prompt: "Priksa saben pesenan anyar lan wenehi tandha sing katon salah.",
			meaning:
				"Server-mu miwiti Turn. Banjur server maca stream utawa ngenteni nganggo long poll.",
		},
		bot: {
			label: "Chat bot",
			prompt:
				"Wangsulana pitakon ing chat tim kita. Takon aku dhisik sadurunge ngirim email.",
			meaning:
				"Panggilan piranti sing ana risikone ngenteni nganti ana wong sing ngomong iya.",
		},
	},
	contract: {
		visual: "Siji kontrak",
		title: [
			"Saben fitur iku panggilan HTTP.",
			"Siji kontrak sing nduweni tipe.",
		],
		body: "Server, klien TypeScript, lan referensi API kabeh asale saka siji kontrak. Nganggo API key saka program apa wae.",
	},
	features: {
		title: ["Gawanen klien dhewe.", "Manungsa tetep sing ngatur."],
		items: [
			{
				title: "Siji chat karo saben Bot",
				text: "Kowe duwe siji chat karo saben Bot. Bot tansah mangsuli langsung, lan gawean sing dawa mlaku bebarengan.",
			},
			{
				title: "Persetujuan",
				text: "Panggilan piranti sing ana risikone ngenteni nganti ana wong sing ngomong iya. Saben wangsulan nyimpen riwayate.",
			},
			{
				title: "App sing mbukak",
				text: "Bot nggoleki lan nganggo App sing dipasang para penerbit ing web mbukak nganggo OpenBot App Protocol.",
			},
			{
				title: "Model duwekmu",
				text: "Nganggo OpenAI, Anthropic, utawa server apa wae sing ngerti Chat Completions.",
			},
		],
	},
	closing: {
		title: ["Miwiti ing", "telung langkah."],
		label: "Langkah",
		steps: [
			{
				title: "Uripna server",
				text: "Mlakokna OpenBot ing komputermu nganggo Docker lan devenv. Wis ana akun uji coba lan model uji coba.",
			},
			{
				title: "Gawe API key",
				text: "Mlebu sepisan ing browser, gawe key, lan undang API saka program apa wae.",
			},
			{
				title: "Miwiti Turn",
				text: "Kirim gawean nganggo basa sing prasaja. Wacanen wangsulan, panggilan piranti, lan riwayate.",
			},
		],
	},
	license: {
		tagline: "Dirancang supaya mbukak.",
		label: "Lisensi",
		body: "OpenBot iku piranti lunak bebas miturut AGPL-3.0-only. Kowe bisa maca kode, ngowahi, lan mlakokake ing server dhewe.",
		link: "Waca kode",
	},
} satisfies Messages
