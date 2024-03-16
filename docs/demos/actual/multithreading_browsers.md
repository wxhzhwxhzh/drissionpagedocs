---
id: multi_browsers
title: '🥪 多线程操作多个浏览器'
---

此示例演示如何使用多个线程同时控制多个浏览器进行采集。

## ✅️️ 页面分析

目标网址：

- https://gitee.com/explore/ai
- https://gitee.com/explore/machine-learning

按`F12`，可以看到每个标题元素的`class`属性均为`title project-namespace-path`，可批量获取。

---

## ✅️️ 编码思路

虽然 gitee 开源项目列表可以用 s 模式采集，但现在为了演示多标签页操作，还是使用浏览器进行操作。

使用`ChromiumOptions`的`auto_port()`方法，可设置独立的浏览器环境，每个浏览器需一个`ChromiumOptions`对象。

---

## ✅️️ 示例代码

以下代码可直接运行。

需要注意的是，这里用到记录器对象，详见[DataRecorder](https://g1879.gitee.io/datarecorderdocs/)。

```python
from threading import Thread

from DrissionPage import ChromiumPage, ChromiumOptions
from DataRecorder import Recorder


def collect(page, recorder, title):
    """用于采集的方法
    :param page: ChromiumTab 对象
    :param recorder: Recorder 记录器对象
    :param title: 类别标题
    :return: None
    """
    num = 1  # 当前采集页数
    while True:
        # 遍历所有标题元素
        for i in page.eles('.title project-namespace-path'):
            # 获取某页所有库名称，记录到记录器
            recorder.add_data((title, i.text, num))

        # 如果有下一页，点击翻页
        btn = page('@rel=next', timeout=2)
        if btn:
            btn.click(by_js=True)
            page.wait.load_start()
            num += 1

        # 否则，采集完毕
        else:
            break
            
    recorder.record()  # 把数据记录到文件


def main():
    # 创建配置对象，并设置自动分配端口
    co = ChromiumOptions().auto_port()
    # 新建2个页面对象，自动分配端口的配置对象能共用，但指定端口的不可以
    page1 = ChromiumPage(co)
    page2 = ChromiumPage(co)
    # 第一个浏览器访问第一个网址
    page1.get('https://gitee.com/explore/ai')
    # 第二个浏览器访问另一个网址
    page2.get('https://gitee.com/explore/machine-learning')

    # 新建记录器对象
    recorder = Recorder('data.csv')

    # 多线程同时处理多个页面
    Thread(target=collect, args=(page1, recorder, 'ai')).start()
    Thread(target=collect, args=(page2, recorder, '机器学习')).start()


if __name__ == '__main__':
    main()
```

---

## ✅️️ 结果

程序生成一个结果文件 data.csv，内容如下：

```csv
机器学习,MindSpore/mindspore,1
机器学习,PaddlePaddle/Paddle,1
机器学习,MindSpore/docs,1
机器学习,scruel/Notes-ML-AndrewNg,1
机器学习,MindSpore/graphengine,1
机器学习,inspur-inna/inna1.0,1
ai,drinkjava2/人工生命,1
机器学习,MindSpore/course,1

后面省略。。。
```
