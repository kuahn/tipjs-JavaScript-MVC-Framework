/*
 * tipJS - OpenSource Javascript MVC Framework ver.1.26
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */
var tipJS=tipJS||{};tipJS.ver=tipJS.version="1.26";(function(){var j=function(V,W){for(var i in W){if(V[i]){continue}V[i]=W[i]}return V};var o=function(Y,W){if(!W||typeof W!="object"||(!W.__name&&!W.name)){throw"Please check your "+Y+" definition"}var V=(W.__name)?W.__name:W.name;if(typeof(V)!="string"){throw"Please check your "+Y+" definition"}if(W.__extend&&W.__extend===V&&Y!="controllers"){throw"Can't extend itself"}var X=V.split("."),Z=X[0],i=X[1],aa=H(Z);if(!aa){throw"Please check your "+Y+" definition"}if(aa.loadOrder.presentOrder()===Y){if(Y=="controllers"){W.__appName__=Z}else{if(W.__name){delete W.__name}}O.depart[Z]=O.depart[Z]||{};O.depart[Z][Y]=O.depart[Z][Y]||{};O.depart[Z][Y][i]=W}};var T=function(Z,V){if(V===O.OBJ_TPL.loadOrder.order[0]){return S(Z[V])}var Y=Z.name,X=r.path[V],W=r.applicationPath[Y],i=S(Z[V]);return z(W,X,i)};var z=function(X,Z,Y){var W=[];for(var V=Y.length;V--;){W.push(X+k(Z)+Y[V])}return W};var I=function(V,i){if(i&&i.nocache===true){V=(V.indexOf("?")<0)?V+"?":V+"&";V=V+i.paramName+"="+i.version}return V};var u=tipJS.loadJS=function(X,W,V){var i=document.createElement("script");i.type="text/javascript";i.src=I(X,W);i.charset=r.charSet;if(V){if(i.readyState){i.onreadystatechange=function(){if(this.readyState=="loaded"||this.readyState=="complete"){this.onreadystatechange=null;V(this)}}}else{i.onload=function(){V(this)}}}document.getElementsByTagName("head")[0].appendChild(i)};var b=function(V,X,W){var i=function(Y){if(t(V,X,Y.src)){f(V)}};u(W,C(V),i)};var y=function(V,Y){l(V,Y);var W=h(V);var Z=T(W,Y);O[V][Y].requireList=Z;if(Z.length>0){for(var X=Z.length;X--;){b(V,Y,Z[X])}}else{f(V)}};var q=function(X){if(!X.__extend){return X}if(typeof X.__extend==="string"){X=v(X,X.__extend)}else{if(X.__extend instanceof Array){var V=X.__extend;for(var W=V.length;W--;){X=v(X,V[W])}}}delete X.__extend;return X};var v=function(W,V){var i=V.split(".");if(i.length==2){return j(W,p(i[1],false,i[0]))}else{return j(W,w(V))}};var w=tipJS.loadCommonModel=function(V,Z){var X=O.common.models;if(!X[V]||X[V]==undefined){throw"Could not find commonModel: "+V}if(Z===true){var W=O.common.syncModels;if(!W){W=O.common.syncModels={}}if(W[V]){return W[V]}var i=W[V]=q(c(X[V]));if(V.lastIndexOf("VO")==(V.length-2)){if(typeof i.__init==="function"){i.__init();delete i.__init}return i}i.loadCommonModel=w;if(typeof i.__init==="function"){i.__init();delete i.__init}return i}var Y=q(c(X[V]));if(V.lastIndexOf("VO")==(V.length-2)){if(typeof Y.__init==="function"){Y.__init();delete Y.__init}return Y}Y.loadCommonModel=w;if(typeof Y.__init==="function"){Y.__init();delete Y.__init}return Y};var p=function(W,ab,V){var aa=(!V)?P():V,Y=O.depart[aa].models;if(!Y[W]||Y[W]==undefined){throw"Could not find model: "+W}if(ab===true){var X=O.depart[aa].syncModels;if(!X){X=O.depart[aa].syncModels={}}if(X[W]){return X[W]}var i=X[W]=q(c(Y[W]));if(W.lastIndexOf("VO")==(W.length-2)){if(typeof i.__init==="function"){i.__init();delete i.__init}return i}i.loadCommonModel=w;i.loadModel=p;if(typeof i.__init==="function"){i.__init();delete i.__init}return i}var Z=q(c(Y[W]));if(W.lastIndexOf("VO")==(W.length-2)){if(typeof Z.__init==="function"){Z.__init();delete Z.__init}return Z}Z.loadCommonModel=w;Z.loadModel=p;if(typeof Z.__init==="function"){Z.__init();delete Z.__init}return Z};var U=tipJS.loadModel=function(V,Z){var aa=(typeof(Z)==="boolean")?Z:false;try{var W=V.split("."),Y=W[0],i=W[1];return p(i,aa,Y)}catch(X){throw"tipJS.loadModel : invalid parameter"}};var H=function(i){return L[i]};var h=function(i){return L[i].define};var C=function(i){var W={};var V=h(i);if(V){var X=V.noCacheVersion;if(V.noCacheAuto===true){X=""+Math.random()}W.nocache=V.noCache;W.version=X;W.paramName=V.noCacheParam}return W};var E=function(){return L.ctrlerStack[L.ctrlerStack.length-1]};var P=tipJS.getLiveAppName=function(){return E().__appName__};var f=function(W){var Z=H(W);if(Z.loadOrder.isLastOrder()===false){y(W,Z.loadOrder.nextOrder());return}var V=function(ac){var ab=O.common.views;if(!ab||!ab[ac]||ab[ac]==undefined){throw"Could not find commonView: "+ac}var aa=c(ab[ac]);aa.loadCommonView=V;aa.renderTemplate=e;if(aa.__extend&&typeof aa.__extend==="string"){aa=j(aa,V(aa.__extend));delete aa.__extend}if(typeof aa.__init==="function"){aa.__init();delete aa.__init}return aa};var Y=function(af,aa){var ae=(!aa)?P():aa,ad=O.depart[ae].views;if(!ad||!ad[af]||ad[af]==undefined){throw"Could not find view: "+af}var ac=c(ad[af]);ac.loadCommonView=V;ac.loadView=Y;ac.renderTemplate=e;if(ac.__extend&&typeof ac.__extend==="string"){var ab=ac.__extend.split(".");if(ab.length==2){ac=j(ac,Y(ab[1],ab[0]))}else{ac=j(ac,V(ac.__extend))}delete ac.__extend}if(typeof ac.__init==="function"){ac.__init();delete ac.__init}return ac};var i=Z.controller=O.depart[W].controllers;if(i){for(var X in i){i[X].loadCommonModel=w;i[X].loadCommonView=V;i[X].loadModel=p;i[X].loadView=Y;i[X].renderTemplate=e}}(function(ab){var af=H(ab);af.define.onLoad(af.onLoadParam);if(A&&A[ab]){var ac=A[ab];for(var ae=0,ad=ac.length;ae<ad;ae++){var aa=ac[ae];tipJS.action(aa.name,aa.param)}delete A[ab]}})(W)};var t=function(V,X,Z){var Y=O[V][X].requireList;for(var W=Y.length;W--;){if(Y[W]===true){continue}if(Z.indexOf(Y[W])>=0){Y[W]=true;break}}for(var W=Y.length;W--;){if(Y[W]!==true){return false}}return true};var k=function(i){return g.pathDiv+i+g.pathDiv};var c=tipJS.cloneObject=function(i){if(typeof Object.create==="function"){c=tipJS.cloneObject=function(V){return Object.create(V)};return c(i)}c=tipJS.cloneObject=function(W){function V(){}V.prototype=W;return new V()};return c(i)};var D=tipJS.echo=function(X,V,W){if(W&&(typeof W!="string"||typeof W=="string"&&W.split(".").length>5)){return}if(!V){V=""}if(X===null||X===undefined){console.log(((W)?W+".":"")+X);return}if(typeof X=="boolean"||typeof X=="number"||typeof X=="string"){if(typeof X==V||V==""){console.log(((W)?W+".":"")+X)}return}for(var i in X){if(X[i]&&X[i] instanceof Array){console.log(((W)?W+".":"")+i+":Array");D(X[i],V,((W)?W+".":"")+i)}else{if(X[i]&&typeof X[i]=="object"){console.log(((W)?W+".":"")+i+":Object");D(X[i],V,((W)?W+".":"")+i)}else{if(typeof X[i]==V||V==""){console.log(((W)?W+".":"")+i+":"+X[i])}}}}};var S=tipJS.uniqueArray=function(W){var Y=[],V=W.length;for(var Z=0;Z<V;Z++){for(var X=Z+1;X<V;X++){if(W[Z]===W[X]){X=++Z}}Y.push(W[Z])}return Y};var l=function(i,V){O[i]=O[i]||{};O[i][V]=O[i][V]||{}};var F=function(X,W){for(var Y=0,V=W.length;Y<V;Y++){var Z=W[Y];if(X.noCache&&X.noCache===true){Z+=(Z.indexOf("?")<0)?"?":"&";Z+=(X.noCacheParam?X.noCacheParam:r.noCacheParam)+"=";if(X.noCacheAuto===true){Z+=Math.random()}else{Z+=(X.noCacheVersion?X.noCacheVersion:r.noCacheVersion)}}document.write('<script type="text/javascript" charset="'+(X.charSet?X.charSet:r.charSet)+'" src="'+Z+'"><\/script>')}};tipJS.config=function(W){if(W.commonLib){F(W,W.commonLib);delete W.commonLib}if(W.commonModel){F(W,W.commonModel);delete W.commonModel}if(W.commonView){F(W,W.commonView);delete W.commonView}r=j(W,O.OBJ_TPL.config);if(tipJS.isDevelopment===null){var V=window.location.hostname;if(V.length==0){tipJS.isDevelopment=true;return}for(var X=r.developmentHostList.length;X--;){if(V.match(r.developmentHostList[X])!==null){tipJS.isDevelopment=true;break}}}};var a=function(){var i=new Date();return(i.getHours()*60*60+i.getMinutes()*60+i.getSeconds())+(i.getMilliseconds()/1000)};tipJS.benchmark={};var x={};tipJS.benchmark.mark=function(i){x[i]=a()};tipJS.benchmark.elapsedTime=function(i,X,V){var W=x[i],Z=x[X],Y=Z-W;if(V){V(i,X,W,Z,Y)}else{tipJS.log("elapsed time["+i+" to "+X+"] : "+Y+" seconds","[BENCHMARK]")}return Y};var J=function(){var i=false;if(window.XMLHttpRequest){i=new XMLHttpRequest()}else{if(window.ActiveXObject){try{i=new ActiveXObject("Msxml2.XMLHTTP")}catch(W){try{i=new ActiveXObject("Microsoft.XMLHTTP")}catch(V){}}}}J=function(){return i};return J()};var e=function(X){var Z=P();if(h(Z).templateCache&&s[X.url]){var W=M(s[X.url],X.data);if(typeof X.renderTo=="string"){document.getElementById(X.renderTo).innerHTML+=W}return W}var V=C(Z),aa=I(X.url,V),i=J();i.open("GET",aa,false);try{i.send(null)}catch(Y){return null}if(i.readyState==4&&i.status==200){var W=s[X.url]=i.responseText;W=M(W,X.data);if(typeof X.renderTo=="string"){document.getElementById(X.renderTo).innerHTML+=W}return W}else{throw"Could not find template file:"+aa}};var M=function(V,X){V=V.replace(/\r\n/g,"\n");V=V.replace(/\r/g,"\n");V=V.replace(/\\/g,"\\\\");V=V.replace(/\n/g,"");var i=V.split("@>"),W=new Function("data",N(i));return W(X)};var N=function(ad){var ag=[],ae=[],V=[],ab="PLANE",af="VALUE",X="PARSE",Z="__temp_HTML__.push(";ag.push("var __temp_HTML__ = [];");for(var Y=0,ac=ad.length;Y<ac;Y++){var aa=ad[Y];if(aa.indexOf("<@=")>-1){var W=aa.split("<@=");if(W.length>1){V.push(W[0].replace(/"/g,'\\"'));V.push(W[1]);ae.push(ab);ae.push(af)}else{V.push(W[0]);ae.push(af)}}else{if(aa.indexOf("<@")>-1){var W=aa.split("<@");if(W.length>1){V.push(W[0].replace(/"/g,'\\"'));V.push(W[1]);ae.push(ab);ae.push(X)}else{V.push(W[0]);ae.push(X)}}else{V.push(aa.replace(/"/g,'\\"'));ae.push(ab)}}}for(var Y=0,ac=V.length;Y<ac;Y++){var aa=V[Y];if(ae[Y]==af){aa='""+'+aa+'+""';ag.push(Z+aa+");")}else{if(ae[Y]==X){ag.push(aa)}else{aa='"'+aa+'"';ag.push(Z+aa+");")}}}ag.push("return __temp_HTML__.join('');");return ag.join("")};tipJS.commonModel=function(i){if(!i||typeof i!="object"||(!i.__name&&!i.name)){throw"Please check your CommonModel definition"}var V=(i.__name)?i.__name:i.name;if(typeof(V)!="string"){throw"Please check your CommonModel definition"}if(i.__extend&&i.__extend===V){throw"Can't extend itself"}if(i.__name){delete i.__name}O.common.models[V]=i};tipJS.commonView=function(i){if(!i||typeof i!="object"||(!i.__name&&!i.name)){throw"Please check your CommonView definition"}var V=(i.__name)?i.__name:i.name;if(typeof(V)!="string"){throw"Please check your CommonView definition"}if(i.__extend&&i.__extend===V){throw"Can't extend itself"}if(i.__name){delete i.__name}O.common.views[V]=i};var g=(function(){var i={pathDiv:"/",blank:"",extJS:"js",extDiv:"."};return i})();tipJS.log=function(W,X){window.console=window.console||{log:function(){},error:function(){}};var ab=new Date(),i=ab.getFullYear(),ad=ab.getMonth()+1,Y=ab.getDate(),ac=ab.getHours(),V=ab.getMinutes(),Z=ab.getSeconds(),aa=ab.getMilliseconds();console.log(((X)?X:"")+i+"/"+ad+"/"+Y+" "+ac+":"+V+":"+Z+"."+aa+" "+W)};tipJS.debug=function(i){if(tipJS.isDevelopment){tipJS.log(i,"[DEBUG]")}};tipJS.controller=function(i){o("controllers",i)};tipJS.model=function(i){o("models",i)};tipJS.view=function(i){o("views",i)};tipJS.action=function(W,V){var af,ac,ae;try{af=W.split(".");ac=af[0];ae=af[1];if(ac.length==0||ae.length==0){throw""}}catch(ad){throw"tipJS.action : invalid parameter"}var Z=H(ac);if(!Z||!Z.loadOrder||!Z.loadOrder.isLastOrder()){A=A||{};A[ac]=A[ac]||[];A[ac].push({name:W,param:V});return}if(!Z.controller||!Z.controller[ae]){throw"Could not find controller: "+W}var i;if(tipJS.isDevelopment===true){i=a()}var X=c(Z.controller[ae]);if(!X){throw"Could not find controller"}var Y={controllerName:(X.__name)?X.__name:X.name,ctrler:X,beforeCtrler:Z.define.beforeController,afterCtrler:Z.define.afterController};if(Y.beforeCtrler){var aa=Y.beforeCtrler(V);if(aa===false){return}aa=true}var ab=function(){var ah=Y.ctrler;try{var ak=function(){if(ah.afterInvoke){ah.afterInvoke(V)}};var ag=function(){var al=true;if(ah.invoke){al=ah.invoke(V)}if(al!==false){ak()}};var ai=function(){var al=true;if(ah.beforeInvoke){al=ah.beforeInvoke(V)}if(al!==false){ag()}};L.ctrlerStack=L.ctrlerStack||[];L.ctrlerStack.push(ah);ai();L.ctrlerStack.pop()}catch(aj){L.ctrlerStack.pop();if(ah.exceptionInvoke){ah.exceptionInvoke(aj,V)}else{L.ctrlerStack=[];throw aj}}if(Y.afterCtrler){Y.afterCtrler(V)}if(tipJS.isDevelopment===true){tipJS.debug(W+" completed in "+(a()-i)+" seconds")}};if(Y.ctrler.async===true){setTimeout(ab,15)}else{ab()}};tipJS.loadApp=function(Z,aa){for(var V=0,W=Z.length;V<W;V++){var Y=Z[V],X=[];if(aa){L[Y]=L[Y]||{};L[Y].onLoadParam=aa}X.push(r.applicationPath[Y]);X.push(g.pathDiv);X.push(r.defineFileName);X.push(g.extDiv);X.push(g.extJS);setTimeout(function(){if(!L[Y]||!L[Y].define){throw"Could not find application: "+Y}},1000);u(X.join(g.blank),{nocache:true,version:Math.random(),paramName:r.noCacheParam})}};tipJS.define=function(W){W=j(W,O.OBJ_TPL.define);if(W.templateCache===undefined){W.templateCache=r.templateCache}if(W.noCache===undefined){W.noCache=r.noCache;W.noCacheVersion=r.noCacheVersion;W.noCacheParam=r.noCacheParam;W.noCacheAuto=r.noCacheAuto}else{if(W.noCache===true){if(W.noCacheVersion===undefined){W.noCacheVersion=r.noCacheVersion}if(W.noCacheParam===undefined){W.noCacheParam=r.noCacheParam}if(W.noCacheAuto===undefined){W.noCacheAuto=r.noCacheAuto}}}var i=W.name;L[i]=L[i]||{};L[i].loadOrder={};L[i].loadOrder=j(L[i].loadOrder,O.OBJ_TPL.loadOrder);var V=L[i].loadOrder.presentOrder();l(i,V);L[i].define=W;y(i,V)};var O={};O.OBJ_TPL={config:{noCache:false,noCacheVersion:1,noCacheParam:"noCacheVersion",noCacheAuto:false,templateCache:true,charSet:"utf-8",defineFileName:"define",path:{controllers:"controllers",models:"models",views:"views"},developmentHostList:[],applicationPath:{}},define:{extLib:[],controllers:[],models:[],views:[],templates:[],onLoad:function(){},beforeController:function(){},afterController:function(){}},loadOrder:{index:0,init:function(){this.index=0},presentOrder:function(){return this.order[this.index]},nextOrder:function(){return this.order[++this.index]},isLastOrder:function(){return(this.index+1)==this.order.length},order:["extLib","controllers","models","views"]}};O.depart=O.depart||{};O.common=O.common||{};O.common.models=O.common.models||{};O.common.views=O.common.views||{};var L={ctrlerStack:[]},s={},A={},r=c(O.OBJ_TPL.config),m=window.location.pathname,Q=window.location.search,K=document.getElementsByTagName("script"),G,d,n,B=null;for(var R=K.length;R--;){d=K[R].src;n=d.match(/tipJS-MVC-1\.26\.js$/);if(n){G=d.substring(0,d.length-n[0].length);break}}document.write('<script type="text/javascript" charset="UTF-8" src="'+G+"tipJS.config.js?"+r.noCacheParam+"="+Math.random()+'"><\/script>');if(Q.match("(\\?|&)debug")!==null||m.match("debug")!==null){B=true}else{if(Q.match("(\\?|&)nodebug")!==null||m.match("nodebug")!==null){B=false}}tipJS.isDevelopment=B})();