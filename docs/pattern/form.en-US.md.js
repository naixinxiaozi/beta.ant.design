webpackJsonp([116,226],{1221:function(e,t){e.exports={content:["article",{},["h2","Content"],["p",["img",{"class":"preview-img",align:"right",alt:"Example of a form",src:"https://os.alipayobjects.com/rmsportal/mLkQbODgVsdGUTe.png"}]],["p","A form usually consists of 4 parts:"],["ol",["li",["p","Label"]],["li",["p","Input box"]],["li",["p","Validation feedback"]],["li",["p","Action"]]],["blockquote",["p","Note: ",["code","*"]," indicates that the input is required."]],["h2","Interactions"],["h3","Gap filling input"],["p",["img",{"class":"preview-img",align:"right",alt:"Example of gap filling input",src:"https://os.alipayobjects.com/rmsportal/SdzCTaevNMvJFBR.png"}]],["p","Gap filling input usually appears in a descriptive context to help users understand the current situation and provide information correctly."],["h3","Combined input"],["p",["img",{"class":"preview-img",align:"right",alt:"Example of combined input",src:"https://os.alipayobjects.com/rmsportal/waStvhMnuoqqsCE.png"}]],["p","When two input boxes have strong correlation, they can be combined together so as to save some space."],["h3","Alignment"],["p",["img",{"class":"preview-img",align:"right",alt:"Example of alignment",src:"https://os.alipayobjects.com/rmsportal/cjHTEtXFxUSdHnE.png"}]],["p","In the design of a form, button groups should be aligned to the left of the input boxes."],["h3","Disabled main button"],["p",'When there are just a few (less than 3) input boxes in a form, "submit" button or other main buttons should be disabled if a user has not yet filled in all required input boxes. However, when there are too many input boxes (more than 5), do not disable those main buttons.'],["p",["br"]],["p",["img",{"class":"preview-img",align:"right",alt:"main button is disabled when there are not enough characters",src:"https://os.alipayobjects.com/rmsportal/VabHKlbouFxSQXz.png"}]],["p",["img",{"class":"preview-img",align:"right",alt:"main button is enabled when there are enough characters",src:"https://os.alipayobjects.com/rmsportal/usdFxJmWDawqUuq.png"}]],["p","When there are just a few input boxes, users can see feedbacks once they type in something and thus the rule is easy to understand."],["p",["br"]],["p",["img",{"class":"preview-img",align:"right",alt:"Don't use disabled main button",src:"https://os.alipayobjects.com/rmsportal/GwZhvOuXmwqUIUW.png"}]],["p","When there are many input boxes (especially when required input boxes are altogether with optional ones), the logic of feedbacks can be very complicated. Thus, disabling main buttons may cause confusion."],["h3","Structured format"],["p",["img",{"class":"preview-img",align:"right",alt:"Example of structured format",src:"https://os.alipayobjects.com/rmsportal/SQgGfreRAqPZPsm.png"}]],["p","The structured format can be used if users are familiar with the input content and the system doesn't accept any deviation from the desired format."],["h3","Tooltip & reminder"],["p",["img",{"class":"preview-img inline",align:"right",alt:"Example of tooltip",description:"when an input box is focused, the tooltip will appear until the input box loses focus again",src:"https://os.alipayobjects.com/rmsportal/cTlmdEprGSzMZfs.png"}],"\n",["img",{"class":"preview-img inline",align:"right",alt:"Example of reminder",description:"when an input box is focused, the reminder will appear until a user types in at least one character",src:"https://os.alipayobjects.com/rmsportal/QPhvLWfMbLTvjRw.png"}]],["p","Use tooltip if a brief input label may cause confusion while you still want to keep the label text to be short."],["p","Use reminder if you want users to pay attention to the format or purpose of an input box. A reminder will disappear once there is something typed in the input box, so it should be used only when users are familiar with the content."],["h3","Password input box"],["p",["img",{"class":"preview-img",align:"right",alt:"Example of password input box",src:"https://os.alipayobjects.com/rmsportal/wKpOgeyyoOUeCrk.png"}]],["p","Password input box provides real time feedbacks on password strength and validity. It's quite applicable to a registration page."],["h3","Validation"],["p",["img",{"class":"preview-img inline",align:"right",description:"Validation in real time",src:"https://os.alipayobjects.com/rmsportal/urCdIJFuNYCenqH.png"}],"\n",["img",{"class":"preview-img inline",align:"right",description:"Validation after losing focus",src:"https://os.alipayobjects.com/rmsportal/KkcSBkbTJirIxCw.png"}]],["p",'<img class="preview-img" align="right" description="When a "submit" button is clicked, the system will deal with user inputs and display feedbacks (the number of errors and the types of errors) on the page." src="',["a",{title:null,href:'https://zos.alipayobjects.com/rmsportal/xTtVSREbASRMstTggVGD.png">'},'https://zos.alipayobjects.com/rmsportal/xTtVSREbASRMstTggVGD.png">']],["p",'Use different validation rules and a variety of feedbacks to help users correct errors before they click on a "submit" button.'],["h3","Character counting box"],["p",["img",{"class":"preview-img",align:"right",alt:"Example of word counting",src:"https://os.alipayobjects.com/rmsportal/JxzQIRfMCtMjuaH.png"}]],["p","A character counting box can show the current number of characters and checks if this number exceeds the limit."],["h2","Format"],["h3","Margin"],["p",["img",{"class":"preview-img",align:"right",alt:"Example of margin between inputs",src:"https://os.alipayobjects.com/rmsportal/dlTiHzZvCGRbMzL.png"}]],["p","A typical example of using margin between inputs."],["h3","Width"],["p",["img",{"class":"preview-img good",align:"right",alt:"Good",src:"https://os.alipayobjects.com/rmsportal/vypllNQZsEHRszB.png"}],"\n",["img",{"class":"preview-img bad",align:"right",alt:"Bad",src:"https://os.alipayobjects.com/rmsportal/XSLwnrlLbKFjiNj.png"}]],["p","If the maximum length of an input content is known, it's recommended to define the input width according to the maximum length."],["p",["br"]],["h3","Alignment"],["p","There are both advantages and disadvantages for any kinds of alignment. Thus, you need to have a clear mind about your purposes (if you want to speed up or slow down a user) and the limits (screen width restrictions, problems of localization, etc.) before choosing one of those alignments."],["p",["br"]],["p",["img",{"class":"preview-img",align:"right",alt:"Right alignment (recommended)",src:"https://os.alipayobjects.com/rmsportal/UxGJfenYBKvkEEB.png"}]],["p","Right alignment (recommended)"],["ul",["li",["p","Advantage: saves vertical space."]],["li",["p","Disadvantages: reduces readability; reduces flexibility of the input length"]],["li",["p","When to use: you want to save more vertical space and speed up users for filling a form."]]],["p",["br"]],["p",["a",{title:null,href:"https://www.expedia.co.uk/FlightCheckout?tripid=89e54540-dcf4-4c27-be3f-c9efaae6dac2&c=69c4491d-2d30-406a-9b2c-6ec50a932b48"},"https://www.expedia.co.uk/FlightCheckout?tripid=89e54540-dcf4-4c27-be3f-c9efaae6dac2&c=69c4491d-2d30-406a-9b2c-6ec50a932b48"]],["p",["img",{"class":"preview-img",align:"right",alt:"Top alignment",src:"https://os.alipayobjects.com/rmsportal/AsyyNKormNdEMLi.png"}]],["p","Top alignment"],["ul",["li",["p","Advantages: high readability; high flexibility of the label length."]],["li",["p","Disadvantage: takes a lot of vertical space."]],["li",["p","When to use: you want users to finish filling the form quickly."]]],["p",["br"]],["p",["img",{"class":"preview-img",align:"right",alt:"Left alignment",src:"https://os.alipayobjects.com/rmsportal/eqUyDExbRlAQoas.png"}]],["p","Left alignment"],["ul",["li",["p","Advantages: easy to read and saves vertical space."]],["li",["p","Disadvantages: slows down users and reduces flexibility for the input length."]],["li",["p","When to use: you want to slow down users so that they can take more considerations when filling a form."]]]],meta:{order:2,title:"Form",filename:"docs/pattern/form.en-US.md"},description:["section",["p","As an important interface to obtain user input, form plays a role of matching answers to questions."],["p","In the design of a form, it's recommended to:"],["ol",["li",["p","Make sure users know what is required to enter and why."],["p","Use sample language as ",["code","label"]," for ordinary users and professional terms for experts. If sensitive information (for example ID card number, mobile phone number) is required, explain why."]],["li",["p","Provide rich context to help users complete the form."],["p",'Using "proper default value", "structured format", "tooltip" and "reminder" are practical for describing such context.']],["li",["p","Be error-sensitive and fault-tolerant."],["p","Be error-sensitive means giving feedbacks to users quickly through a variety of validation rules of user input. If the validation starts only after a form is submitted, it would be too late. Be fault-tolerant means it should be allowed to use different kinds of formats as well as syntax. For example, if a user types in some spaces into a phone number input box, the system should delete those spaces automatically instead of telling the user to correct them."]],["li",["p","Don't ask unnecessary questions."]]]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Content",title:"Content"},"Content"]],["li",["a",{className:"bisheng-toc-h2",href:"#Interactions",title:"Interactions"},"Interactions"]],["li",["a",{className:"bisheng-toc-h2",href:"#Format",title:"Format"},"Format"]]]}}});