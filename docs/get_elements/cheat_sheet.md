---
id: sheet
title: '🔦 语法速查表'
---

## ✅️ 定位语法

### 📌 基本用法

以下语法只出现在语句开头。

|   写法    |       精确匹配        |    模糊匹配    |   匹配开头   |   匹配结尾   |                   说明                    |
|:-------:|:-----------------:|:----------:|:--------:|:--------:|:---------------------------------------:|
| `@属性名`  |      `@属性名=`      |  `@属性名:`   | `@属性名^`  | `@属性名$`  |                 按某个属性查找                 |
| `@!属性名` |     `@!属性名=`      |  `@!属性名:`  | `@!属性名^` | `@!属性名$` |             查找属性不符合指定条件的元素              |
| `text`  |      `text=`      | `text:`或不写 | `text^`  | `text$`  |                 按某个文本查找                 |
| `@text()` |    `@text()=`     | `@text():` | `text()^` | `text()$` | `text`与`@`或`@@`配合使用时改为`text()`，常用于多条件匹配 |
|  `tag`  |   `tag=`或`tag:`   |     无      |    无     |    无     |                查找某个类型的元素                |
| `xpath` | `xpath=`或`xpath:` |     无      |    无     |    无     |             用 xpath 方式查找元素              |
|  `css`  |   `css=`或`css:`   |     无      |    无     |    无     |          用 css selector 方式查找元素          |

---

### 📌 组合用法

|         写法         |       说明        |
|:------------------:|:---------------:|
|   `@@属性1@@属性2`   | 匹配属性同时符合多个条件的元素 |
|   `@@属性1@!属性2`   | 多属性匹配与否定匹配同时使用 |
|   `@|属性1@|属性2` | 匹配属性至符合多个条件中一的元素 |
|   `tag:xx@属性名`    | `tag`与属性匹配共同使用  |
|   `tag:xx@@属性1@@属性2` | `tag`与多属性匹配共同使用 |
|   `tag:xx@|属性1@|属性2`      |   `tag`与多属性匹配共同使用 |
|   `tab:@@text()=文本@@属性`   |   `tab`与文本和属性匹配共同使用  |

---

### 📌 简化写法

|    原写法    |  简化写法   |   精确匹配    |   模糊匹配   |   匹配开头   |   匹配结尾   |      备注      |
|:---------:|:-------:|:---------:|:--------:|:--------:|:--------:|:------------:|
|   `@id`   |   `#`   | `#`或`#=`  |   `#:`   |   `#^`   |   `#$`   |  简化写法只能单独使用  |
| `@class`  |   `.`   | `.`或`.=`  |   `.:`   |   `.^`   |   `.$`   |  简化写法只能单独使用  |
|   `tag`   |   `t`   | `t:`或`t=` |    无     |    无     |    无     |    只能用在句首    |
|  `text`   |  `tx`   |   `tx=`   | `tx:`或不写 |  `tx^`   |  `tx$`   | 无标签时使用模糊匹配文本 |
| `@text()` | `@tx()` | `@tx()=`  | `@tx():` | `@tx()^` | `@tx()$` |              |
|  `xpath`  |   `x`   | `x:`或`x=` | 无     |    无     |    无 |    只能单独使用    |
|   `css`   |   `c`   | `c:`或`c=` | 无     |    无     |    无 |    只能单独使用    |

---

## ✅️ 相对定位

|      方法      |          说明           |
|:------------:|:---------------------:|
|  `parent()`  |     查找当前元素某一级父元素      |
|  `child()`   |    查找当前元素的一个直接子节点     |
| `children()` |  查找当前元素全部符合条件的直接子节点   |
|   `next()`   | 查找当前元素之后第一个符合条件的兄弟节点  |
|  `nexts()`   |  查找当前元素之后所有符合条件的兄弟节点  |
|   `prev()`   | 查找当前元素之前第一个符合条件的兄弟节点  |
|  `prevs()`   |  查找当前元素之前所有符合条件的兄弟节点  |
|  `after()`   | 查找文档中当前元素之后第一个符合条件的节点 |
|  `afters()`  | 查找文档中当前元素之后所有符合条件的节点  |
|  `before()`  | 查找文档中当前元素之前第一个符合条件的节点 |
| `befores()`  | 查找文档中当前元素之前所有符合条件的节点  |

## ✅️ 其它

|      方法       | 简化写法 |           说明            |     备注     |
|:-------------:|:----:|:-----------------------:|:----------:|
| `get_frame()` |  无   |  在页面中查找一个`<iframe>`元素   | 只有页面对象有此方法 |
| `shadow_root` | `sr`  | 获取当前元素内的 shadow root 对象 | 只有元素对象有此属性 |