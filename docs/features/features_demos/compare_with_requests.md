---
id: requests
title: '⭐ 与requests对比' 
---

以下代码实现一模一样的功能，对比两者的代码量：

🔸 获取元素内容

```python
url = 'https://baike.baidu.com/item/python'

# 使用 requests：
from lxml import etree
headers = {'User-Agent':'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36'}
response = requests.get(url, headers = headers)
html = etree.HTML(response.text)
element = html.xpath('//h1')[0]
title = element.text

# 使用 DrissionPage：
page = WebPage('s')
page.get(url)
title = page('tag:h1').text
```

:::tip Tips
    DrissionPage 自带默认 headers
:::

🔸 下载文件

```python
url = 'https://www.baidu.com/img/flexible/logo/pc/result.png'
save_path = r'C:\download'

# 使用 requests：
r = requests.get(url)
with open(f'{save_path}\\img.png', 'wb') as fd:
   for chunk in r.iter_content():
       fd.write(chunk)

# 使用 DrissionPage：
page.download(url, save_path, 'img')  # 支持重命名，处理文件名冲突
```
