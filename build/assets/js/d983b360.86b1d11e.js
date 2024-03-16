"use strict";(self.webpackChunkdrission_page_docs=self.webpackChunkdrission_page_docs||[]).push([[7614],{3581:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>j,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var n=t(5893),d=t(1151);const r={id:"page_settings",title:"\ud83d\ude84 \u9875\u9762\u8bbe\u7f6e"},l=void 0,c={id:"SessionPage/page_settings",title:"\ud83d\ude84 \u9875\u9762\u8bbe\u7f6e",description:"\u672c\u8282\u4ecb\u7ecdSessionPage\u8fd0\u884c\u53c2\u6570\u8bbe\u7f6e\u3002",source:"@site/docs/SessionPage/set_session.md",sourceDirName:"SessionPage",slug:"/SessionPage/page_settings",permalink:"/drissionpagedocs/SessionPage/page_settings",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"page_settings",title:"\ud83d\ude84 \u9875\u9762\u8bbe\u7f6e"},sidebar:"usageSidebar",previous:{title:"\ud83d\ude84 \u83b7\u53d6\u5143\u7d20\u4fe1\u606f",permalink:"/drissionpagedocs/SessionPage/get_ele_info"},next:{title:"\ud83d\ude84 \u542f\u52a8\u914d\u7f6e",permalink:"/drissionpagedocs/SessionPage/session_opt"}},i={},h=[{value:"\u2705\ufe0f\ufe0f <code>set.retry_times()</code>",id:"\ufe0f\ufe0f-setretry_times",level:2},{value:"\u2705\ufe0f\ufe0f <code>set.retry_interval()</code>",id:"\ufe0f\ufe0f-setretry_interval",level:2},{value:"\u2705\ufe0f\ufe0f <code>set.timeout()</code>",id:"\ufe0f\ufe0f-settimeout",level:2},{value:"\u2705\ufe0f\ufe0f <code>set.encoding()</code>",id:"\ufe0f\ufe0f-setencoding",level:2},{value:"\u2705\ufe0f\ufe0f <code>set.cookies()</code>",id:"\ufe0f\ufe0f-setcookies",level:2},{value:"\u2705\ufe0f\ufe0f <code>set.cookies.clear()</code>",id:"\ufe0f\ufe0f-setcookiesclear",level:2},{value:"\u2705\ufe0f\ufe0f <code>set.cookies.remove()</code>",id:"\ufe0f\ufe0f-setcookiesremove",level:2},{value:"\u2705\ufe0f\ufe0f <code>set.headers()</code>",id:"\ufe0f\ufe0f-setheaders",level:2},{value:"\u2705\ufe0f\ufe0f <code>set.header()</code>",id:"\ufe0f\ufe0f-setheader",level:2},{value:"\u2705\ufe0f\ufe0f <code>set.user_agent()</code>",id:"\ufe0f\ufe0f-setuser_agent",level:2},{value:"\u2705\ufe0f\ufe0f <code>set.proxies()</code>",id:"\ufe0f\ufe0f-setproxies",level:2},{value:"\u2705\ufe0f\ufe0f <code>set.auth()</code>",id:"\ufe0f\ufe0f-setauth",level:2},{value:"\u2705\ufe0f\ufe0f <code>set.hooks()</code>",id:"\ufe0f\ufe0f-sethooks",level:2},{value:"\u2705\ufe0f\ufe0f <code>set.params()</code>",id:"\ufe0f\ufe0f-setparams",level:2},{value:"\u2705\ufe0f\ufe0f <code>set.verify()</code>",id:"\ufe0f\ufe0f-setverify",level:2},{value:"\u2705\ufe0f\ufe0f <code>set.cert()</code>",id:"\ufe0f\ufe0f-setcert",level:2},{value:"\u2705\ufe0f\ufe0f <code>set.stream()</code>",id:"\ufe0f\ufe0f-setstream",level:2},{value:"\u2705\ufe0f\ufe0f <code>set.trust_env()</code>",id:"\ufe0f\ufe0f-settrust_env",level:2},{value:"\u2705\ufe0f\ufe0f <code>set.max_redirects()</code>",id:"\ufe0f\ufe0f-setmax_redirects",level:2},{value:"\u2705\ufe0f\ufe0f <code>set.add_adapter()</code>",id:"\ufe0f\ufe0f-setadd_adapter",level:2},{value:"\u2705\ufe0f\ufe0f <code>close()</code>",id:"\ufe0f\ufe0f-close",level:2}];function x(e){const s={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["\u672c\u8282\u4ecb\u7ecd",(0,n.jsx)(s.code,{children:"SessionPage"}),"\u8fd0\u884c\u53c2\u6570\u8bbe\u7f6e\u3002"]}),"\n",(0,n.jsx)(s.p,{children:"\u8fd9\u4e9b\u8bbe\u7f6e\u662f\u5168\u5c40\u53c2\u6570\uff0c\u8bbe\u7f6e\u540e\u6bcf\u6b21\u8bf7\u6c42\u90fd\u4f1a\u4f7f\u7528\u5b83\u4eec\u3002"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"from DrissionPage import SessionPage\r\n\r\npage = SessionPage()\r\npage.set.cookies([{'name': 'a', 'value': '1'}, {'name': 'b', 'value': '2'}])\n"})}),"\n",(0,n.jsxs)(s.h2,{id:"\ufe0f\ufe0f-setretry_times",children:["\u2705\ufe0f\ufe0f ",(0,n.jsx)(s.code,{children:"set.retry_times()"})]}),"\n",(0,n.jsx)(s.p,{children:"\u6b64\u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u8fde\u63a5\u5931\u8d25\u65f6\u91cd\u8fde\u6b21\u6570\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,n.jsx)(s.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(s.th,{children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"times"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"int"})}),(0,n.jsx)(s.td,{children:"\u5fc5\u586b"}),(0,n.jsx)(s.td,{children:"\u6b21\u6570"})]})})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u8fd4\u56de\uff1a"}),(0,n.jsx)(s.code,{children:"None"})]}),"\n",(0,n.jsxs)(s.h2,{id:"\ufe0f\ufe0f-setretry_interval",children:["\u2705\ufe0f\ufe0f ",(0,n.jsx)(s.code,{children:"set.retry_interval()"})]}),"\n",(0,n.jsx)(s.p,{children:"\u6b64\u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u8fde\u63a5\u5931\u8d25\u65f6\u91cd\u8fde\u95f4\u9694\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,n.jsx)(s.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(s.th,{children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"interval"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"float"})}),(0,n.jsx)(s.td,{children:"\u5fc5\u586b"}),(0,n.jsx)(s.td,{children:"\u79d2\u6570"})]})})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u8fd4\u56de\uff1a"}),(0,n.jsx)(s.code,{children:"None"})]}),"\n",(0,n.jsxs)(s.h2,{id:"\ufe0f\ufe0f-settimeout",children:["\u2705\ufe0f\ufe0f ",(0,n.jsx)(s.code,{children:"set.timeout()"})]}),"\n",(0,n.jsx)(s.p,{children:"\u6b64\u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u53c2\u6570\u540d\u79f0"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u7c7b\u578b"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"second"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"float"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"\u5fc5\u586b"}),(0,n.jsx)(s.td,{children:"\u79d2\u6570"})]})})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u8fd4\u56de\uff1a"}),(0,n.jsx)(s.code,{children:"None"})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"page.set.timeout(20)\n"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.h2,{id:"\ufe0f\ufe0f-setencoding",children:["\u2705\ufe0f\ufe0f ",(0,n.jsx)(s.code,{children:"set.encoding()"})]}),"\n",(0,n.jsx)(s.p,{children:"\u6b64\u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u7f51\u9875\u7f16\u7801\u3002"}),"\n",(0,n.jsx)(s.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7a0b\u5e8f\u4f1a\u81ea\u52a8\u4ece headers\u3001\u9875\u9762\u4e0a\u83b7\u53d6\u7f16\u7801\uff0c\u4f46\u603b\u6709\u4e9b\u5947\u8469\u7f51\u9875\u7684\u7f16\u7801\u4e0d\u51c6\u786e\u3002\u8fd9\u65f6\u5019\u53ef\u4ee5\u4e3b\u52a8\u8bbe\u7f6e\u7f16\u7801\u3002"}),"\n",(0,n.jsxs)(s.p,{children:["\u53ef\u4ee5\u9488\u5bf9\u5df2\u83b7\u53d6\u7684",(0,n.jsx)(s.code,{children:"Rsponse"}),"\u5bf9\u8c61\u8bbe\u7f6e\uff0c\u6216\u4f5c\u4e3a\u6574\u4f53\u8bbe\u7f6e\u5bf9\u4e4b\u540e\u7684\u8fde\u63a5\u90fd\u6709\u6548\u3002"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u53c2\u6570\u540d\u79f0"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u7c7b\u578b"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"encoding"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"str"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"\u5fc5\u586b"}),(0,n.jsxs)(s.td,{children:["\u7f16\u7801\u540d\u79f0\uff0c\u5982\u679c\u8981\u53d6\u6d88\u4e4b\u524d\u7684\u8bbe\u7f6e\uff0c\u4f20\u5165",(0,n.jsx)(s.code,{children:"None"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"set_all"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"bool"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"True"})}),(0,n.jsxs)(s.td,{children:["\u662f\u5426\u8bbe\u7f6e\u5bf9\u8c61\u53c2\u6570\uff0c\u4e3a",(0,n.jsx)(s.code,{children:"False"}),"\u5219\u53ea\u8bbe\u7f6e\u5f53\u524d",(0,n.jsx)(s.code,{children:"Response"}),"\u5bf9\u8c61"]})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u8fd4\u56de\uff1a"}),(0,n.jsx)(s.code,{children:"None"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.h2,{id:"\ufe0f\ufe0f-setcookies",children:["\u2705\ufe0f\ufe0f ",(0,n.jsx)(s.code,{children:"set.cookies()"})]}),"\n",(0,n.jsx)(s.p,{children:"\u6b64\u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u4e00\u4e2a\u6216\u591a\u4e2a cookie\u3002"}),"\n",(0,n.jsx)(s.p,{children:"\u8be6\u7ec6\u7528\u6cd5\u89c1\u5b9e\u7528\u6559\u7a0b\u76f8\u5173\u7ae0\u8282\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u53c2\u6570\u540d\u79f0"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u7c7b\u578b"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"cookies"})}),(0,n.jsxs)(s.td,{style:{textAlign:"center"},children:[(0,n.jsx)(s.code,{children:"Cookie"}),(0,n.jsx)("br",{}),(0,n.jsx)(s.code,{children:"CookieJar"}),(0,n.jsx)("br",{}),(0,n.jsx)(s.code,{children:"list"}),(0,n.jsx)("br",{}),(0,n.jsx)(s.code,{children:"tuple"}),(0,n.jsx)("br",{}),(0,n.jsx)(s.code,{children:"str"}),(0,n.jsx)("br",{}),(0,n.jsx)(s.code,{children:"dict"})]}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"\u5fc5\u586b"}),(0,n.jsx)(s.td,{children:"\u53ef\u4ee5\u63a5\u6536\u591a\u79cd\u683c\u5f0f\u7684 cookies"})]})})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u8fd4\u56de\uff1a"}),(0,n.jsx)(s.code,{children:"None"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.h2,{id:"\ufe0f\ufe0f-setcookiesclear",children:["\u2705\ufe0f\ufe0f ",(0,n.jsx)(s.code,{children:"set.cookies.clear()"})]}),"\n",(0,n.jsx)(s.p,{children:"\u6b64\u65b9\u6cd5\u7528\u4e8e\u6e05\u9664\u6240\u6709 cookie\u3002"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u53c2\u6570\uff1a"})," \u65e0"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u8fd4\u56de\uff1a"}),(0,n.jsx)(s.code,{children:"None"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.h2,{id:"\ufe0f\ufe0f-setcookiesremove",children:["\u2705\ufe0f\ufe0f ",(0,n.jsx)(s.code,{children:"set.cookies.remove()"})]}),"\n",(0,n.jsx)(s.p,{children:"\u6b64\u65b9\u6cd5\u7528\u4e8e\u5220\u9664\u4e00\u4e2a cookie\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u53c2\u6570\u540d\u79f0"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u7c7b\u578b"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"name"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"str"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"\u5fc5\u586b"}),(0,n.jsx)(s.td,{children:"cookie \u7684 name \u5b57\u6bb5"})]})})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u8fd4\u56de\uff1a"}),(0,n.jsx)(s.code,{children:"None"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.h2,{id:"\ufe0f\ufe0f-setheaders",children:["\u2705\ufe0f\ufe0f ",(0,n.jsx)(s.code,{children:"set.headers()"})]}),"\n",(0,n.jsx)(s.p,{children:"\u6b64\u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e headers\uff0c\u4f1a\u53d6\u4ee3\u5df2\u6709 headers\u3002"}),"\n",(0,n.jsxs)(s.p,{children:["headers \u53ef\u4ee5\u662f",(0,n.jsx)(s.code,{children:"dict"}),"\u683c\u5f0f\u7684\uff0c\u4e5f\u53ef\u4ee5\u662f\u6587\u672c\u683c\u5f0f\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u6587\u672c\u683c\u5f0f\u4e0d\u540c\u5b57\u6bb5\u7528",(0,n.jsx)(s.code,{children:"\\n"}),"\u5206\u9694\uff0c\u5b57\u6bb5 key \u548c value \u7528",(0,n.jsx)(s.code,{children:"': '"}),"\u5206\u9694\uff0c\u5373\u4ece\u6d4f\u89c8\u5668\u76f4\u63a5\u590d\u5236\u7684\u683c\u5f0f\u3002"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u53c2\u6570\u540d\u79f0"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u7c7b\u578b"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"headers"})}),(0,n.jsxs)(s.td,{style:{textAlign:"center"},children:[(0,n.jsx)(s.code,{children:"dict"}),(0,n.jsx)("br",{}),(0,n.jsx)(s.code,{children:"str"})]}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"\u5fc5\u586b"}),(0,n.jsx)(s.td,{children:"headers \u4fe1\u606f"})]})})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u8fd4\u56de\uff1a"}),(0,n.jsx)(s.code,{children:"None"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.h2,{id:"\ufe0f\ufe0f-setheader",children:["\u2705\ufe0f\ufe0f ",(0,n.jsx)(s.code,{children:"set.header()"})]}),"\n",(0,n.jsx)(s.p,{children:"\u6b64\u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e headers \u4e2d\u4e00\u4e2a\u9879\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u53c2\u6570\u540d\u79f0"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u7c7b\u578b"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"name"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"str"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"\u5fc5\u586b"}),(0,n.jsx)(s.td,{children:"\u8bbe\u7f6e\u540d\u79f0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"value"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"str"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"\u5fc5\u586b"}),(0,n.jsx)(s.td,{children:"\u8bbe\u7f6e\u503c"})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u8fd4\u56de\uff1a"}),(0,n.jsx)(s.code,{children:"None"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.h2,{id:"\ufe0f\ufe0f-setuser_agent",children:["\u2705\ufe0f\ufe0f ",(0,n.jsx)(s.code,{children:"set.user_agent()"})]}),"\n",(0,n.jsx)(s.p,{children:"\u6b64\u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e user_agent\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u53c2\u6570\u540d\u79f0"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u7c7b\u578b"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"ua"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"str"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"\u5fc5\u586b"}),(0,n.jsx)(s.td,{children:"user_agent \u4fe1\u606f"})]})})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u8fd4\u56de\uff1a"}),(0,n.jsx)(s.code,{children:"None"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.h2,{id:"\ufe0f\ufe0f-setproxies",children:["\u2705\ufe0f\ufe0f ",(0,n.jsx)(s.code,{children:"set.proxies()"})]}),"\n",(0,n.jsx)(s.p,{children:"\u6b64\u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u4ee3\u7406 ip\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u53c2\u6570\u540d\u79f0"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u7c7b\u578b"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"http"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"str"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"\u5fc5\u586b"}),(0,n.jsx)(s.td,{children:"http\u4ee3\u7406\u5730\u5740"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"https"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"str"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"None"})}),(0,n.jsxs)(s.td,{children:["https\u4ee3\u7406\u5730\u5740\uff0c\u4e3a",(0,n.jsx)(s.code,{children:"None"}),"\u65f6\u4f7f\u7528",(0,n.jsx)(s.code,{children:"http"}),"\u7684\u503c"]})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u8fd4\u56de\uff1a"}),(0,n.jsx)(s.code,{children:"None"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.h2,{id:"\ufe0f\ufe0f-setauth",children:["\u2705\ufe0f\ufe0f ",(0,n.jsx)(s.code,{children:"set.auth()"})]}),"\n",(0,n.jsx)(s.p,{children:"\u6b64\u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u8ba4\u8bc1\u5143\u7ec4\u6216\u5bf9\u8c61\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u53c2\u6570\u540d\u79f0"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u7c7b\u578b"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"auth"})}),(0,n.jsxs)(s.td,{style:{textAlign:"center"},children:[(0,n.jsx)(s.code,{children:"Tuple[str, str]"}),(0,n.jsx)("br",{}),(0,n.jsx)(s.code,{children:"HTTPBasicAuth"})]}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"\u5fc5\u586b"}),(0,n.jsx)(s.td,{children:"\u8ba4\u8bc1\u5143\u7ec4\u6216\u5bf9\u8c61"})]})})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u8fd4\u56de\uff1a"}),(0,n.jsx)(s.code,{children:"None"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.h2,{id:"\ufe0f\ufe0f-sethooks",children:["\u2705\ufe0f\ufe0f ",(0,n.jsx)(s.code,{children:"set.hooks()"})]}),"\n",(0,n.jsx)(s.p,{children:"\u6b64\u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u56de\u8c03\u65b9\u6cd5\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u53c2\u6570\u540d\u79f0"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u7c7b\u578b"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"hooks"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"dict"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"\u5fc5\u586b"}),(0,n.jsx)(s.td,{children:"\u56de\u8c03\u65b9\u6cd5"})]})})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u8fd4\u56de\uff1a"}),(0,n.jsx)(s.code,{children:"None"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.h2,{id:"\ufe0f\ufe0f-setparams",children:["\u2705\ufe0f\ufe0f ",(0,n.jsx)(s.code,{children:"set.params()"})]}),"\n",(0,n.jsx)(s.p,{children:"\u6b64\u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u67e5\u8be2\u53c2\u6570\u5b57\u5178\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u53c2\u6570\u540d\u79f0"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u7c7b\u578b"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"params"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"dict"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"\u5fc5\u586b"}),(0,n.jsx)(s.td,{children:"\u67e5\u8be2\u53c2\u6570\u5b57\u5178"})]})})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u8fd4\u56de\uff1a"}),(0,n.jsx)(s.code,{children:"None"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.h2,{id:"\ufe0f\ufe0f-setverify",children:["\u2705\ufe0f\ufe0f ",(0,n.jsx)(s.code,{children:"set.verify()"})]}),"\n",(0,n.jsx)(s.p,{children:"\u6b64\u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u662f\u5426\u9a8c\u8bc1SSL\u8bc1\u4e66\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u53c2\u6570\u540d\u79f0"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u7c7b\u578b"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"on_off"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"bool"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"\u5fc5\u586b"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"bool"}),"\u8868\u793a\u5f00\u6216\u5173"]})]})})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u8fd4\u56de\uff1a"}),(0,n.jsx)(s.code,{children:"None"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.h2,{id:"\ufe0f\ufe0f-setcert",children:["\u2705\ufe0f\ufe0f ",(0,n.jsx)(s.code,{children:"set.cert()"})]}),"\n",(0,n.jsx)(s.p,{children:"\u6b64\u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6eSSL\u5ba2\u6237\u7aef\u8bc1\u4e66\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u53c2\u6570\u540d\u79f0"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u7c7b\u578b"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"cert"})}),(0,n.jsxs)(s.td,{style:{textAlign:"center"},children:[(0,n.jsx)(s.code,{children:"str"}),(0,n.jsx)("br",{}),(0,n.jsx)(s.code,{children:"Tuple[str, str]"})]}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"\u5fc5\u586b"}),(0,n.jsx)(s.td,{children:"SSL\u5ba2\u6237\u7aef\u8bc1\u4e66\u6587\u4ef6\u7684\u8def\u5f84(.pem\u683c\u5f0f)\uff0c\u6216(\u2018cert\u2019, \u2018key\u2019)\u5143\u7ec4"})]})})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u8fd4\u56de\uff1a"}),(0,n.jsx)(s.code,{children:"None"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.h2,{id:"\ufe0f\ufe0f-setstream",children:["\u2705\ufe0f\ufe0f ",(0,n.jsx)(s.code,{children:"set.stream()"})]}),"\n",(0,n.jsx)(s.p,{children:"\u6b64\u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u662f\u5426\u4f7f\u7528\u6d41\u5f0f\u54cd\u5e94\u5185\u5bb9\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u53c2\u6570\u540d\u79f0"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u7c7b\u578b"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"on_off"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"bool"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"\u5fc5\u586b"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"bool"}),"\u8868\u793a\u5f00\u6216\u5173"]})]})})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u8fd4\u56de\uff1a"}),(0,n.jsx)(s.code,{children:"None"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.h2,{id:"\ufe0f\ufe0f-settrust_env",children:["\u2705\ufe0f\ufe0f ",(0,n.jsx)(s.code,{children:"set.trust_env()"})]}),"\n",(0,n.jsx)(s.p,{children:"\u6b64\u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u662f\u5426\u4fe1\u4efb\u73af\u5883\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u53c2\u6570\u540d\u79f0"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u7c7b\u578b"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"on_off"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"bool"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"\u5fc5\u586b"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"bool"}),"\u8868\u793a\u5f00\u6216\u5173"]})]})})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u8fd4\u56de\uff1a"}),(0,n.jsx)(s.code,{children:"None"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.h2,{id:"\ufe0f\ufe0f-setmax_redirects",children:["\u2705\ufe0f\ufe0f ",(0,n.jsx)(s.code,{children:"set.max_redirects()"})]}),"\n",(0,n.jsx)(s.p,{children:"\u6b64\u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u53c2\u6570\u540d\u79f0"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u7c7b\u578b"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"``times"}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"int"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"\u5fc5\u586b"}),(0,n.jsx)(s.td,{children:"\u6700\u5927\u91cd\u5b9a\u5411\u6b21\u6570"})]})})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u8fd4\u56de\uff1a"}),(0,n.jsx)(s.code,{children:"None"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.h2,{id:"\ufe0f\ufe0f-setadd_adapter",children:["\u2705\ufe0f\ufe0f ",(0,n.jsx)(s.code,{children:"set.add_adapter()"})]}),"\n",(0,n.jsx)(s.p,{children:"\u6b64\u65b9\u6cd5\u7528\u4e8e\u6dfb\u52a0\u9002\u914d\u5668\u3002"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u53c2\u6570\u540d\u79f0"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u7c7b\u578b"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"url"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"str"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"\u5fc5\u586b"}),(0,n.jsx)(s.td,{children:"\u9002\u914d\u5668\u5bf9\u5e94url"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"adapter"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:(0,n.jsx)(s.code,{children:"HTTPAdapter"})}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"\u5fc5\u586b"}),(0,n.jsx)(s.td,{children:"\u9002\u914d\u5668\u5bf9\u8c61"})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u8fd4\u56de\uff1a"}),(0,n.jsx)(s.code,{children:"None"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.h2,{id:"\ufe0f\ufe0f-close",children:["\u2705\ufe0f\ufe0f ",(0,n.jsx)(s.code,{children:"close()"})]}),"\n",(0,n.jsx)(s.p,{children:"\u6b64\u65b9\u6cd5\u7528\u4e8e\u5173\u95ed\u8fde\u63a5\u3002"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u53c2\u6570\uff1a"})," \u65e0"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u8fd4\u56de\uff1a"}),(0,n.jsx)(s.code,{children:"None"})]}),"\n",(0,n.jsx)(s.hr,{})]})}function j(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>l});var n=t(7294);const d={},r=n.createContext(d);function l(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);