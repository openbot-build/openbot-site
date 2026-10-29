import type { Messages } from "./types.ts"

export default {
 experienceSections: ["Hoàn thành công việc trong công cụ của bạn.", "Công việc tiếp tục ngoài cuộc trò chuyện.", "Chia sẻ cách bạn làm việc.", "Vai trò và phương pháp chung", "Tài khoản và dữ liệu riêng"],
 diagram: {"verify": "Xác minh nguồn và nhận diện người gửi", "return": "Gửi kết quả về chuỗi trò chuyện gốc", "parallel": "Tác vụ chạy độc lập và trả kết quả về cuộc trò chuyện này", "resume": "Kết nối lại và tiếp tục từ sự kiện nhận cuối cùng", "message": "Gửi tin nhắn", "work": "Xử lý tác vụ", "reply": "Nhận trả lời", "appFlow": ["Tìm dịch vụ", "Đọc cấu hình", "Dùng công cụ và giao diện"]},
	linkLabels: {"deploy": "Hướng dẫn triển khai", "apps": "Đặc tả xuất bản App", "channels": "Hướng dẫn tích hợp kênh", "delegation": "Hướng dẫn ủy nhiệm tác vụ", "chats": "Hướng dẫn trò chuyện và luồng sự kiện", "models": "Mở rộng backend mô hình", "source": "Mã nguồn"},
	developerSections: ["Biến dịch vụ thành khả năng.", "Kết nối nơi mọi người làm việc.", "Để tác vụ dài tiếp tục chạy.", "Chạy trên hạ tầng của bạn."],
	applications: [
	  {
	    "title": "Chăm sóc khách hàng",
	    "task": "Xử lý yêu cầu trên Slack qua App hỗ trợ đã kết nối và chuyển việc khẩn cấp.",
	    "steps": [
	      "Đọc 12 yêu cầu, xác định 3 việc khẩn.",
	      "Giao cho kỹ thuật và cập nhật hồ sơ."
	    ],
	    "outcome": "Người phụ trách và bước tiếp theo được gửi về luồng #support ban đầu."
	  },
	  {
	    "title": "Vận hành cửa hàng",
	    "task": "Bổ sung SKU-203 qua App kho và mua hàng, báo nhóm Lark.",
	    "steps": [
	      "Kiểm tra kho và thời gian giao: thiếu 12 món.",
	      "Tạo đơn mua gấp PO-203 gồm 12 món."
	    ],
	    "outcome": "Đơn đã ghi nhận, mã đơn gửi vào Lark để tiếp tục theo dõi."
	  },
	  {
	    "title": "Chia sẻ Bot dạy học",
	    "task": "Chia sẻ Bot soạn bài của tôi cho giáo viên khác dùng tài liệu và tài khoản riêng.",
	    "steps": [
	      "Giữ vai trò và hướng dẫn giảng dạy.",
	      "Tạo lời mời email cho teacher@example.com."
	    ],
	    "outcome": "Sau khi nhận, giáo viên dùng Bot liên kết và App riêng. Chat hai bên tách biệt."
	  },
	  {
	    "title": "Du lịch gia đình",
	    "task": "Dùng sở thích đã nhớ và đặt chỗ để xếp lịch Rome rồi gửi Telegram.",
	    "steps": [
	      "Nhớ nhịp độ chậm và nghỉ trưa; đọc đặt chỗ.",
	      "Thêm ba ngày hoạt động qua App lịch đã kết nối."
	    ],
	    "outcome": "Lịch đã cập nhật, hành trình gửi về Telegram và có thể chỉnh tại đó."
	  },
	  {
	    "title": "Điều phối chuyển nhà",
	    "task": "Sắp xếp chuyển nhà tuần tới và nhắc qua Telegram theo múi giờ của tôi.",
	    "steps": [
	      "Tạo việc điện nước, đóng gói và bàn giao chìa khóa.",
	      "Đặt kích hoạt một lần trước 7 ngày, 3 ngày và ngày chuyển."
	    ],
	    "outcome": "Ba nhắc nhở đã lên lịch; mỗi lần tự mở việc và báo tiến độ về Telegram."
	  },
	  {
	    "title": "Theo dõi bán hàng",
	    "task": "Theo dõi OPP-204 sau cuộc họp qua App CRM và lịch.",
	    "steps": [
	      "Đọc ghi chú họp và trạng thái cơ hội.",
	      "Cập nhật bước CRM và đặt lịch hẹn tiếp."
	    ],
	    "outcome": "OPP-204 có việc và lịch tiếp theo; email khách hàng đã gửi qua App thư kết nối."
	  },
	  {
	    "title": "Chuẩn bị phát hành",
	    "task": "Giao kiểm tra API và UI cho hai Bots trên Computer kiểm thử.",
	    "steps": [
	      "Hai việc được giao riêng; Chat này vẫn tiếp tục.",
	      "Chạy kiểm tra và thu kết quả cùng tệp thay đổi."
	    ],
	    "outcome": "Hai việc đã trở lại: 28 kiểm thử đạt, 2 tệp đổi. Bản phát hành sẵn sàng kiểm tra."
	  }
	],
	demo: {
		"send": "Gửi",
	  "label": "Bản demo tương tác",
	  "task": "Xem 12 yêu cầu hỗ trợ, lập báo cáo và gửi email cho nhóm.",
	  "read": "Đã đọc 12 yêu cầu",
	  "grouped": "Đã chia thành 3 chủ đề",
	  "report": "Báo cáo hỗ trợ",

	  "sent": "Đã gửi email",
	  "reset": "Chạy lại",
	  "download": "Tải báo cáo",
	  "categories": [
	    "Đăng nhập",
	    "Thanh toán",
	    "Xuất dữ liệu"
	  ]
	},
	product: {
		online: "Trải nghiệm trực tuyến",
		progress: "Theo dõi tiến độ",
		results: "Nhận kết quả",

	  "title": "Từ ý tưởng đến hành động.",
	  "ui": "Từ ý tưởng đến hành động.",
	  "core": "Tác nhân bắt tay vào việc.",
	  "developers": "Nhà phát triển",
	  "soon": "Sắp ra mắt"
	},
	description: "Nền tảng Bot không giao diện, ưu tiên API.",
	nav: {
		label: "Trang",
		docs: "Tài liệu",
		api: "API",
		language: "Ngôn ngữ",
	},
	hero: {
		title: ["Tác nhân của bạn.", "Quy tắc của bạn."],
		body: "OpenBot là nền tảng Bot mã nguồn mở, không có giao diện người dùng. Bạn giao việc cho Bot qua HTTP.",
		quickStart: "Bắt đầu nhanh",
		apiReference: "Tài liệu API",
		visual: "Bắt đầu một Turn",
		prompt: "Lên kế hoạch ba ngày ở Rome.",
	},
	scenarios: {
		title: "Bạn sẽ xây gì?",
		label: "Ứng dụng khách",
		script: {
			label: "Một script",
			prompt: "Mỗi sáng, đọc các yêu cầu hỗ trợ mới và phân loại chúng.",
			meaning:
				"Gọi một endpoint từ một cron job. Đọc câu trả lời dưới dạng JSON.",
		},
		service: {
			label: "Một dịch vụ",
			prompt: "Kiểm tra từng đơn hàng mới và đánh dấu những đơn có vẻ sai.",
			meaning:
				"Máy chủ của bạn bắt đầu một Turn. Sau đó nó đọc một luồng hoặc chờ bằng long poll.",
		},
		bot: {
			label: "Một chat bot",
			prompt:
				"Trả lời câu hỏi trong nhóm chat của chúng tôi. Hỏi tôi trước khi gửi email.",
			meaning: "Các lệnh gọi công cụ rủi ro sẽ chờ đến khi có người đồng ý.",
		},
	},
	contract: {
		visual: "Một hợp đồng",
		title: [
			"Mọi tính năng là một lệnh gọi HTTP.",
			"Một hợp đồng có kiểu rõ ràng.",
		],
		body: "Máy chủ, TypeScript client và tài liệu API đều đến từ một hợp đồng. Dùng API key từ bất kỳ chương trình nào.",
	},
	features: {
		title: ["Dùng client của riêng bạn.", "Con người luôn nắm quyền."],
		items: [
			{
				title: "Mỗi Bot một cuộc trò chuyện",
				text: "Bạn có một cuộc trò chuyện với mỗi Bot. Bot luôn trả lời ngay, còn việc dài chạy song song.",
			},
			{
				title: "Phê duyệt",
				text: "Các lệnh gọi công cụ rủi ro sẽ chờ đến khi có người đồng ý. Mọi câu trả lời đều giữ lịch sử.",
			},
			{
				title: "App mở",
				text: "Bot tìm và dùng các App mà nhà phát hành đưa lên web mở bằng OpenBot App Protocol.",
			},
			{
				title: "Mô hình của bạn",
				text: "Dùng OpenAI, Anthropic, hoặc bất kỳ máy chủ nào hỗ trợ Chat Completions.",
			},
		],
	},
	closing: {
		title: ["Bắt đầu với", "ba bước."],
		label: "Các bước",
		steps: [
			{
				title: "Khởi động máy chủ",
				text: "Chạy OpenBot trên máy tính của bạn với Docker và devenv. Có sẵn tài khoản thử và mô hình thử.",
			},
			{
				title: "Tạo API key",
				text: "Đăng nhập một lần trên trình duyệt, tạo key, rồi gọi API từ bất kỳ chương trình nào.",
			},
			{
				title: "Bắt đầu một Turn",
				text: "Gửi việc bằng ngôn ngữ thường ngày. Đọc câu trả lời, các lệnh gọi công cụ và lịch sử.",
			},
		],
	},
	license: {
		tagline: "Được thiết kế mở.",
		label: "Giấy phép",
		body: "OpenBot là phần mềm tự do theo AGPL-3.0-only. Bạn có thể đọc mã, sửa nó và chạy nó trên máy chủ của riêng bạn.",
		link: "Đọc mã nguồn",
	},
} satisfies Messages
