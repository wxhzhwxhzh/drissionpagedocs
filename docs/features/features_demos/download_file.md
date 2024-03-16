---
id: download
title: '⭐ 下载文件' 
---

DrissionPage 带一个简便易用的下载器，一行即可实现下载功能。

```python
from DrissionPage import WebPage

url = 'https://www.baidu.com/img/flexible/logo/pc/result.png'
save_path = r'C:\download'

page = WebPage('s')
page.download(url, save_path)
```
