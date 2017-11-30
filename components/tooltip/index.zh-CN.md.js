webpackJsonp([131],{1690:function(t,e){t.exports={content:["section",["p","\u7b80\u5355\u7684\u6587\u5b57\u63d0\u793a\u6c14\u6ce1\u6846\u3002"],["h2","\u4f55\u65f6\u4f7f\u7528"],["p","\u9f20\u6807\u79fb\u5165\u5219\u663e\u793a\u63d0\u793a\uff0c\u79fb\u51fa\u6d88\u5931\uff0c\u6c14\u6ce1\u6d6e\u5c42\u4e0d\u627f\u8f7d\u590d\u6742\u6587\u672c\u548c\u64cd\u4f5c\u3002"],["p","\u53ef\u7528\u6765\u4ee3\u66ff\u7cfb\u7edf\u9ed8\u8ba4\u7684 ",["code","title"]," \u63d0\u793a\uff0c\u63d0\u4f9b\u4e00\u4e2a",["code","\u6309\u94ae/\u6587\u5b57/\u64cd\u4f5c"],"\u7684\u6587\u6848\u89e3\u91ca\u3002"]],meta:{category:"Components",subtitle:"\u6587\u5b57\u63d0\u793a",type:"Data Display",title:"Tooltip",filename:"components/tooltip/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4f55\u65f6\u4f7f\u7528",title:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6ce8\u610f",title:"\u6ce8\u610f"},"\u6ce8\u610f"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","title"],["td","\u63d0\u793a\u6587\u5b57"],["td","string","|","ReactNode","|","() => ReactNode"],["td","\u65e0"]]]],["h3","\u5171\u540c\u7684 API"],["p","\u4ee5\u4e0b API \u4e3a Tooltip\u3001Popconfirm\u3001Popover \u5171\u4eab\u7684 API\u3002"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","arrowPointAtCenter"],["td","\u7bad\u5934\u662f\u5426\u6307\u5411\u76ee\u6807\u5143\u7d20\u4e2d\u5fc3\uff0c",["code","antd@1.11+"]," \u652f\u6301"],["td","boolean"],["td",["code","false"]]],["tr",["td","autoAdjustOverflow"],["td","\u6c14\u6ce1\u88ab\u906e\u6321\u65f6\u81ea\u52a8\u8c03\u6574\u4f4d\u7f6e"],["td","boolean"],["td",["code","true"]]],["tr",["td","getPopupContainer"],["td","\u6d6e\u5c42\u6e32\u67d3\u7236\u8282\u70b9\uff0c\u9ed8\u8ba4\u6e32\u67d3\u5230 body \u4e0a\u3002",["code","2.5.2"]," \u4e4b\u524d\u8bf7\u4f7f\u7528 ",["code","getTooltipContainer"]],["td","Function(triggerNode)"],["td","() => document.body"]],["tr",["td","mouseEnterDelay"],["td","\u9f20\u6807\u79fb\u5165\u540e\u5ef6\u65f6\u591a\u5c11\u624d\u663e\u793a Tooltip\uff0c\u5355\u4f4d\uff1a\u79d2"],["td","number"],["td","0"]],["tr",["td","mouseLeaveDelay"],["td","\u9f20\u6807\u79fb\u51fa\u540e\u5ef6\u65f6\u591a\u5c11\u624d\u9690\u85cf Tooltip\uff0c\u5355\u4f4d\uff1a\u79d2"],["td","number"],["td","0.1"]],["tr",["td","overlayClassName"],["td","\u5361\u7247\u7c7b\u540d"],["td","string"],["td","\u65e0"]],["tr",["td","overlayStyle"],["td","\u5361\u7247\u6837\u5f0f"],["td","object"],["td","\u65e0"]],["tr",["td","placement"],["td","\u6c14\u6ce1\u6846\u4f4d\u7f6e\uff0c\u53ef\u9009 ",["code","top"]," ",["code","left"]," ",["code","right"]," ",["code","bottom"]," ",["code","topLeft"]," ",["code","topRight"]," ",["code","bottomLeft"]," ",["code","bottomRight"]," ",["code","leftTop"]," ",["code","leftBottom"]," ",["code","rightTop"]," ",["code","rightBottom"]],["td","string"],["td","top"]],["tr",["td","trigger"],["td","\u89e6\u53d1\u884c\u4e3a\uff0c\u53ef\u9009 ",["code","hover/focus/click"]],["td","string"],["td","hover"]],["tr",["td","defaultVisible"],["td","\u9ed8\u8ba4\u662f\u5426\u663e\u9690"],["td","boolean"],["td","false"]],["tr",["td","visible"],["td","\u7528\u4e8e\u624b\u52a8\u63a7\u5236\u6d6e\u5c42\u663e\u9690"],["td","boolean"],["td","false"]],["tr",["td","onVisibleChange"],["td","\u663e\u793a\u9690\u85cf\u7684\u56de\u8c03"],["td","(visible) => void"],["td","\u65e0"]]]],["h2","\u6ce8\u610f"],["p","\u8bf7\u786e\u4fdd ",["code","Tooltip"]," \u7684\u5b50\u5143\u7d20\u80fd\u63a5\u53d7 ",["code","onMouseEnter"],"\u3001",["code","onMouseLeave"],"\u3001",["code","onFocus"],"\u3001",["code","onClick"]," \u4e8b\u4ef6\u3002"]]}}});