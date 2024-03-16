---
id: downloadQQ
title: '🥪 下载功能示例'
---

这个示例用于演示下载功能。将用两种方法下载最新版 QQ 客户端。

- 使用浏览器下载
- 使用`download()`方法下载

## ✅️️ 页面分析

目标网址：https://im.qq.com/pcqq/index.shtml

目标：下载最新版 QQ，保存到当前路径下名为 'tmp' 的文件夹，并把文件名重命名为 'QQ.exe'。

![](/img/QQ1.png)

网页中有一个“全新体验版下载”按钮，点击这个按钮即可触发下载。

通过 F12 可找到文件 url 是 https://dldir1.qq.com/qqfile/qq/QQNT/4a642cfb/QQ9.9.7.21357_x64.exe。

第一种方法，我们使用模拟点击触发现在并设置下载路径和文件名。

第二种方法，我们直接使用`download()`方法下载这个 url 的文件。

---

## ✅️️ 编码思路

### 📌 方法一

1. 找到“全新体验版下载”按钮元素
2. 点击按钮触发下载，同时指定保存位置和重命名文件名

需要注意的是，这个页面进入时有个动画效果，按钮不是一开始就出现，要先用`wait.has_rect`等待按钮生成。

---

### 📌 方法二

直接用`download()`方法执行下载

---

## ✅️️ 使用浏览器下载代码

### 📌 简易方式

使用`click.to_download()`方法。

```python
from DrissionPage import ChromiumPage

# 创建页面对象
page = ChromiumPage()  
# 访问网页
page.get('https://im.qq.com/pcqq/index.shtml')
# 获取按钮元素
ele = page('全新体验版下载')
# 等待按钮元素生成
ele.wait.has_rect()
# 点击按钮触发下载，并设置下载路径和文件名
mission = ele.click.to_download(save_path='tmp', rename='QQ.exe')
# 等待下载任务完成
mission.wait()
```

---

### 📌 功能分解方式

`click.to_download()`方法是一种封装好的简易使用方法，如果遇到比较复杂的实际情况，可自行调用下载功能配置进行应对。

```python
from DrissionPage import ChromiumPage

# 创建页面对象
page = ChromiumPage()
# 访问网页
page.get('https://im.qq.com/pcqq/index.shtml')
# 获取按钮元素
ele = page('全新体验版下载')
# 等待按钮元素生成
ele.wait.has_rect()
# 设置保存路径
page.set.download_path('tmp')
# 设置文件名
page.set.download_file_name('QQ.exe')
# 点击按钮触发下载
ele.click()
# 等待触发下载
mission = page.wait.download_begin()
# 等待下载任务完成
mission.wait()
```

---

## ✅️️ 使用`download()`下载代码

### 📌 直接下载

`download()`方法可直接下载 url 指向的文件。

如果这个文件不需要登录信息，用`SessionPage`即可，不需要打开浏览器。

```python
from DrissionPage import SessionPage

page = SessionPage()
url = 'https://dldir1.qq.com/qqfile/qq/QQNT/4a642cfb/QQ9.9.7.21357_x64.exe'
page.download(url, goal_path='tmp', rename='QQ.exe')
```

---

### 📌 拦截浏览器下载任务

可以拦截浏览器下载任务，获取下载信息，转用`download()`下载。

```python
from DrissionPage import ChromiumPage

# 创建页面对象
page = ChromiumPage()
# 访问网页
page.get('https://im.qq.com/pcqq/index.shtml')
# 获取按钮元素
ele = page('全新体验版下载')
# 等待按钮元素生成
ele.wait.has_rect()
# 设置保存路径
page.set.download_path('.')
# 点击按钮触发下载
ele.click()
# 等待触发下载，同时取消该任务
mission = page.wait.download_begin(cancel_it=True)
# 转用download()方法下载
page.download(mission.url, goal_path='tmp', rename='QQ.exe')
```