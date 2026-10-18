# AI 智能体免费政策追踪表

汇总国内外主流 AI 智能体产品的免费政策（长期免费档、免费额度、限时活动、学生优惠等），由自动化任务定期联网核查更新，部署在 GitHub Pages。

**在线访问**：https://robin-fang611.github.io/ai-agent-free-tracker/

## 文件结构

- `index.html` — 页面结构、样式与渲染逻辑，正常情况下不需要动。
- `data.js` — 全部数据。更新数据只改这个文件：`lastUpdated`、`updates`（更新日志）、`products`（产品条目）。

## 产品条目字段

| 字段 | 说明 |
| --- | --- |
| `name` / `vendor` / `category` | 产品名、厂商、分类（通用助手 / 编程智能体 / 通用Agent平台 / 平台与API） |
| `freePolicy` | 当前免费政策的完整描述 |
| `quota` | 具体免费额度；只有第三方口径的必须注明 |
| `timeliness` | `longterm` 长期 / `limited` 限时 / `conditional` 需特定身份 / `expired` 已过期 / `dead` 已停服 |
| `confidence` | `官方` / `官方+媒体` / `媒体` / `存疑` |
| `infoDate` | 该条信息的核实日期 |
| `sources` | 来源链接，官方优先 |

## 更新流程（供维护者/自动化任务执行）

1. 用搜索引擎核查 `data.js` 中每个产品的当前免费政策，优先官方定价页、官方公告（公众号/X），其次可靠媒体。只采信近期信息，过期活动标注或移除。
2. 出现的重要新产品补充进表；已停服/免费档取消的如实改状态，不删历史。
3. 每条更新 `infoDate` 与来源；无法核实的标 `存疑`，绝不编造数字。
4. 更新 `lastUpdated`，并在 `updates` 里加一行变更说明。
5. 提交并推送到 `main`，GitHub Pages 会自动重新发布。

## 数据口径

- 优先官方来源；官方不公布具体数字时采用第三方观测并标注。
- 无法核实的条目标「存疑」而不是猜测。
- 内容采用 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议共享，转载请注明出处。
