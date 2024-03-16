---
id: change_mode
title: '⭐ 模式切换' 
---

用浏览器登录网站，然后切换到 requests 读取网页。两者会共享登录信息。

```python
from DrissionPage import WebPage
from time import sleep

# 创建页面对象，默认 d 模式
page = WebPage()  
# 访问个人中心页面（未登录，重定向到登录页面）
page.get('https://gitee.com/profile')  

# 输入账号密码登录
page.ele('@id:user_login').input('your_user_name')  
page.ele('@id:user_password').input('your_password\n')
page.wait.load_start()

# 切换到 s 模式
page.change_mode()  
# 登录后 session 模式的输出
print('登录后title：', page.title, '\n')  
```

**输出：**

```shell
登录后title： 个人资料 - 码云 Gitee.com
```