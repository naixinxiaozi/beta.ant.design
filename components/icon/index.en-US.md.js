webpackJsonp([186],{1610:function(n,t,e){n.exports={content:["section",["p","Semantic vector graphics."],["h2","Icons naming convention"],["p","We provide semantic name for every icon, and naming rules are as follows:"],["ul",["li",["p","Scanning line icon has the similar name with its solid one\uff0cbut it's distinguished by ",["code","-o"],", for example, ",["code","question-circle"]," (a full circle) and ",["code","question-circle-o"]," (an empty circle);"]],["li",["p","Naming sequence\uff1a",["code","[name]-[shape?]-[outline?]-[direction?]"],"."]]],["blockquote",["p",["code","?"]," means is optional."]],["p","See more design detail at ",["a",{title:null,href:"/docs/spec/icon"},"here"],"."],["h2","How To Use"],["p","Use tag ",["icon"]," to create an icon and set its type in the type prop, for example:"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>link<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>'},["code",'<Icon type="link" />']],["h2","Local deployment"],["p","By default, icons are deployed at ",["a",{title:null,href:"http://iconfont.cn"},"iconfont.cn"],", publicly available repository of a huge set of icons. In case you need to use a locally deployed version of the icon font, you can refer to ",["a",{title:null,href:"https://github.com/ant-design/antd-init/tree/master/examples/local-iconfont"},"this example"],"\u3002"],["h2","List of icons"],["blockquote",["p","Click the icon and copy the code\u3002"]],["h3","Directional Icons"],function(){var n=e(0),t=(e(8),function(n){return n&&n.__esModule?n:{default:n}}(e(152)));return n.createElement(t.default,{className:"icons",catigory:"direction"})},["h3","Suggested Icons"],function(){var n=e(0),t=(e(8),function(n){return n&&n.__esModule?n:{default:n}}(e(152)));return n.createElement(t.default,{className:"icons",catigory:"suggestion"})},["h3","Application Icons"],function(){var n=e(0),t=(e(8),function(n){return n&&n.__esModule?n:{default:n}}(e(152)));return n.createElement(t.default,{className:"icons",catigory:"other"})},["h3","Brand and Logos"],function(){var n=e(0),t=(e(8),function(n){return n&&n.__esModule?n:{default:n}}(e(152)));return n.createElement(t.default,{className:"icons",catigory:"logo"})}],meta:{category:"Components",type:"General",title:"Icon",toc:!1,filename:"components/icon/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Icons-naming-convention",title:"Icons naming convention"},"Icons naming convention"]],["li",["a",{className:"bisheng-toc-h2",href:"#How-To-Use",title:"How To Use"},"How To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#Local-deployment",title:"Local deployment"},"Local deployment"]],["li",["a",{className:"bisheng-toc-h2",href:"#List-of-icons",title:"List of icons"},"List of icons"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","You can set ",["code","style"]," and ",["code","className"]," for size and color of icons because they are still fonts in essence."],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>question<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontSize<span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'#08c\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>'},["code","<Icon type=\"question\" style={{ fontSize: 16, color: '#08c' }} />"]],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","spin"],["td","Rotate icon with animation"],["td","boolean"],["td","false"]],["tr",["td","style"],["td","style properties of icon, like fontSize and color"],["td","object"],["td","-"]],["tr",["td","type"],["td","Type of ant design icon"],["td","string"],["td","-"]]]]]}}});