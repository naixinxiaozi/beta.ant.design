webpackJsonp([192],{1670:function(e,t){e.exports={content:["section",["p","A dropdown list."],["h2","When To Use"],["p","If there are too many operations to display, you can wrap them in a ",["code","Dropdown"],". By clicking/hovering on the trigger, a dropdown menu should appear, which allows you to choose one option and execute relevant actions."]],meta:{category:"Components",type:"Navigation",title:"Dropdown",filename:"components/dropdown/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","Dropdown"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","disabled"],["td","whether the dropdown menu is disabled"],["td","boolean"],["td","-"]],["tr",["td","getPopupContainer"],["td","to set the container of the dropdown menu. The default is to create a ",["code","div"]," element in ",["code","body"],", you can reset it to the scrolling area and make a relative reposition. ",["a",{title:null,href:"https://codepen.io/afc163/pen/zEjNOy?editors=0010"},"example"]],["td","Function(triggerNode)"],["td",["code","() => document.body"]]],["tr",["td","overlay"],["td","the dropdown menu"],["td",["a",{title:null,href:"/components/menu"},"Menu"]],["td","-"]],["tr",["td","placement"],["td","placement of pop menu: ",["code","bottomLeft"]," ",["code","bottomCenter"]," ",["code","bottomRight"]," ",["code","topLeft"]," ",["code","topCenter"]," ",["code","topRight"]],["td","String"],["td",["code","bottomLeft"]]],["tr",["td","trigger"],["td","the trigger mode which executes the drop-down action"],["td","Array","<",["code","click"],"|",["code","hover"],"|",["code","contentMenu"],">"],["td",["code","['hover']"]]],["tr",["td","visible"],["td","whether the dropdown menu is visible"],["td","boolean"],["td","-"]],["tr",["td","onVisibleChange"],["td","a callback function takes an argument: ",["code","visible"],", is executed when the visible state is changed"],["td","Function(visible)"],["td","-"]]]],["p","You should use ",["a",{title:null,href:"/components/menu/"},"Menu"]," as ",["code","overlay"],". The menu items and dividers are also available by using ",["code","Menu.Item"]," and ",["code","Menu.Divider"],"."],["blockquote",["p","Warning: You must set a unique ",["code","key"]," for ",["code","Menu.Item"],"."],["p","Menu of Dropdown is unselectable by default, you can make it selectable via ",["code","<Menu selectable>"],"."]],["h3","Dropdown.Button"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","disabled"],["td","whether the dropdown menu is disabled"],["td","boolean"],["td","-"]],["tr",["td","overlay"],["td","the dropdown menu"],["td",["a",{title:null,href:"/components/menu"},"Menu"]],["td","-"]],["tr",["td","placement"],["td","placement of pop menu: ",["code","bottomLeft"]," ",["code","bottomCenter"]," ",["code","bottomRight"]," ",["code","topLeft"]," ",["code","topCenter"]," ",["code","topRight"]],["td","String"],["td",["code","bottomLeft"]]],["tr",["td","size"],["td","size of the button, the same as ",["a",{title:null,href:"/components/button"},"Button"]],["td","string"],["td",["code","default"]]],["tr",["td","trigger"],["td","the trigger mode which executes the drop-down action"],["td","Array","<",["code","click"],"|",["code","hover"],"|",["code","contextMenu"],">"],["td",["code","['hover']"]]],["tr",["td","type"],["td","type of the button, the same as ",["a",{title:null,href:"/components/button"},"Button"]],["td","string"],["td",["code","default"]]],["tr",["td","visible"],["td","whether the dropdown menu is visible"],["td","boolean"],["td","-"]],["tr",["td","onClick"],["td","a callback function, the same as ",["a",{title:null,href:"/components/button"},"Button"],", which will be executed when you click the button on the left"],["td","Function"],["td","-"]],["tr",["td","onVisibleChange"],["td","a callback function takes an argument: ",["code","visible"],", is executed when the visible state is changed"],["td","Function"],["td","-"]]]]]}}});