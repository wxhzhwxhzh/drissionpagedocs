---
id: douban
title: '🥪 下载豆瓣图书封面'
---

星巴克的示例使用`download()`方法实现下载图片，这个示例演示在浏览器中直接保存图片。

这个功能是本库一个特色，无需操作 ui，也无需重新下载图片，而是直接读取缓存里面的图片保存，使用非常方便。

## ✅️️ 页面分析

目标网址：[https://book.douban.com/tag/小说](https://book.douban.com/tag/%E5%B0%8F%E8%AF%B4)

按`F12`，可以看到每本图书都在`class`属性为`subject-item`的元素中，可批量获取，然后再在其中获取`<img>`元素保存图片。

---

## ✅️️ 编码思路

为了演示元素对象的`save()`方法，这里我们使用浏览器操作，把图片文件保存到本地 imgs 文件夹。

---

## ✅️️ 示例代码

以下代码可直接运行。

```python
from DrissionPage import ChromiumPage

# 创建页面对象
page = ChromiumPage()
# 访问目标网页
page.get('https://book.douban.com/tag/小说?start=0&type=T')

# 爬取4页
for _ in range(4):
    # 遍历一页中所有图书
    for book in page.eles('.subject-item'):
        # 获取封面图片对象
        img = book('t:img')
        # 保存图片
        img.save(r'.\imgs')

    # 点击下一页
    page('后页>').click()
    page.wait.load_start()
```

---

## ✅️️ 结果

![](/img/20230105105418.png)
