UUI.ALERT=CLASS({init:function(e,t,n){"use strict";var o,i,r,a,d,u,c,l,s,f,p,g,E,y,v=n.style,m=n.contentStyle,S=n.buttonStyle,A=n.on,T=n.msg;o=UUI.MODAL({style:COMBINE([{textAlign:"center"},v]),on:A,c:[i=P({style:m,c:T}),r=UUI.BUTTON({style:S,title:MSG({en:"Close",ko:"닫기"}),on:{tap:function(){s()}}})]}),t.getNode=a=function(){return o.getNode()},t.append=d=function(e){i.append(e)},t.prepend=u=function(e){i.prepend(e)},t.after=c=function(e){o.after(e)},t.before=l=function(e){o.before(e)},t.remove=s=function(){o.remove()},t.empty=f=function(){i.empty()},t.getChildren=p=function(){return i.getChildren()},t.getButton=g=function(){return r},t.addContentStyle=E=function(e){i.addContentStyle(e)},t.addButtonStyle=y=function(e){r.addStyle(e)}}}),UUI.BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,u=n.img,c=n.title,l=void 0===n.spacing?0:n.spacing,s=n.href,f=n.target;o=A({style:{display:"block",textAlign:"center",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:s,target:f}),void 0!==c&&o.prepend(i=DIV({c:void 0===c?"":c})),void 0!==u&&o.prepend(DIV({style:{marginBottom:void 0!==c?l:0},c:u})),e.setDom(o),t.setTitle=r=function(e){i.empty(),i.append(e)},t.getImg=a=function(){return u},t.tap=d=function(){EVENT.fireAll({node:t,name:"tap"})}}}),UUI.BUTTON_H=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,u,c=n.img,l=n.title,s=void 0===n.spacing?0:n.spacing,f=n.href,p=n.target,g=n.isImgRight;o=A({style:{display:"block",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:f,target:p,c:[i=DIV({style:{flt:"left"},c:void 0===l?"":l}),CLEAR_BOTH()]}),void 0!==c&&(c.addStyle({flt:"left"}),void 0===c.getStyle("margin")&&void 0===c.getStyle("marginRight")&&c.addStyle(g!==!0?{marginRight:s}:{marginLeft:s}),g!==!0?o.prepend(c):i.after(c),r=EVENT({name:"resize"},function(e){var t=i.getHeight();t>0&&i.addStyle({marginTop:(c.getHeight()-i.getHeight())/2})}),EVENT_ONCE({node:c,name:"load"},function(e){r.fire()}),t.on("show",function(){r.fire()}),t.on("remove",function(){r.remove()})),e.setDom(o),t.setTitle=a=function(e){i.empty(),i.append(e)},t.getImg=d=function(){return c},t.tap=u=function(){EVENT.fireAll({node:t,name:"tap"})}}}),UUI.CALENDAR=CLASS({preset:function(){"use strict";return UUI.TABLE},init:function(e,t,n,o){"use strict";var i,r,a,d,u,c,l,s=n.year,f=n.month,p=n.date,g=void 0===n.headerStyle?{}:n.headerStyle,E=n.dayStyle,y=n.dateStyle,v=n.todayDateStyle,m=n.otherMonthDateStyle,S=n.selectedDateStyle,A=n.leftArrowImg,T=n.rightArrowImg,C=CALENDAR();(void 0===s||void 0===f)&&(void 0===s&&(s=C.getYear()),void 0===f&&(f=C.getMonth())),CHECK_IS_DATA(o)!==!0?i=o:(i=o.selectDate,r=o.each),t.append(TR({c:TD({colspan:7,style:COMBINE([g,{textAlign:"center"}]),c:[d=SPAN(),DIV({style:{flt:"left",cursor:"pointer"},c:void 0===A?"<":A,on:{tap:function(){f-=1,u()}}}),DIV({style:{flt:"right",cursor:"pointer"},c:void 0===T?">":T,on:{tap:function(){f+=1,u()}}}),CLEAR_BOTH()]})})),t.append(TR({c:[TD({style:E,c:"일"}),TD({style:E,c:"월"}),TD({style:E,c:"화"}),TD({style:E,c:"수"}),TD({style:E,c:"목"}),TD({style:E,c:"금"}),TD({style:E,c:"토"})]})),t.getYear=c=function(){return a.getYear()},t.getMonth=l=function(){return a.getMonth()},u=RAR(function(){var e,n,o,u,c=CALENDAR(CREATE_DATE({year:s,month:f+1,date:0})),l=0;a=CALENDAR(CREATE_DATE({year:s,month:f,date:1})),e=CALENDAR(CREATE_DATE({year:s,month:f,date:-(a.getDay()-1)})),d.empty(),d.append(a.getYear()+"년 "+a.getMonth()+"월"),REPEAT(7,function(e){t.removeTR(e)}),REPEAT(a.getDay(),function(a){var d;l%7===0&&t.addTR({key:l/7,tr:n=TR()}),n.append(d=TD({style:void 0===m?y:m,c:e.getDate()+a,on:{tap:function(n,r){void 0!==u&&o.addStyle(u),o=r,u=void 0===m?y:m,void 0!==S&&r.addStyle(S),void 0!==i&&i(CALENDAR(CREATE_DATE({year:s,month:f-1,date:e.getDate()+a})),t)}}})),void 0!==r&&r(d,CALENDAR(CREATE_DATE({year:s,month:f-1,date:e.getDate()+a})),t),l+=1}),REPEAT({start:a.getDate(),end:c.getDate()},function(e,d){var c;l%7===0&&t.addTR({key:l/7,tr:n=TR()}),n.append(c=TD({style:COMBINE([y,void 0!==v&&a.getYear()===C.getYear()&&a.getMonth()===C.getMonth()&&e===C.getDate()?v:{}]),c:e,on:{tap:function(n,r){void 0!==u&&o.addStyle(u),o=r,u=COMBINE([y,void 0!==v&&a.getYear()===C.getYear()&&a.getMonth()===C.getMonth()&&e===C.getDate()?v:{}]),void 0!==S&&r.addStyle(S),void 0!==i&&i(CALENDAR(CREATE_DATE({year:s,month:f,date:e})),t)}}})),a.getYear()===C.getYear()&&a.getMonth()===C.getMonth()&&e===p&&(void 0!==u&&o.addStyle(u),o=c,u=COMBINE([y,void 0!==v&&a.getYear()===C.getYear()&&a.getMonth()===C.getMonth()&&e===C.getDate()?v:{}]),void 0!==S&&c.addStyle(S)),void 0!==r&&r(c,CALENDAR(CREATE_DATE({year:s,month:f,date:e})),t),l+=1}),REPEAT(42-l,function(e){var a;l%7===0&&t.addTR({key:l/7,tr:n=TR()}),n.append(a=TD({style:void 0===m?y:m,c:e+1,on:{tap:function(n,r){void 0!==u&&o.addStyle(u),o=r,u=void 0===m?y:m,void 0!==S&&r.addStyle(S),void 0!==i&&i(CALENDAR(CREATE_DATE({year:s,month:f+1,date:e+1})),t)}}})),void 0!==r&&r(a,CALENDAR(CREATE_DATE({year:s,month:f+1,date:e+1})),t),l+=1})})}}),UUI.CONFIRM=CLASS({init:function(e,t,n,o){"use strict";var i,r,a,d,u,c,l,s,f,p,g,E,y,v,m,S,A,T=n.style,C=n.contentStyle,N=n.okButtonStyle,h=n.cancelButtonStyle,D=n.on,I=n.msg;i=UUI.MODAL({style:COMBINE([{textAlign:"center"},T]),on:D,c:[r=P({style:C,c:I}),a=UUI.BUTTON({style:N,title:MSG({en:"Ok",ko:"확인"}),on:{tap:function(){o(),p()}}}),d=UUI.BUTTON({style:h,title:MSG({en:"Close",ko:"닫기"}),on:{tap:function(){p()}}}),CLEAR_BOTH()]}),t.getNode=u=function(){return i.getNode()},t.append=c=function(e){r.append(e)},t.prepend=l=function(e){r.prepend(e)},t.after=s=function(e){i.after(e)},t.before=f=function(e){i.before(e)},t.remove=p=function(){i.remove()},t.empty=g=function(){r.empty()},t.getChildren=E=function(){return r.getChildren()},t.getOkButton=y=function(){return a},t.getCancelButton=v=function(){return d},t.addContentStyle=m=function(e){r.addContentStyle(e)},t.addOkButtonStyle=S=function(e){a.addStyle(e)},t.addCancelButtonStyle=A=function(e){d.addStyle(e)}}}),UUI.FULL_CHECKBOX=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,u,c,l,s,f,p,g=n.name,E=n.label,y=void 0===n.spacing?0:n.spacing,v=n.value,m=n.inputStyle;o=DIV({style:{position:"relative"},c:[i=INPUT({style:{flt:"left",marginRight:5},name:g,type:"checkbox",value:v}),SPAN({style:{marginLeft:y,flt:"left",cursor:"pointer"},c:E,on:{tap:function(e){i.toggleCheck(),EVENT.fireAll({node:t,name:"change"})}}}),CLEAR_BOTH()]}),e.setWrapperDom(o),t.getName=r=function(){return g},t.getValue=a=function(){return i.getValue()},t.setValue=d=function(e){var n=i.checkIsChecked();i.setValue(e),e===!0?n!==!0&&EVENT.fireAll({node:t,name:"change"}):n===!0&&EVENT.fireAll({node:t,name:"change"})},t.select=u=function(){i.select(),EVENT.fireAll({node:t,name:"select"}),EVENT.fireAll({node:t,name:"focus"})},t.blur=c=function(){i.blur(),EVENT.fireAll({node:t,name:"blur"})},t.addInputStyle=l=function(e){i.addStyle(e)},void 0!==m&&l(m),t.on=s=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)},t.toggleCheck=f=function(e){var n=i.toggleCheck();return EVENT.fireAll({node:t,name:"change"}),n},t.checkIsChecked=p=function(){return i.checkIsChecked()},EVENT({node:t,lowNode:i,name:"keyup"},function(e){void 0!==e&&32===e.getKeyCode()&&DELAY(function(){EVENT.fireAll({node:t,name:"change"})})})}}),UUI.FULL_INPUT=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,u,c,l,s,f,p=n.name,g=n.type,E=n.placeholder,y=n.capture,v=n.accept,m=n.value,S=n.inputStyle;o=DIV({style:{padding:5,backgroundColor:"#fff"},c:DIV({style:{position:"relative"},c:[SPAN({style:{visibility:"hidden"},c:"."}),i=INPUT({style:{position:"absolute",left:0,top:0,width:"100%",border:"none",background:"date"===g||"datetime"===g||"datetime-local"===g||"month"===g||"time"===g||"week"===g?void 0:"transparent"},name:p,type:g,value:m,capture:y,accept:v,placeholder:E})]}),on:{tap:function(){i.focus(),EVENT.fireAll({node:t,name:"focus"})}}}),e.setWrapperDom(o),t.getName=r=function(){return p},t.getValue=a=function(){return i.getValue()},t.setValue=d=function(e){var n=i.getValue();i.setValue(e),n!==e&&EVENT.fireAll({node:t,name:"change"})},t.select=u=function(){i.select(),EVENT.fireAll({node:t,name:"select"}),EVENT.fireAll({node:t,name:"focus"})},t.focus=c=function(){i.focus(),EVENT.fireAll({node:t,name:"focus"})},t.blur=l=function(){i.blur(),EVENT.fireAll({node:t,name:"blur"})},t.addInputStyle=s=function(e){i.addStyle(e)},void 0!==S&&s(S),t.on=f=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)}}}),UUI.FULL_SELECT=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,u,c,l,s,f,p,g=n.name,E=n.value,y=n.options,v=n.selectStyle;o=DIV({style:{padding:5,backgroundColor:"#fff",position:"relative"},c:i=SELECT({style:{width:"100%",border:"none",background:"transparent"},name:g,value:E,c:y})}),e.setWrapperDom(o),t.getName=r=function(){return g},t.getValue=a=function(){return i.getValue()},t.setValue=d=function(e){var n=i.getValue();i.setValue(e),n!==e&&EVENT.fireAll({node:t,name:"change"})},t.select=u=function(){i.select()},t.blur=c=function(){i.blur()},t.addSelectStyle=l=function(e){i.addStyle(e)},void 0!==v&&l(v),t.addOption=s=function(e){i.append(e)},t.removeAllOptions=f=function(){i.empty()},t.on=p=function(e,n){"focus"===e||"blur"===e||"change"===e||"select"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)}}}),UUI.FULL_SUBMIT=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a=void 0===n?void 0:n.value;o=INPUT({type:"submit",style:{display:"block",border:"none",width:"100%",padding:"10px 0",cursor:"pointer"}}),void 0!==a&&o.setValue(a),e.setDom(o),t.getValue=i=function(){return o.getValue()},t.setValue=r=function(e){o.setValue(e)}}}),UUI.FULL_TEXTAREA=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,u,c,l,s,f,p=n.name,g=n.placeholder,E=n.value,y=n.textareaStyle;o=DIV({style:{padding:5,backgroundColor:"#fff",position:"relative",height:100},c:i=TEXTAREA({style:{width:"100%",height:"100%",backgroundColor:"transparent",border:"none"},name:p,placeholder:g,value:E})}),e.setWrapperDom(o),e.setContentDom(i),t.getName=r=function(){return p},t.getValue=a=function(){return i.getValue()},t.setValue=d=function(e){var n=i.getValue();i.setValue(e),n!==e&&EVENT.fireAll({node:t,name:"change"})},t.select=u=function(){i.select()},t.focus=c=function(){i.focus()},t.blur=l=function(){i.blur()},t.addTextareaStyle=s=function(e){i.addStyle(e)},void 0!==y&&s(y),t.on=f=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)}}}),UUI.FULL_UPLOAD_FORM=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n,o){"use strict";var i,r,a,d,u,c,l,s,f,p,g,E,y,v,m=n.box,S=n.capture,A=n.accept,T=n.isMultiple,C=void 0!==n.callbackURL?n.callbackURL:(BROWSER_CONFIG.isSecure===!0?"https://":"http://")+BROWSER_CONFIG.host+":"+BROWSER_CONFIG.port+"/__CORS_CALLBACK",N=n.formStyle,h=n.inputStyle,D=n.uploadingStyle;void 0!==o&&(i=o.success,r=o.overSizeFile),d=DIV({style:{padding:5,background:"#FFF",position:"relative"},c:[l=IFRAME({style:{display:"none"},name:"__UPLOAD_FORM_"+t.id}),s=UUI.V_CENTER({style:{display:"none",position:"absolute",top:0,left:0,backgroundColor:RGBA([0,0,0,.5]),color:"#fff",textAlign:"center"},c:["Uploading...",f=SPAN({style:{marginLeft:10}})]})]}),GET({isSecure:BROWSER_CONFIG.isSecure,port:BROWSER_CONFIG.port,uri:"__UPLOAD_SERVER_HOST?defaultHost="+BROWSER_CONFIG.host},function(e){var n=RANDOM_STR(20);l.after(u=FORM({action:(BROWSER_CONFIG.isSecure===!0?"https://":"http://")+e+":"+BROWSER_CONFIG.port+"/__UPLOAD?boxName="+m.boxName+"&callbackURL="+C+"&uploadKey="+n,target:"__UPLOAD_FORM_"+t.id,method:"POST",enctype:"multipart/form-data",style:N,c:[c=INPUT({type:"file",name:"file",capture:S,accept:A,isMultiple:T,style:COMBINE([{width:"100%",height:"100%",color:"#000",border:"none"},h])}),INPUT({type:"submit",style:{visibility:"hidden",position:"absolute"}})]})),EVENT({node:c,name:"change"},function(e){""!==c.getValue()&&(s.addStyle({width:d.getWidth(),height:d.getHeight()}),s.show(),void 0!==a&&a.exit(),a=m.ROOM("uploadProgressRoom/"+n),a.on("progress",function(e){f.empty(),f.append("("+e.bytesRecieved+"/"+e.bytesExpected+")")}),void 0!==u&&u.submit(!0))})}),EVENT({node:l,name:"load"},function(e){var n,o,d=global["__UPLOAD_FORM_"+t.id],u=void 0!==d?d.fileDataSetStr:void 0,l=void 0!==d?d.maxUploadFileMB:void 0;void 0!==l?(void 0!==r&&r(l),o=c.getValue(),c.setValue(""),""!==o&&EVENT.fireAll({node:t,name:"change"})):void 0!==u&&(n=PARSE_STR(decodeURIComponent(u)),EACH(n,function(e,t){n[t]=UNPACK_DATA(e)}),void 0!==i&&i(T!==!0?n[0]:n,t),o=c.getValue(),c.setValue(""),""!==o&&EVENT.fireAll({node:t,name:"change"})),s.hide(),void 0!==a&&(a.exit(),a=void 0)}),e.setWrapperDom(d),t.select=p=function(){void 0!==c&&(c.select(),EVENT.fireAll({node:t,name:"select"}),EVENT.fireAll({node:t,name:"focus"}))},t.addFormStyle=g=function(e){void 0!==u?u.addStyle(e):EXTEND({origin:N,extend:e})},void 0!==N&&g(N),t.addInputStyle=E=function(e){void 0!==c?c.addStyle(e):EXTEND({origin:h,extend:e})},void 0!==h&&E(h),t.addUploadingStyle=y=function(e){s.addStyle(e)},void 0!==D&&y(D),t.on=v=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:c,name:e},n):EVENT({node:t,lowNode:d,name:e},n)}}}),UUI.IMG_BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a=n.img,d=n.href,u=n.target;o=A({style:{cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:d,target:u,c:a}),e.setDom(o),t.getImg=i=function(){return a},t.tap=r=function(){EVENT.fireAll({node:t,name:"tap"})}}}),UUI.LIST=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,u,c,l=void 0===n?void 0:n.isRequiringClearBoth,s=[],f={};void 0===i&&(i={}),e.setDom(o=UL()),t.addItem=a=function(e){var n=e.key,a=e.item,d=e.isFirst;void 0!==i[n]?(a.insertBefore(i[n]),s[FIND({array:s,value:i[n]})]=a,i[n].remove()):d===!0&&s.length>0?(a.insertBefore(s[0]),s.unshift(a)):(t.append(a),s.push(a)),i[n]=a,l===!0&&(void 0!==r&&r.remove(),r=CLEAR_BOTH().appendTo(o))},void 0!==n&&void 0!==n.items&&EACH(n.items,function(e,t){a({key:t,item:e})}),t.removeItem=d=function(e){var t=i[e],n=f[e];void 0!==t&&t.remove(),void 0!==n&&EACH(n,function(e){e()}),REMOVE({array:s,value:t}),REMOVE({data:i,name:e}),REMOVE({data:f,name:e})},t.addRemoveItemHandler=u=function(e,t){void 0===f[e]&&(f[e]=[]),f[e].push(t)},t.removeAllItems=c=function(){EACH(i,function(e,t){var n=f[t];e.remove(),void 0!==n&&EACH(n,function(e){e()})}),i={},s=[],f={}}}}),UUI.LOADING=CLASS({init:function(e,t,n){"use strict";var o,i,r,a,d,u,c,l,s,f,p,g=n.style,E=n.contentStyle,y=n.indicator,v=n.msg,m=n.on;o=UUI.MODAL({style:COMBINE([{textAlign:"center"},g]),contentStyle:E,isCannotClose:!0,c:[void 0===y?"":y,P({style:void 0===y?{}:{marginTop:10},c:v})],on:m}),t.getNode=i=function(){return o.getNode()},t.append=r=function(e){o.append(e)},t.prepend=a=function(e){o.prepend(e)},t.after=d=function(e){o.after(e)},t.before=u=function(e){o.before(e)},t.remove=c=function(){o.remove()},t.empty=l=function(){o.empty()},t.getChildren=s=function(){return o.getChildren()},t.addStyle=f=function(e){o.addStyle(e)},t.addContentStyle=p=function(e){o.addContentStyle(e)}}}),UUI.MODAL=CLASS({init:function(e,t,n){"use strict";var o,i,r,a,d,u,c,l,s,f,p,g,E,y,v,m,S,A,T,C=void 0===n?void 0:n.c,N=void 0===n?void 0:n.style,h=void 0===n?void 0:n.contentStyle,D=void 0===n?void 0:n.xStyle,I=void 0===n?void 0:n.xImg,R=void 0===n?void 0:n.isCannotClose;o=DIV({c:[i=DIV(),void 0===I?"":UUI.IMG_BUTTON({style:COMBINE([{lineHeight:0,position:"absolute"},void 0===D?{top:-10,right:-10}:D]),img:I,on:{tap:function(e){S()},mouseover:function(){y({opacity:.8})},mouseout:function(){y({opacity:1})}}})]}).appendTo(BODY),u=RAR(function(){var e,t=(WIN_WIDTH()-o.getWidth())/2,n=(WIN_HEIGHT()-o.getHeight())/2;o.addStyle({position:"fixed",left:0>t?0:t,top:0>n?0:n}),(e=function(t){EACH(t,function(t){t.type===IMG&&EVENT({node:t,name:"load"},function(){u()}),void 0!==t.getChildren&&e(t.getChildren())})})(o.getChildren())}),o.on("show",u),r=EVENT({name:"resize"},u),a=EVENT({name:"keydown"},function(e){27===e.getKeyCode()&&R!==!0&&S()}),o.on("remove",function(){r.remove(),a.remove()}),t.getNode=d=function(){return o},t.append=c=function(e){i.append(e),u()},void 0!==C&&(CHECK_IS_ARRAY(C)===!0?EACH(C,function(e,t){c(e)}):c(C)),t.prepend=l=function(e){i.prepend(e),u()},t.after=s=function(e){o.after(e),u()},t.before=f=function(e){o.before(e),u()},t.remove=p=function(){o.remove()},t.empty=g=function(){i.empty()},t.getChildren=E=function(){return i.getChildren()},t.addStyle=y=function(e){o.addStyle(e),u()},void 0!==N&&y(N),t.addContentStyle=v=function(e){i.addStyle(e),u()},void 0!==h&&v(h),t.on=m=function(e,n){EVENT({node:t,lowNode:o,name:e},n)},t.close=S=function(){EVENT.fireAll({node:t,name:"close"})!==!1&&p()},t.getLeft=A=function(){return o.getLeft()},t.getTop=T=function(){return o.getTop()}},afterInit:function(e,t,n){"use strict";var o;void 0!==n&&CHECK_IS_DATA(n)===!0&&(o=n.on),void 0!==o&&EACH(o,function(e,n){t.on(n,e)})}}),UUI.NOTICE=CLASS({init:function(e,t,n){"use strict";var o,i,r,a,d,u,c,l,s,f,p=n.style,g=n.contentStyle,E=n.isCannotClose,y=n.on,v=n.msg;o=UUI.MODAL({style:COMBINE([{textAlign:"center"},p]),contentStyle:g,isCannotClose:!0,on:y,c:v}),t.getNode=i=function(){return o.getNode()},t.append=r=function(e){o.append(e)},t.prepend=a=function(e){o.prepend(e)},t.after=d=function(e){o.after(e)},t.before=u=function(e){o.before(e)},t.remove=c=function(){o.remove()},t.empty=l=function(){o.empty()},t.getChildren=s=function(){return o.getChildren()},t.addContentStyle=f=function(e){o.addContentStyle(e)},E!==!0&&DELAY(2,function(){o.close()})}}),UUI.PANEL=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a=void 0===n?void 0:n.contentStyle;o=DIV({c:i=DIV()}),e.setWrapperDom(o),e.setContentDom(i),t.addContentStyle=r=function(e){i.addStyle(e)},void 0!==a&&r(a)}}),UUI.PROMPT=CLASS({init:function(e,t,n,o){"use strict";var i,r,a,d,u,c,l,s,f,p,g,E,y,v,m,S,A,T,C,N,h=n.style,D=n.contentStyle,I=n.inputStyle,R=n.okButtonStyle,U=n.cancelButtonStyle,O=n.on,V=n.msg;i=UUI.MODAL({style:COMBINE([{textAlign:"center"},h]),on:O,c:[r=P({style:D,c:V}),a=FORM({c:d=UUI.FULL_INPUT({style:I}),on:{submit:function(){o(d.getValue()),E()}}}),u=UUI.BUTTON({style:R,title:MSG({en:"Ok",ko:"확인"}),on:{tap:function(){a.submit()}}}),c=UUI.BUTTON({style:U,title:MSG({en:"Close",ko:"닫기"}),on:{tap:function(){E()}}}),CLEAR_BOTH()]}),t.getNode=l=function(){return i.getNode()},t.append=s=function(e){r.append(e)},t.prepend=f=function(e){r.prepend(e)},t.after=p=function(e){i.after(e)},t.before=g=function(e){i.before(e)},t.remove=E=function(){i.remove()},t.empty=y=function(){r.empty()},t.getChildren=v=function(){return r.getChildren()},t.getOkButton=m=function(){return u},t.getCancelButton=S=function(){return c},t.addContentStyle=A=function(e){r.addContentStyle(e)},t.addInputStyle=T=function(e){d.addStyle(e)},t.addOkButtonStyle=C=function(e){u.addStyle(e)},t.addCancelButtonStyle=N=function(e){c.addStyle(e)}}}),UUI.TABLE=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,u=void 0===n?void 0:n.trs,c=[],l={};void 0===u&&(u={}),e.setDom(o=TABLE()),t.addTR=i=function(e){var n=e.key,o=e.tr,i=e.isFirst;void 0!==u[n]?(o.insertBefore(u[n]),c[FIND({array:c,value:u[n]})]=o,u[n].remove()):i===!0&&c.length>0?(o.insertBefore(c[0]),c.unshift(o)):(t.append(o),c.push(o)),u[n]=o},EACH(u,function(e,n){c.push(e),t.append(e)}),t.removeTR=r=function(e){var t=u[e],n=l[e];void 0!==t&&t.remove(),void 0!==n&&EACH(n,function(e){e()}),REMOVE({array:c,value:t}),REMOVE({data:u,name:e}),REMOVE({data:l,name:e})},t.addRemoveTRHandler=a=function(e,t){void 0===l[e]&&(l[e]=[]),l[e].push(t)},t.removeAllTRs=d=function(){EACH(u,function(e,t){var n=l[t];e.remove(),void 0!==n&&EACH(n,function(e){e()})}),u={},c=[],l={}}}}),UUI.TEXT_BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d=n.title,u=n.href,c=n.target;o=A({style:{cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:u,target:c,c:i=SPAN({c:void 0===d?void 0===u?"":u:d})}),e.setDom(o),t.setTitle=r=function(e){i.empty(),i.append(e)},t.tap=a=function(){EVENT.fireAll({node:t,name:"tap"})}}}),UUI.TITLE=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,u=n.img,c=n.title,l=void 0===n.spacing?0:n.spacing,s=n.isImgRight;o=DIV({c:[i=DIV({style:{flt:"left"},c:void 0===c?"":c}),CLEAR_BOTH()]}),void 0!==u&&(u.addStyle({flt:"left"}),void 0===u.getStyle("margin")&&void 0===u.getStyle("marginRight")&&u.addStyle(s!==!0?{marginRight:l}:{marginLeft:l}),s!==!0?o.prepend(u):i.after(u),r=EVENT({name:"resize"},function(e){var t=i.getHeight();t>0&&i.addStyle({marginTop:(u.getHeight()-i.getHeight())/2})}),EVENT_ONCE({node:u,name:"load"},function(e){r.fire()}),t.on("show",function(){r.fire()}),t.on("remove",function(){r.remove()})),e.setDom(o),t.setTitle=a=function(e){i.empty(),i.append(e)},t.getImg=d=function(){return u}}}),UUI.VALID_FORM=CLASS({preset:function(){"use strict";return FORM},init:function(e,t,n){"use strict";var o,i,r,a=void 0===n?void 0:n.errorMsgs,d=void 0===n?void 0:n.errorMsgStyle,u=[];t.on("remove",function(){EACH(u,function(e){e.remove()})}),t.showErrors=o=function(e){var n=COPY(e),o=function(e){EACH(e.getChildren(),function(e){var t,i,r,c;void 0!==e.getValue&&void 0!==e.getName&&(t=e.getName(),i=n[t],void 0!==i&&void 0!==a&&(r=a[t][i.type],"function"==typeof r&&(r=r(void 0!==i.validParam?i.validParam:i.validParams)),e.after(c=P({style:d,c:r})),REMOVE({data:n,name:t}),u.push(DELAY(3,function(e){c.remove(),REMOVE({array:u,value:e})})))),o(e)})};o(t)},t.getErrorMsgs=i=function(e){var t={};return EACH(e,function(e,n){var o;void 0!==a&&(o=a[n][e.type],"function"==typeof o&&(o=o(void 0!==e.validParam?e.validParam:e.validParams)),t[n]=o)}),t},t.getErrorMsgStyle=r=function(){return d}}}),UUI.V_CENTER=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a=void 0===n?void 0:n.contentStyle;o=TABLE({style:{width:"100%",margin:0,padding:0},c:TR({style:{margin:0,padding:0},c:i=TD({style:{margin:0,padding:0}})})}),e.setWrapperDom(o),e.setContentDom(i),t.addContentStyle=r=function(e){i.addStyle(e)},void 0!==a&&r(a)}});