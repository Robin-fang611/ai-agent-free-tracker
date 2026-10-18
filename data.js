// 数据文件：由自动更新任务维护。更新时只改本文件的 lastUpdated / updates / products 字段。
// 时效类型：longterm=长期有效, limited=限时/限免, conditional=需特定身份, expired=已过期, dead=已停服
window.FREE_DATA = {
  lastUpdated: "2026-10-18",
  updates: [
    { date: "2026-10-18", note: "首次全面复核（46 款）。更正 7 条：Skywork 免费档改为注册赠 500 + 每日 120（800/日实为 $1 试用权益）、Replit Free Mode 已对免费档开放、千问 App 上线增值付费、CodeBuddy 国内档位按官方文档更正、Flowith 免费生图权益已移至付费档、GitHub Copilot 删除已废止的「50 次对话/月」口径、Gemini CLI 免费层由 Antigravity CLI 接替。升级 8 条：Copilot「Think Deeper 不限量」获官方原文、Gemini 免费档 Flash-Lite 限制确认生效、Kimi 会员重启开售、DeepSeek Search/Fetch 收费确认 11-01 生效、火山方舟「每日单模型最高 500 万 tokens」获官方产品页确认、智谱积分制细则官方确认、扣子补注册赠 1500 积分、MiniMax 与 MiniMax Code 融合（注册赠 1000 已无现行口径）。存疑维持：ChatGPT/Grok/Perplexity 具体额度、Genspark 与秘塔每日积分、MiniMax 签到数额、GLM Coding Plan 新版售价（官方页网络受限或需登录，已注明原因）。" },
    { date: "2026-10-18", note: "首次上线：联网核实 46 款智能体产品的免费政策，逐条附来源与核实日期。" }
  ],
  products: [
    // ===== 通用助手（国际） =====
    {
      name: "ChatGPT", vendor: "OpenAI", category: "通用助手",
      freePolicy: "免费档提供不限量基础文本对话，并可有限使用推理模型、图像生成、语音对话和深度研究；Agent 模式基本限付费档。另有介于免费与 Plus 之间的 Go 档（约 $8/月，额度约为免费档 10 倍）。2026-10-07 GPT-6 与新界面已上线，代理类能力并入 ChatGPT Work，免费档现行额度官方页未能直读复核，下轮跟进。",
      quota: "基础对话不限量；推理模型约 10 条/5 小时、深度研究约 5 次/月（均为第三方口径，官方仅表述为\"有限\"）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方+媒体", infoDate: "2026-10-18",
      sources: [
        { t: "官方套餐页", u: "https://chatgpt.com/plans/go" },
        { t: "TechCrunch：GPT-6 上线", u: "https://techcrunch.com/2026/10/07/chatgpt-is-getting-a-lot-more-visual-with-the-launch-of-a-new-interface/" }
      ]
    },
    {
      name: "Claude", vendor: "Anthropic", category: "通用助手",
      freePolicy: "claude.ai 免费档含网页搜索、文件创建、代码执行、Artifacts 与 Projects（上限 5 个），可用 Sonnet/Haiku 模型，用量按 5 小时滚动窗口限制（官方明确不公布固定条数）。深度研究（Research）与 Claude Code 均不含在免费档。",
      quota: "官方未公布具体条数（5 小时窗口制）；Claude Code 无任何免费用法",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方定价页", u: "https://claude.com/pricing" } ]
    },
    {
      name: "Gemini（App / AI Studio）", vendor: "Google", category: "通用助手",
      freePolicy: "Gemini App 长期免费，2026 年起按算力计用量（5 小时刷新 + 每周上限双窗口，报错不计入），并有 Low/Medium/High 档位影响消耗；2026-10-09 起免费档模型选择器仅剩 Auto（主力为 3.5 Flash-Lite），高级模型与深度研究仅剩很小额度。符合条件在校学生可领 12 个月免费 Google AI 学生计划（返校季限时）。开发者用的 Google AI Studio 完全免费，附带 API 免费层（有速率限制）。",
      quota: "App 免费档具体数字未公布；AI Studio API 免费层约 10 次/分、1500 次/天（第三方口径，存疑）",
      timeliness: "longterm", timeText: "长期有效；学生计划为 12 个月限时领取", confidence: "官方+媒体", infoDate: "2026-10-18",
      sources: [
        { t: "9to5Google：免费档 Auto 限制", u: "https://9to5google.com/2026/10/09/gemini-auto-free-users/" },
        { t: "Google 官方博客", u: "https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-september-2026/" }
      ]
    },
    {
      name: "Grok", vendor: "xAI", category: "通用助手",
      freePolicy: "grok.com 与 X 内无需订阅即可免费对话（含语音），额度改为动态制、官方不再公布具体数字（2026-10 复核时官方页网络不可达，未能进一步核实）。Grok Imagine 生图免费状态多源说法不一，视频生成基本需订阅。",
      quota: "对话约 10~20 条/2 小时、Imagine 约 5 张图/天（均为用户观测，存疑）",
      timeliness: "longterm", timeText: "长期有效", confidence: "存疑", infoDate: "2026-10-18",
      sources: [ { t: "官方 FAQ", u: "https://docs.x.ai/grok/faq" } ]
    },
    {
      name: "Perplexity", vendor: "Perplexity", category: "通用助手",
      freePolicy: "免费档可近乎不限量使用快速搜索；Pro 搜索每天 3 次（叠加每周平均限额），深度研究约每月 1 次，Labs 有少量月度配额（媒体 2026-07 确认免费档含每日有限次 Pro 搜索、Labs 为 Pro 功能；官方页未能直读逐字核对）。Comet 浏览器及内置助手已对所有用户免费开放。",
      quota: "快速搜索不限量；Pro 搜索 3 次/天；深度研究约 1 次/月",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "帮助中心套餐对比", u: "https://www.perplexity.ai/help-center/en/articles/11187416-which-perplexity-subscription-plan-is-right-for-you" } ]
    },
    {
      name: "Microsoft Copilot", vendor: "Microsoft", category: "通用助手",
      freePolicy: "消费版 Copilot 免费，含对话、Think Deeper 推理与语音。官方支持文档现行原文确认：Think Deeper 不限量，Microsoft 365 订阅用户仅在容量紧张时享有优先权；登录后解锁历史记录、图像创建、更长对话与语音。Agent Builder、Copilot Studio 及 Office 应用内 Copilot 需付费许可。",
      quota: "对话/推理/语音免费不限量（官方原文，M365 用户高峰优先）；图像有限次（数字未公布）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [
        { t: "官方对话模式文档", u: "https://support.microsoft.com/en-us/microsoft-365-copilot/conversation-modes-in-microsoft-copilot" },
        { t: "免费版对比文档", u: "https://support.microsoft.com/en-us/microsoft-365-copilot/what-s-the-difference-between-microsoft-copilot-free-and-copilot-in-microsoft-365" }
      ]
    },
    {
      name: "Mistral Le Chat", vendor: "Mistral AI", category: "通用助手",
      freePolicy: "Le Chat 长期免费档可用最新模型、网页搜索与创作工具（消息软上限约 20~30 条/窗口为第三方口径）。API 侧 Free mode 为新账号默认态（官方确认，具体限额在控制台按组织显示）；原 Codestral 免费专用端点（codestral.mistral.ai，30 次/分、2000 次/天）已在现行官方文档中消失，现状待复核。学生经身份验证可享折扣（官方确认）。注意：免费档默认数据用于模型训练。",
      quota: "消息软上限（第三方口径）；Codestral 免费端点现状存疑；学生优惠存在（官方）",
      timeliness: "longterm", timeText: "长期有效；学生优惠未注明期限", confidence: "官方+媒体", infoDate: "2026-10-18",
      sources: [
        { t: "官方文档源码库", u: "https://github.com/mistralai/platform-docs-public" },
        { t: "官方定价页", u: "https://mistral.ai/pricing" }
      ]
    },

    // ===== 通用助手（国内） =====
    {
      name: "豆包", vendor: "字节跳动", category: "通用助手",
      freePolicy: "2026 年 5 月起改为\"基础功能永久免费、高阶服务付费\"：日常对话、搜索问答免费；Pro 模型、超长文档解析、专业 AI 绘画等需会员（标准 68/加强 200/专业 500 元每月）。Seedance 2.0 视频生成已接入，官方称登录即可免费使用；付费服务协议 2026-08-22 生效。豆包大模型 API 经火山方舟：新用户每款模型可领 50 万 tokens 免费额度。",
      quota: "基础功能免费（未注明次数上限）；Seedance 2.0 视频生成登录即免费；API 每款模型 50 万 tokens（新用户一次性）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方+媒体", infoDate: "2026-10-18",
      sources: [
        { t: "付费服务协议", u: "https://www.doubao.com/legal/ey01" },
        { t: "App Store 内购清单", u: "https://apps.apple.com/cn/app/id6459478672" },
        { t: "火山方舟免费额度文档", u: "https://docs.volcengine.com/docs/ark/free-inference-quota" }
      ]
    },
    {
      name: "腾讯元宝", vendor: "腾讯", category: "通用助手",
      freePolicy: "全功能免费，App Store 无任何内购项目（本批复核仅有的两款无内购产品之一），未推出会员或收费档位。混元与 DeepSeek 双模型免费开放（含深度思考、文生图），功能持续加码（元宝派公测、AI 录音笔转写不限时等）。",
      quota: "全功能免费（官方未公布每日次数上限）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方+媒体", infoDate: "2026-10-18",
      sources: [
        { t: "App Store（无内购）", u: "https://apps.apple.com/cn/app/id6480446430" },
        { t: "官网", u: "https://yuanbao.tencent.com" }
      ]
    },
    {
      name: "Kimi", vendor: "月之暗面", category: "通用助手",
      freePolicy: "App 与网页版基础功能免费（对话、搜索、文档解析），热门模型高峰期有限流。2026 年 7 月曾因算力紧张暂停新会员订阅，9 月下旬已恢复并推出新套餐：Go 49/Plus 99/Pro 199/Max 699 元每月，旧套餐存量用户权益保留。API 实名后赠 15 元代金券（不可用于 K3 模型）。",
      quota: "基础功能免费；API 赠 15 元券（实名后一次性）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方+媒体", infoDate: "2026-10-18",
      sources: [
        { t: "会员定价页", u: "https://www.kimi.com/help/membership/membership-pricing" },
        { t: "平台账户文档", u: "https://platform.kimi.com/docs/guide/account-and-payments.md" }
      ]
    },
    {
      name: "DeepSeek", vendor: "深度求索", category: "通用助手",
      freePolicy: "App 与网页版对所有用户免费（App Store 官方页确认免费、无内购），无会员无付费墙。API 已于 2026-08-17 起实行峰谷定价（空闲时段为高峰一半），无公开免费额度；Search/Fetch 接口收费已官方确认将于北京时间 2026-11-01 00:00 起按 5 元/千次收取（截至今日尚未生效）。",
      quota: "App 免费；API 无免费额度",
      timeliness: "longterm", timeText: "长期有效；Search/Fetch 收费 2026-11-01 生效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "API 定价页", u: "https://api-docs.deepseek.com/zh-cn/quick_start/pricing" } ]
    },
    {
      name: "文心（原文小言）", vendor: "百度", category: "通用助手",
      freePolicy: "文心 C 端自 2025-04-01 起全面免费（含文心 4.0 级能力与深度搜索），会员制取消。2026 年 7 月底起原\"文小言\"迁移为\"文心\"App 与百度文心网站（迁移日期为媒体报道口径），免费政策延续，最新模型为文心 5.1；App 内购仅\"能量值\"按量充值。",
      quota: "全功能免费（未注明上限）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方+媒体", infoDate: "2026-10-18",
      sources: [
        { t: "IT之家报道", u: "https://www.ithome.com/0/968/360.htm" },
        { t: "App Store", u: "https://apps.apple.com/cn/app/id6446882473" }
      ]
    },
    {
      name: "讯飞星火", vendor: "科大讯飞", category: "通用助手",
      freePolicy: "星火 App 免费使用对话、写作、PPT 等功能（内购仅求职助手会员，主功能无付费墙）。API 侧 Spark Lite 版长期免费；官方文档确认有免费模型与\"领取免费额度\"入口，第三方口径为个人认证 200 万 tokens（1 年有效）、企业 500 万。旗舰已更新至 Spark-X2.5。",
      quota: "App 免费；Spark Lite API 免费；个人免费包 200 万 tokens/年（第三方口径）",
      timeliness: "longterm", timeText: "长期有效（免费包领取入口以控制台为准）", confidence: "官方+媒体", infoDate: "2026-10-18",
      sources: [
        { t: "开放平台文档", u: "https://www.xfyun.cn/doc/spark/Web.html" },
        { t: "App Store", u: "https://apps.apple.com/cn/app/id6449919551" }
      ]
    },
    {
      name: "千问 / 夸克", vendor: "阿里巴巴", category: "通用助手",
      freePolicy: "千问 App（通义 App 更名）基础对话/搜索免费，但已上线增值付费体系：工作助理套餐（19/49/128 元每月）、千问创作会员（48/58 元每月）、创作积分与视频生成额度包（官方内购清单），此前\"完全不考虑收费\"的口径不再准确。夸克 AI 功能免费版可用，SVIP 会员权益主要指向网盘扩容，AI 功能本身未设付费墙。",
      quota: "千问基础功能免费、增值功能付费；夸克 AI 免费版可用（未注明上限）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [
        { t: "千问 App 内购清单", u: "https://apps.apple.com/cn/app/id6466733523" },
        { t: "千问官网", u: "https://www.tongyi.com/" }
      ]
    },
    {
      name: "秘塔AI搜索", vendor: "秘塔科技", category: "通用助手",
      freePolicy: "基础搜索免费无广告，\"深度研究\"功能免费开放。采用积分制：免费用户每日积分约 100（第三方口径，官方数字未公开，积分接口需登录）。国内会员定价已从 App Store 内购清单核实：月度 39 元、年度 228 元，积分与知识库额度可单独购买。用户协议确认免费额度机制且官方保留调整权。",
      quota: "基础搜索不限次；约 100 积分/天（非官方口径，存疑）；会员 39 元/月、228 元/年（官方）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方+媒体", infoDate: "2026-10-18",
      sources: [
        { t: "App Store 内购清单", u: "https://apps.apple.com/cn/app/id6478196963" },
        { t: "用户政策页", u: "https://metaso.cn/meta-user-policy" }
      ]
    },

    // ===== 编程智能体（国际） =====
    {
      name: "GitHub Copilot", vendor: "GitHub（Microsoft）", category: "编程智能体",
      freePolicy: "Copilot Free 面向个人开发者：免费代码补全、对话与 IDE 内 agent 模式（仅自动模型选择）。2026-06-01 起全面转向 AI Credits 用量计费（1 credit = $0.01），聊天与 Agent 均按 token 折算扣减，免费档 credits 数额官方未公布（旧\"50 次对话/月\"口径已从官方文档移除）。云端 agent 与代建 PR 不含在免费档。",
      quota: "2,000 次补全/月（官方）；AI Credits 数额未公布",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [
        { t: "官方计划文档", u: "https://docs.github.com/en/copilot/get-started/plans" },
        { t: "计费说明", u: "https://docs.github.com/en/copilot/concepts/billing-and-usage/individuals/billing" }
      ]
    },
    {
      name: "Cursor", vendor: "Anysphere", category: "编程智能体",
      freePolicy: "Free 档含一个每周刷新的共享 AI 用量池（Cursor 与 Grok 应用通用，2026 年起订阅由 X Subscription Corp 出售），可用 Agent 与 Chat 及 Cursor 自研模型；官方仅标\"有限用量\"，不公布具体数字。新用户有试用期（时长未公布，到期自动降 Free）。云端 agent、Bugbot 与第三方模型不包含；付费档 Plus $8/Premium $30/Super $100/Ultra $200。",
      quota: "每周刷新的有限用量（数额未公布）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [
        { t: "官方定价页", u: "https://cursor.com/pricing" },
        { t: "官方用量文档", u: "https://cursor.com/docs/account/plans-and-usage" }
      ]
    },
    {
      name: "Windsurf（Devin Desktop）", vendor: "Cognition", category: "编程智能体",
      freePolicy: "Windsurf 编辑器已彻底更名为 Devin Desktop（官网与文档均以 Devin 呈现），免费档为\"轻量 agent 配额\"（官方未公布数字；日+周刷新周期官方仅对付费档写明，免费档为推断口径），含无限 inline 编辑、Tab 补全、1 席位、并发会话上限 10。此前\"SWE-2 限时免费\"活动已于 2026-10-16 结束。",
      quota: "轻量配额（官方未公布数字；旧 25 credits/月 制已废止）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [
        { t: "官方定价页", u: "https://windsurf.com/pricing" },
        { t: "Devin 计费文档", u: "https://docs.devin.ai/admin/billing/self-serve.md" }
      ]
    },
    {
      name: "Replit（Agent）", vendor: "Replit", category: "编程智能体",
      freePolicy: "Starter 免费档每日发放 Agent credits（按日重置、有月度上限，数额未公布），官方计费表确认免费档可用 Free Mode（每日上限版）与 Agent chat，仅支持 Lite build；可发布 1 个应用（30 天后下线）、2GB 存储，Full build 需 Core 订阅。",
      quota: "每日 Agent credits（数额未公布）；1 个免费发布应用；2GB 存储",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [
        { t: "Starter 计划文档", u: "https://docs.replit.com/billing/plans/starter-plan.md" },
        { t: "AI 计费文档", u: "https://docs.replit.com/billing/ai-billing.md" }
      ]
    },
    {
      name: "Lovable", vendor: "Lovable", category: "编程智能体",
      freePolicy: "免费计划每天发放 5 个 build credits（当月累计上限 30 个，用尽后次月恢复），另每月赠 20 个 Cloud credits 与 4 个 AI grant credits（应用 AI 网关调用）；还含按日重置的 chat 专属额度（数额未公布）。免费档不可编辑/下载代码。",
      quota: "5 credits/天（月上限 30）；20 Cloud credits/月；4 AI grant credits/月",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [
        { t: "订阅计划文档", u: "https://docs.lovable.dev/introduction/subscription-plans.md" },
        { t: "用量文档", u: "https://docs.lovable.dev/introduction/credits-and-usage.md" }
      ]
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
      freePolicy: "免费档每天 7 条消息；新注册用户一次性赠 $5 credits。老免费用户的 $5/月 额度为旧制延续，新用户没有月度 credits；Premium 档已停止对新用户开放。",
      quota: "7 条消息/天；新用户一次性 $5 credits",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方定价页", u: "https://v0.app/pricing" } ]
    },
    {
      name: "Google Jules", vendor: "Google", category: "编程智能体",
      freePolicy: "异步编码智能体免费档（模型 Gemini 2.5 Pro）：每 24 小时最多 15 个任务、最多 3 个并发，用完等待重置。更高额度随 Google AI Pro（约 100 任务/天、15 并发）与 Ultra（约 300 任务/天）订阅。",
      quota: "15 任务/24 小时；3 并发",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "用量限制文档", u: "https://jules.google/docs/usage-limits/" } ]
    },

    // ===== 编程智能体（国内） =====
    {
      name: "Trae", vendor: "字节跳动", category: "编程智能体",
      freePolicy: "订阅制下保留永久免费档：全功能可用（含 2 个云端任务并发），每月 500 积分，部分模型享折扣（Seed 系列 5 折等）。付费 Lite 49 元/月起（首月 39 元，2,000 积分/月）。",
      quota: "500 积分/月（官网定价页现行口径）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方定价页", u: "https://www.trae.cn/pricing" } ]
    },
    {
      name: "Qoder", vendor: "阿里巴巴", category: "编程智能体",
      freePolicy: "新用户首次登录客户端享 14 天免费 Pro 试用并赠 300 Credits（一次性，多开试用账号会被冻结）。之后降级为长期\"体验版\"免费档：限次代码补全、基础模型、消息条数受限，支持自带 API Key（BYOK）。付费 Pro $20/月起。产品内另有\"每日领取 100 Credits\"等限时活动（以产品内公告为准）。",
      quota: "14 天 Pro 试用 + 300 Credits（新用户一次性）；体验版长期可用（数字未公布）",
      timeliness: "conditional", timeText: "新用户试用；体验版长期", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方定价文档", u: "https://docs.qoder.com/zh/account/pricing" } ]
    },
    {
      name: "CodeBuddy", vendor: "腾讯", category: "编程智能体",
      freePolicy: "国内版现行四档（官方定价文档）：体验版（免费）/标准 99 元/高级 199 元/旗舰 999 元每月（连续包月 7 折）。体验版含基础积分 500/月 + 限时每月实得积分 500，限免期间代码补全无限次、自动任务 3 个（限免 99 个）、全模型可选，未注明截止。国际版 Free：100 积分/月 + 每日活跃奖励 30 积分/天（限时活动）+ 补全 5,000 次/月，新用户赠 250 积分（14 天），Pro 已降至 $10/月。",
      quota: "国内体验版 500 积分/月（+限时 500）、限免无限补全；国际 100 积分/月 + 30 积分/天",
      timeliness: "limited", timeText: "体验版限免未注明截止；免费档本身长期", confidence: "官方", infoDate: "2026-10-18",
      sources: [
        { t: "国内版定价文档", u: "https://www.codebuddy.cn/docs/ide/Account/pricing" },
        { t: "国际版定价文档", u: "https://www.codebuddy.ai/docs/zh/ide/Account/pricing" }
      ]
    },
    {
      name: "通义灵码", vendor: "阿里云", category: "编程智能体",
      freePolicy: "个人基础版永久免费：补全不限量，官方表述为对话 50 轮次/月、单元测试智能体 50 方法/月。个人专业版（原价 59 元/月）官网现标注\"限免\"，未注明截止日期，本轮复核确认限免延续。",
      quota: "基础版不限量补全、对话 50 轮次/月、单测 50 方法/月；专业版限免中",
      timeliness: "limited", timeText: "基础版长期免费；专业版限免中", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方定价页", u: "https://lingma.aliyun.com/pricing" } ]
    },
    {
      name: "文心快码 Comate", vendor: "百度", category: "编程智能体",
      freePolicy: "个人标准版长期免费：智能代码补全不限次；首次开通赠 5000 积分（仅 7 天有效）。额度用尽后仍可免费续用 Auto-Free 模式（免费模型通道）。付费档：个人专业版 70 元/月、个人旗舰版 280 元/月（新增）。",
      quota: "补全不限次；赠 5000 积分（7 天）；Auto-Free 模式免费",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方计费文档", u: "https://cloud.baidu.com/doc/COMATE/s/rlnvnio4a" } ]
    },
    {
      name: "iFlow CLI（心流）", vendor: "心流（阿里系）", category: "编程智能体",
      freePolicy: "已停止服务：2026-03-20 起停止维护更新，2026-04-17 正式关停，API 与模型库同步关闭。停服前完全免费。官方建议迁移至 Qoder。",
      quota: "不适用（已停服）",
      timeliness: "dead", timeText: "已停服", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "停服公告", u: "https://platform.iflow.cn/cli/quickstart" } ]
    },
    {
      name: "智谱 GLM（清言 / API / Coding Plan）", vendor: "智谱 AI", category: "编程智能体",
      freePolicy: "智谱清言 App 免费对话；API 侧旧 Flash 系（GLM-4.7-Flash、GLM-4-Flash、GLM-Z1-Flash、GLM-4.6V-Flash 等）官方标注免费，但新一代 GLM-5.3-Flash 已收费（输入 0.8/输出 2.8 元每百万 tokens）。GLM Coding Plan 2026-07-30 起改积分制、无免费档（Lite 2,000 分/5 小时+10,000/周，Pro 12,000+60,000，Max 28,000+140,000，非高峰 5 折抵扣）；国内售价两口径并存（媒体报道 118/538/1,078 元每月 vs 官方文档所载 V2 调整前价 49/149/469），以订阅页为准。",
      quota: "旧 Flash 系 API 免费（5.3-Flash 除外）；Coding Plan 无免费档；新版售价存疑（两口径并存）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方+媒体", infoDate: "2026-10-18",
      sources: [
        { t: "积分制调整公告", u: "https://docs.bigmodel.cn/cn/coding-plan/notice/usage-revision" },
        { t: "模型定价", u: "https://docs.bigmodel.cn/cn/guide/start/pricing" }
      ]
    },
    {
      name: "Qwen Code CLI", vendor: "阿里巴巴", category: "编程智能体",
      freePolicy: "Qwen OAuth 免费档已于 2026-04-15 官方宣布停止，登录入口已从 /auth 对话框移除；社区流传的\"每天 2000 次免费\"口径已失效。现仅能通过付费订阅或自带密钥/第三方通道使用，未发现新免费通道。",
      quota: "无免费档（2026-04-15 起停止）",
      timeliness: "expired", timeText: "免费档已停止", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方模型接入文档", u: "https://github.com/QwenLM/qwen-code/blob/main/docs/users/configuration/model-providers.md" } ]
    },

    // ===== 通用 Agent 平台 =====
    {
      name: "Manus", vendor: "Manus AI", category: "通用Agent平台",
      freePolicy: "长期免费档每日 00:00 UTC 发放 300 积分（当日有效、不累积），仅限 Agent 模式调用 Manus 2.0 Lite，1 个并发任务，免费档月度积分上限 1,500。方案已改版为 Free/Pro（$20 起 4,000 月积分）/Team，原 Basic/Plus 并入 Pro。另有\"Manus 免费访问\"活动进行中：免费用户每日可在活动限额内免费使用 Manus 2.0（含图像 20 张/日、视频 1 个/日，2.0 Max 不参加），官方未注明明确截止。",
      quota: "300 积分/日；免费档月上限 1,500 积分；活动期每日 20 图/1 视频",
      timeliness: "longterm", timeText: "长期有效；活动截止未注明", confidence: "官方", infoDate: "2026-10-18",
      sources: [
        { t: "会员定价帮助文档", u: "https://help.manus.im/en/articles/11711111-what-is-the-current-membership-pricing-for-manus" },
        { t: "积分规则文档", u: "https://help.manus.im/en/articles/11711097-what-are-the-rules-for-credits-consumption-and-how-can-i-obtain-them" }
      ]
    },
    {
      name: "Devin", vendor: "Cognition AI", category: "通用Agent平台",
      freePolicy: "有长期免费档（app.devin.ai 直接注册），含有限的 Devin 使用量、Devin Review 与 DeepWiki 访问权（公共 GitHub 仓库可免费使用 DeepWiki 与 Ask Devin，公共 PR 审查无需账号）；旧 ACU 计费制已迁移为配额制。现行自助套餐 Free/Pro $20/Max $200/Teams $80 起。",
      quota: "有限用量（官方明示未公布数字）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方计费文档", u: "https://docs.devin.ai/admin/billing/self-serve" } ]
    },
    {
      name: "Genspark", vendor: "MainFunc", category: "通用Agent平台",
      freePolicy: "免费档为 credits 制，每日刷新、不累积，当账号累计消耗到未公布的\"终身免费总额度\"后停止发放。每日 credits 数字有两个第三方口径（100/日 与 200 一次性）且不一致；官方定价页对中国大陆 IP 设访问码门无法直读，需以登录后为准。2026-09 发布自研 Gen-1 Slides 模型；9 月前后有订阅侧改版为每周 Free Quota 的报道，官方细节需登录核实。",
      quota: "100 credits/日（媒体口径，存疑；另有 200 一次性口径并存）",
      timeliness: "longterm", timeText: "长期有效", confidence: "存疑", infoDate: "2026-10-18",
      sources: [ { t: "第三方汇总", u: "https://ai-bot.cn/sites/66341.html" } ]
    },
    {
      name: "Flowith", vendor: "Flowith AI", category: "通用Agent平台",
      freePolicy: "免费 Starter 档额度为一次性赠送 300 credits，用完即止、不按日刷新，仅标准模型、最多 5 并发（官方定价页对免费档零披露，数字来自第三方测评）。原\"每日免费生图\"权益已移至付费档（Pro 每月至多 25 次），生图消耗约 160 credits/张。官网另有 $9.99/7 天 Ultimate 试用（9,000 credits，到期自动续费）。",
      quota: "一次性 300 credits（不刷新）",
      timeliness: "longterm", timeText: "长期有效（额度一次性）", confidence: "媒体", infoDate: "2026-10-18",
      sources: [ { t: "定价页", u: "https://flowith.io/pricing" } ]
    },
    {
      name: "MiniMax Agent", vendor: "MiniMax（稀宇科技）", category: "通用Agent平台",
      freePolicy: "产品已与 MiniMax Code 融合，积分体系重构为 M Plan/Token Plan + 积分。无需订阅可每日签到领积分：官方确认机制存在，积分 30 天有效、仅限 MiniMax Code 使用；第三方口径为每日 400 分、连续第 4/7 天 1,000 分（具体数额需登录核实）。此前流传的\"注册赠 1,000 积分\"在现行官方渠道已无任何痕迹。",
      quota: "签到积分（官方确认机制；数额未公布，第三方口径 400~1,000/日）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方+媒体", infoDate: "2026-10-18",
      sources: [
        { t: "官方用量文档", u: "https://agent.minimaxi.com/docs/code/account/usage" },
        { t: "官网", u: "https://www.minimax.io" }
      ]
    },
    {
      name: "Skywork.ai", vendor: "昆仑万维", category: "通用Agent平台",
      freePolicy: "现行免费档（官方前端文案）：注册一次性赠送 500 credits，日常每日登录礼 120 credits，积分不累积、过期作废。此前\"首月 500/日→之后 500/周\"为 2025 年上线期旧口径，现行页面已不存在。$1 试用（3 或 7 天）期间每日 800 credits，到期自动转付费订阅需手动取消；付费 Basic 10,000/月、Plus 28,000/月、Ultra 150,000/月。",
      quota: "注册赠 500 credits（一次性）；120 credits/日",
      timeliness: "longterm", timeText: "长期有效（口径已按官方前端文案更正）", confidence: "官方", infoDate: "2026-10-18",
      sources: [
        { t: "官方定价页", u: "https://skywork.ai/pricing" },
        { t: "官方帮助中心", u: "https://skywork.ai/help" }
      ]
    },

    // ===== 平台与 API 额度 =====
    {
      name: "扣子 Coze（国内版）", vendor: "字节跳动", category: "平台与API",
      freePolicy: "个人免费版长期有效（套餐月积分为 0）：每日登录送 1500 活动积分（当日有效、可跨日累计使用，用完即停不扣现金），首次注册另一次性赠 1500 积分（30 天有效）；官方注明该积分活动\"不定期开放、以页面提示为准\"。2026 年 1 月套餐改版后，插件、实时音视频等原免费额度已取消。付费个人版 39.9 元/月起。",
      quota: "1500 积分/日（登录发放）+ 注册赠 1500（30 天有效）",
      timeliness: "longterm", timeText: "长期有效（活动制，未注明截止）", confidence: "官方", infoDate: "2026-10-18",
      sources: [
        { t: "积分活动规则", u: "https://docs.coze.cn/guides_coze_points_activity_rules" },
        { t: "套餐文档", u: "https://docs.coze.cn/guides_edition" }
      ]
    },
    {
      name: "Coze Studio（开源版）", vendor: "字节跳动", category: "平台与API",
      freePolicy: "2025 年 7 月开源的 Agent 开发平台，Apache 2.0 协议，可免费自部署、可商用，无平台积分限制，成本仅为自有服务器（最低 2 核 4G 可跑）。",
      quota: "自部署不限量（软件免费）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "GitHub 仓库", u: "https://github.com/coze-dev/coze-studio" } ]
    },
    {
      name: "Dify", vendor: "LangGenius", category: "平台与API",
      freePolicy: "云端 Sandbox 套餐永久免费：200 条 message credits、知识库 50 份文档/50MB、1 个工作空间、API 5000 次/月、3000 触发事件、5 个应用。另有 Community 开源自部署完全免费（Apache 2.0 附加条件许可，多租户/去 Logo 场景受限）。",
      quota: "200 message credits；API 5000 次/月；自部署不限量",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方定价页", u: "https://dify.ai/pricing" } ]
    },
    {
      name: "n8n", vendor: "n8n GmbH", category: "平台与API",
      freePolicy: "自部署 Community Edition 长期免费，执行次数与工作流数不限（Sustainable Use 许可，限制商用转售）。n8n Cloud 提供 14 天免费试用（限 1000 次执行，无需信用卡，到期自动结束不扣费）。",
      quota: "自部署不限量；云试用 14 天 / 1000 次执行",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [
        { t: "官方定价页", u: "https://n8n.io/pricing/" },
        { t: "试用文档", u: "https://docs.n8n.io/deploy/use-n8n-cloud/start-your-free-trial/" }
      ]
    },
    {
      name: "硅基流动 SiliconFlow", vendor: "硅基智能", category: "平台与API",
      freePolicy: "新用户注册即赠 2000 万 Tokens（官方注册页现行文案，\"14 元\"为旧等价说法，有效期官方未注明）。平台维持一批 0 元模型（官网定价中心 2026-10 实读）：对话 Hunyuan-MT-7B、Xing4.0-29B、PaddleOCR-VL-1.5；BGE 系向量/重排；Kolors 生图；SenseVoiceSmall 与星光系语音模型。Qwen/DeepSeek/GLM 系均无免费档。",
      quota: "赠 2000 万 Tokens（新用户一次性）；0 元模型清单见描述",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [
        { t: "官方定价页", u: "https://www.siliconflow.cn/pricing" },
        { t: "注册页", u: "https://account.siliconflow.cn/zh/ak/register" }
      ]
    },
    {
      name: "OpenRouter", vendor: "OpenRouter", category: "平台与API",
      freePolicy: ":free 结尾的免费模型对所有账户开放，限额按账户全局计算（多账号/多 Key 不能绕过）：每分钟 20 次；每日额度与累计充值挂钩——未充值 50 次/天，累计充值满 10 美元（实际达 9 credits 即生效）提升至 1000 次/天。",
      quota: "20 次/分钟；50 次/天（充值 ≥$10 后 1000 次/天）",
      timeliness: "longterm", timeText: "长期有效", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方限额文档", u: "https://openrouter.ai/docs/api-reference/limits" } ]
    },
    {
      name: "Gemini CLI / Antigravity CLI", vendor: "Google", category: "平台与API",
      freePolicy: "原 Gemini CLI 免费层已由 Antigravity CLI 接替（2026-06-18 起，官方 README 原文）。Antigravity 免费层：个人账户享有每周刷新的配额 + 周度速率限制（官方不公布具体数字），配额在 App/CLI/IDE 扩展通用；免费层模型为 Gemini 3.8 Flash 及 Claude Sonnet 4.6、Claude Opus 4.6、GPT-OSS-120b（后三款官方预告 2026-11-02 移除，届时免费层主力为 Gemini 3.8 Flash）。旧口径\"1000 次请求/天\"随产品接替已失效。",
      quota: "周刷新配额 + 周度速率限制（数额未公布）",
      timeliness: "longterm", timeText: "长期有效；免费层模型名单 2026-11-02 起收缩", confidence: "官方", infoDate: "2026-10-18",
      sources: [
        { t: "Antigravity 计划文档", u: "https://antigravity.google/docs/plans" },
        { t: "gemini-cli 仓库", u: "https://github.com/google-gemini/gemini-cli" }
      ]
    },
    {
      name: "阿里云百炼", vendor: "阿里巴巴", category: "平台与API",
      freePolicy: "首次开通百炼后系统自动发放新人额度（无需手动领取）：每款模型各赠 100 万 tokens（不同模型独立、不互通），有效期 90 天（自开通/模型发布/申请通过三者较晚者起算），过期作废；仅抵扣北京地域实时推理调用，同一实名主体不可重复领取。此前流传的\"每月 100 万 tokens\"模式与现行页面不符。",
      quota: "100 万 tokens/款（新用户，90 天有效）",
      timeliness: "conditional", timeText: "新用户一次性，90 天", confidence: "官方", infoDate: "2026-10-18",
      sources: [ { t: "官方免费额度文档", u: "https://help.aliyun.com/zh/model-studio/new-free-quota" } ]
    },
    {
      name: "火山方舟", vendor: "字节跳动（火山引擎）", category: "平台与API",
      freePolicy: "免费推理额度为\"协作奖励计划二期\"（官方产品页现行文案）：每日领取、单模型最高 500 万 tokens；第三方 2026-04 实测为基础每模型每天 50 万 tokens 可多模型叠加。语音类模型另有字符数/小时数免费额度（如语音合成 5000 字符）。官方 docs 为纯前端渲染无法读取正文，领取细则以方舟控制台活动页为准。",
      quota: "每日领取，单模型最高 500 万 tokens（官方产品页文案）",
      timeliness: "limited", timeText: "活动制（未注明截止）", confidence: "官方", infoDate: "2026-10-18",
      sources: [
        { t: "官方产品页", u: "https://www.volcengine.com/product/ark" },
        { t: "第三方实测", u: "https://juejin.cn/post/7586972442422624297" }
      ]
    }
  ]
};
