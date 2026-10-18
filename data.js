// 数据文件：由自动更新任务维护。更新时只改本文件的 lastUpdated / updates / products 字段。
// 时效类型：longterm=长期有效, limited=限时/限免, conditional=需特定身份, expired=已过期, dead=已停服
window.FREE_DATA = {
  lastUpdated: "2026-10-18",
  updates: [
    { date: "2026-10-18", note: "首次上线：联网核实 46 款智能体产品的免费政策，逐条附来源与核实日期。" }
  ],
  products: [
    // ===== 通用助手（国际） =====
    {
      name: "ChatGPT", vendor: "OpenAI", category: "通用助手",
      freePolicy: "免费档提供不限量基础文本对话，并可有限使用推理模型、图像生成、语音对话和深度研究；Agent 模式基本限付费档。另有介于免费与 Plus 之间的 Go 档（约 $8/月，额度约为免费档 10 倍）。",
      quota: "基础对话不限量；推理模型约 10 条/5 小时、深度研究约 5 次/月（均为第三方口径，官方仅表述为\"有限\"）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方+媒体", infoDate: "2026-10-18",
      sources: [
        { t: "官方套餐页", u: "https://chatgpt.com/plans/go" },
        { t: "帮助文档", u: "https://help.openai.com/en/articles/11989085-what-is-chatgpt-go" }
      ]
    },
    {
      name: "Claude", vendor: "Anthropic", category: "通用助手",
      freePolicy: "claude.ai 免费档含网页搜索、文件创建、代码执行、Artifacts 与 Projects（上限 5 个），可用 Sonnet/Haiku 模型，用量按 5 小时滚动窗口限制。深度研究（Research）与 Claude Code 均不含在免费档。",
      quota: "官方未公布具体条数（5 小时窗口制）；Claude Code 无任何免费用法",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方定价页", u: "https://claude.com/pricing" } ]
    },
    {
      name: "Gemini（App / AI Studio）", vendor: "Google", category: "通用助手",
      freePolicy: "Gemini App 长期免费，2026 年起按\"5 小时滚动 + 每周限额\"双重计算；2026-10-09 起免费档主力模型降为 Gemini 3.5 Flash-Lite，高级模型与深度研究仅剩很小额度。开发者用的 Google AI Studio 完全免费，附带 API 免费层（有速率限制）。",
      quota: "App 免费档具体数字未公布；AI Studio API 免费层约 10 次/分、1500 次/天（第三方口径）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方+媒体", infoDate: "2026-10-18",
      sources: [
        { t: "官方支持页", u: "https://support.google.com/gemini/answer/16275805?hl=en" },
        { t: "9to5Google 报道", u: "https://9to5google.com/2026/10/03/gemini-model-limits-oct-26/" }
      ]
    },
    {
      name: "Grok", vendor: "xAI", category: "通用助手",
      freePolicy: "grok.com 与 X 内无需订阅即可免费对话（含语音），额度改为动态制、官方不再公布具体数字。Grok Imagine 生图免费状态多源说法不一，视频生成基本需订阅。",
      quota: "对话约 10~20 条/2 小时、Imagine 约 5 张图/天（均为用户观测，存疑）",
      timeliness: "longterm", timeText: "长期有效", confidence: "存疑", infoDate: "2026-10-18",
      sources: [ { t: "官方 FAQ", u: "https://docs.x.ai/grok/faq" } ]
    },
    {
      name: "Perplexity", vendor: "Perplexity", category: "通用助手",
      freePolicy: "免费档可近乎不限量使用快速搜索；Pro 搜索每天 3 次（叠加每周平均限额），深度研究约每月 1 次，Labs 有少量月度配额。Comet 浏览器及内置助手已对所有用户免费开放。",
      quota: "快速搜索不限量；Pro 搜索 3 次/天；深度研究约 1 次/月",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "帮助中心套餐对比", u: "https://www.perplexity.ai/help-center/en/articles/11187416-which-perplexity-subscription-plan-is-right-for-you" } ]
    },
    {
      name: "Microsoft Copilot", vendor: "Microsoft", category: "通用助手",
      freePolicy: "消费版 Copilot 免费，含对话、Think Deeper 推理与语音（2025 年 2 月起官方称无使用上限）；图像生成免费但有隐藏次数上限。Agent Builder、Copilot Studio 及 Office 应用内 Copilot 需付费许可。",
      quota: "对话/推理/语音免费（无上限口径，2026 年未见撤销公告）；图像有限次（数字未公布）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方+媒体", infoDate: "2026-10-18",
      sources: [ { t: "官方支持页", u: "https://support.microsoft.com/en-us/microsoft-365-copilot/ai-credits-and-limits-for-microsoft-365-subscriptions" } ]
    },
    {
      name: "Mistral Le Chat", vendor: "Mistral AI", category: "通用助手",
      freePolicy: "Le Chat 长期免费档可用最新模型、网页搜索与创作工具；API 有 Free mode（约 1 请求/秒），Codestral 另有免费专用端点。学生经身份验证可享最长 12 个月 Pro 学生优惠。注意：免费档默认数据用于模型训练。",
      quota: "消息为软上限（约 20~30 条/窗口，第三方口径）；Codestral 端点约 30 次/分、2000 次/天（第三方口径）",
      timeliness: "longterm", timeText: "长期有效；学生优惠限 12 个月", confidence: "官方+媒体", infoDate: "2026-10-18",
      sources: [ { t: "官方定价页", u: "https://mistral.ai/pricing" } ]
    },

    // ===== 通用助手（国内） =====
    {
      name: "豆包", vendor: "字节跳动", category: "通用助手",
      freePolicy: "2026 年 5 月起改为\"基础功能永久免费、高阶服务付费\"：日常对话、搜索问答免费；Pro 模型、超长文档解析、专业 AI 绘画等需会员（68~500 元/月）。豆包大模型 API 经火山方舟：新用户每款模型可领 50 万 tokens 免费额度。",
      quota: "基础功能免费（未注明次数上限）；API 每款模型 50 万 tokens（新用户一次性）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方+媒体", infoDate: "2026-10-18",
      sources: [
        { t: "付费服务协议", u: "https://www.doubao.com/legal/ey01" },
        { t: "火山方舟免费额度文档", u: "https://docs.volcengine.com/docs/ark/free-inference-quota" }
      ]
    },
    {
      name: "腾讯元宝", vendor: "腾讯", category: "通用助手",
      freePolicy: "全功能免费，截至核实日未推出会员或收费档位。混元与 DeepSeek 双模型免费开放（含深度思考、文生图）。",
      quota: "全功能免费（官方未公布每日次数上限）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方+媒体", infoDate: "2026-10-18",
      sources: [ { t: "官网", u: "https://yuanbao.tencent.com" } ]
    },
    {
      name: "Kimi", vendor: "月之暗面", category: "通用助手",
      freePolicy: "App 与网页版基础功能免费（对话、搜索、文档解析），热门模型高峰期有限流。会员 49~699 元/月；2026 年 7 月 K3 发布后因算力紧张暂停新会员订阅（恢复时间未定）。API 实名后赠 15 元代金券（不可用于 K3 模型）。",
      quota: "基础功能免费；API 赠 15 元券（实名后一次性）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方+媒体", infoDate: "2026-10-18",
      sources: [ { t: "会员定价页", u: "https://www.kimi.com/help/membership/membership-pricing" } ]
    },
    {
      name: "DeepSeek", vendor: "深度求索", category: "通用助手",
      freePolicy: "App 与网页版对所有用户免费，无会员无付费墙。API 已于 2026-08-17 起实行峰谷定价（如 flash 输出高峰 8 元/百万 tokens），无公开免费额度；2026-11-01 起 Search/Fetch 接口按 5 元/千次收费。",
      quota: "App 免费；API 无免费额度",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "API 定价页", u: "https://api-docs.deepseek.com/zh-cn/quick_start/pricing" } ]
    },
    {
      name: "文心（原文小言）", vendor: "百度", category: "通用助手",
      freePolicy: "文心 C 端自 2025-04-01 起全面免费（含文心 4.0 级能力与深度搜索），会员制取消。2026-07-26 起原\"文小言\"迁移为\"文心\"App 与百度文心网站，免费政策延续，最新模型为文心 5.1。",
      quota: "全功能免费（未注明上限）",
      timeliness: "longterm", timeText: "长期有效", confidence: "媒体", infoDate: "2026-10-18",
      sources: [ { t: "IT之家报道", u: "https://www.ithome.com/0/968/360.htm" } ]
    },
    {
      name: "讯飞星火", vendor: "科大讯飞", category: "通用助手",
      freePolicy: "星火 App 免费使用对话、写作、PPT 等功能。API 侧 Spark Lite 版长期免费；个人认证用户可领 200 万 tokens 免费包（1 年有效），企业认证 500 万 tokens。",
      quota: "App 免费；Spark Lite API 免费；个人免费包 200 万 tokens/年",
      timeliness: "longterm", timeText: "长期有效（免费包领取入口以控制台为准）", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "开放平台文档", u: "https://www.xfyun.cn/doc/spark/Web.html" } ]
    },
    {
      name: "通义千问 / 夸克", vendor: "阿里巴巴", category: "通用助手",
      freePolicy: "千问 App 对普通用户完全免费，官方明确表态\"不考虑收费\"（2025-11 表态，2026-05 媒体确认仍免费）。夸克 AI 功能免费版可用，SVIP 会员权益主要指向网盘扩容等，AI 功能本身未设付费墙。",
      quota: "全功能免费（未注明上限）",
      timeliness: "longterm", timeText: "长期有效", confidence: "媒体", infoDate: "2026-10-18",
      sources: [ { t: "新浪财经报道", u: "https://finance.sina.com.cn/roll/2025-11-17/doc-infxspkk5124656.shtml" } ]
    },
    {
      name: "秘塔AI搜索", vendor: "秘塔科技", category: "通用助手",
      freePolicy: "基础搜索免费无广告，\"深度研究\"功能免费开放。采用积分制：免费用户每天约 100 积分（第三方口径），一次深度研究约耗 20~30 积分，即每天约 3~4 次深度研究。用户协议确认免费额度机制且官方保留调整权。",
      quota: "基础搜索不限次；约 100 积分/天（非官方口径，存疑）",
      timeliness: "longterm", timeText: "长期有效", confidence: "存疑", infoDate: "2026-10-18",
      sources: [ { t: "用户政策页", u: "https://metaso.cn/meta-user-policy" } ]
    },

    // ===== 编程智能体（国际） =====
    {
      name: "GitHub Copilot", vendor: "GitHub（Microsoft）", category: "编程智能体",
      freePolicy: "Copilot Free 面向个人开发者：免费代码补全、对话与 IDE 内 agent 模式（仅自动模型选择）。2026-06-01 起全面转向 AI Credits 用量计费（1 credit = $0.01），Free 档含月度 credits 额度。云端 agent 与代建 PR 不含在免费档。",
      quota: "2,000 次补全/月；约 50 次对话/月；月度 AI Credits 数额官方未公布",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [
        { t: "官方计划文档", u: "https://docs.github.com/en/copilot/get-started/plans" },
        { t: "计费改革公告", u: "https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing" }
      ]
    },
    {
      name: "Cursor", vendor: "Anysphere", category: "编程智能体",
      freePolicy: "Free 档含一个每周刷新的共享 AI 用量池（2026 年起并入 X/Grok 订阅体系），可用 Agent 与 Chat 及 Cursor 自研模型；云端 agent、Bugbot 与第三方模型不包含。官方不再公布具体数字，旧\"2000 次补全\"口径已失效。",
      quota: "每周刷新的有限用量（数额未公布）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方+媒体", infoDate: "2026-10-18",
      sources: [ { t: "官方定价页", u: "https://cursor.com/pricing" } ]
    },
    {
      name: "Windsurf（Devin Desktop）", vendor: "Cognition", category: "编程智能体",
      freePolicy: "Windsurf 编辑器 2026-06 起更名 Devin Desktop，免费档保留轻量 agent 配额、无限 inline 编辑与 Tab 补全；2026-03 起由 credits 制改为每日+每周自动刷新的 token 配额，免费模型不占配额。此前\"SWE-2 限时免费\"活动已于 2026-10-16 结束。",
      quota: "轻量配额（官方未公布数字；旧 25 credits/月 制已废止）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方定价页", u: "https://devin.ai/pricing" } ]
    },
    {
      name: "Replit（Agent）", vendor: "Replit", category: "编程智能体",
      freePolicy: "Starter 免费档每日发放 Agent credits（按日重置、有月度上限，数额未公布），可发布 1 个应用（30 天后下线）、2GB 存储。注意：2026-08 与 OpenAI 合作的 Free Mode 仅面向付费订阅者，别和免费档混淆。",
      quota: "每日 Agent credits（数额未公布）；1 个免费发布应用；2GB 存储",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "Starter 计划文档", u: "https://docs.replit.com/billing/plans/starter-plan" } ]
    },
    {
      name: "Lovable", vendor: "Lovable", category: "编程智能体",
      freePolicy: "免费计划每天发放 5 个 build credits（当月累计上限 30 个，用尽后次月恢复），另每月赠 20 个 Cloud credits 及 4 个应用内 AI 功能试用 credits。",
      quota: "5 credits/天（月上限 30）；20 Cloud credits/月",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方定价页", u: "https://lovable.dev/pricing" } ]
    },
    {
      name: "Bolt.new", vendor: "StackBlitz", category: "编程智能体",
      freePolicy: "免费计划按 token 限额使用：每天 300K tokens、每月 1M tokens（不跨月累积），含公开/私人项目、网站托管与数据库，网站带 Bolt 品牌标识。",
      quota: "300K tokens/天；1M tokens/月",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方定价页", u: "https://bolt.new/pricing" } ]
    },
    {
      name: "v0", vendor: "Vercel", category: "编程智能体",
      freePolicy: "免费档每天 7 条消息；新注册用户一次性赠 $5 credits。老免费用户的 $5/月 额度为旧制延续，新用户没有月度 credits。",
      quota: "7 条消息/天；新用户一次性 $5 credits",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方定价页", u: "https://v0.app/pricing" } ]
    },
    {
      name: "Google Jules", vendor: "Google", category: "编程智能体",
      freePolicy: "异步编码智能体免费档：每 24 小时最多 15 个任务、最多 3 个并发，用完等待重置。更高额度随 Google AI Pro（约 100 任务/天）与 Ultra（约 300 任务/天）订阅。",
      quota: "15 任务/24 小时；3 并发",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "用量限制文档", u: "https://jules.google/docs/usage-limits" } ]
    },

    // ===== 编程智能体（国内） =====
    {
      name: "Trae", vendor: "字节跳动", category: "编程智能体",
      freePolicy: "订阅制下保留永久免费档：全功能可用（含 2 个云端任务并发），每月 500 积分，部分模型享折扣（Seed 系列 5 折等）。付费 Lite 49 元/月起（首月 39 元）。",
      quota: "500 积分/月（官网定价页现行口径）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方定价页", u: "https://www.trae.cn/pricing" } ]
    },
    {
      name: "Qoder", vendor: "阿里巴巴", category: "编程智能体",
      freePolicy: "新用户首次登录客户端享 14 天免费 Pro 试用并赠 300 Credits（一次性）。之后降级为长期\"体验版\"免费档：限次代码补全、基础模型、消息条数受限，支持自带 API Key（BYOK）。付费 Pro $20/月起。",
      quota: "14 天 Pro 试用 + 300 Credits（新用户一次性）；体验版长期可用（数字未公布）",
      timeliness: "conditional", timeText: "新用户试用；体验版长期", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方定价文档", u: "https://docs.qoder.com/zh/account/pricing" } ]
    },
    {
      name: "CodeBuddy", vendor: "腾讯", category: "编程智能体",
      freePolicy: "国内版官网标注\"体验版限时免费\"（含 500 基础积分，未注明截止日）；国际版 Free 档每月 100 credits、限时活动 30 credits/天、补全 5000 次/月，新用户另送 250 credits（14 天有效）。国内档位价格为搜索快照口径，以官网为准。",
      quota: "国内 500 基础积分（限时免费）；国际 100 credits/月 + 30 credits/天",
      timeliness: "limited", timeText: "限时免费（未注明截止）", confidence: "存疑", infoDate: "2026-10-18",
      sources: [
        { t: "国内定价页", u: "https://www.codebuddy.cn/pricing" },
        { t: "国际版文档", u: "https://www.tencentcloud.com/document/product/1256/77270" }
      ]
    },
    {
      name: "通义灵码", vendor: "阿里云", category: "编程智能体",
      freePolicy: "个人基础版永久免费：补全/问答不限量，AI 程序员对话 50 轮次/月、单测智能体 50 方法/月。个人专业版（原价 59 元/月）官网现标注\"限免\"，未注明截止日期。",
      quota: "基础版不限量补全；AI 程序员 50 轮次/月；专业版限免中",
      timeliness: "limited", timeText: "基础版长期免费；专业版限免中", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方定价页", u: "https://lingma.aliyun.com/lingma/pricing" } ]
    },
    {
      name: "文心快码 Comate", vendor: "百度", category: "编程智能体",
      freePolicy: "个人标准版长期免费：智能代码补全不限次；首次开通赠 5000 积分（仅 7 天有效）。额度用尽后仍可免费续用 Auto-Free 模式（免费模型通道）。付费个人专业版 70 元/月。",
      quota: "补全不限次；赠 5000 积分（7 天）；Auto-Free 模式免费",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方计费文档", u: "https://cloud.baidu.com/doc/COMATE/s/rlnvnio4a" } ]
    },
    {
      name: "iFlow CLI（心流）", vendor: "心流（阿里系）", category: "编程智能体",
      freePolicy: "已停止服务：2026-03-20 起停止维护更新，2026-04-17 正式关停，API 与模型库同步关闭。停服前完全免费。官方建议迁移至 Qoder。",
      quota: "不适用（已停服）",
      timeliness: "dead", timeText: "已停服", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "停服公告", u: "https://vibex.iflow.cn/t/topic/4819" } ]
    },
    {
      name: "智谱 GLM（清言 / API / Coding Plan）", vendor: "智谱 AI", category: "编程智能体",
      freePolicy: "智谱清言 App 免费对话；GLM-Flash 系列 API（GLM-4.7-Flash、GLM-4.5-Flash 及视觉 Flash 系等）官方明确免费调用；GLM Coding Plan 为付费订阅（2026-07-30 起 Token 积分制，无免费档，国内售价较旧版大幅上调，媒体报道 Lite 118 元/月起）。",
      quota: "Flash 系列 API 免费；Coding Plan 无免费档",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方+媒体", infoDate: "2026-10-18",
      sources: [ { t: "模型概览（含免费标注）", u: "https://docs.bigmodel.cn/cn/guide/start/model-overview" } ]
    },
    {
      name: "Qwen Code CLI", vendor: "阿里巴巴", category: "编程智能体",
      freePolicy: "Qwen OAuth 免费档已于 2026-04-15 官方宣布停止，新请求被拒绝；社区流传的\"每天 2000 次免费\"口径已失效。现仅能通过付费订阅或 OpenRouter 等第三方通道使用。",
      quota: "无免费档（2026-04-15 起停止）",
      timeliness: "expired", timeText: "免费档已停止", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方认证文档", u: "https://qwenlm.github.io/qwen-code-docs/en/users/configuration/auth/" } ]
    },

    // ===== 通用 Agent 平台 =====
    {
      name: "Manus", vendor: "Manus AI", category: "通用Agent平台",
      freePolicy: "长期免费档每日发放 300 积分（不累积），仅限 Chat/Agent 模式下的 Manus 2.0 Lite，1 个并发任务，且免费档月度积分上限 1,500。Manus 2.0/2.0 Max 需付费；此前的全员免费使用活动已于 2026-08-28 到期。2026 年 8 月因恢复独立运营，部分地区用户数据曾被删除。",
      quota: "300 积分/日；免费档月上限 1,500 积分",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [
        { t: "会员定价帮助文档", u: "https://help.manus.im/en/articles/11711111-what-is-the-current-membership-pricing-for-manus" },
        { t: "积分规则文档", u: "https://help.manus.im/en/articles/11711097-what-are-the-rules-for-credits-consumption-and-how-can-i-obtain-them" }
      ]
    },
    {
      name: "Devin", vendor: "Cognition AI", category: "通用Agent平台",
      freePolicy: "有长期免费档（app.devin.ai 直接注册），含有限的 Devin 使用量、Devin Review 与 DeepWiki 访问权；旧 ACU 制 Core 计划已取消，存量用户已迁移至 Free 档。公共 GitHub PR 审查免费且无需账号。",
      quota: "有限用量（官方明示未公布数字）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方计费文档", u: "https://docs.devin.ai/admin/billing/self-serve" } ]
    },
    {
      name: "Genspark", vendor: "MainFunc", category: "通用Agent平台",
      freePolicy: "免费档每日发放 credits（第三方口径 100/日），可用于 Super Agent、AI 搜索、图片等基础功能，每日刷新、不累积；当账号累计消耗到未公布的\"终身免费总额度\"后停止发放。2026-09-18 起订阅侧改版为每周 Free Quota 体系。",
      quota: "100 credits/日（媒体口径，官方数字需登录核实）；终身上限未公布",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方+媒体", infoDate: "2026-10-18",
      sources: [ { t: "帮助中心", u: "https://www.genspark.ai/helpcenter/membership-plans" } ]
    },
    {
      name: "Flowith", vendor: "Flowith AI", category: "通用Agent平台",
      freePolicy: "免费 Starter 档长期存在，但额度为一次性赠送 300 credits，用完即止、不按日刷新（早期\"每日创作力\"体系已取消），仅标准模型、最多 5 并发；另有每日 5 次 Nano Banana 生图奖励。",
      quota: "一次性 300 credits（不刷新）；每日 5 次生图",
      timeliness: "longterm", timeText: "长期有效（额度一次性）", confidence: "媒体", infoDate: "2026-10-18",
      sources: [ { t: "定价页", u: "https://flowith.io/pricing" } ]
    },
    {
      name: "MiniMax Agent", vendor: "MiniMax（稀宇科技）", category: "通用Agent平台",
      freePolicy: "无需订阅，每日签到领免费积分（官方 2026-09 上线）：每天 400 分，连续第 4/7 天各 1,000 分，签满一周累计 4,000；积分 30 天有效，可用于编码、深度调研及 PPT/图片/音视频等任务。",
      quota: "400~1,000 积分/日（周累计 4,000）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方用量文档", u: "https://agent.minimaxi.com/docs/code/account/usage" } ]
    },
    {
      name: "Skywork.ai", vendor: "昆仑万维", category: "通用Agent平台",
      freePolicy: "长期免费档：新用户首月每日 500 credits，第二个月起降为每周 500 credits，积分不累积、过期作废。注意 $1/7 天试用档到期自动转付费订阅，需手动取消（官方页面 500 与 800 两个口径并存）。",
      quota: "首月 500 credits/日 → 之后 500 credits/周",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方+媒体", infoDate: "2026-10-18",
      sources: [ { t: "官方定价文章", u: "https://skywork.ai/skypage/en/skywork-ai-copilot-pricing-2026/2034521488383823872" } ]
    },

    // ===== 平台与 API 额度 =====
    {
      name: "扣子 Coze（国内版）", vendor: "字节跳动", category: "平台与API",
      freePolicy: "个人免费版长期有效：每日登录送 1500 积分（当日有效、用完即停，不扣现金），含 4GB 云盘、编程项目调用 100 QPM 等基础权益。2026 年 1 月套餐改版后，插件、实时音视频等原免费额度已取消。付费个人版 39.9 元/月起。",
      quota: "1500 积分/日（登录发放）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方套餐文档", u: "https://docs.coze.cn/guides_edition" } ]
    },
    {
      name: "Coze Studio（开源版）", vendor: "字节跳动", category: "平台与API",
      freePolicy: "2025 年 7 月开源的 Agent 开发平台，Apache 2.0 协议，可免费自部署、可商用，无平台积分限制，成本仅为自有服务器。",
      quota: "自部署不限量（软件免费）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "GitHub 仓库", u: "https://github.com/coze-dev/coze-studio" } ]
    },
    {
      name: "Dify", vendor: "LangGenius", category: "平台与API",
      freePolicy: "云端 Sandbox 套餐永久免费：200 条 message credits、知识库 50 份文档/50MB、1 个工作空间、API 5000 次/月。另有 Community 开源自部署完全免费（Apache 2.0 附加条件许可，多租户/去 Logo 场景受限）。",
      quota: "200 message credits；API 5000 次/月；自部署不限量",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方定价页", u: "https://dify.ai/pricing" } ]
    },
    {
      name: "n8n", vendor: "n8n GmbH", category: "平台与API",
      freePolicy: "自部署 Community Edition 长期免费，执行次数与工作流数不限（fair-code 许可）。n8n Cloud 提供 14 天免费试用（限 1000 次执行，无需信用卡，到期不升级自动删除工作区）。",
      quota: "自部署不限量；云试用 14 天 / 1000 次执行",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [
        { t: "官方定价页", u: "https://n8n.io/pricing/" },
        { t: "试用文档", u: "https://docs.n8n.io/deploy/use-n8n-cloud/start-your-free-trial/" }
      ]
    },
    {
      name: "硅基流动 SiliconFlow", vendor: "硅基智能", category: "平台与API",
      freePolicy: "新用户注册即赠 14 元额度（官方称约 2000 万 tokens，有效期未注明），调用费用优先从赠送额度扣。平台维持一批 0 元模型（部分小模型、BGE 系 embedding、Kolors 生图、语音模型等），具体列表以官网定价页实时为准。",
      quota: "赠 14 元（新用户一次性）；部分模型 0 元调用",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [
        { t: "计费规则文档", u: "https://docs.siliconflow.com/cn/faqs/billing-rules" },
        { t: "定价页", u: "https://www.siliconflow.cn/pricing" }
      ]
    },
    {
      name: "OpenRouter", vendor: "OpenRouter", category: "平台与API",
      freePolicy: ":free 结尾的免费模型对所有账户开放，限额按账户全局计算（多账号/多 Key 不能绕过）：每分钟 20 次；每日额度与累计充值挂钩——未充值 50 次/天，累计充值满 10 美元提升至 1000 次/天。",
      quota: "20 次/分钟；50 次/天（充值 ≥$10 后 1000 次/天）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方限额文档", u: "https://openrouter.ai/docs/api-reference/limits" } ]
    },
    {
      name: "Gemini CLI", vendor: "Google", category: "平台与API",
      freePolicy: "个人 Google 账户（OAuth 登录）免费使用，官方配额文档为每天 1000 次模型请求；用 API key 免费层则每天仅 250 次且限 Flash 模型。注意：官方宣布自 2026-06-18 起 Gemini CLI 免费层由 Antigravity CLI 接替。",
      quota: "1000 次请求/天（个人账户）；API key 免费层 250 次/天",
      timeliness: "longterm", timeText: "长期有效（免费层由 Antigravity 接替中）", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方配额文档", u: "https://github.com/google-gemini/gemini-cli/blob/main/docs/resources/quota-and-pricing.md" } ]
    },
    {
      name: "阿里云百炼", vendor: "阿里巴巴", category: "平台与API",
      freePolicy: "首次开通百炼自动发放新人额度：每款模型各赠 100 万 tokens（不同模型独立、不互通），有效期 90 天，过期作废；仅抵扣北京地域实时推理，同一实名主体不可重复领取。此前流传的\"每月 100 万 tokens\"模式与现行页面不符。",
      quota: "100 万 tokens/款（新用户，90 天有效）",
      timeliness: "conditional", timeText: "新用户一次性，90 天", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方免费额度文档", u: "https://help.aliyun.com/zh/model-studio/new-free-quota" } ]
    },
    {
      name: "火山方舟", vendor: "字节跳动（火山引擎）", category: "平台与API",
      freePolicy: "免费推理额度为活动制：官方产品页口径为每日领取、单模型最高 500 万 tokens；语音类模型另有字符数/小时数免费额度（如语音合成 5000 字符）。具体领取条件以方舟控制台活动页为准（官方文档正文未能直接核实，存疑）。",
      quota: "每日领取，单模型最高 500 万 tokens（存疑口径）",
      timeliness: "limited", timeText: "活动制（未注明截止）", confidence: "存疑", infoDate: "2026-10-18",
      sources: [ { t: "产品页", u: "https://www.volcengine.com/product/ark" } ]
    }
  ]
};
