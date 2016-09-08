webpackJsonp([28,191],{214:function(n,a,s){"use strict";s(9),s(1579)},793:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(214),s(182)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u5305\u542b\u6807\u9898\u3001\u5185\u5bb9\u3001\u64cd\u4f5c\u533a\u57df\u3002"]],"en-US":[["p","A basic card containing a title, content and an extra corner content."]]},meta:{order:0,title:{"zh-CN":"\u5178\u578b\u5361\u7247","en-US":"Basic card"},filename:"components/card/demo/basic.md",id:"components-card-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Card <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Card</span> <span class="token attr-name" >title"</span> <span class="token attr-name" >extra={&lt;a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>More<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span> style<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >300</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span><span class="token operator" >></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>Card content<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>Card content<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>Card content<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Card</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement(e["default"],{title:"Card title",extra:c["default"].createElement("a",{href:"#"},"More"),style:{width:300}},c["default"].createElement("p",null,"Card content"),c["default"].createElement("p",null,"Card content"),c["default"].createElement("p",null,"Card content"))}}},794:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(214),s(182)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u5728\u7070\u8272\u80cc\u666f\u4e0a\u4f7f\u7528\u65e0\u8fb9\u6846\u7684\u5361\u7247\u3002"]],"en-US":[["p","A borderless card on a gray background."]]},meta:{order:1,title:{"zh-CN":"\u65e0\u8fb9\u6846","en-US":"No border"},filename:"components/card/demo/border-less.md",id:"components-card-demo-border-less"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Card <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> background<span class="token punctuation" >:</span> <span class="token string" >\'#ECECEC\'</span><span class="token punctuation" >,</span> padding<span class="token punctuation" >:</span> <span class="token string" >\'30px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Card</span> <span class="token attr-name" >title"</span> <span class="token attr-name" >bordered</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >300</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>Card content<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>Card content<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>Card content<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Card</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",{style:{background:"#ECECEC",padding:"30px"}},c["default"].createElement(e["default"],{title:"Card title",bordered:!1,style:{width:300}},c["default"].createElement("p",null,"Card content"),c["default"].createElement("p",null,"Card content"),c["default"].createElement("p",null,"Card content")))}}},795:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(59),s(54)),e=t(p),o=(s(44),s(38)),c=t(o),l=(s(214),s(182)),u=t(l),i=s(1),k=t(i),r=s(2);t(r);n.exports={content:{"zh-CN":[["p","\u5728\u7cfb\u7edf\u6982\u89c8\u9875\u9762\u5e38\u5e38\u548c\u6805\u683c\u8fdb\u884c\u914d\u5408\u3002"]],"en-US":[["p","Cards usually cooperate with grid layout in overview page."]]},meta:{order:4,title:{"zh-CN":"\u6805\u683c\u5361\u7247","en-US":"Grid card"},filename:"components/card/demo/grid.md",id:"components-card-demo-grid"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Card<span class="token punctuation" >,</span> Col<span class="token punctuation" >,</span> Row <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> background<span class="token punctuation" >:</span> <span class="token string" >\'#ECECEC\'</span><span class="token punctuation" >,</span> padding<span class="token punctuation" >:</span> <span class="token string" >\'30px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Row</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>8<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Card</span> <span class="token attr-name" >title"</span> <span class="token attr-name" >bordered</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Card content<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Card</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>8<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Card</span> <span class="token attr-name" >title"</span> <span class="token attr-name" >bordered</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Card content<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Card</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>8<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Card</span> <span class="token attr-name" >title"</span> <span class="token attr-name" >bordered</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Card content<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Card</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Row</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return k["default"].createElement("div",{style:{background:"#ECECEC",padding:"30px"}},k["default"].createElement(e["default"],null,k["default"].createElement(c["default"],{span:"8"},k["default"].createElement(u["default"],{title:"Card title",bordered:!1},"Card content")),k["default"].createElement(c["default"],{span:"8"},k["default"].createElement(u["default"],{title:"Card title",bordered:!1},"Card content")),k["default"].createElement(c["default"],{span:"8"},k["default"].createElement(u["default"],{title:"Card title",bordered:!1},"Card content"))))},style:"/* Increase grid spacing of 16px  */\n.code-box-demo .ant-row {\n  margin-left: -8px;\n  margin-right: -8px;\n}\n.code-box-demo .ant-row > div {\n  padding: 0 8px;\n}",highlightedStyle:'<span class="token comment" spellcheck="true">/* Increase grid spacing of 16px  */</span>\n<span class="token selector" ><span class="token class" >.code-box-demo</span> <span class="token class" >.ant-row</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-left</span><span class="token punctuation" >:</span> -<span class="token number" >8</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >margin-right</span><span class="token punctuation" >:</span> -<span class="token number" >8</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.code-box-demo</span> <span class="token class" >.ant-row</span> > div </span><span class="token punctuation" >{</span>\n  <span class="token property" >padding</span><span class="token punctuation" >:</span> <span class="token number" >0</span> <span class="token number" >8</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},796:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(214),s(182)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u6570\u636e\u8bfb\u5165\u524d\u4f1a\u6709\u6587\u672c\u5757\u6837\u5f0f\u3002"]],"en-US":[["p","Shows a loading indicator while the contents of the card are being fetched."]]},meta:{order:5,title:{"zh-CN":"\u9884\u52a0\u8f7d\u7684\u5361\u7247","en-US":"Loading card"},filename:"components/card/demo/loading.md",id:"components-card-demo-loading"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Card <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card</span> <span class="token attr-name" >loading</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Card</span> <span class="token attr-name" >title"</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token string" >\'34%\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    Whatever content\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Card</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement(e["default"],{loading:!0,title:"Card title",style:{width:"34%"}},"Whatever content")}}},797:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(214),s(182)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u53ef\u4ee5\u8c03\u6574\u9ed8\u8ba4\u8fb9\u8ddd\uff0c\u8bbe\u5b9a\u5bbd\u5ea6\u3002"]],"en-US":[["p","Customizing default width and margin."]]},meta:{order:3,title:{"zh-CN":"\u66f4\u7075\u6d3b\u7684\u5185\u5bb9\u5c55\u793a","en-US":"Customized content"},filename:"components/card/demo/no-padding.md",id:"components-card-demo-no-padding"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Card <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >240</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >bodyStyle</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token number" >0</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>custom-image<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>img</span> <span class="token attr-name" >alt</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>example<span class="token punctuation" >"</span></span> <span class="token attr-name" >width</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>100%<span class="token punctuation" >"</span></span> <span class="token attr-name" >src</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>custom-card<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span>Europe Street beat<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>www<span class="token punctuation" >.</span>instagram<span class="token punctuation" >.</span>com<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Card</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement(e["default"],{style:{width:240},bodyStyle:{padding:0}},c["default"].createElement("div",{className:"custom-image"},c["default"].createElement("img",{alt:"example",width:"100%",src:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"})),c["default"].createElement("div",{className:"custom-card"},c["default"].createElement("h3",null,"Europe Street beat"),c["default"].createElement("p",null,"www.instagram.com")))},style:".custom-image img {\n  display: block;\n}\n.custom-card {\n  padding: 10px 16px;\n}\n.custom-card p {\n  color: #999;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.custom-image</span> img </span><span class="token punctuation" >{</span>\n  <span class="token property" >display</span><span class="token punctuation" >:</span> block<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.custom-card</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >padding</span><span class="token punctuation" >:</span> <span class="token number" >10</span>px <span class="token number" >16</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.custom-card</span> p </span><span class="token punctuation" >{</span>\n  <span class="token property" >color</span><span class="token punctuation" >:</span> <span class="token hexcode" >#999</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},798:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(214),s(182)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u53ea\u5305\u542b\u5185\u5bb9\u533a\u57df\u3002"]],"en-US":[["p","A simple card only containing a content area."]]},meta:{order:2,title:{"zh-CN":"\u7b80\u6d01\u5361\u7247","en-US":"Simple card"},filename:"components/card/demo/simple.md",id:"components-card-demo-simple"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Card <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >300</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>Card content<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>Card content<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>Card content<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Card</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement(e["default"],{style:{width:300}},c["default"].createElement("p",null,"Card content"),c["default"].createElement("p",null,"Card content"),c["default"].createElement("p",null,"Card content"))}}},1235:function(n,a,s){n.exports={basic:s(793),"border-less":s(794),grid:s(795),loading:s(796),"no-padding":s(797),simple:s(798)}},1579:function(n,a){}});