---
id: get_ele_attr
title: '⭐ 获取元素属性' 
---

```python
# 接上段代码
foot = page.ele('#footer-left')  # 用 id 查找元素
first_col = foot.ele('css:>div')  # 使用 css selector 在元素的下级中查找元素（第一个）
lnk = first_col.ele('text:命令学')  # 使用文本内容查找元素
text = lnk.text  # 获取元素文本
href = lnk.attr('href')  # 获取元素属性值

print(text, href, '\n')

# 简洁模式串联查找
text = page('@id:footer-left')('css:>div')('text:命令学').text
print(text)
```

**输出：**

```shell
Git 命令学习 https://oschina.gitee.io/learn-git-branching/

Git 命令学习
```