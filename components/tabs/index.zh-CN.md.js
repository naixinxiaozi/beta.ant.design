webpackJsonp([139],{1680:function(t,d){t.exports={content:["section",["p","\u9009\u9879\u5361\u5207\u6362\u7ec4\u4ef6\u3002"],["h2","\u4f55\u65f6\u4f7f\u7528"],["p","\u63d0\u4f9b\u5e73\u7ea7\u7684\u533a\u57df\u5c06\u5927\u5757\u5185\u5bb9\u8fdb\u884c\u6536\u7eb3\u548c\u5c55\u73b0\uff0c\u4fdd\u6301\u754c\u9762\u6574\u6d01\u3002"],["p","Ant Design \u4f9d\u6b21\u63d0\u4f9b\u4e86\u4e09\u7ea7\u9009\u9879\u5361\uff0c\u5206\u522b\u7528\u4e8e\u4e0d\u540c\u7684\u573a\u666f\u3002"],["ul",["li",["p","\u5361\u7247\u5f0f\u7684\u9875\u7b7e\uff0c\u63d0\u4f9b\u53ef\u5173\u95ed\u7684\u6837\u5f0f\uff0c\u5e38\u7528\u4e8e\u5bb9\u5668\u9876\u90e8\u3002"]],["li",["p","\u6807\u51c6\u7ebf\u6761\u5f0f\u9875\u7b7e\uff0c\u7528\u4e8e\u5bb9\u5668\u5185\u90e8\u7684\u4e3b\u529f\u80fd\u5207\u6362\uff0c\u8fd9\u662f\u6700\u5e38\u7528\u7684 Tabs\u3002"]],["li",["p",["a",{title:null,href:"/components/radio/#components-radio-demo-radiobutton"},"RadioButton"]," \u53ef\u4f5c\u4e3a\u66f4\u6b21\u7ea7\u7684\u9875\u7b7e\u6765\u4f7f\u7528\u3002"]]]],meta:{category:"Components",subtitle:"\u6807\u7b7e\u9875",type:"Data Display",title:"Tabs",cols:1,filename:"components/tabs/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4f55\u65f6\u4f7f\u7528",title:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","Tabs"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","activeKey"],["td","\u5f53\u524d\u6fc0\u6d3b tab \u9762\u677f\u7684 key"],["td","string"],["td","\u65e0"]],["tr",["td","animated"],["td","\u662f\u5426\u4f7f\u7528\u52a8\u753b\u5207\u6362 Tabs\uff0c\u5728 ",["code","tabPosition=top|bottom"]," \u65f6\u6709\u6548"],["td","boolean ","|"," {inkBar:boolean, tabPane:boolean}"],["td",'true, \u5f53 type="card" \u65f6\u4e3a false']],["tr",["td","defaultActiveKey"],["td","\u521d\u59cb\u5316\u9009\u4e2d\u9762\u677f\u7684 key\uff0c\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e activeKey"],["td","string"],["td","\u7b2c\u4e00\u4e2a\u9762\u677f"]],["tr",["td","hideAdd"],["td","\u662f\u5426\u9690\u85cf\u52a0\u53f7\u56fe\u6807\uff0c\u5728 ",["code",'type="editable-card"']," \u65f6\u6709\u6548"],["td","boolean"],["td","false"]],["tr",["td","size"],["td","\u5927\u5c0f\uff0c\u63d0\u4f9b ",["code","default"]," \u548c ",["code","small"]," \u4e24\u79cd\u5927\u5c0f\uff0c\u4ec5\u5f53 ",["code",'type="line"']," \u65f6\u751f\u6548\u3002"],["td","string"],["td","'default'"]],["tr",["td","tabBarExtraContent"],["td","tab bar \u4e0a\u989d\u5916\u7684\u5143\u7d20"],["td","React.ReactNode"],["td","\u65e0"]],["tr",["td","tabBarStyle"],["td","tab bar \u7684\u6837\u5f0f\u5bf9\u8c61"],["td","object"],["td","-"]],["tr",["td","tabPosition"],["td","\u9875\u7b7e\u4f4d\u7f6e\uff0c\u53ef\u9009\u503c\u6709 ",["code","top"]," ",["code","right"]," ",["code","bottom"]," ",["code","left"]],["td","string"],["td","'top'"]],["tr",["td","type"],["td","\u9875\u7b7e\u7684\u57fa\u672c\u6837\u5f0f\uff0c\u53ef\u9009 ",["code","line"],"\u3001",["code","card"]," ",["code","editable-card"]," \u7c7b\u578b"],["td","string"],["td","'line'"]],["tr",["td","onChange"],["td","\u5207\u6362\u9762\u677f\u7684\u56de\u8c03"],["td","Function"],["td","\u65e0"]],["tr",["td","onEdit"],["td","\u65b0\u589e\u548c\u5220\u9664\u9875\u7b7e\u7684\u56de\u8c03\uff0c\u5728 ",["code",'type="editable-card"']," \u65f6\u6709\u6548"],["td","(targetKey, action): void"],["td","\u65e0"]],["tr",["td","onNextClick"],["td","next \u6309\u94ae\u88ab\u70b9\u51fb\u7684\u56de\u8c03"],["td","Function"],["td","\u65e0"]],["tr",["td","onPrevClick"],["td","prev \u6309\u94ae\u88ab\u70b9\u51fb\u7684\u56de\u8c03"],["td","Function"],["td","\u65e0"]],["tr",["td","onTabClick"],["td","tab \u88ab\u70b9\u51fb\u7684\u56de\u8c03"],["td","Function"],["td","\u65e0"]]]],["h3","Tabs.TabPane"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","forceRender"],["td","\u88ab\u9690\u85cf\u65f6\u662f\u5426\u6e32\u67d3 DOM \u7ed3\u6784"],["td","boolean"],["td","false"]],["tr",["td","key"],["td","\u5bf9\u5e94 activeKey"],["td","string"],["td","\u65e0"]],["tr",["td","tab"],["td","\u9009\u9879\u5361\u5934\u663e\u793a\u6587\u5b57"],["td","string","|","ReactNode"],["td","\u65e0"]]]]]}}});