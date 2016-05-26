Life.ArticleLikeModel=OBJECT({preset:function(){"use strict";return Life.MODEL},params:function(){"use strict";var e={articleId:{notEmpty:!0,id:!0},userId:{notEmpty:!0,id:!0}};return{name:"ArticleLike",methodConfig:{create:{valid:VALID(e)},update:!1,remove:!1}}}}),Life.ArticleModel=OBJECT({preset:function(){"use strict";return Life.MODEL},params:function(){"use strict";var e={boardId:{notEmpty:!0,id:!0},categoryId:{id:!0},writerId:{notEmpty:!0,id:!0},title:{notEmpty:!0,size:{max:255}},content:{size:{max:3e4}},html:!0,viewCount:{notEmpty:!0,integer:!0},lastViewTime:{date:!0},commentCount:{notEmpty:!0,integer:!0},lastCommentTime:{date:!0},likeCount:{notEmpty:!0,integer:!0}};return{name:"Article",initData:{viewCount:0,commentCount:0,likeCount:0},methodConfig:{create:{valid:VALID(e),authKey:"writerId",role:Life.ROLE.USER},update:{valid:VALID(e),authKey:"writerId",role:Life.ROLE.USER},remove:{authKey:"writerId",role:Life.ROLE.USER}}}}}),Life.BoardModel=OBJECT({preset:function(){"use strict";return Life.MODEL},params:function(){"use strict";var e={name:{notEmpty:!0,size:{max:255}},description:{size:{max:3e3}},html:!0,index:{real:!0},lastArticleTime:{date:!0},articleCount:{notEmpty:!0,integer:!0}};return{name:"Board",initData:{articleCount:0},methodConfig:{create:{valid:VALID(e),role:Life.ROLE.MANAGER},update:{valid:VALID(e),role:Life.ROLE.MANAGER},remove:{role:Life.ROLE.MANAGER}}}}}),Life.CategoryModel=OBJECT({preset:function(){"use strict";return Life.MODEL},params:function(){"use strict";var e={boardId:{notEmpty:!0,id:!0},category:{notEmpty:!0,size:{max:255}},lastArticleTime:{date:!0},articleCount:{notEmpty:!0,integer:!0}};return{name:"Category",initData:{articleCount:0},methodConfig:{create:{valid:VALID(e),role:Life.ROLE.MANAGER},update:{valid:VALID(e),role:Life.ROLE.MANAGER},remove:{role:Life.ROLE.MANAGER}}}}}),Life.CommentLikeModel=OBJECT({preset:function(){"use strict";return Life.MODEL},params:function(){"use strict";var e={commentId:{notEmpty:!0,id:!0},userId:{notEmpty:!0,id:!0}};return{name:"CommentLike",methodConfig:{create:{valid:VALID(e)},update:!1,remove:!1}}}}),Life.CommentModel=OBJECT({preset:function(){"use strict";return Life.MODEL},params:function(){"use strict";var e={writerId:{notEmpty:!0,id:!0},articleId:{notEmpty:!0,id:!0},content:{notEmpty:!0,size:{max:1e3}},likeCount:{notEmpty:!0,integer:!0}};return{name:"Comment",initData:{likeCount:0},methodConfig:{create:{valid:VALID(e)},update:{valid:VALID(e)}}}}}),Life.JoinKeyModel=OBJECT({preset:function(){"use strict";return Life.MODEL},params:function(){"use strict";return{name:"JoinKey",methodConfig:{create:!1,update:!1,remove:!1}}}}),Life.SessionKeyModel=OBJECT({preset:function(){"use strict";return Life.MODEL},params:function(){"use strict";return{name:"SessionKey",methodConfig:{create:!1,update:!1,remove:!1}}}}),Life.UserModel=OBJECT({preset:function(){"use strict";return Life.MODEL},params:function(){"use strict";var e={username:{notEmpty:!0,size:{min:4,max:20},username:!0},nickname:{notEmpty:!0,size:{min:2,max:20}},email:{notEmpty:!0,size:{min:5,max:320},email:!0},password:{notEmpty:!0,size:{min:4,max:20}},loginCount:{notEmpty:!0,integer:!0},lastLoginTime:{date:!0},isBanned:{bool:!0},isLeft:{bool:!0},isAgreedTerms:{notEmpty:!0,equal:!0},isAgreedPrivacy:{notEmpty:!0,equal:!0},roles:{array:!0},iconFileId:{id:!0},lastArticleTime:{date:!0},articleCount:{notEmpty:!0,integer:!0},lastCommentTime:{date:!0},commentCount:{notEmpty:!0,integer:!0},intoduce:{size:{max:3e4}},html:!0};return{name:"User",initData:{loginCount:0,articleCount:0,commentCount:0},methodConfig:{create:{valid:VALID(e)},update:{valid:VALID(e)},remove:!1},loginValid:VALID({username:e.username,password:e.password})}}}),Life("ROLE").ADMIN="Admin",Life("ROLE").MANAGER="Manager",Life("ROLE").USER="User";function responseError(e,t,n,i,o,r){r({statusCode:500,content:'<!doctype html><html><head><meta charset="UTF-8"><title>'+t+"</title></head><body><p><b>"+t+"</b></p><b>path: </b>"+e+" ("+i+":"+o+")"+(void 0===n?"":"<br><b>code: </b>"+n)+"</body></html>",contentType:"text/html"})}function responseNotFound(e){e({statusCode:404,content:'<!doctype html><html><head><meta charset="UTF-8"><title>Page not found.</title></head><body><p><b>Page not found.</b></p></body></html>',contentType:"text/html"})}Life.MAIN=METHOD({run:function(e){"use strict";var t=require("less"),n=NSP_BRIDGE({rootPath:"./Life/view",restURI:["account/create","board","article","user"]});e(n.requestListener),RESOURCE_SERVER.addPreprocessor({extension:"less",preprocessor:function(e,n){t.render(e,function(e,t){n({content:t.css,contentType:"text/css",version:CONFIG.version})})}}),UMAIL.CONNECT_TO_MAIL_SERVER({host:"smtp.gmail.com",port:465,isSecure:!0,username:NODE_CONFIG.Life.email,password:NODE_CONFIG.Life.emailPassword},function(e){Life.sendMail=e})}});var cachedFileInfos={},Path=require("path");global.__NSP_SHARED_STORE=SHARED_STORE("__NSP_SHARED_STORE"),global.LOAD_NSP=function(e,t,n,i,o,r){GET_FILE_INFO(t,{notExists:i,success:function(s){var d=cachedFileInfos[t];void 0!==d&&(void 0!==s.lastUpdateTime&&d.lastUpdateTime.getTime()===s.lastUpdateTime.getTime()||void 0!==s.createTime&&d.lastUpdateTime.getTime()===s.createTime.getTime())?d.run(e,n,o,r):READ_FILE(t,{notExists:i,error:o,success:function(i){var d=new Function("__requestInfo","self","__errorHandler","__handler",NSP(t,i.toString()));cachedFileInfos[t]={lastUpdateTime:void 0===s.lastUpdateTime?s.createTime:s.lastUpdateTime,run:d},d(e,n,o,r)}})}})},global.NSP=function(e,t){function n(){return r===!0||d===!0||a===!0||u===!0}function i(){return c===!0||f===!0||l===!0||_===!0}var o="";o+="var __html = '';",o+="var __pauseCount = 0;",o+="var __redirectURL;",o+="var __cookieInfo = __requestInfo.cookies;",o+="var __newCookieInfo = {};",o+="var __basePath = '"+Path.dirname(e)+"';",o+="var __lastCondition;",o+="var print = "+function(e){void 0!==e&&("string"==typeof e?__html+=e:__html+=JSON.stringify(e))}.toString()+";",o+="var include = "+function(e){LOAD_NSP(__requestInfo,__basePath+"/"+e,self,function(){print(e+": File not exists."),resume()},__errorHandler,function(e){print(e.html),resume()}),pause()}.toString()+";",o+="var save = "+function(e,t){void 0===t?__NSP_SHARED_STORE.remove(e):__NSP_SHARED_STORE.save({name:e,value:t})}.toString()+";",o+="var load = "+function(e){return __NSP_SHARED_STORE.get(e)}.toString()+";",o+="var cookie = "+function(e,t,n,i,o){return void 0===t?(t=__cookieInfo[e],CHECK_IS_DATA(t)===!0?t.value:t):(__newCookieInfo[e]=__cookieInfo[e]={value:t,expireSeconds:n,path:i,domain:o},t)}.toString()+";",o+="var upload = "+function(e,t){var n,i,o;CHECK_IS_DATA(t)!==!0?n=t:(n=t.success,i=t.error,o=t.overFileSize),UPLOAD_REQUEST({requestInfo:__requestInfo,uploadPath:__basePath+"/"+e},{error:i,overFileSize:o,success:n})}.toString()+";",o+="var redirect = "+function(e){__redirectURL=e}.toString()+";",o+="var pause = "+function(){__pauseCount+=1}.toString()+";";var r=!1,s=!1,d=!1,a=!1,u=!1,c=!1,f=!1,l=!1,_=!1;o+="var __store={};",o+="var resume;";var p=[0],v=function(){return p[p.length-1]+=1,"__pauseCount+=1;__store.resume=resume=function(){__pauseCount-=1;if(__pauseCount===0){"};o+=v()+"print('";for(var m=1,E=1,I=0,h=0,C=0;C<t.length;C+=1){I+=1;var S=t[C],y=S+t[C+1];if("<%"!==y||n()===!0)if("%>"!==y||i()===!0||r!==!0)if("<?"!==y||n()===!0)if("<~"!==y||n()===!0)if("->"!==y||i()===!0||a!==!0)if(":"!==S||i()===!0||a!==!0)if("el"!==y||"s"!==t[C+2]||"e"!==t[C+3]||" "!==t[C+4]&&"	"!==t[C+4]&&">"!==t[C+4]&&"\r"!==t[C+4]&&"\n"!==t[C+4]||i()===!0||d!==!0){if(">"===S&&i()!==!0){if(d===!0){d=!1,p.push(0),o+=")===true){(function(__parentPause, __parentStore){",o+="var __pauseCount = 0;",o+="var __lastCondition;",o+="var pause = "+function(){__pauseCount+=1}.toString()+";",o+="var __store={};",o+="var resume;",o+=v()+"print('";continue}if(a===!0){a=!1,p.push(0),o+="){(function(__parentPause, __parentStore){",o+="var __pauseCount = 0;",o+="var __lastCondition;",o+="var pause = "+function(){__pauseCount+=1}.toString()+";",o+="var __store={};",o+="var resume;",o+=v()+"print('";continue}}if("</"===y&&">"===t[C+3]&&n()!==!0){if("?"===t[C+2]){o+="');",REPEAT(p[p.length-1],function(e){0===e&&(o+="__parentStore.resume();"),o+="}};resume();"}),p.pop(),o+="__parentPause();})(pause, __store);}}catch(e){__errorHandler(e,"+E+","+h+");}"+v()+"print('",C+=3;continue}if("~"===t[C+2]){o+="');",REPEAT(p[p.length-1],function(e){0===e&&(o+="__parentStore.resume();"),o+="}};resume();"}),p.pop(),o+="__parentPause();})(pause, __store);});}catch(e){__errorHandler(e,"+E+","+h+");}"+v()+"print('",C+=3;continue}}if("{{"!==y||n()===!0)if("}}"!==y||i()===!0||u!==!0){if("'"===S){if(n()!==!0){o+="\\'";continue}if(i()!==!0){c=!0,o+="'";continue}if(c===!0){c=!1,o+="'";continue}}if('"'===S&&n()===!0){if(i()!==!0){f=!0,o+="'";continue}if(f===!0){f=!1,o+="'";continue}}if("//"!==y||n()!==!0||i()===!0)if("/*"!==y||n()!==!0||i()===!0)if("*/"!==y||n()!==!0||_!==!0){if("\n"===S){if(m+=1,I=0,n()===!0&&l===!0){l=!1,o+="\n";continue}if(n()!==!0){o+="\\n";continue}}"\\"!==S||n()===!0?"\r"!==S&&(o+=S):o+="\\\\"}else _=!1,o+="*/",C+=1;else _=!0,o+="/*",C+=1;else l=!0,o+="//",C+=1}else u=!1,o+=");}catch(e){__errorHandler(e,"+E+","+h+");}"+v()+"print('",C+=1;else u=!0,o+="');try{print(",E=m,h=I,C+=1}else o+="__lastCondition!==true",C+=3;else o+=",";else o+=",function(",C+=1;else a=!0,o+="');try{EACH(",E=m,h=I,C+=1;else d=!0,o+="');try{if(__lastCondition=(",E=m,h=I,C+=1;else r=!1,s===!0&&(s=!1,o+=");"),o+="}catch(e){__errorHandler(e,"+E+","+h+");}"+v()+"print('",C+=1;else r=!0,o+="');try{",E=m,h=I,"="===t[C+2]?(s=!0,o+="print(",C+=2):C+=1}return o+="');__handler({html:__html,cookies:__newCookieInfo,redirectURL:__redirectURL});",REPEAT(p[0],function(){o+="}};resume();"}),o},global.NSP_BRIDGE=function(e){var t=require("path"),n=e.rootPath,i=e.restURI;return CONFIG.isDevMode=e.isDevMode,{notExistsResource:function(e,t,n){responseNotFound(n)},requestListener:function(e,o,r,s,d){var a,u,c=e.uri,f="",l=function(){LOAD_NSP(e,a,{headers:e.headers,method:e.method,params:e.params,ip:e.ip,subURI:f},function(){responseNotFound(o)},function(e,t,n){responseError(a,e,void 0,t,n,o)},function(e){o(void 0!==e.redirectURL?{statusCode:302,headers:{"Set-Cookie":CREATE_COOKIE_STR_ARRAY(e.cookies),Location:e.redirectURL}}:{headers:{"Set-Cookie":CREATE_COOKIE_STR_ARRAY(e.cookies)},content:e.html,contentType:"text/html"})})};return NEXT([function(e){""===c?CHECK_IS_EXISTS_FILE(n+"/index.nsp",function(t){c=t===!0?"index.nsp":"index.html",e()}):e()},function(){return function(){a=n+"/"+c,u=t.extname(c).toLowerCase(),".nsp"===u?l():""===u?NEXT([function(e){CHECK_IS_EXISTS_FILE(a+".nsp",function(t){t===!0?CHECK_IS_FOLDER(a+".nsp",function(t){t===!0?e():(a+=".nsp",l())}):e()})},function(e){return function(){void 0!==i?(CHECK_IS_ARRAY(i)===!0?CHECK_IS_IN({array:i,value:c})===!0?c=i+".nsp":EACH(i,function(e){return e+"/"===c.substring(0,e.length+1)?(f=c.substring(e.length+1),c=e+".nsp",!1):void 0}):i===c?c=i+".nsp":i+"/"===c.substring(0,i.length+1)&&(f=c.substring(i.length+1),c=i+".nsp"),CHECK_IS_EXISTS_FILE(n+"/"+c,function(t){t===!0?(a=n+"/"+c,l()):e()})):e()}},function(){return function(){CHECK_IS_EXISTS_FILE(a,function(e){e===!0?CHECK_IS_FOLDER(a,function(e){e===!0?(a+="/index.nsp",l()):d()}):d()})}}]):d()}}]),!1}}},OVERRIDE(Life.ArticleLikeModel,function(e){"use strict";Life.ArticleLikeModel=OBJECT({preset:function(){return e},init:function(e,t,n){e.on("create",{before:function(e,n,i,o){return NEXT([function(t){var n;void 0===o?t():void 0!==o.headers&&void 0!==o.headers.cookie&&(n=PARSE_COOKIE_STR(o.headers.cookie),void 0!==n["session-key"]&&Life.SessionKeyModel.get(n["session-key"],function(n){e.userId=n.userId,t()}))},function(){return function(){t.checkIsExists({filter:{articleId:e.articleId,userId:e.userId}},function(e){e===!0?i({validErrors:{articleId:{type:"existed"}}}):n()})}}]),!1},after:function(e){Life.ArticleModel.updateNoHistory({id:e.articleId,$inc:{likeCount:1}})}}),e.on("remove",{after:function(e){Life.ArticleModel.updateNoHistory({id:e.articleId,$inc:{likeCount:-1}})}})}})}),OVERRIDE(Life.ArticleModel,function(e){"use strict";Life.ArticleModel=OBJECT({preset:function(){return e},init:function(e,t,n){t.getDB().createIndex({boardId:1}),e.on("create",{before:function(e,t,n,i){var o;return void 0===e.content?e.html=void 0:e.html=Markdown.MarkUp(e.content),void 0===i?t():void 0!==i.headers&&void 0!==i.headers.cookie&&(o=PARSE_COOKIE_STR(i.headers.cookie),void 0!==o["session-key"]&&Life.SessionKeyModel.get(o["session-key"],function(n){e.writerId=n.userId,t()})),!1},after:function(e){Life.UserModel.updateNoHistory({id:e.writerId,lastArticleTime:new Date,$inc:{articleCount:1}}),Life.BoardModel.updateNoHistory({id:e.boardId,lastArticleTime:new Date,$inc:{articleCount:1}}),void 0!==e.categoryId&&Life.CategoryModel.updateNoHistory({id:e.categoryId,lastArticleTime:new Date,$inc:{articleCount:1}})}}),e.on("update",{before:function(e,n,i,o){var r;return e.content===TO_DELETE?e.html=TO_DELETE:void 0!==e.content&&(e.html=Markdown.MarkUp(e.content)),void 0===o?n():void 0!==o.headers&&void 0!==o.headers.cookie&&(r=PARSE_COOKIE_STR(o.headers.cookie),void 0!==r["session-key"]&&Life.SessionKeyModel.get(r["session-key"],function(i){t.get(e.id,function(t){e.writerId===i.userId?n():Life.UserModel.get(i.userId,function(e){CHECK_IS_IN({array:e.roles,value:Life.ROLE.MANAGER})===!0&&n()})})})),!1},after:function(e,t){Life.BoardModel.updateNoHistory({id:e.boardId,$inc:{articleCount:1}}),Life.BoardModel.updateNoHistory({id:t.boardId,$inc:{articleCount:-1}}),void 0!==e.categoryId&&Life.CategoryModel.updateNoHistory({id:e.categoryId,$inc:{articleCount:1}}),void 0!==t.categoryId&&Life.CategoryModel.updateNoHistory({id:t.categoryId,$inc:{articleCount:-1}})}}),e.on("remove",{before:function(e,n,i,o){var r;return void 0===o?n():void 0!==o.headers&&void 0!==o.headers.cookie&&(r=PARSE_COOKIE_STR(o.headers.cookie),void 0!==r["session-key"]&&Life.SessionKeyModel.get(r["session-key"],function(i){t.get(e,function(e){e.writerId===i.userId&&n()})})),!1},after:function(e){Life.BoardModel.updateNoHistory({id:e.boardId,$inc:{articleCount:-1}}),void 0!==e.categoryId&&Life.CategoryModel.updateNoHistory({id:e.categoryId,$inc:{articleCount:-1}})}})}})}),OVERRIDE(Life.BoardModel,function(e){"use strict";Life.BoardModel=OBJECT({preset:function(){return e},init:function(e,t,n){var i,o;e.on("create",{before:function(e,n){return void 0===e.description?e.html=void 0:e.html=Markdown.MarkUp(e.description),t.get({sort:{index:-1}},{notExists:function(){e.index=0,n()},success:function(t){e.index=t.index+1,n()}}),!1}}),e.on("update",{before:function(e,t,n,i){void 0===e.description?e.html=void 0:e.html=Markdown.MarkUp(e.description),void 0!==i&&delete e.index}}),t.moveUp=i=function(e,n){t.get(e,function(e){t.get({filter:{index:{$lt:e.index}},sort:{index:-1}},{notExists:n,success:function(i){var o=i.index;t.updateNoHistory({id:i.id,index:e.index}),t.updateNoHistory({id:e.id,index:o}),n()}})})},t.moveDown=o=function(e,n){t.get(e,function(e){t.get({filter:{index:{$gt:e.index}},sort:{index:1}},{notExists:n,success:function(i){var o=i.index;t.updateNoHistory({id:i.id,index:e.index}),t.updateNoHistory({id:e.id,index:o}),n()}})})}}})}),OVERRIDE(Life.CommentLikeModel,function(e){"use strict";Life.CommentLikeModel=OBJECT({preset:function(){return e},init:function(e,t,n){e.on("create",{before:function(e,n,i,o){return NEXT([function(t){var n;void 0===o?t():void 0!==o.headers&&void 0!==o.headers.cookie&&(n=PARSE_COOKIE_STR(o.headers.cookie),void 0!==n["session-key"]&&Life.SessionKeyModel.get(n["session-key"],function(n){e.userId=n.userId,t()}))},function(){return function(){t.checkIsExists({filter:{commentId:e.commentId,userId:e.userId}},function(e){e===!0?i({validErrors:{commentId:{type:"existed"}}}):n()})}}]),!1},after:function(e){Life.CommentModel.updateNoHistory({id:e.commentId,$inc:{likeCount:1}})}}),e.on("remove",{after:function(e){Life.CommentModel.updateNoHistory({id:e.commentId,$inc:{likeCount:-1}})}})}})}),OVERRIDE(Life.CommentModel,function(e){"use strict";Life.CommentModel=OBJECT({preset:function(){return e},init:function(e,t,n){t.getDB().createIndex({articleId:1}),e.on("create",{before:function(e,t,n,i){var o;return void 0===i?t():void 0!==i.headers&&void 0!==i.headers.cookie&&(o=PARSE_COOKIE_STR(i.headers.cookie),void 0!==o["session-key"]&&Life.SessionKeyModel.get(o["session-key"],function(n){e.writerId=n.userId,t()})),!1},after:function(e){Life.UserModel.updateNoHistory({id:e.writerId,lastCommentTime:new Date,$inc:{commentCount:1}}),Life.ArticleModel.updateNoHistory({id:e.articleId,lastCommentTime:new Date,$inc:{commentCount:1}})}}),e.on("update",{before:function(e,n,i,o){var r;return void 0===o?n():void 0!==o.headers&&void 0!==o.headers.cookie&&(r=PARSE_COOKIE_STR(o.headers.cookie),void 0!==r["session-key"]&&Life.SessionKeyModel.get(r["session-key"],function(i){t.get(e.id,function(e){e.writerId===i.userId&&n()})})),!1}}),e.on("remove",{before:function(e,n,i,o){var r;return void 0===o?n():void 0!==o.headers&&void 0!==o.headers.cookie&&(r=PARSE_COOKIE_STR(o.headers.cookie),void 0!==r["session-key"]&&Life.SessionKeyModel.get(r["session-key"],function(i){t.get(e,function(e){e.writerId===i.userId&&n()})})),!1},after:function(e){Life.ArticleModel.updateNoHistory({id:e.articleId,$inc:{commentCount:-1}})}})}})}),OVERRIDE(Life.UserModel,function(e){"use strict";Life.UserModel=OBJECT({preset:function(){return e},init:function(e,t,n){var i;e.on("create",{before:function(e,n,i){return void 0===e.intoduce?e.html=void 0:e.html=Markdown.MarkUp(e.intoduce),t.checkIsExists({filter:{username:e.username}},function(o){o===!0?i({validErrors:{username:{type:"existed"}}}):t.checkIsExists({filter:{nickname:e.nickname}},function(t){t===!0?i({validErrors:{nickname:{type:"existed"}}}):(e.password=SHA256({key:e.username,password:e.password}),delete e.isBanned,delete e.isLeft,e.roles=[Life.ROLE.USER],n())})}),!1},after:function(e){delete e.password,Life.JoinKeyModel.find({filter:{email:e.email},isFindAll:!0},EACH(function(e){Life.JoinKeyModel.remove(e.id)}))}}),e.on("update",{before:function(e,n,i,o){var r;return void 0===e.intoduce?e.html=void 0:e.html=Markdown.MarkUp(e.intoduce),delete e.email,delete e.isBanned,delete e.isLeft,NEXT([function(t){void 0===o?t():void 0!==o.headers&&void 0!==o.headers.cookie&&(r=PARSE_COOKIE_STR(o.headers.cookie),void 0!==r["session-key"]&&Life.SessionKeyModel.get(r["session-key"],function(n){e.id===n.userId&&t()}))},function(){return function(){t.get(e.id,function(o){NEXT([function(n){e.username===o.username?(void 0!==e.password&&(e.password=SHA256({key:o.username,password:e.password})),n()):void 0!==e.username?t.checkIsExists({filter:{username:e.username}},function(t){t===!0?i({validErrors:{username:{type:"existed"}}}):t===!1&&(void 0!==e.password&&(e.password=SHA256({key:e.username,password:e.password})),n())}):void 0!==e.password?(e.password=SHA256({key:o.username,password:e.password}),n()):n()},function(n){return function(){void 0!==e.nickname&&e.nickname!==o.nickname?t.checkIsExists({filter:{nickname:e.nickname}},function(e){e===!0?i({validErrors:{nickname:{type:"existed"}}}):n()}):n()}},function(){return function(){void 0!==e.iconFileId?IMAGEMAGICK_RESIZE({srcPath:"__RF/Life/"+e.iconFileId,distPath:"__RF/Life/ICON/"+e.iconFileId,width:40,height:40},n):n()}}])})}}]),!1},after:function(e){delete e.password}}),e.on("get",function(e){delete e.password}),e.on("find",EACH(function(e){delete e.password})),t.login=i=function(e,n){t.get({filter:{username:e.username,password:SHA256({key:e.username,password:e.password})}},{notExists:function(){n.notValid()},success:function(e){e.isLeft===!0?n.notValid():Life.SessionKeyModel.create({userId:e.id},function(i){t.updateNoHistory({id:e.id,lastLoginTime:new Date,$inc:{loginCount:1}},function(e){n.success(e,i.id)})})}})}}})});