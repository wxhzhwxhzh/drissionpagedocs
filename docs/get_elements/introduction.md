---
id: get_ele_intro
title: '🔦 概述'
---

本章介绍如何获取元素对象。

定位元素是自动化重中之重的技能，虽然可在开发者工具直接复制绝对路径，但这样做有几个缺点：

- 代码冗长，可读性低
- 动态页面容易导致元素失效
- 无法使用相对定位
- 网页稍有改动或者出现临时元素就不能用，容错性低
- 无法跨`<iframe>`查找元素

因此作者极不建议使用右键复制的元素路径。

本库提供一套简洁易用的语法，用于快速定位元素，并且内置等待功能、支持链式查找，减少了代码的复杂性。

同时也兼容 css selector、xpath、selenium 原生的 loc 元组。

定位元素大致分为三种方法：

- 在页面或元素内查找子元素
- 根据 DOM 结构相对定位
- 根据页面布局位置相对定位

## ✅️️ 使用方式

所有页面对象和元素对象，都可以在自己内部查找元素，元素对象还能以自己为基准，相对定位其它元素。

页面对象包括：`SessionPage`、`ChromiumPage`、`ChromiumTab`、`ChromiumFrame`、`WebPage`、`WebPageTab`

元素对象包括：`SessionElement`、`ChromiumElement`、`ShadowRoot`

### 📌 在页面中查找

使用页面对象的`ele()`和`eles()`方法，获取页面内指定元素对象。

```python
from DrissionPage import SessionPage

page = SessionPage()
page.get('https://www.baidu.com')
ele = page.ele('#su')
```

---

### 📌 在元素中查找

使用元素对象的`ele()`、`eles()`、`child()`、`children()`方法，获取元素内指定后代元素对象。

```python
ele1 = page.ele('#s_fm')
ele2 = ele1.ele('#su')

son = ele1.child('tag:div')  # 获取第一个直接div子元素
sons = ele1.children('tag:div')  # 获取所有直接div子元素
```

---

### 📌 链式查找

因为对象本身又可以查找对象，所有支持链式操作，上面两个例子可合并为：

```python
ele = page.ele('#s_fm').ele('#su')
```

---

### 📌 相对查找

元素对象在以自己为基准，执行相对查找。

```python
ele = page.ele('#su')

parent = ele.parent(2)  # 获取ele元素的第二层父元素
brother = ele.next('tag:a')  # 获取ele元素后面的第一个a元素
after = ele.after('tag:div')  # 获取ele后面文档中第一个div元素
```

---

### 📌 shadow root

使用浏览器元素对象的`shadow_root`属性获取该元素下的`ShadowRoot`对象。

```python
shadow = page.ele('#ele1').shadow_root
```

在 shadow root 元素中搜索方法与普通元素一致。

```python
shadow = page.ele('#ele1').shadow_root
ele = shadow.ele('#ele2')
```

---

## ✅️️ 示例

先看一些示例，后面在详细讲解用法。

### 📌 简单示例

假设有这样一个页面，本章示例皆使用此页面：

```html
<html>
<body>
<div id="one">
    <p class="p_cls" name="row1">第一行</p>
    <p class="p_cls" name="row2">第二行</p>
    <p class="p_cls">第三行</p>
</div>
<div id="two">
    第二个div
</div>
</body>
</html>
```

我们可以用页面对象去获取其中的元素：

```python
# 获取 id 为 one 的元素
div1 = page.ele('#one')

# 获取 name 属性为 row1 的元素
p1 = page.ele('@name=row1')

# 获取包含“第二个div”文本的元素
div2 = page.ele('第二个div')

# 获取所有div元素
div_list = page.eles('tag:div')
```

也可以获取到一个元素，然后在它里面或周围查找元素：

```python
# 获取到一个元素div1
div1 = page.ele('#one')

# 在div1内查找所有p元素
p_list = div1.eles('tag:p')

# 获取div1后面一个元素
div2 = div1.next()
```

---

### 📌 实际示例

复制此代码可直接运行查看结果。

```python
from DrissionPage import SessionPage

page = SessionPage()
page.get('https://gitee.com/explore')

# 获取包含“全部推荐项目”文本的 ul 元素
ul_ele = page.ele('tag:ul@@text():全部推荐项目')  

# 获取该 ul 元素下所有 a 元素
titles = ul_ele.eles('tag:a')  

# 遍历列表，打印每个 a 元素的文本
for i in titles:  
    print(i.text)
```

**输出：**

```shell
全部推荐项目
前沿技术
智能硬件
IOT/物联网/边缘计算
车载应用
...
```
