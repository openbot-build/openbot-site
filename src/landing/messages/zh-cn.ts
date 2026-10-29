import type { Messages } from "./types.ts"

export default {
 experienceSections: ["在你的工具里，把事情办完。", "离开聊天，任务继续。", "把好用的助手分享出去。", "共同的角色与方法", "各自的账号与数据"],
 diagram: {"verify": "验证消息来源，识别发送者身份", "return": "结果发回原来的讨论串", "parallel": "任务独立执行，结果返回当前聊天", "resume": "断线重连后，从上次收到的事件继续", "message": "发送消息", "work": "处理任务", "reply": "收到回复", "appFlow": ["发现服务", "读取连接配置", "调用工具和界面"]},
	linkLabels: {"deploy": "部署指南", "apps": "App 发布规范", "channels": "聊天渠道接入指南", "delegation": "任务委派指南", "chats": "聊天与事件流指南", "models": "扩展模型后端", "source": "源码"},
	developerSections: ["把服务变成能力。", "接入人们工作的地方。", "让长任务持续运行。", "运行在你的基础设施上。"],
	applications: [
	  {
	    "title": "客服协同",
	    "task": "在 Slack 里，用我已连接的客服 App 处理今天的工单，把紧急问题交给对应团队。",
	    "steps": [
	      "从客服 App 读取12条工单，识别3条紧急问题。",
	      "将紧急工单分配给研发，并更新业务系统中的负责人。"
	    ],
	    "outcome": "负责人和下一步已回到 #support 原讨论串，团队可以直接接着处理。"
	  },
	  {
	    "title": "门店运营",
	    "task": "通过已连接的库存和采购 App，为 SKU-203 补货，把进展发到飞书采购群。",
	    "steps": [
	      "核对库存与供应商交期，发现到货前有12件缺口。",
	      "在采购 App 中创建12件的加急采购单 PO-203。"
	    ],
	    "outcome": "采购单已落入业务系统，单号同步到飞书采购群，方便团队继续跟进。"
	  },
	  {
	    "title": "共享教学助手",
	    "task": "把我的备课 Bot 分享给另一位老师，让她用自己的教材和账号备课。",
	    "steps": [
	      "保留这位 Bot 的教学角色和备课方法。",
	      "为 teacher@example.com 创建邮件邀请。"
	    ],
	    "outcome": "对方接受后，在自己的组织中获得关联 Bot，使用自己的 App；双方聊天互不开放。"
	  },
	  {
	    "title": "家庭出行",
	    "task": "结合记住的出行偏好和预订 App，把罗马行程排进我的日历，再发到 Telegram。",
	    "steps": [
	      "沿用家庭慢节奏和午休偏好，读取已经确认的预订。",
	      "通过已连接的日历 App 安排三天活动，在景点之间留出休息时间。"
	    ],
	    "outcome": "日历已更新，行程已送到 Telegram 聊天里，之后可直接在聊天中调整。"
	  },
	  {
	    "title": "搬家管家",
	    "task": "替我安排下周搬家，按我的时区，在各个阶段通过 Telegram 提醒我。",
	    "steps": [
	      "拆出水电迁移、打包、交钥匙三项任务。",
	      "分别设置提前7天、提前3天和搬家当天的一次性触发器。"
	    ],
	    "outcome": "三次提醒已排好；到时自动开启对应任务，并把进展送回 Telegram。"
	  },
	  {
	    "title": "销售跟进",
	    "task": "用我已连接的 CRM 和日历 App，跟进刚开完会的 OPP-204 商机。",
	    "steps": [
	      "读取会议记录和当前商机状态。",
	      "更新 CRM 的下一步，并把回访会议加入日历。"
	    ],
	    "outcome": "OPP-204 已有下一步和回访时间，客户跟进邮件已通过连接的邮件 App 发出。"
	  },
	  {
	    "title": "研发交付",
	    "task": "把 API 和界面检查分给两位 Bot，在连接的测试 Computer 上执行，结果回到这里。",
	    "steps": [
	      "分别委派 API 测试和界面检查，当前聊天可以继续。",
	      "在 Computer 上运行检查，汇集两项任务结果和修改文件。"
	    ],
	    "outcome": "两项任务已回到原聊天：28项测试通过、2个文件修改，团队可以继续检查候选版本。"
	  }
	],
	demo: {
		"send": "发送",
	  "label": "交互演示",
	  "task": "整理这 12 条客服工单，生成周报并发给团队。",
	  "read": "已读取 12 条工单",
	  "grouped": "已归为 3 类问题",
	  "report": "客服周报",

	  "sent": "邮件已发送",
	  "reset": "重播",
	  "download": "下载报告",
	  "categories": [
	    "登录问题",
	    "账单问题",
	    "导出问题"
	  ]
	},
	product: {
		online: "在线体验",
		progress: "查看进展",
		results: "获得结果",

	  "title": "从想法，到完成。",
	  "ui": "从想法，到完成。",
	  "core": "把工作交给智能体。",
	  "developers": "开发者",
	  "soon": "即将推出"
	},
	description: "一个无界面、API 优先的 Bot 平台。",
	nav: {
		label: "网站",
		docs: "文档",
		api: "API",
		language: "语言",
	},
	hero: {
		title: ["你的智能体。", "由你来定义。"],
		body: "OpenBot 是一个开源的 Bot 平台，没有用户界面。你通过 HTTP 把工作交给 Bot。",
		quickStart: "快速开始",
		apiReference: "API 参考",
		visual: "开始一个 Turn",
		prompt: "帮我规划三天的罗马行程。",
	},
	scenarios: {
		title: "你想做什么？",
		label: "客户端",
		script: {
			label: "一个脚本",
			prompt: "每天早上读一遍新的客服工单，并给它们分类。",
			meaning: "用 cron 定时任务调用一个接口。以 JSON 读取结果。",
		},
		service: {
			label: "一个服务",
			prompt: "检查每个新订单，标出看起来有问题的订单。",
			meaning: "你的服务器开始一个 Turn。然后读取数据流，或用长轮询等待结果。",
		},
		bot: {
			label: "一个聊天机器人",
			prompt: "在我们团队的聊天里回答问题。发邮件之前先问我。",
			meaning: "有风险的工具调用会等待，直到有人同意。",
		},
	},
	contract: {
		visual: "一份契约",
		title: ["每个功能都是一次 HTTP 调用。", "一份有类型的契约。"],
		body: "服务器、TypeScript 客户端和 API 参考都来自同一份契约。在任何程序里都能用 API 密钥调用。",
	},
	features: {
		title: ["用你自己的客户端。", "让人来掌控。"],
		items: [
			{
				title: "每个 Bot 一个聊天",
				text: "你和每个 Bot 只有一个聊天。Bot 总是马上回答，长的工作会并行进行。",
			},
			{
				title: "审批",
				text: "有风险的工具调用会等待，直到有人同意。每个回答都保留历史。",
			},
			{
				title: "开放的 App",
				text: "Bot 可以找到并使用发布者通过 OpenBot App Protocol 放在开放网络上的 App。",
			},
			{
				title: "你的模型",
				text: "可以用 OpenAI、Anthropic，或任何支持 Chat Completions 的服务器。",
			},
		],
	},
	closing: {
		title: ["三步", "即可开始。"],
		label: "步骤",
		steps: [
			{
				title: "启动服务器",
				text: "用 Docker 和 devenv 在你的电脑上运行 OpenBot。它自带测试账号和测试模型。",
			},
			{
				title: "创建 API 密钥",
				text: "在浏览器里登录一次，创建一个密钥，然后在任何程序里调用 API。",
			},
			{
				title: "开始一个 Turn",
				text: "用普通的话发送工作。读取回答、工具调用和历史记录。",
			},
		],
	},
	license: {
		tagline: "为开放而生。",
		label: "许可证",
		body: "OpenBot 是基于 AGPL-3.0-only 的自由软件。你可以阅读代码、修改代码，并在自己的服务器上运行。",
		link: "阅读代码",
	},
} satisfies Messages
