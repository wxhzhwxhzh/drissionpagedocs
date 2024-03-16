"use strict";(self.webpackChunkdrission_page_docs=self.webpackChunkdrission_page_docs||[]).push([[5179],{2518:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=t(5893),r=t(1151);const o={id:"change_mode",title:"\u2b50 \u6a21\u5f0f\u5207\u6362"},a=void 0,i={id:"features/features_demos/change_mode",title:"\u2b50 \u6a21\u5f0f\u5207\u6362",description:"\u7528\u6d4f\u89c8\u5668\u767b\u5f55\u7f51\u7ad9\uff0c\u7136\u540e\u5207\u6362\u5230 requests \u8bfb\u53d6\u7f51\u9875\u3002\u4e24\u8005\u4f1a\u5171\u4eab\u767b\u5f55\u4fe1\u606f\u3002",source:"@site/docs/features/features_demos/switch_mode.md",sourceDirName:"features/features_demos",slug:"/features/features_demos/change_mode",permalink:"/drissionpagedocs/features/features_demos/change_mode",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"change_mode",title:"\u2b50 \u6a21\u5f0f\u5207\u6362"},sidebar:"featuresSidebar",previous:{title:"\u2b50 \u4e0eselenium\u5bf9\u6bd4",permalink:"/drissionpagedocs/features/features_demos/selenium"},next:{title:"\u2b50 \u83b7\u53d6\u5143\u7d20\u5c5e\u6027",permalink:"/drissionpagedocs/features/features_demos/get_ele_attr"}},d={},c=[];function u(e){const n={code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u7528\u6d4f\u89c8\u5668\u767b\u5f55\u7f51\u7ad9\uff0c\u7136\u540e\u5207\u6362\u5230 requests \u8bfb\u53d6\u7f51\u9875\u3002\u4e24\u8005\u4f1a\u5171\u4eab\u767b\u5f55\u4fe1\u606f\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from DrissionPage import WebPage\r\nfrom time import sleep\r\n\r\n# \u521b\u5efa\u9875\u9762\u5bf9\u8c61\uff0c\u9ed8\u8ba4 d \u6a21\u5f0f\r\npage = WebPage()  \r\n# \u8bbf\u95ee\u4e2a\u4eba\u4e2d\u5fc3\u9875\u9762\uff08\u672a\u767b\u5f55\uff0c\u91cd\u5b9a\u5411\u5230\u767b\u5f55\u9875\u9762\uff09\r\npage.get('https://gitee.com/profile')  \r\n\r\n# \u8f93\u5165\u8d26\u53f7\u5bc6\u7801\u767b\u5f55\r\npage.ele('@id:user_login').input('your_user_name')  \r\npage.ele('@id:user_password').input('your_password\\n')\r\npage.wait.load_start()\r\n\r\n# \u5207\u6362\u5230 s \u6a21\u5f0f\r\npage.change_mode()  \r\n# \u767b\u5f55\u540e session \u6a21\u5f0f\u7684\u8f93\u51fa\r\nprint('\u767b\u5f55\u540etitle\uff1a', page.title, '\\n')  \n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8f93\u51fa\uff1a"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\u767b\u5f55\u540etitle\uff1a \u4e2a\u4eba\u8d44\u6599 - \u7801\u4e91 Gitee.com\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var s=t(7294);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);