---
id: usage
title: '🔦 基本用法'
---

## ✅️️ 查找元素方法

### 📌 `ele()`

页面对象和元素对象都拥有此方法，用于查找其内部的一个条件匹配的元素。

页面对象和元素对象的`ele()`方法参数名称稍有不同，但用法一样。

`SessionPage`和`ChromiumPage`获取元素的方法是一致的，但前者返回的元素对象为`SessionElement`，后者是`ChromiumElement`。

|          参数名称          |                       类型                       |  默认值   | 说明                                           |
|:----------------------:|:----------------------------------------------:|:------:|----------------------------------------------|
| `locator`<br/>（元素对象） |           `str`<br/>`Tuple[str, str]`           |   必填   | 元素的定位信息。可以是查询字符串，或 loc 元组                    |
| `locator`<br/>（页面对象） | `str`<br/>`SessionElement`<br/>`Tuple[str, str]` |   必填   | 元素的定位信息。可以是查询字符串、loc 元组或一个`SessionElement`对象 |
|        `index`         |                     `int`                      |  `1`   | 获取第几个匹配的元素，从`1`开始，可输入负数表示从后面开始数              |
|       `timeout`        |                    `float`                     | `None` | 等待元素出现的超时时间，为`None`使用页面对象设置，`SessionPage`中无效 |

|       返回类型        | 说明                                             |
|:-----------------:|------------------------------------------------|
| `SessionElement`  | `SessionPage`或`SessionElement`查找到的第一个符合条件的元素对象 |
| `ChromiumElement` | 浏览器页面对象或元素对象查找到的第一个符合条件的元素对象                   |
|  `ChromiumFrame`  | 当结果是框架元素时，会返回`ChromiumFrame`，但 IDE 中不会包含该提示    |
|   `NoneElement`   | 未找到符合条件的元素时返回                                  |

:::info 说明
    - loc 元组是指 selenium 定位符，例：(By.ID, 'XXXXX')。下同。
    - `ele('xxxx', index=2)`和`eles('xxxx')[1]`结果一样，不过前者会快很多。
:::

**示例：**

```python
from DrissionPage import SessionPage

page = SessionPage()

# 在页面内查找元素
ele1 = page.ele('#one')

# 在元素内查找后代元素
ele2 = ele1.ele('第二行')

```

---

### 📌 `eles()`

此方法与`ele()`相似，但返回的是匹配到的所有元素组成的列表。

页面对象和元素对象都可调用这个方法。

`eles()`返回的是普通列表，链式操作需加下标，如`page.eles('...')[0].ele('...')`。

|     参数名称     |             类型             |  默认值   | 说明                                           |
|:------------:|:--------------------------:|:------:|----------------------------------------------|
| `locator` | `str`<br/>`Tuple[str, str]` |   必填   | 元素的定位信息，可以是查询字符串，或 loc 元组                    |
|  `timeout`   |          `float`           | `None` | 等待元素出现的超时时间，为`None`使用页面对象设置，`SessionPage`中无效 |

|                  返回类型                  | 说明                                         |
|:--------------------------------------:|--------------------------------------------|
|         `List[SessionElement]`         | `SessionPage`或`SessionElement`找到的所有元素组成的列表 |
| `List[ChromiumElement, ChromiumFrame]` | 浏览器页面对象或元素对象找到的所有元素组成的列表                   |

**示例：**

```python
# 获取页面内的所有p元素
p_eles = page.eles('tag:p')

# 获取ele1元素内的所有p元素
p_eles = ele1.eles('tag:p')

# 打印第一个p元素的文本
print(p_eles[0])
```

---

## ✅️️ 匹配模式

匹配模式指某个查询中匹配条件的方式，有精确匹配、模糊匹配、匹配开头、匹配结尾四种。

### 📌 精确匹配 `=`

表示精确匹配，匹配完全符合的文本或属性。

```python
# 获取name属性为'row1'的元素
ele = page.ele('@name=row1')
```

---

### 📌 模糊匹配 `:`

表示模糊匹配，匹配含有指定字符串的文本或属性。

```python
# 获取name属性包含'row1'的元素
ele = page.ele('@name:row1')
```

---

### 📌 匹配开头 `^`

表示匹配开头，匹配开头为指定字符串的文本或属性。

```python
# 获取name属性以'row1'开头的元素
ele = page.ele('@name^ro')
```

---

### 📌 匹配结尾 `$`

表示匹配结尾，匹配结尾为指定字符串的文本或属性。

```python
# 获取name属性以'w1'结尾的元素
ele = page.ele('@name$w1')
```

---

## ✅️️ 查找语法

关键字是出现在定位语句最左边，用于指明该语句以哪种方式去查找元素。

### 📌 id 匹配符 `#`

表示`id`属性，只在语句最前面且单独使用时生效，可配合匹配模式使用。

```python
# 在页面中查找id属性为one的元素
ele1 = page.ele('#one')

# 在ele1元素内查找id属性包含ne文本的元素
ele2 = ele1.ele('#:ne')  
```

---

### 📌 class 匹配符 `.`

表示`class`属性，只在语句最前面且单独使用时生效，可配合匹配模式使用。

```python
# 查找class属性为p_cls的元素
ele2 = ele1.ele('.p_cls')

# 查找class属性'_cls'文本开头的元素
ele2 = ele1.ele('.^_cls')  
```

因为只加 `.` 时默认是精确匹配元素属性 `class`，所以如果某元素有多个类名，必须写 `class` 属性的完整值（类名的顺序也不能变）。如果需要只匹配多个类名中的一个，可以使用模糊匹配符 `:`。

```python
# 精确查找class属性为`p_cls1 p_cls2 `的元素
ele2 = ele1.ele('.p_cls1 p_cls2 ')

# 模糊查找class属性含有类名 'p_cls2' 的元素
ele2 = ele1.ele('.:p_cls2')  
```

若仍需要更复杂的匹配方式，请使用多属性匹配符。

---

### 📌 单属性匹配符 `@`

表示某个属性，只匹配一个属性。

`@`关键字只有一个简单功能，就是匹配`@`后面的内容，不再对后面的字符串进行解析。因此即使后面的字符串也存在`@`或`@@`
，也作为要匹配的内容对待。所以只要是多属性匹配，包括第一个属性在内的所有属性都必须用`@@`开头。

:::warning 注意
    如果属性中包含特殊字符（如包含`@`），用这个方式不能正确匹配到，需使用 css selector 方式查找。且特殊字符要用`\`转义。
:::

```python
# 查找name属性为row1的元素
ele2 = ele1.ele('@name=row1')

# 查找name属性包含row文本的元素
ele2 = ele1.ele('@name:row')

# 查找name属性以row开头的元素
ele2 = ele1.ele('@name^row')

# 查找有name属性的元素
ele2 = ele1.ele('@name')

# 查找没有任何属性的元素
ele2 = ele1.ele('@')

# 查找email属性为abc@def.com的元素，有多个@也不会重复处理
ele2 = ele1.ele('@email=abc@def.com')

# 属性中有特殊字符的情形，匹配abc@def属性等于v的元素
ele2 = ele1.ele('css:div[abc\@def="v"]')
```

---

### 📌 多属性与匹配符 `@@`

匹配同时符合多个条件的元素时使用，每个条件前面添加`@@`作为开头。

:::warning 注意
    - 匹配文本或属性中出现`@@`、`@|`、`@!`时，不能使用多属性匹配，需改用 xpath 的方式。
    - 如果属性中包含特殊字符（如包含`@`），用这个方式不能正确匹配到，需使用 css selector 方式查找。且特殊字符要用`\`转义。
:::

```python
# 查找name属性为row1且class属性包含cls文本的元素
ele2 = ele1.ele('@@name=row1@@class:cls')
```

`@@`可以与下文介绍的`tag`配合使用：

```python
ele = page.ele('tag:div@@class=p_cls@@name=row1')
```

---

### 📌 多属性或匹配符`@|`

匹配符合多个条件中任一项的元素时使用，每个条件前面添加`@|`作为开头。

用法与`@@`一致，注意事项与`@@`一致。

:::warning 注意
    `@@`和`@|`不能同时出现在语句中。
:::

```python
# 查找id属性为one或id属性为two的元素
ele2 = ele1.ele('@|id=one@|id=two')
```

`@|`可以与下文介绍的`tag`配合使用：

```python
ele = page.ele('tag:div@|class=p_cls@|name=row1')
```

---

### 📌 属性否定匹配符`@!`

用于否定某个条件，可与`@@`或`@|`混用，也可单独使用。

混用时，与还是或关系视`@@`还是`@|`而定。

**示例：**

```python
# 匹配arg1等于abc且arg2不等于def的元素
page.ele('@@arg1=abc@!arg2=def')

# 匹配arg1等于abc或arg2不等于def的div元素
page.ele('t:div@|arg1=abc@!arg2=def')

# 匹配arg1不等于abc
page.ele('@!arg1=abc')

# 匹配没有arg1属性的元素
page.ele('@!arg1')
```

---

### 📌 文本匹配符 `text`

要匹配的文本，查询字符串如开头没有任何关键字，也表示根据传入的文本作模糊查找。  
如果元素内有多个直接的文本节点，精确查找时可匹配所有文本节点拼成的字符串，模糊查找时可匹配每个文本节点。

没有任何匹配符时，默认匹配文本。

```python
# 查找文本为“第二行”的元素
ele2 = ele1.ele('text=第二行')

# 查找文本包含“第二”的元素
ele2 = ele1.ele('text:第二')

# 与上一行一致
ele2 = ele1.ele('第二')  
```

:::tip Tips
    若要查找的文本包含`text:` ，可下面这样写，即第一个`text:` 为关键字，第二个是要查找的内容：
:::

```python
ele2 = page.ele('text:text:')
```

---

### 📌 文本匹配符 `text()`

作为查找属性时使用的文本关键字，必须与`@`或`@@`配合使用。

```python
# 查找文本为“第二行”的元素
ele2 = ele1.ele('@text()=第二行')

# 查找文本包含“第二行”的元素
ele2 = ele1.ele('@text():二行')

# 查找文本以“第二”开头且class属性为p_cls的元素
ele2 = ele1.ele('@@text()^第二@@class=p_cls')

# 查找文本为“二行”且没有任何属性的元素（因第一个 @@ 后为空）
ele2 = ele1.ele('@@@@text():二行')

# 查找直接子文本包含“二行”字符串的元素
ele = page.ele('@text():二行')
```

--- 

### 📌 `@@text()`的技巧

值得一提的是，`text()`配合`@@`或`@|`能实现一种很便利的按查找方式。

网页种经常会出现元素和文本混排的情况，比如：

```html

<li class="explore-categories__item">
    <a href="/explore/new-tech" class="">
        <i class="explore"></i>
        前沿技术
    </a>
</li>
<li class="explore-categories__item">
    <a href="/explore/program-develop" class="">
        <i class="explore"></i>
        程序开发
    </a>
</li>
```

示例中，如果要用文本获取`'前沿技术'`的`<a>`元素，可以这样写：

```python
ele = page.ele('text:前沿技术')
# 或
ele = page.ele('@text():前沿技术')
```

这两种写法都能获取到包含直接文本的元素。

但如果要用文本获取`<li>`元素，就获取不到，因为文本不是`<li>`的直接内容。

我们可以这样写：

```python
ele = page.ele('tag:li@@text():前沿技术')
```

`@@text()`与`@text()`不同之处在于，前者可以搜索整个元素内所有文本，而不仅仅是直接文本，因此能实现一些非常灵活的查找。

:::warning 注意
    需要注意的是，使用`@@`或`@|`时，`text()`不要作为唯一的查询条件，否则会定位到整个文档最高层的元素。

    ❌ 错误做法：
    ```python
    ele = page.ele('@@text():前沿技术')
    ele = page.ele('@|text():前沿技术@|text():程序开发')
    ```
    
    ⭕ 正确做法：
    ```python
    ele = page.ele('tag:li@|text():前沿技术@|text():程序开发')
    ```
:::

--- 

### 📌 类型匹配符 `tag`

表示元素的标签，只在语句最前面且单独使用时生效，可与`@`、`@@`或`@|`配合使用。`tag:`与`tag=`效果一致，没有`tag^`和`tag$`语法。

```python
# 定位div元素
ele2 = ele1.ele('tag:div')

# 定位class属性为p_cls的p元素
ele2 = ele1.ele('tag:p@class=p_cls')

# 定位文本为"第二行"的p元素
ele2 = ele1.ele('tag:p@text()=第二行')

# 定位class属性为p_cls且文本为“第二行”的p元素
ele2 = ele1.ele('tag:p@@class=p_cls@@text()=第二行')

# 定位class属性为p_cls或文本为“第二行”的p元素
ele2 = ele1.ele('tag:p@|class=p_cls@|text()=第二行')

# 查找直接文本节点包含“二行”字符串的p元素
ele2 = ele1.ele('tag:p@text():二行')

# 查找内部文本节点包含“二行”字符串的p元素
ele2 = ele1.ele('tag:p@@text():二行')  
```

:::warning 注意
    `tag:div@text():text` 和 `tag:div@@text():text` 是有区别的，前者只在`div`的直接文本节点搜索，后者搜索`div`的整个内部。
:::

---

### 📌 css selector 匹配符 `css`

表示用 css selector 方式查找元素。`css:`与`css=`效果一致，没有`css^`和`css$`语法。

```python
# 查找 div 元素
ele2 = ele1.ele('css:.div')

# 查找 div 子元素元素，这个写法是本库特有，原生不支持
ele2 = ele1.ele('css:>div')  
```

---

### 📌 xpath 匹配符 `xpath`

表示用 xpath 方式查找元素。`xpath:`与`xpath=`效果一致，没有`xpath^`和`xpath$`语法。  

另外，元素对象的`ele()`支持完整的 xpath 语法，如能使用 xpath 直接获取元素属性（字符串类型）。

```python
# 查找后代中第一个 div 元素
ele2 = ele1.ele('xpath:.//div')

# 和上面一行一样，查找元素的后代时，// 前面的 . 可以省略
ele2 = ele1.ele('xpath://div')

# 使用xpath获取div元素的class属性（页面元素无此功能）
ele_class_str = ele1.ele('xpath://div/@class')
```

:::tip Tips
    查找元素的后代时，selenium 原生代码要求 xpath 前面必须加`.`，否则会变成在全个页面中查找。
    作者觉得这个设计是画蛇添足，既然已经通过元素查找了，自然应该只查找这个元素内部的元素。
    所以，用 xpath 在元素下查找时，最前面`//`或`/`前面的`.`可以省略。
:::

---

### 📌 selenium 的 loc 元组

查找方法能直接接收 selenium 原生定位元组进行查找，便于项目迁移。

```python
from DrissionPage.common import By

# 查找id为one的元素
loc1 = (By.ID, 'one')
ele = page.ele(loc1)

# 按 xpath 查找
loc2 = (By.XPATH, '//p[@class="p_cls"]')
ele = page.ele(loc2)  
```

---

## ✅️️ 相对定位

以下方法可以以某元素为基准，在 DOM 中按照条件获取其直接子节点、同级节点、祖先元素、文档前后节点。  
:::tip Tips
    这里说的是“节点”，不是“元素”。因为相对定位可以获取除元素外的其它节点，包括文本、注释节点。
:::

:::warning 注意
    如果元素在`<iframe>`中，相对定位不能超越`<iframe>`文档。
:::

### 📌 获取父级元素

🔸 `parent()`

此方法获取当前元素某一级父元素，可指定筛选条件或层数。

|      参数名称      |                 类型                  | 默认值 | 说明                                                                     |
|:--------------:|:-----------------------------------:|:---:|------------------------------------------------------------------------|
| `level_or_loc` | `int`<br/>`str`<br/>`Tuple[str, str]` | `1` | 第几级父元素，从`1`开始，或用定位符在祖先元素中进行筛选                                          |
|    `index`     |                `int`                | `1` | 当`level_or_loc`传入定位符，使用此参数选择第几个结果，从当前元素往上级数；当`level_or_loc`传入数字时，此参数无效 |

|       返回类型       | 说明                     |
|:----------------:|------------------------|
| `SessionElement` | 找到的元素对象                |
|  `NoneElement`   | 未获取到结果时返回`NoneElement` |

**示例：**

```python
# 获取 ele1 的第二层父元素
ele2 = ele1.parent(2)

# 获取 ele1 父元素中 id 为 id1 的元素
ele2 = ele1.parent('#id1')
```

---

### 📌 获取直接子节点

🔸 `child()`

此方法返回当前元素的一个直接子节点，可指定筛选条件和第几个。

|     参数名称     |                 类型                  |  默认值   | 说明                               |
|:------------:|:-----------------------------------:|:------:|----------------------------------|
| `locator` | `str`<br/>`Tuple[str, str]`<br/>`int` |  `''`  | 用于筛选节点的查询语法，为`int`类型时`index`参数无效 |
|   `index`    |                `int`                |  `1`   | 查询结果中的第几个，从`1`开始，可输入负数表示倒数    |
|  `timeout`   |               `float`               | `None` | 无实际作用                            |
|  `ele_only`  |               `bool`                | `True` | 是否只查找元素，为`False`时把文本、注释节点也纳入查找范围 |

|       返回类型       | 说明                     |
|:----------------:|------------------------|
| `SessionElement` | 找到的元素对象                |
|      `str`       | 获取非元素节点时返回字符串          |
|  `NoneElement`   | 未获取到结果时返回`NoneElement` |

---

🔸 `children()`

此方法返回当前元素全部符合条件的直接子节点组成的列表，可用查询语法筛选。

|     参数名称     |             类型             |  默认值   | 说明                               |
|:------------:|:--------------------------:|:------:|----------------------------------|
| `locator` | `str`<br/>`Tuple[str, str]` |  `''`  | 用于筛选节点的查询语法                      |
|  `timeout`   |          `float`           | `None` | 无实际作用                            |
|  `ele_only`  |           `bool`           | `True` | 是否只查找元素，为`False`时把文本、注释节点也纳入查找范围 |

|            返回类型             | 说明   |
|:---------------------------:|------|
| `List[SessionElement, str]` | 结果列表 |

---

### 📌 获取后面的同级节点

🔸 `next()`

此方法返回当前元素后面的某一个同级节点，可指定筛选条件和第几个。

|     参数名称     |                 类型                  |  默认值   | 说明                               |
|:------------:|:-----------------------------------:|:------:|----------------------------------|
| `locator` | `str`<br/>`Tuple[str, str]`<br/>`int` |  `''`  | 用于筛选节点的查询语法，为`int`类型时`index`参数无效 |
|   `index`    |                `int`                |  `1`   | 查询结果中的第几个，从`1`开始，可输入负数表示倒数                        |
|  `timeout`   |               `float`               | `None` | 无实际作用                            |
|  `ele_only`  |               `bool`                | `True` | 是否只查找元素，为`False`时把文本、注释节点也纳入查找范围 |

|       返回类型       | 说明                     |
|:----------------:|------------------------|
| `SessionElement` | 找到的元素对象                |
|      `str`       | 获取非元素节点时返回字符串          |
|  `NoneElement`   | 未获取到结果时返回`NoneElement` |

**示例：**

```python
# 获取 ele1 后面第一个兄弟元素
ele2 = ele1.next()

# 获取 ele1 后面第 3 个兄弟元素
ele2 = ele1.next(3)

# 获取 ele1 后面第 3 个 div 兄弟元素
ele2 = ele1.next('tag:div', 3)

# 获取 ele1 后面第一个文本节点的文本
txt = ele1.next('xpath:text()', 1)
```

---

🔸 `nexts()`

此方法返回当前元素后面全部符合条件的同级节点组成的列表，可用查询语法筛选。

|     参数名称     |             类型             |  默认值   | 说明                               |
|:------------:|:--------------------------:|:------:|----------------------------------|
| `locator` | `str`<br/>`Tuple[str, str]` |  `''`  | 用于筛选节点的查询语法                      |
|  `timeout`   |          `float`           | `None` | 无实际作用                            |
|  `ele_only`  |           `bool`           | `True` | 是否只查找元素，为`False`时把文本、注释节点也纳入查找范围 |

|            返回类型             | 说明   |
|:---------------------------:|------|
| `List[SessionElement, str]` | 结果列表 |

**示例：**

```python
# 获取 ele1 后面所有兄弟元素
eles = ele1.nexts()

# 获取 ele1 后面所有 div 兄弟元素
divs = ele1.nexts('tag:div')

# 获取 ele1 后面的所有文本节点
txts = ele1.nexts('xpath:text()')
```

---

### 📌 获取前面的同级节点

🔸 `prev()`

此方法返回当前元素前面的某一个同级节点，可指定筛选条件和第几个。

|     参数名称     |                 类型                  |  默认值   | 说明                               |
|:------------:|:-----------------------------------:|:------:|----------------------------------|
| `locator` | `str`<br/>`Tuple[str, str]`<br/>`int` |  `''`  | 用于筛选节点的查询语法，为`int`类型时`index`参数无效 |
|   `index`    |                `int`                |  `1`   | 查询结果中的第几个，从`1`开始，可输入负数表示倒数                        |
|  `timeout`   |               `float`               | `None` | 无实际作用                            |
|  `ele_only`  |               `bool`                | `True` | 是否只查找元素，为`False`时把文本、注释节点也纳入查找范围 |

|       返回类型       | 说明                     |
|:----------------:|------------------------|
| `SessionElement` | 找到的元素对象                |
|      `str`       | 获取非元素节点时返回字符串          |
|  `NoneElement`   | 未获取到结果时返回`NoneElement` |

**示例：**

```python
# 获取 ele1 前面第一个兄弟元素
ele2 = ele1.prev()

# 获取 ele1 前面第 3 个兄弟元素
ele2 = ele1.prev(3)

# 获取 ele1 前面第 3 个 div 兄弟元素
ele2 = ele1.prev(3, 'tag:div')

# 获取 ele1 前面第一个文本节点的文本
txt = ele1.prev(1, 'xpath:text()')
```

---

🔸 `prevs()`

此方法返回当前元素前面全部符合条件的同级节点组成的列表，可用查询语法筛选。

|     参数名称     |             类型             |  默认值   | 说明                               |
|:------------:|:--------------------------:|:------:|----------------------------------|
| `locator` | `str`<br/>`Tuple[str, str]` |  `''`  | 用于筛选节点的查询语法                      |
|  `timeout`   |          `float`           | `None` | 无实际作用                            |
|  `ele_only`  |           `bool`           | `True` | 是否只查找元素，为`False`时把文本、注释节点也纳入查找范围 |

|            返回类型             | 说明   |
|:---------------------------:|------|
| `List[SessionElement, str]` | 结果列表 |

**示例：**

```python
# 获取 ele1 前面所有兄弟元素
eles = ele1.prevs()

# 获取 ele1 前面所有 div 兄弟元素
divs = ele1.prevs('tag:div')
```

---

### 📌 在后面文档中查找节点

🔸 `after()`

此方法返回当前元素后面的某一个节点，可指定筛选条件和第几个。查找范围不限同级节点，而是整个 DOM 文档。

|     参数名称     |                 类型                  |  默认值   | 说明                               |
|:------------:|:-----------------------------------:|:------:|----------------------------------|
| `locator` | `str`<br/>`Tuple[str, str]`<br/>`int` |  `''`  | 用于筛选节点的查询语法，为`int`类型时`index`参数无效 |
|   `index`    |                `int`                |  `1`   | 查询结果中的第几个，从`1`开始，可输入负数表示倒数                        |
|  `timeout`   |               `float`               | `None` | 无实际作用                            |
|  `ele_only`  |               `bool`                | `True` | 是否只查找元素，为`False`时把文本、注释节点也纳入查找范围 |

|       返回类型       | 说明                     |
|:----------------:|------------------------|
| `SessionElement` | 找到的元素对象                |
|      `str`       | 获取非元素节点时返回字符串          |
|  `NoneElement`   | 未获取到结果时返回`NoneElement` |

**示例：**

```python
# 获取 ele1 后面第 3 个元素
ele2 = ele1.after(index=3)

# 获取 ele1 后面第 3 个 div 元素
ele2 = ele1.after('tag:div', 3)

# 获取 ele1 后面第一个文本节点的文本
txt = ele1.after('xpath:text()', 1)
```

---

🔸 `afters()`

此方法返回当前元素后面符合条件的全部节点组成的列表，可用查询语法筛选。查找范围不限同级节点，而是整个 DOM 文档。

|     参数名称     |             类型             |  默认值   | 说明                               |
|:------------:|:--------------------------:|:------:|----------------------------------|
| `locator` | `str`<br/>`Tuple[str, str]` |  `''`  | 用于筛选节点的查询语法                      |
|  `timeout`   |          `float`           | `None` | 无实际作用                            |
|  `ele_only`  |           `bool`           | `True` | 是否只查找元素，为`False`时把文本、注释节点也纳入查找范围 |

|            返回类型             | 说明   |
|:---------------------------:|------|
| `List[SessionElement, str]` | 结果列表 |

**示例：**

```python
# 获取 ele1 后所有元素
eles = ele1.afters()

# 获取 ele1 前面所有 div 元素
divs = ele1.afters('tag:div')
```

---

### 📌 在前面文档中查找节点

🔸 `before()`

此方法返回当前元素前面的某一个符合条件的节点，可指定筛选条件和第几个。查找范围不限同级节点，而是整个 DOM 文档。

|     参数名称     |                 类型                  |  默认值   | 说明                               |
|:------------:|:-----------------------------------:|:------:|----------------------------------|
| `locator` | `str`<br/>`Tuple[str, str]`<br/>`int` |  `''`  | 用于筛选节点的查询语法，为`int`类型时`index`参数无效 |
|   `index`    |                `int`                |  `1`   | 查询结果中的第几个，从`1`开始，可输入负数表示倒数                        |
|  `timeout`   |               `float`               | `None` | 无实际作用                            |
|  `ele_only`  |               `bool`                | `True` | 是否只查找元素，为`False`时把文本、注释节点也纳入查找范围 |

|       返回类型       | 说明                     |
|:----------------:|------------------------|
| `SessionElement` | 找到的元素对象                |
|      `str`       | 获取非元素节点时返回字符串          |
|  `NoneElement`   | 未获取到结果时返回`NoneElement` |

**示例：**

```python
# 获取 ele1 前面第 3 个元素
ele2 = ele1.before(3)

# 获取 ele1 前面第 3 个 div 元素
ele2 = ele1.before('tag:div', 3)

# 获取 ele1 前面第一个文本节点的文本
txt = ele1.before('xpath:text()', 1)
```

---


🔸 `befores()`

此方法返回当前元素前面全部符合条件的节点组成的列表，可用查询语法筛选。查找范围不限同级节点，而是整个 DOM 文档。

|     参数名称     |             类型             |  默认值   | 说明                               |
|:------------:|:--------------------------:|:------:|----------------------------------|
| `locator` | `str`<br/>`Tuple[str, str]` |  `''`  | 用于筛选节点的查询语法                      |
|  `timeout`   |          `float`           | `None` | 无实际作用                            |
|  `ele_only`  |           `bool`           | `True` | 是否只查找元素，为`False`时把文本、注释节点也纳入查找范围 |

|            返回类型             | 说明   |
|:---------------------------:|------|
| `List[SessionElement, str]` | 结果列表 |

**示例：**

```python
# 获取 ele1 前面所有元素
eles = ele1.befores()

# 获取 ele1 前面所有 div 元素
divs = ele1.befores('tag:div')
```
