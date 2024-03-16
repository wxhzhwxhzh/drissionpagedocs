---
id: more
title: '🔦 更多用法'
---

本节介绍浏览器页面对象获取元素对象的方式。

与`SessionPage`获取元素对象的方法一致，但比后者有更多功能，本节主要介绍这些功能。

## ✅️️ 静态方式查找元素

静态元素即 s 模式的`SessionElement`元素对象，是纯文本构造的，因此用它处理速度非常快。  
对于复杂的页面，要在成百上千个元素中采集数据时，转换为静态元素可把速度提升几个数量级。  
作者曾在实践的时候，用同一套逻辑，仅仅把元素转换为静态，就把一个要 30 秒才完成的页面，加速到零点几秒完成。     
我们甚至可以把整个页面转换为静态元素，再在其中提取信息。  
当然，这种元素不能进行点击等交互。  
用`s_ele()`可在把查找到的动态元素转换为静态元素输出，或者获取元素或页面本身的静态元素副本。

### 📌 `s_ele()`

页面对象和元素对象都拥有此方法，用于查找第一个匹配条件的元素，获取其静态版本。

页面对象和元素对象的`s_ele()`方法参数名称稍有不同，但用法一样。

|        参数名称        |                       类型                        | 默认值 | 说明                                            |
|:------------------:|:-----------------------------------------------:|:---:|-----------------------------------------------|
| `locator`（元素对象） |           `str`<br/>`Tuple[str, str]`            | 必填  | 元素的定位信息，可以是查询字符串，或 loc 元组                     |
| `locator`（页面对象） | `str`<br/>`ChromiumElement`<br/>`Tuple[str, str]` | 必填  | 元素的定位信息，可以是查询字符串、loc 元组或一个`ChromiumElement`对象 |
|        `index`         |                     `int`                      |  `1`   | 获取第几个匹配的元素，从`1`开始，可输入负数表示从后面开始数              |

|       返回类型       | 说明                                |
|:----------------:|-----------------------------------|
| `SessionElement` | 返回查找到的第一个符合条件的元素对象的静态版本           |
|  `NoneElement`   | 限时内未找到符合条件的元素时返回`NoneElement`对象   |

:::warning 注意
    页面对象和元素对象的`s_ele()`方法不能搜索到在`<iframe>`里的元素，页面对象的静态版本也不能搜索`<iframe>`里的元素。
    要使用`<iframe>`里元素的静态版本，可先获取该元素，再转换。而使用`ChromiumFrame`对象，则可以直接用`s_ele()`查找元素，这在后面章节再讲述。
:::

:::tip Tips
    从一个`ChromiumElement`元素获取到的`SessionElement`版本，依然能够使用相对定位方法定位祖先或兄弟元素。
:::

```python
from DrissionPage import ChromiumPage

page = ChromiumPage()

# 在页面中查找元素，获取其静态版本
ele1 = page.s_ele('search text')

# 在动态元素中查找元素，获取其静态版本
ele = page.ele('search text')
ele2 = ele.s_ele()

# 获取页面元素的静态副本（不传入参数）
s_page = page.s_ele()

# 获取动态元素的静态副本
s_ele = ele.s_ele()

# 在静态副本中查询下级元素（因为已经是静态元素，用ele()查找结果也是静态）
ele3 = s_page.ele('search text')
ele4 = s_ele.ele('search text')
```

---

### 📌 `s_eles()`

此方法与`s_ele()`相似，但返回的是匹配到的所有元素组成的列表，或属性值组成的列表。

|     参数名称     |             类型             | 默认值 | 说明                        |
|:------------:|:--------------------------:|:---:|---------------------------|
| `locator` | `str`<br/>`Tuple[str, str]` | 必填  | 元素的定位信息，可以是查询字符串，或 loc 元组 |

|          返回类型          | 说明                                 |
|:----------------------:|------------------------------------|
| `List[SessionElement]` | 返回找到的所有元素的`SessionElement`版本组成的列表  |

**示例：**

```python
from DrissionPage import WebPage

page = WebPage()
for ele in page.s_eles('search text'):
    print(ele.text)
```

---

## ✅️ 获取当前焦点元素

使用`active_ele`属性获取页面上焦点所在元素。

```python
ele = page.active_ele
```

---

## ✅️️ `<iframe>`元素

### 📌 查找`<iframe>`元素

`<iframe>`和`<frame>`也可以用`ele()`查找到，生成的对象是`ChromiumFrame`而不是`ChromiumElement`。

但不建议用`ele()`获取`<iframe>`元素，因为 IDE 无法正确提示后续操作。

建议用 Page 对象的`get_frame()`方法获取。

使用方法与`ele()`一致，可以用定位符查找。还增加了用序号、id、name 属性定位元素的功能。

**示例：**

```python
iframe = page.get_frame(1)  # 获取页面中第一个iframe元素
iframe = page.get_frame('#theFrame')  # 获取页面id为theFrame的iframe元素对象
```

---

### 📌 在页面下跨级查找

与 selenium 不同，本库可以直接查找同域`<iframe>`里面的元素。  
而且无视层级，可以直接获取到多层`<iframe>`里的元素。无需切入切出，大大简化了程序逻辑，使用更便捷。

假设在页面中有个两级`<iframe>`，其中有个元素`<div id='abc'></div>`，可以这样获取：

```python
page = ChromiumPage()
ele = page('#abc')
```

获取前后无需切入切出，也不影响获取页面上其它元素。

如果用 selenium，要这样写：

```python
driver = webdriver.Chrome()
driver.switch_to.frame(0)
driver.switch_to.frame(0)
ele = driver.find_element(By.ID, 'abc')
driver.switch_to.default_content()
```

显然比较繁琐，而且切入到`<iframe>`后无法对`<iframe>`外的元素进行操作。

:::warning 注意
    - 跨级查找只是页面对象支持，元素对象不能直接查找内部 iframe 里的元素。
    - 跨级查找只能用于与主框架同域名的`<iframe>`，不同域名的请用下面的方法。
:::

---

### 📌 在 iframe 元素下查找

本库把`<iframe>`看作一个特殊元素/页面对象看待，可以实现同时操作多个`<iframe>`，而无需来回切换。

对于跨域名的`<iframe>`，我们无法通过页面直接查找里面的元素，可以先获取到`<iframe>`元素，再在其下查找。当然，非跨域`<iframe>`
也可以这样操作。

假设一个`<iframe>`的 id 为 `'iframe1'`，要在其中查找一个 id 为`'abc'`的元素：

```python
page = ChromiumPage()
iframe = page('#iframe1')
ele = iframe('#abc')
```

这个`<iframe>`元素是一个页面对象，因此可以继续在其下进行跨`<iframe>`查找（相对这个`<iframe>`不跨域的）。

---

## ✅️️ `ShadowRoot`

本库把 shadow-root 也作为元素对象看待，是为`ShadowRoot`对象。
该对象可与普通元素一样查找下级元素和 DOM 内相对定位。  
对`ShadowRoot`对象进行相对定位时，把它看作其父对象内部的第一个对象，其余定位逻辑与普通对象一致。

用元素对象的`shadow_root`属性可获取`ShadowRoot`对象。

:::warning 注意
    - 如果`ShadowRoot`元素的下级元素中有其它`ShadowRoot`元素，那这些下级`ShadowRoot`
    - 元素内部是无法直接通过定位语句查找到的，只能先定位到其父元素，再用`shadow-root`属性获取。
:::

```python
# 获取一个 shadow-root 元素
sr_ele = page.ele('#app').shadow_root

# 在该元素下查找下级元素
ele1 = sr_ele.ele('tag:div')

# 用相对定位获取其它元素
ele1 = sr_ele.parent(2)
ele1 = sr_ele.next('tag:div', 1)
ele1 = sr_ele.after('tag:div', 1)
eles = sr_ele.nexts('tag:div')

# 定位下级元素中的 shadow+-root 元素
sr_ele2 = sr_ele.ele('tag:div').shadow_root
```

由于 shadow-root 不能跨级查找，链式操作非常常见，所以设计了一个简写：`sr`，功能和`shadow_root`一样，都是获取元素内部的`ShadowRoot`。

**多级 shadow-root 链式操作示例：**

以下这段代码，可以打印浏览器历史第一页，可见是通过多级 shadow-root 来获取的。

```python
from DrissionPage import ChromiumPage

page = ChromiumPage()
page.get('chrome://history/')

items = page('#history-app').sr('#history').sr.eles('t:history-item')
for i in items:
    print(i.sr('#item-container').text.replace('\n', ''))
```

---

## ✅️️ 等待

由于网络、js 运行时间的不确定性等因素，经常需要等待元素加载到 DOM 中才能使用。

浏览器所有查找元素操作都自带等待，时间默认跟随元素所在页面`timeout`属性（默认 10 秒），也可以在每次查找时单独设置，单独设置的等待时间不会改变页面原来设置。

```python
from DrissionPage import ChromiumPage

# 页面初始化时设置查找元素超时时间为 15 秒
page = ChromiumPage(timeout=15)
# 设置查找元素超时时间为 5 秒
page.set.timeouts(5)

# 使用页面超时时间来查找元素（5 秒）
ele1 = page.ele('search text')
# 为这次查找页面独立设置等待时间（1 秒）
ele1 = page.ele('search text', timeout=1)
# 查找后代元素，使用页面超时时间（5 秒）
ele2 = ele1.ele('search text')
# 查找后代元素，使用单独设置的超时时间（1 秒）
ele2 = ele1.ele('some text', timeout=1)  
```
