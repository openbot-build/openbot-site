import type { Messages } from "./types.ts"

export default {
 experienceSections: ["Kerja selesai dalam alat anda.", "Kerja diteruskan di luar sembang.", "Kongsi cara kerja anda.", "Peranan dan kaedah bersama", "Akaun dan data sendiri"],
 diagram: {"verify": "Sahkan sumber dan kenal pasti pengirim", "return": "Hantar hasil ke perbualan asal", "parallel": "Tugas berjalan berasingan dan mengembalikan hasil ke sembang ini", "resume": "Sambung semula dari peristiwa terakhir diterima", "message": "Hantar mesej", "work": "Proses tugas", "reply": "Terima balasan", "appFlow": ["Cari perkhidmatan", "Baca konfigurasi", "Gunakan alat dan paparan"]},
	linkLabels: {"deploy": "Panduan penggunaan pelayan", "apps": "Spesifikasi penerbitan App", "channels": "Panduan integrasi saluran", "delegation": "Panduan delegasi tugas", "chats": "Panduan sembang dan aliran peristiwa", "models": "Melanjutkan backend model", "source": "Kod sumber"},
	developerSections: ["Terbitkan keupayaan.", "Hubungkan tempat orang bekerja.", "Biarkan tugas panjang terus berjalan.", "Jalankan pada infrastruktur sendiri."],
	applications: [
	  {
	    "title": "Khidmat pelanggan",
	    "task": "Urus tiket di Slack melalui App sokongan saya dan agihkan yang mendesak.",
	    "steps": [
	      "Baca 12 tiket; kenal pasti 3 mendesak.",
	      "Agihkan kepada jurutera dan kemas kini tiket."
	    ],
	    "outcome": "Pemilik dan langkah seterusnya dihantar ke perbualan asal #support."
	  },
	  {
	    "title": "Operasi kedai",
	    "task": "Isi semula SKU-203 melalui App stok dan pembelian; maklumkan kumpulan Lark.",
	    "steps": [
	      "Semak stok dan tempoh bekalan: kurang 12 unit.",
	      "Cipta pesanan segera PO-203 untuk 12 unit."
	    ],
	    "outcome": "Pesanan direkodkan dan nombornya dihantar ke Lark untuk susulan."
	  },
	  {
	    "title": "Bot guru dikongsi",
	    "task": "Kongsi Bot pengajaran saya dengan guru lain untuk bahan dan akaunnya sendiri.",
	    "steps": [
	      "Kekalkan peranan dan arahan pengajaran.",
	      "Cipta jemputan e-mel untuk teacher@example.com."
	    ],
	    "outcome": "Selepas menerima, guru menggunakan Bot dipautkan dengan App sendiri. Chat kami kekal berasingan."
	  },
	  {
	    "title": "Perjalanan keluarga",
	    "task": "Gunakan pilihan tersimpan dan tempahan untuk memasukkan Rom ke kalendar, kemudian Telegram.",
	    "steps": [
	      "Ingat rentak santai dan rehat; baca tempahan.",
	      "Tambah tiga hari aktiviti melalui App kalendar disambungkan."
	    ],
	    "outcome": "Kalendar dikemas kini dan jadual dihantar ke Telegram untuk pelarasan di sana."
	  },
	  {
	    "title": "Penyelaras pindahan",
	    "task": "Urus pindahan minggu depan dan ingatkan melalui Telegram mengikut zon waktu saya.",
	    "steps": [
	      "Cipta tugas utiliti, pembungkusan dan kunci.",
	      "Tetapkan pencetus sekali pada 7 hari sebelum, 3 hari sebelum dan hari pindah."
	    ],
	    "outcome": "Tiga peringatan dijadualkan; setiap pencetus memulakan tugas dan mengemas kini Telegram."
	  },
	  {
	    "title": "Susulan jualan",
	    "task": "Susuli OPP-204 melalui App CRM dan kalendar saya.",
	    "steps": [
	      "Baca nota mesyuarat dan peluang.",
	      "Kemas kini tindakan CRM dan tetapkan pertemuan susulan."
	    ],
	    "outcome": "OPP-204 mempunyai tindakan dan masa; e-mel pelanggan dihantar melalui App mel disambungkan."
	  },
	  {
	    "title": "Persediaan keluaran",
	    "task": "Agihkan pemeriksaan API dan UI kepada dua Bots pada Computer ujian.",
	    "steps": [
	      "Dua tugas berasingan; Chat ini kekal tersedia.",
	      "Jalankan ujian dan kumpulkan hasil serta fail."
	    ],
	    "outcome": "Kedua-dua tugas kembali: 28 ujian lulus, 2 fail berubah. Versi sedia diperiksa."
	  }
	],
	demo: {
		"send": "Hantar",
	  "label": "Demo interaktif",
	  "task": "Semak 12 tiket sokongan, sediakan laporan dan e-mel kepada pasukan.",
	  "read": "12 tiket dibaca",
	  "grouped": "Dikelaskan kepada 3 topik",
	  "report": "Laporan sokongan",

	  "sent": "E-mel dihantar",
	  "reset": "Ulang",
	  "download": "Muat turun laporan",
	  "categories": [
	    "Log masuk",
	    "Pengebilan",
	    "Eksport"
	  ]
	},
	product: {
		online: "Pengalaman dalam talian",
		progress: "Ikuti kemajuan",
		results: "Dapatkan hasilnya",

	  "title": "Daripada idea kepada tindakan.",
	  "ui": "Daripada idea kepada tindakan.",
	  "core": "Ejen yang bekerja.",
	  "developers": "Pembangun",
	  "soon": "Akan datang"
	},
	description: "Platform Bot tanpa antara muka, yang mengutamakan API.",
	nav: {
		label: "Laman",
		docs: "Dokumentasi",
		api: "API",
		language: "Bahasa",
	},
	hero: {
		title: ["Ejen anda.", "Peraturan anda."],
		body: "OpenBot ialah platform Bot sumber terbuka tanpa antara muka pengguna. Anda beri kerja kepada Bot melalui HTTP.",
		quickStart: "Mula pantas",
		apiReference: "Rujukan API",
		visual: "Mulakan Turn",
		prompt: "Rancang percutian tiga hari di Rom.",
	},
	scenarios: {
		title: "Apa yang anda mahu bina?",
		label: "Klien",
		script: {
			label: "Skrip",
			prompt:
				"Setiap pagi, baca tiket sokongan baharu dan susun mengikut jenis.",
			meaning:
				"Panggil satu endpoint daripada cron job. Baca jawapan sebagai JSON.",
		},
		service: {
			label: "Perkhidmatan",
			prompt: "Semak setiap pesanan baharu dan tandakan yang nampak salah.",
			meaning:
				"Pelayan anda memulakan Turn. Kemudian ia membaca strim atau menunggu dengan long poll.",
		},
		bot: {
			label: "Bot sembang",
			prompt:
				"Jawab soalan dalam sembang pasukan kami. Tanya saya dulu sebelum hantar e-mel.",
			meaning:
				"Panggilan alat yang berisiko menunggu sehingga seseorang kata ya.",
		},
	},
	contract: {
		visual: "Satu kontrak",
		title: ["Setiap ciri ialah panggilan HTTP.", "Satu kontrak bertaip."],
		body: "Pelayan, klien TypeScript dan rujukan API semuanya datang daripada satu kontrak. Guna kunci API daripada mana-mana program.",
	},
	features: {
		title: ["Guna klien anda sendiri.", "Manusia tetap memegang kawalan."],
		items: [
			{
				title: "Satu sembang dengan setiap Bot",
				text: "Anda ada satu sembang dengan setiap Bot. Bot sentiasa menjawab serta-merta, dan kerja panjang berjalan serentak.",
			},
			{
				title: "Kelulusan",
				text: "Panggilan alat yang berisiko menunggu sehingga seseorang kata ya. Setiap jawapan menyimpan sejarahnya.",
			},
			{
				title: "App terbuka",
				text: "Bot mencari dan menggunakan App yang diletakkan oleh penerbit di web terbuka dengan OpenBot App Protocol.",
			},
			{
				title: "Model anda",
				text: "Guna OpenAI, Anthropic, atau mana-mana pelayan yang menyokong Chat Completions.",
			},
		],
	},
	closing: {
		title: ["Mula dalam", "tiga langkah."],
		label: "Langkah",
		steps: [
			{
				title: "Hidupkan pelayan",
				text: "Jalankan OpenBot pada komputer anda dengan Docker dan devenv. Ia datang dengan akaun ujian dan model ujian.",
			},
			{
				title: "Buat kunci API",
				text: "Log masuk sekali dalam pelayar, buat kunci, dan panggil API daripada mana-mana program.",
			},
			{
				title: "Mulakan Turn",
				text: "Hantar kerja dalam bahasa biasa. Baca jawapan, panggilan alat dan sejarahnya.",
			},
		],
	},
	license: {
		tagline: "Terbuka sejak awal.",
		label: "Lesen",
		body: "OpenBot ialah perisian bebas di bawah AGPL-3.0-only. Anda boleh baca kod, ubah kod dan jalankannya pada pelayan anda sendiri.",
		link: "Baca kod",
	},
} satisfies Messages
