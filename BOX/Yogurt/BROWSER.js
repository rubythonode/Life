Yogurt.Alert=CLASS({preset:function(){"use strict";return UUI.ALERT},params:function(){"use strict";return{style:{backgroundColor:"#fff",color:"#333",textAlign:"center",border:"1px solid #333",borderRadius:5,boxShadow:"0 0 5px rgba(0,0,0,0.3)",onDisplayResize:function(t,o){return t>300?{width:280}:{width:"90%"}}},contentStyle:{padding:20,fontSize:20},buttonStyle:{borderTop:"1px solid #999",padding:15,fontSize:20}}},init:function(t,o,e){"use strict";var n=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.buttonColor?"#333":BROWSER_CONFIG.Yogurt.buttonColor;o.append(e),o.getButton().on("mouseover",function(t,o){o.addStyle({color:"#fff",backgroundColor:n})}),o.getButton().on("mouseout",function(t,o){o.addStyle({color:n,backgroundColor:"transparent"})}),UANI.FADE_IN({node:o.getNode()})}}),Yogurt.BottomBar=CLASS(function(t){"use strict";return{preset:function(){return NODE},init:function(t,o,e){var n,r,i,u=e.buttons,d=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.bottomBarColor?"#666":BROWSER_CONFIG.Yogurt.bottomBarColor,l=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.bottomBarTextColor?"#fff":BROWSER_CONFIG.Yogurt.bottomBarTextColor,f=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.bottomBarHeight?70:BROWSER_CONFIG.Yogurt.bottomBarHeight,c=e.contentStyle;n=DIV({style:{height:f},c:r=DIV({style:{position:"fixed",left:0,bottom:0,backgroundColor:d,width:"100%"},c:DIV({style:{width:Yogurt.BottomButton.getWidth()*u.length,margin:"auto",padding:"12px 0",color:l},c:RUN(function(){var t=[];return EACH(u,function(o){t.push(o)}),t.push(CLEAR_BOTH()),t})})})}),t.setWrapperDom(n),t.setContentDom(r),o.addContentStyle=i=function(t){r.addStyle(t)},void 0!==c&&i(c)}}}),Yogurt.BottomButton=CLASS(function(t){"use strict";var o,e=60,n=24;return t.getWidth=o=function(){return e},{preset:function(){return NODE},init:function(t,o,r){var i,u,d,l,f,c=r.img,a=r.title,s=r.href,g=r.target;i=A({style:{flt:"left",display:"block",textAlign:"center",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none",fontSize:12,width:e},href:s,target:g}),void 0!==a&&i.prepend(u=DIV({c:void 0===a?"":a})),void 0!==c&&(i.prepend(DIV({style:{marginBottom:void 0!==a?5:0},c:c})),c.addStyle({height:n})),t.setDom(i),o.setTitle=d=function(t){u.empty(),u.append(t)},o.getImg=l=function(){return c},o.tap=f=function(){EVENT.fireAll({node:o,name:"tap"})}}}}),Yogurt.Button=CLASS({preset:function(){"use strict";return UUI.BUTTON},params:function(){"use strict";var t=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.buttonColor?"#333":BROWSER_CONFIG.Yogurt.buttonColor;return{style:{padding:"20px 0",color:t,fontSize:24,border:"1px solid "+t,borderRadius:5,backgroundColor:"#fff"},spacing:5,on:{mouseover:function(o,e){e.addStyle({color:"#fff",backgroundColor:t})},mouseout:function(o,e){e.addStyle({color:t,backgroundColor:"#fff"})}}}}}),Yogurt.Calendar=CLASS({preset:function(){"use strict";return UUI.CALENDAR},params:function(){"use strict";var t=(void 0===BROWSER_CONFIG.Yogurt?void 0:BROWSER_CONFIG.Yogurt.toolbarBackground,void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.toolbarColor?"#333":BROWSER_CONFIG.Yogurt.toolbarColor),o=(void 0===BROWSER_CONFIG.Yogurt?void 0:BROWSER_CONFIG.Yogurt.toolbarBackgroundImage,void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.toolbarTextColor?"#fff":BROWSER_CONFIG.Yogurt.toolbarTextColor);return{style:{borderBottom:"10px solid "+t},headerStyle:{backgroundColor:t,fontSize:20,color:o,padding:"10px 15px",fontWeight:"bold"},leftArrowImg:IMG({src:Yogurt.R("cal/left.png")}),rightArrowImg:IMG({src:Yogurt.R("cal/right.png")}),dayStyle:{backgroundColor:"#999",color:"#fff",padding:5,textAlign:"center",fontWeight:"bold"},dateStyle:{backgroundColor:"#eee",fontSize:15,color:"#000",fontWeight:"bold",padding:"8px 0",border:"1px solid #fff",textAlign:"center",backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer"},todayDateStyle:{backgroundColor:"#ccc"},selectedDateStyle:{backgroundColor:"#999"},otherMonthDateStyle:{backgroundColor:"#eee",fontSize:15,color:"#ccc",padding:"8px 0",border:"1px solid #fff",textAlign:"center",cursor:"pointer"}}}}),Yogurt.Checkbox=CLASS({preset:function(){"use strict";return UUI.FULL_CHECKBOX},params:function(){"use strict";return{style:{padding:5}}}}),Yogurt.Confirm=CLASS({preset:function(){"use strict";return UUI.CONFIRM},params:function(){"use strict";return{style:{backgroundColor:"#fff",color:"#333",textAlign:"center",border:"1px solid #333",borderRadius:5,boxShadow:"0 0 5px rgba(0,0,0,0.3)",onDisplayResize:function(t,o){return t>300?{width:280}:{width:"90%"}}},contentStyle:{padding:20,fontSize:20},okButtonStyle:{flt:"left",borderTop:"1px solid #999",padding:"15px 0",width:"50%",fontSize:20},cancelButtonStyle:{flt:"right",marginLeft:-1,borderLeft:"1px solid #999",borderTop:"1px solid #999",padding:"15px 0",width:"50%",fontSize:20}}},init:function(t,o,e){"use strict";var n=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.buttonColor?"#333":BROWSER_CONFIG.Yogurt.buttonColor;o.append(e),o.getOkButton().on("mouseover",function(t,o){o.addStyle({color:"#fff",backgroundColor:n})}),o.getOkButton().on("mouseout",function(t,o){o.addStyle({color:n,backgroundColor:"transparent"})}),o.getCancelButton().on("mouseover",function(t,o){o.addStyle({color:"#fff",backgroundColor:n})}),o.getCancelButton().on("mouseout",function(t,o){o.addStyle({color:n,backgroundColor:"transparent"})}),UANI.FADE_IN({node:o.getNode()})}}),Yogurt.Input=CLASS({preset:function(){"use strict";return UUI.FULL_INPUT},params:function(){"use strict";return{style:{padding:5,backgroundColor:"#FFF",position:"relative",border:"1px solid #666"}}}}),Yogurt.MenuLayout=CLASS(function(t){"use strict";var o,e,n=200,r=800,i="#222";return t.getMenuWidth=o=function(){return n},t.getHideMenuWinWidth=e=function(){return r},{preset:function(){return NODE},init:function(t,o,e){var u,d,l,f,c,a,s,g,p,S,C,E,R,m,I,h,v,O,y=e.toolbar,b=e.leftMenu,N=e.rightMenu,A=e.bottomBar,B=!0,Y=!0,W=0;void 0!==BROWSER_CONFIG.Yogurt&&void 0!==BROWSER_CONFIG.Yogurt.menuLayoutMenuWidth&&(n=BROWSER_CONFIG.Yogurt.menuLayoutMenuWidth),void 0!==BROWSER_CONFIG.Yogurt&&void 0!==BROWSER_CONFIG.Yogurt.menuLayoutHideMenuWinWidth&&(r=BROWSER_CONFIG.Yogurt.menuLayoutHideMenuWinWidth),void 0!==BROWSER_CONFIG.Yogurt&&void 0!==BROWSER_CONFIG.Yogurt.menuLayoutMenuBackgroundColor&&(i=BROWSER_CONFIG.Yogurt.menuLayoutMenuBackgroundColor),void 0!==b&&(W+=1),void 0!==N&&(W+=1),l=DIV({c:[void 0!==b?f=DIV({style:{position:"fixed",top:0,backgroundColor:i,width:n,height:"100%",overflowY:"scroll",zIndex:999999,onDisplayResize:function(t,o){return t>r?{left:0}:{left:-n}}},c:b}):"",void 0!==N?c=DIV({style:{position:"fixed",top:0,backgroundColor:i,width:n,height:"100%",overflowY:"scroll",zIndex:999999,onDisplayResize:function(t,o){return t>r?{right:0}:{right:-n}}},c:N}):"",y,a=DIV({style:{onDisplayResize:function(t,o){return t>r?{marginLeft:n,width:BODY.getWidth()-n*W}:{marginLeft:0,width:"100%"}}}})]}),y.addContentStyle({onDisplayResize:function(t,o){return t>r?{left:n,width:BODY.getWidth()-(void 0===b?0:n)-(void 0===N?0:n)}:{left:0,width:"100%"}}}),t.setWrapperDom(l),t.setContentDom(a),o.setBottomBar=C=function(t){A=t,A.addContentStyle({onDisplayResize:function(t,o){return t>r?{left:n,width:BODY.getWidth()-2*n}:{left:0,width:"100%"}}}),l.append(A)},void 0!==A&&C(A),o.removeBottomBar=E=function(){A.remove(),A=void 0},o.showLeftMenu=R=function(){WIN_WIDTH()>r||B===!0&&u!==!0&&(scrollTo(0,0),void 0!==s&&s.remove(),a.append(s=DIV({style:{position:"absolute",left:n,top:0,width:"100%",height:"100%",zIndex:999999},on:{tap:function(){m()}}})),ANIMATE({node:a,keyframes:KEYFRAMES({from:{marginLeft:0},to:{marginLeft:n}})},function(){u=!0}),ANIMATE({node:y.getContentDom(),keyframes:KEYFRAMES({from:{left:0},to:{left:n}})}),ANIMATE({node:f,keyframes:KEYFRAMES({from:{left:-n},to:{left:0}})}),void 0!==A&&ANIMATE({node:A.getContentDom(),keyframes:KEYFRAMES({from:{left:0},to:{left:n}})}),B=!1,g=EVENT({node:y,name:"touchstart"},function(t){I()}),p=EVENT({node:a,name:"touchstart"},function(t){I()}),void 0!==A&&(S=EVENT({node:A,name:"touchstart"},function(t){I()})))},o.hideLeftMenu=m=function(){WIN_WIDTH()>r?void 0!==s&&(s.remove(),s=void 0):B!==!0&&u===!0&&(void 0!==s&&(s.remove(),s=void 0),ANIMATE({node:a,keyframes:KEYFRAMES({from:{marginLeft:n},to:{marginLeft:0}})},function(){B=!0}),ANIMATE({node:y.getContentDom(),keyframes:KEYFRAMES({from:{left:n},to:{left:0}})}),ANIMATE({node:f,keyframes:KEYFRAMES({from:{left:0},to:{left:-n}})}),void 0!==A&&ANIMATE({node:A.getContentDom(),keyframes:KEYFRAMES({from:{left:n},to:{left:0}})}),u=!1,g.remove(),p.remove(),void 0!==S&&S.remove())},o.toggleLeftMenu=I=function(){WIN_WIDTH()>r||(B===!0&&u!==!0&&R(),B!==!0&&u===!0&&m())},o.showRightMenu=h=function(){WIN_WIDTH()>r||Y===!0&&d!==!0&&(scrollTo(0,0),void 0!==s&&s.remove(),a.append(s=DIV({style:{position:"absolute",left:-n,top:0,width:"100%",height:"100%",zIndex:999999},on:{tap:function(){v()}}})),ANIMATE({node:a,keyframes:KEYFRAMES({from:{marginLeft:0},to:{marginLeft:-n}})},function(){d=!0}),ANIMATE({node:y.getContentDom(),keyframes:KEYFRAMES({from:{left:0},to:{left:-n}})}),ANIMATE({node:c,keyframes:KEYFRAMES({from:{right:-n},to:{right:0}})}),void 0!==A&&ANIMATE({node:A.getContentDom(),keyframes:KEYFRAMES({from:{left:0},to:{left:-n}})}),Y=!1,g=EVENT({node:y,name:"touchstart"},function(t){O()}),p=EVENT({node:a,name:"touchstart"},function(t){O()}),void 0!==A&&(S=EVENT({node:A,name:"touchstart"},function(t){O()})))},o.hideRightMenu=v=function(){WIN_WIDTH()>r?void 0!==s&&(s.remove(),s=void 0):Y!==!0&&d===!0&&(void 0!==s&&(s.remove(),s=void 0),ANIMATE({node:a,keyframes:KEYFRAMES({from:{marginLeft:-n},to:{marginLeft:0}})},function(){Y=!0}),ANIMATE({node:y.getContentDom(),keyframes:KEYFRAMES({from:{left:-n},to:{left:0}})}),ANIMATE({node:c,keyframes:KEYFRAMES({from:{right:0},to:{right:-n}})}),void 0!==A&&ANIMATE({node:A.getContentDom(),keyframes:KEYFRAMES({from:{left:-n},to:{left:0}})}),d=!1,g.remove(),p.remove(),void 0!==S&&S.remove())},o.toggleRightMenu=O=function(){WIN_WIDTH()>r||(Y===!0&&d!==!0&&h(),Y!==!0&&d===!0&&v())}}}}),Yogurt.Prompt=CLASS({preset:function(){"use strict";return UUI.PROMPT},params:function(){"use strict";return{style:{backgroundColor:"#fff",color:"#333",textAlign:"center",border:"1px solid #333",borderRadius:5,boxShadow:"0 0 5px rgba(0,0,0,0.3)",onDisplayResize:function(t,o){return t>300?{width:280}:{width:"90%"}}},contentStyle:{padding:20,fontSize:20},inputStyle:{borderTop:"1px solid #999",padding:15,fontSize:20},okButtonStyle:{flt:"left",borderTop:"1px solid #999",padding:"15px 0",width:"50%",fontSize:20},cancelButtonStyle:{flt:"right",marginLeft:-1,borderLeft:"1px solid #999",borderTop:"1px solid #999",padding:"15px 0",width:"50%",fontSize:20}}},init:function(t,o,e){"use strict";var n=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.buttonColor?"#333":BROWSER_CONFIG.Yogurt.buttonColor;o.append(e),o.getOkButton().on("mouseover",function(t,o){o.addStyle({color:"#fff",backgroundColor:n})}),o.getOkButton().on("mouseout",function(t,o){o.addStyle({color:n,backgroundColor:"transparent"})}),o.getCancelButton().on("mouseover",function(t,o){o.addStyle({color:"#fff",backgroundColor:n})}),o.getCancelButton().on("mouseout",function(t,o){o.addStyle({color:n,backgroundColor:"transparent"})}),UANI.FADE_IN({node:o.getNode()})}}),Yogurt.Select=CLASS({preset:function(){"use strict";return UUI.FULL_SELECT},params:function(){"use strict";return{style:{padding:5,backgroundColor:"#FFF",position:"relative",border:"1px solid #666",borderLeft:"5px solid #666"}}}}),Yogurt.Slide=CLASS({preset:function(){"use strict";return UUI.PANEL}}),Yogurt.Slider=CLASS({preset:function(){"use strict";return NODE},init:function(t,o,e){"use strict";var n,r,i,u,d,l,f,c,a,s,g=e.slides,p=e.contentStyle,S=e.isNotUsingDots,C=void 0===e.dotColor?RGBA([128,128,128,.3]):e.dotColor,E=void 0===e.dotHighlightColor?"#000":e.dotHighlightColor,R=[],m=0;n=DIV({c:[DIV({style:{position:"relative"},c:[r=DIV({style:{overflowX:"hidden"},c:d=DIV({c:RUN(function(){var t=[];return EACH(g,function(o){t.push(o)}),t.push(CLEAR_BOTH()),t})})}),i=DIV({style:{position:"absolute",left:0,top:0,width:20,height:"100%",textAlign:"center",cursor:"pointer"},c:UUI.V_CENTER({style:{height:"100%"},c:IMG({src:Yogurt.R("left.png")})}),on:{tap:function(){c(m-1)}}}),u=DIV({style:{position:"absolute",right:0,top:0,width:20,height:"100%",textAlign:"center",cursor:"pointer"},c:UUI.V_CENTER({style:{height:"100%"},c:IMG({src:Yogurt.R("right.png")})}),on:{tap:function(){c(m+1)}}})]}),S===!0?"":UUI.V_CENTER({style:{height:20},c:DIV({style:{width:12*g.length,margin:"auto"},c:RUN(function(){var t=[];return REPEAT(g.length,function(o){var e;t.push(e=UUI.PANEL({style:{flt:"left",padding:"0 2px"},contentStyle:{backgroundColor:0===o?E:C,width:8,height:8,borderRadius:4}})),R.push(e)}),t.push(CLEAR_BOTH()),t})})})]}),t.setWrapperDom(n),t.setContentDom(d),o.on("show",function(){l=o.getWidth(),o.addContentStyle({width:l*g.length}),EACH(g,function(t){t.addStyle({flt:"left",width:l})})}),i.hide(),o.scrollTo=c=function(t){0>=t?i.hide():i.show(),t>=g.length-1?u.hide():u.show(),t>=0&&t<g.length&&(S!==!0&&R[m].addContentStyle({backgroundColor:C}),void 0!==f&&(f.remove(),f=void 0),t>m?(m=t,f=INTERVAL(function(){return r.getEl().scrollLeft>=m*l?(r.getEl().scrollLeft=m*l,!1):void(r.getEl().scrollLeft+=l/50)})):m>t&&(m=t,f=INTERVAL(function(){return r.getEl().scrollLeft<=m*l?(r.getEl().scrollLeft=m*l,!1):void(r.getEl().scrollLeft-=l/50)})),S!==!0&&R[m].addContentStyle({backgroundColor:E}),EVENT.fireAll({node:o,name:"scroll"}))},o.on("touchstart",function(t){var e,n,i=r.getEl().scrollLeft,u=t.getLeft();o.on("touchmove",e=function(t){t.stop(),r.getEl().scrollLeft=i+u-t.getLeft()}),o.on("touchend",n=function(t){r.getEl().scrollLeft;u-t.getLeft()<0?c(m-1):u-t.getLeft()>0&&c(m+1),t.stop(),o.off("touchmove",e),o.off("touchend",n),o.off("mouseout",n)}),o.on("mouseout",n),t.stop()}),o.addContentStyle=a=function(t){d.addStyle(t)},void 0!==p&&a(p),o.getPage=s=function(){return m}}}),Yogurt.Submit=CLASS({preset:function(){"use strict";return UUI.FULL_SUBMIT},params:function(){"use strict";var t=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.buttonColor?"#333":BROWSER_CONFIG.Yogurt.buttonColor;return{style:{display:"block",textAlign:"center",paddingTop:20,paddingBottom:20,cursor:"pointer",textDecoration:"none",color:t,fontSize:24,border:"1px solid "+t,borderRadius:5,touchCallout:"none",userSelect:"none",backgroundColor:"#fff",width:"100%"},on:{mouseover:function(o,e){e.addStyle({color:"#fff",backgroundColor:t})},mouseout:function(o,e){e.addStyle({color:t,backgroundColor:"#fff"})}}}}}),Yogurt.Textarea=CLASS({preset:function(){"use strict";return UUI.FULL_TEXTAREA},params:function(){"use strict";return{style:{padding:5,backgroundColor:"#FFF",position:"relative",border:"1px solid #666"}}}}),Yogurt.Toolbar=CLASS(function(t){"use strict";var o=999,e=50;return{preset:function(){return NODE},init:function(t,n,r){var i,u,d,l,f,c=void 0===r?void 0:r.left,a=void 0===r?void 0:r.title,s=void 0===r?void 0:r.right,g=void 0===BROWSER_CONFIG.Yogurt?void 0:BROWSER_CONFIG.Yogurt.toolbarBackground,p=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.toolbarColor?"#333":BROWSER_CONFIG.Yogurt.toolbarColor,S=void 0===BROWSER_CONFIG.Yogurt?void 0:BROWSER_CONFIG.Yogurt.toolbarBackgroundImage,C=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.toolbarTextColor?"#fff":BROWSER_CONFIG.Yogurt.toolbarTextColor,E=void 0===r?void 0:r.contentStyle;i=DIV({style:{height:e},c:d=DIV({style:{position:"fixed",top:0,background:g,backgroundColor:p,backgroundImage:S,height:e,width:"100%",zIndex:o,color:C},c:[void 0===c?"":DIV({style:{position:"absolute",top:0,left:0},c:c}),u=H1({style:{paddingTop:13,fontSize:20,textAlign:"center",fontWeight:"bold"},c:void 0===a?"":a}),void 0===s?"":DIV({style:{position:"absolute",top:0,right:0},c:s})]})}),t.setWrapperDom(i),t.setContentDom(d),n.addContentStyle=l=function(t){d.addStyle(t)},void 0!==E&&l(E),n.setTitle=f=function(t){u.empty(),u.append(t)}}}}),Yogurt.ToolbarButton=CLASS({preset:function(){"use strict";return NODE},init:function(t,o,e){"use strict";var n,r,i,u,d,l,f,c=e.img,a=e.title,s=e.href,g=e.target;n=A({style:{display:"block",padding:"16px 10px",cursor:"pointer",fontSize:16},href:s,target:g,c:[r=DIV({style:{flt:"left"},c:i=SPAN({c:void 0===a?"":a})}),CLEAR_BOTH()]}),void 0!==c&&(c.addStyle({flt:"left"}),void 0===c.getStyle("margin")&&void 0===c.getStyle("marginRight")&&c.addStyle({marginRight:5}),n.prepend(c),u=EVENT({node:c,name:"load"},function(t){r.addStyle({marginTop:(c.getHeight()-r.getHeight())/2}),u.remove()})),t.setDom(n),o.setTitle=d=function(t){i.empty(),i.append(t)},o.getImg=l=function(){return c},o.tap=f=function(){EVENT.fireAll({node:o,name:"tap"})}}}),Yogurt.Wrapper=CLASS({preset:function(){"use strict";return NODE},init:function(t,o,e){"use strict";t.setDom(DIV({style:COMBINE([{backgroundColor:"#fff",color:"#000",fontSize:16},void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.wrapperStyle?{}:BROWSER_CONFIG.Yogurt.wrapperStyle])}))}});