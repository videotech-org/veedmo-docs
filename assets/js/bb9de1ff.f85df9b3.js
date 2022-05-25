"use strict";(self.webpackChunkveedmo_docs=self.webpackChunkveedmo_docs||[]).push([[416],{3905:function(t,l,e){e.d(l,{Zo:function(){return s},kt:function(){return c}});var n=e(7294);function r(t,l,e){return l in t?Object.defineProperty(t,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[l]=e,t}function o(t,l){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),e.push.apply(e,n)}return e}function a(t){for(var l=1;l<arguments.length;l++){var e=null!=arguments[l]?arguments[l]:{};l%2?o(Object(e),!0).forEach((function(l){r(t,l,e[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))}))}return t}function i(t,l){if(null==t)return{};var e,n,r=function(t,l){if(null==t)return{};var e,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)e=o[n],l.indexOf(e)>=0||(r[e]=t[e]);return r}(t,l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)e=o[n],l.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var u=n.createContext({}),d=function(t){var l=n.useContext(u),e=l;return t&&(e="function"==typeof t?t(l):a(a({},l),t)),e},s=function(t){var l=d(t.components);return n.createElement(u.Provider,{value:l},t.children)},k={inlineCode:"code",wrapper:function(t){var l=t.children;return n.createElement(n.Fragment,{},l)}},p=n.forwardRef((function(t,l){var e=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),p=d(e),c=r,b=p["".concat(u,".").concat(c)]||p[c]||k[c]||o;return e?n.createElement(b,a(a({ref:l},s),{},{components:e})):n.createElement(b,a({ref:l},s))}));function c(t,l){var e=arguments,r=l&&l.mdxType;if("string"==typeof t||r){var o=e.length,a=new Array(o);a[0]=p;var i={};for(var u in l)hasOwnProperty.call(l,u)&&(i[u]=l[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,a[1]=i;for(var d=2;d<o;d++)a[d]=e[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,e)}p.displayName="MDXCreateElement"},4077:function(t,l,e){e.r(l),e.d(l,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var n=e(7462),r=e(3366),o=(e(7294),e(3905)),a=["components"],i={title:"Embed using code snippet",id:"embed-using-js-code-snippet",pagination_prev:null,pagination_next:null,custom_edit_url:null},u="Embed video player using code snippet",d={unversionedId:"video-player/embed-using-js-code-snippet",id:"video-player/embed-using-js-code-snippet",title:"Embed using code snippet",description:"To embed Veedmo video player using manual JavaScript configuration you need to add, to your website, specially prepared JavaScript code snippet and manually set all configuration options in it.",source:"@site/docs/01-video-player/embed-using-js-code-snippet.md",sourceDirName:"01-video-player",slug:"/video-player/embed-using-js-code-snippet",permalink:"/video-player/embed-using-js-code-snippet",editUrl:null,tags:[],version:"current",frontMatter:{title:"Embed using code snippet",id:"embed-using-js-code-snippet",pagination_prev:null,pagination_next:null,custom_edit_url:null},sidebar:"docsSidebar"},s=[{value:"JavaScript code snippet (sample)",id:"javascript-code-snippet-sample",children:[],level:2},{value:"Configuration parameters",id:"configuration-parameters",children:[],level:2},{value:"Macros",id:"macros",children:[],level:2},{value:"Live example",id:"live-example",children:[{value:"Instream player example",id:"instream-player-example",children:[],level:3},{value:"Outstream player example",id:"outstream-player-example",children:[],level:3}],level:2}],k={toc:s};function p(t){var l=t.components,e=(0,r.Z)(t,a);return(0,o.kt)("wrapper",(0,n.Z)({},k,e,{components:l,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"embed-video-player-using-code-snippet"},"Embed video player using code snippet"),(0,o.kt)("p",null,"To embed Veedmo video player using manual JavaScript configuration you need to add, to your website, specially prepared JavaScript code snippet and manually set all configuration options in it."),(0,o.kt)("h2",{id:"javascript-code-snippet-sample"},"JavaScript code snippet (sample)"),(0,o.kt)("p",null,"Specially prepared JavaScript code snippet (mentioned below) can be added to website in various ways (e.g. via 3rd party frameworks, Google Tag Manager, ...); we recommend to inject it before closing ",(0,o.kt)("inlineCode",{parentName:"p"},"</body>")," tag as it requires website's DOM (Document Object Model) to be loaded, so player could be injected in given (in configuration) query selector on page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'(function veedmoPlayer(j) {\n  (function veedmoEl() {\n    var elem = document.querySelector(j.query_selector);\n    if (elem) {\n      if (!window.veedmoLoad) {\n        window.veedmoLoad = [];\n        var script = document.createElement(\'script\');\n        script.onload = function () {\n          for (var i = 0; i < window.veedmoLoad.length; i++) {\n            window.veedmoLoad[i]();\n          }\n        };\n        script.src = "//cdn.veedmo-static.com/cdn/player/v2/current.js";\n        document.body ? document.body.appendChild(script) : document.head.appendChild(script);\n      }\n      window.veedmo ? new window.veedmo().runManual(j) : window.veedmoLoad.push(function() { new window.veedmo().runManual(j); });\n    } else {\n      setTimeout(veedmoEl, 100);\n    }\n  })();\n})({\n  "partner_id": UNIQUE_NUMERIC_PARTNER_ID,\n  "query_selector": "#element",\n  "insert_method": 0,\n  "autoplay": 3,\n  "muted": 1,\n  "ad_type": 1,\n  "video_url": "https://cdn.veedmo-static.com/cdn/samples/videos/sample-video-waves.mp4",\n  "video_title": "Sample video title",\n  "tag_url_desktop": "",\n  "tag_url_mobile": "",\n  "position": 3,\n  "responsive": 1,\n  "corner": "bl",\n  "vertical_margin": 20,\n  "horizontal_margin": 20,\n  "minimum_width": 140,\n  "maximum_width": 400,\n  "maximum_width_percent": 25,\n  "maximum_height_percent_mobile": 25,\n});\n')),(0,o.kt)("h2",{id:"configuration-parameters"},"Configuration parameters"),(0,o.kt)("p",null,"Below there is a list of supported configuration parameters. ",(0,o.kt)("span",{class:"highlight--red"},(0,o.kt)("strong",null,"*"))," - mandatory parameter."),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("strong",null,"Param")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Description"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"partner_id")," ",(0,o.kt)("span",{class:"highlight--red"},(0,o.kt)("strong",null,"*"))),(0,o.kt)("td",null,"Unique numeric ID of Veedmo partner account. ",(0,o.kt)("a",{class:"nav-link","data-section-id":"contact"},"Contact us")," to obtain your partner account and ",(0,o.kt)("code",null,"partner_id"),".")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"query_selector")," ",(0,o.kt)("span",{class:"highlight--red"},(0,o.kt)("strong",null,"*"))),(0,o.kt)("td",null,"JavaScript querySelector (e.g. id, class name) of the page element to inject player into.",(0,o.kt)("br",null),(0,o.kt)("br",null),"IMPORTANT: do not use ",(0,o.kt)("strong",null,"veedmo")," as your query selector name as it is system reserved name.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"ad_type")," ",(0,o.kt)("span",{class:"highlight--red"},(0,o.kt)("strong",null,"*"))),(0,o.kt)("td",null,"Possible values:",(0,o.kt)("br",null),(0,o.kt)("strong",null,"0")," - outstream (in this case, there is no need to specify ",(0,o.kt)("code",null,"video_url")," param - can be empty)",(0,o.kt)("br",null),(0,o.kt)("strong",null,"1")," - instream (in this case, ",(0,o.kt)("code",null,"video_url")," param has to be set too)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"tag_url_desktop")," ",(0,o.kt)("span",{class:"highlight--red"},(0,o.kt)("strong",null,"*"))),(0,o.kt)("td",null,"URL(s) of ad tag(s), or pure XML(s) content of ad(s), to display on desktop devices. If empty, no ad(s) will be displayed on desktop devices.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Handles single URL, or XML content of ad tag, or multiple URLs / XMLs content, via waterfall mechanism.",(0,o.kt)("br",null),(0,o.kt)("br",null),"To set up waterfall mechanism, pass array of objects, where each object contains ad tag URL / XML content, and a type (acceptable types are: ",(0,o.kt)("code",null,"vast")," - for VAST / VMAP ad tag URL(s), ",(0,o.kt)("code",null,"vpaid")," - for VPAID ad tag URL(s), ",(0,o.kt)("code",null,"vastxml")," - for ad XML(s) content).",(0,o.kt)("br",null),(0,o.kt)("br",null),"Example:",(0,o.kt)("code",null,'"tag_url_mobile": [',(0,o.kt)("br",null),"\xa0\xa0","{",(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0url: "AD_TAG_1 URL",',(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0type: "vast"',(0,o.kt)("br",null),"\xa0\xa0","}",",",(0,o.kt)("br",null),"\xa0\xa0","{",(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0url: "AD_TAG_2 URL",',(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0type: "vpaid"',(0,o.kt)("br",null),"\xa0\xa0","}",",",(0,o.kt)("br",null),"\xa0\xa0","{",(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0url: "AD_TAG_3 pure XML content",',(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0type: "vastxml"',(0,o.kt)("br",null),"\xa0\xa0","}",",",(0,o.kt)("br",null),"],"),"Waterfall mechanism waits max. 5sec for each ad request to return response. If no ad, empty ad or ad error is returned, mechanism jumps to next ad tag, in set order, and performs request.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Mandatory, if ",(0,o.kt)("code",null,"ad_type")," is set to ",(0,o.kt)("strong",null,"0"),". Optional, if ",(0,o.kt)("code",null,"ad_type")," is set to ",(0,o.kt)("strong",null,"1"),".")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"tag_url_mobile")," ",(0,o.kt)("span",{class:"highlight--red"},(0,o.kt)("strong",null,"*"))),(0,o.kt)("td",null,"URL(s) of ad tag(s), or pure XML(s) content of ad(s), to display on mobile devices. If empty, no ad(s) will be displayed on mobile devices.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Handles single URL, or XML content of ad tag, or multiple URLs / XMLs content, via waterfall mechanism.",(0,o.kt)("br",null),(0,o.kt)("br",null),"To set up waterfall mechanism, pass array of objects, where each object contains ad tag URL / XML content, and a type (acceptable types are: ",(0,o.kt)("code",null,"vast")," - for VAST / VMAP ad tag URL(s), ",(0,o.kt)("code",null,"vpaid")," - for VPAID ad tag URL(s), ",(0,o.kt)("code",null,"vastxml")," - for ad XML(s) content).",(0,o.kt)("br",null),(0,o.kt)("br",null),"Example:",(0,o.kt)("code",null,'"tag_url_mobile": [',(0,o.kt)("br",null),"\xa0\xa0","{",(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0url: "AD_TAG_1 URL",',(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0type: "vast"',(0,o.kt)("br",null),"\xa0\xa0","}",",",(0,o.kt)("br",null),"\xa0\xa0","{",(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0url: "AD_TAG_2 URL",',(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0type: "vpaid"',(0,o.kt)("br",null),"\xa0\xa0","}",",",(0,o.kt)("br",null),"\xa0\xa0","{",(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0url: "AD_TAG_3 pure XML content",',(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0type: "vastxml"',(0,o.kt)("br",null),"\xa0\xa0","}",",",(0,o.kt)("br",null),"],"),"Waterfall mechanism waits max. 5sec for each ad tag request to return response. If no ad, empty ad or ad error is returned, mechanism jumps to next ad tag, in set order, and performs request.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Mandatory, if ",(0,o.kt)("code",null,"ad_type")," is set to ",(0,o.kt)("strong",null,"0"),". Optional, if ",(0,o.kt)("code",null,"ad_type")," is set to ",(0,o.kt)("strong",null,"1"),".")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"video_url")," ",(0,o.kt)("span",{class:"highlight--red"},(0,o.kt)("strong",null,"*"))),(0,o.kt)("td",null,"URL of video file. Mandatory, if ",(0,o.kt)("code",null,"ad_type")," is set to ",(0,o.kt)("strong",null,"1"),". Optional, if ",(0,o.kt)("code",null,"ad_type")," is set to ",(0,o.kt)("strong",null,"0"),".")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"responsive")," ",(0,o.kt)("span",{class:"highlight--red"},(0,o.kt)("strong",null,"*"))),(0,o.kt)("td",null,"Possible values:",(0,o.kt)("br",null),(0,o.kt)("strong",null,"1")," - player will resize to the parent container width",(0,o.kt)("br",null),(0,o.kt)("strong",null,"2")," - player will have fixed size (requires to set ",(0,o.kt)("code",null,"width")," param)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"insert_method")),(0,o.kt)("td",null,"Possible values:",(0,o.kt)("br",null),(0,o.kt)("strong",null,"0"),' - inject player inside "query_selector" target element (appendChild)',(0,o.kt)("br",null),(0,o.kt)("strong",null,"1"),' - inject player before "query_selector" target element (beforebegin)',(0,o.kt)("br",null),(0,o.kt)("strong",null,"2"),' - inject player inside "query_selector" target element, after its last child (beforeend)',(0,o.kt)("br",null),(0,o.kt)("strong",null,"3"),' - inject player inside "query_selector" target element, before its first child (afterbegin)',(0,o.kt)("br",null),(0,o.kt)("strong",null,"4"),' - inject player after "query_selector" target element (afterend)',(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"0")," (appendChild) will be used.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"autoplay")),(0,o.kt)("td",null,"Possible values:",(0,o.kt)("br",null),(0,o.kt)("strong",null,"1")," - autoplay off",(0,o.kt)("br",null),(0,o.kt)("strong",null,"2")," - autoplay on",(0,o.kt)("br",null),(0,o.kt)("strong",null,"3")," - autoplay starts when min. 50% of player height is in browser's viewport",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"1")," (autoplay off) will be used.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"muted")),(0,o.kt)("td",null,"Possible values:",(0,o.kt)("br",null),(0,o.kt)("strong",null,"0")," - muted off",(0,o.kt)("br",null),(0,o.kt)("strong",null,"1")," - muted on",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"0")," (muted off) will be used.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Recommended setting: ",(0,o.kt)("strong",null,"1")," (as browser tend to block unmuted videos when trying to autoplay).")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"video_title")),(0,o.kt)("td",null,"Title of video added in ",(0,o.kt)("code",null,"video_url")," param. By default it's empty.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"video_description")),(0,o.kt)("td",null,"Description of video added in ",(0,o.kt)("code",null,"video_url")," param. By default it's empty.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"video_poster")),(0,o.kt)("td",null,"URL of video's poster image (shown in player before video starts to play). By default it's empty.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"width")),(0,o.kt)("td",null,"Player width, in pixels (px). Required only if ",(0,o.kt)("code",null,"responsive")," is set to ",(0,o.kt)("strong",null,"2"),".")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"maximum_height_percent_mobile")),(0,o.kt)("td",null,"Max. height of floating player (",(0,o.kt)("code",null,"position")," set to ",(0,o.kt)("strong",null,"2")," or ",(0,o.kt)("strong",null,"3"),") on mobile devices only, in percentage (%) - value relative to mobile device screen height.",(0,o.kt)("br",null),(0,o.kt)("br",null),"If set to ",(0,o.kt)("strong",null,"0"),", or not defined at all, the player will set its height automatically, based on video size.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Recommended setting: ",(0,o.kt)("strong",null,"20")," or ",(0,o.kt)("strong",null,"25")," (to keep player in viewport, maximize viewability, and not annoy visitor).")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"position")),(0,o.kt)("td",null,"Possible values:",(0,o.kt)("br",null),(0,o.kt)("strong",null,"1")," - player will appear in page content",(0,o.kt)("br",null),(0,o.kt)("strong",null,"2")," - player (floating) will appear in corner of the screen (corner defined in ",(0,o.kt)("code",null,"corner")," param)",(0,o.kt)("br",null),(0,o.kt)("strong",null,"3")," - player will appear in page content, and switch to floating mode when min. 50% of player height will be out of browser's viewport (floating mode screen corner is defined in ",(0,o.kt)("code",null,"corner")," param)",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"1")," (in page content) will be used.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Recommended setting: ",(0,o.kt)("strong",null,"3")," (to maximize viewability).")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"corner")),(0,o.kt)("td",null,"Corner of the screen in which floating player will appear. Required only if ",(0,o.kt)("code",null,"position")," is set to ",(0,o.kt)("strong",null,"2")," or ",(0,o.kt)("strong",null,"3"),".",(0,o.kt)("br",null),(0,o.kt)("br",null),"Possible values:",(0,o.kt)("br",null),(0,o.kt)("strong",null,"bl")," - bottom left corner of the screen",(0,o.kt)("br",null),(0,o.kt)("strong",null,"br")," - bottom right corner of the screen",(0,o.kt)("br",null),(0,o.kt)("strong",null,"tl")," - top left corner of the screen",(0,o.kt)("br",null),(0,o.kt)("strong",null,"tr")," - top right corner of the screen",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"br")," (bottom right) will be used.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"vertical_margin")),(0,o.kt)("td",null,"Floating player distance from top / bottom (depending on set ",(0,o.kt)("code",null,"corner")," param value) edge of the screen, in pixels (px). Required only if ",(0,o.kt)("code",null,"position")," is set to ",(0,o.kt)("strong",null,"2")," or ",(0,o.kt)("strong",null,"3"),".",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"20")," (20px) will be used.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"horizontal_margin")),(0,o.kt)("td",null,"Floating player distance from left / right (depending on set ",(0,o.kt)("code",null,"corner")," param value) edge of the screen, in pixels (px). Required only if ",(0,o.kt)("code",null,"position")," is set to ",(0,o.kt)("strong",null,"2")," or ",(0,o.kt)("strong",null,"3"),".",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"20")," (20px) will be used.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"minimum_width")),(0,o.kt)("td",null,"Floating player min. width, in pixels (px). Required only if ",(0,o.kt)("code",null,"position")," is set to ",(0,o.kt)("strong",null,"2")," or ",(0,o.kt)("strong",null,"3"),".",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"140")," (140px) will be used.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"maximum_width")),(0,o.kt)("td",null,"Floating player max. width, in pixels (px). Required only if ",(0,o.kt)("code",null,"position")," is set to ",(0,o.kt)("strong",null,"2")," or ",(0,o.kt)("strong",null,"3"),".",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"500")," (500px) will be used.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"maximum_width_percent")),(0,o.kt)("td",null,"Floating player width, in percentage (%) - value relative to screen width. Required only if ",(0,o.kt)("code",null,"position")," is set to ",(0,o.kt)("strong",null,"2")," or ",(0,o.kt)("strong",null,"3"),".",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"30")," (30%) will be used.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"aspect_ratio")),(0,o.kt)("td",null,"Player's aspect ratio.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Possible values:",(0,o.kt)("br",null),(0,o.kt)("strong",null,"16:9"),(0,o.kt)("br",null),(0,o.kt)("strong",null,"4:3"),(0,o.kt)("br",null),(0,o.kt)("strong",null,"1:1"),(0,o.kt)("br",null),(0,o.kt)("strong",null,"9:16"),(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, player will use video's aspect ratio and scale automatically to it.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"block_if_adblock")),(0,o.kt)("td",null,"Player behaviour when adblock is detected in browser, and ",(0,o.kt)("code",null,"tag_url_desktop")," or ",(0,o.kt)("code",null,"tag_url_mobile")," are set.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Possible values:",(0,o.kt)("br",null),(0,o.kt)("strong",null,"0")," - play video despite blocked ad",(0,o.kt)("br",null),(0,o.kt)("strong",null,"1")," - block video and display custom message in player (message defined in ",(0,o.kt)("code",null,"adblock_message")," param)",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"1")," (block video) will be used.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"adblock_message")),(0,o.kt)("td",null,"Custom message content to display in player, if adblock was detected and enabled.",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"To watch this video please disable your adblock.")," will be used.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"close_btn_time_offset")),(0,o.kt)("td",null,"Time after which X button will appear in floating player, in milliseconds (ms). Required only if ",(0,o.kt)("code",null,"position")," is set to ",(0,o.kt)("strong",null,"2")," or ",(0,o.kt)("strong",null,"3"),", or ",(0,o.kt)("code",null,"ad_type")," is set to ",(0,o.kt)("strong",null,"0"),".",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"3000")," (3sec) will be used.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"close_btn_skip_ad")),(0,o.kt)("td",null,"To maximize ad impressions, X button (closing player's floating mode - when ",(0,o.kt)("code",null,"position")," is set to ",(0,o.kt)("strong",null,"2")," or ",(0,o.kt)("strong",null,"3"),") can be used to skip ads (or ad pods) instead of direcly closing floating mode (and decreasing chances to more ad impressions).",(0,o.kt)("br",null),(0,o.kt)("br",null),"Possible values:",(0,o.kt)("br",null),(0,o.kt)("strong",null,"0")," - do not skip ads (or ad pods) on click in X button (floating mode)",(0,o.kt)("br",null),(0,o.kt)("strong",null,"1")," - skip ads (or ad pods) on click in X button (floating mode)",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"0")," (do not skip ads on clicks in X button) will be used.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"ad_empty_autoplay")),(0,o.kt)("td",null,"Autoplay behaviour (on / off) depending on ad status.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Possible values:",(0,o.kt)("br",null),(0,o.kt)("strong",null,"0")," - autoplay will start only if ad returned by ad server was not empty, or there was no ad error",(0,o.kt)("br",null),(0,o.kt)("strong",null,"1")," - autoplay will start always",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"1")," (start always) will be used.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Recommended setting: ",(0,o.kt)("strong",null,"0")," (to maximize ad viewability, and not use data transfer when visitor cannot be monetized).")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"ad_empty_hide_player")),(0,o.kt)("td",null,"Player show / hide behaviour depending on ad status.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Possible values:",(0,o.kt)("br",null),(0,o.kt)("strong",null,"0")," - player will always appear on page",(0,o.kt)("br",null),(0,o.kt)("strong",null,"1")," - player will appear on page only if ad returned by ad server was not empty, or there was no ad error",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"0")," (appear always) will be used.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Recommended setting: ",(0,o.kt)("strong",null,"0")," (to avoid page content jumping).")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"ad_empty_or_played_disable_sticky")),(0,o.kt)("td",null,"Floating mode (",(0,o.kt)("code",null,"position")," set to ",(0,o.kt)("strong",null,"3"),") behaviour depending on ad status.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Possible values:",(0,o.kt)("br",null),(0,o.kt)("strong",null,"0")," - player will always switch to floating mode",(0,o.kt)("br",null),(0,o.kt)("strong",null,"1")," - player will switch to floating mode:",(0,o.kt)("br",null),"- if ad returned by ad server was not empty, or there was no ad error",(0,o.kt)("br",null),"- until last ad returned by ad server, has finished to play",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"0")," (always switch to floating mode) will be used.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Recommended setting: ",(0,o.kt)("strong",null,"1")," (to maximize ad viewability, and not annoy visitor).")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"ad_empty_callback")),(0,o.kt)("td",null,"Callback funtion called when no pre-roll ad will be returned by ad server, or visitor has ad block enabled and ad cannot be obtained from ad server.",(0,o.kt)("br",null),(0,o.kt)("br",null),"If both, ",(0,o.kt)("code",null,"ad_empty_callback")," and ",(0,o.kt)("code",null,"ad_empty_player")," are defined, ",(0,o.kt)("code",null,"ad_empty_player")," has priority, and launches as first.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Example:",(0,o.kt)("code",null,'"ad_empty_callback": function() ',"{",(0,o.kt)("br",null),"\xa0\xa0// JavaScript code to run",(0,o.kt)("br",null),"}"),"If not defined, it is not used.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"ad_empty_player")),(0,o.kt)("td",null,"Fallback called when no pre-roll ad will be returned by ad server, allowing to load alternative player config (e.g. if instream ad won't be returned by ad server, fallback to outstream ad).",(0,o.kt)("br",null),(0,o.kt)("br",null),"If both, ",(0,o.kt)("code",null,"ad_empty_callback")," and ",(0,o.kt)("code",null,"ad_empty_player")," are defined, ",(0,o.kt)("code",null,"ad_empty_player")," has priority, and launches as first.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Example (fallback instream to outstream):",(0,o.kt)("code",null,'"ad_empty_player": ',"{",(0,o.kt)("br",null),'\xa0\xa0"ad_type": 0, // outstream ads',(0,o.kt)("br",null),'\xa0\xa0"tag_url_desktop": "AD_TAG_1 URL",',(0,o.kt)("br",null),'\xa0\xa0"tag_url_mobile": "AD_TAG_2 URL",',(0,o.kt)("br",null),"}"),"If not defined, it is not used.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"enable_sticky_on_outside_viewport")),(0,o.kt)("td",null,"Floating mode (",(0,o.kt)("code",null,"position")," set to ",(0,o.kt)("strong",null,"3"),") behaviour depending on ad status and player visibility in viewport.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Possible values:",(0,o.kt)("br",null),(0,o.kt)("strong",null,"0")," - player will switch to floating mode after page visitor will pass it, while scrolling the page",(0,o.kt)("br",null),(0,o.kt)("strong",null,"1")," - player will switch to floating mode after page visitor will pass it, while scrolling the page, and additionally straight after player was loaded on page (only if ad was returned by ad server, and player was loaded on page out of viewport)",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"0")," (switch to floating mode after page visitor will pass player, while scrolling the page) will be used.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Recommended setting: ",(0,o.kt)("strong",null,"1")," (to maximize ad viewability).")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"block_playback_outside_viewport")),(0,o.kt)("td",null,"Playback status depending on player visibility to the page visitor.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Possible values:",(0,o.kt)("br",null),(0,o.kt)("strong",null,"0")," - do not pause playback when player is not visible to the visitor",(0,o.kt)("br",null),(0,o.kt)("strong",null,"1")," - pause playback, when player is not visible to the visitor (auto resume playback when player is visible to the visitor)",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"1")," (pause playback, when player is not visible to the visitor) will be used.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Recommended setting: ",(0,o.kt)("strong",null,"1")," (to not hurt CPMs and ad revenue).")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"consent_string_timeout")),(0,o.kt)("td",null,"Delays player load to wait for page visitor to accept page's privacy policies, in seconds.",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, player on load (before requesting ad) will check page visitor's privacy policies consent status and use it when requesting ad.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"seo_metadata")),(0,o.kt)("td",null,"Adds video schema markup, based on ",(0,o.kt)("a",{href:"https://developers.google.com/search/docs/advanced/structured-data/video",target:"_blank"},"VideoObject schema"),", to make search engines better aware of the type of content you have on your website. Added markup data are: ",(0,o.kt)("code",null,"name"),", ",(0,o.kt)("code",null,"duration"),", ",(0,o.kt)("code",null,"description"),", ",(0,o.kt)("code",null,"contentUrl"),", ",(0,o.kt)("code",null,"thumbnailUrl"),".",(0,o.kt)("br",null),(0,o.kt)("br",null),"Possible values:",(0,o.kt)("br",null),(0,o.kt)("strong",null,"0")," - do not add video schema markup to the player",(0,o.kt)("br",null),(0,o.kt)("strong",null,"1")," - add video schema markup to the player",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"0")," (do not add video schema markup) will be used.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"branding")),(0,o.kt)("td",null,"Customizable player branding. Branding can appear in two forms:",(0,o.kt)("br",null),(0,o.kt)("code",null,"corner")," - 20px height (max. 70px width) clickable image in top right corner of player (appears only on paused/finished video)",(0,o.kt)("br",null),(0,o.kt)("code",null,"bar")," - 16px height bar (with 10px height image) on bottom of player (appears always, when configured - hidden by default)",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("code",null,"corner")," and ",(0,o.kt)("code",null,"bar")," are objects, with 3 configurable parameters each:",(0,o.kt)("br",null),(0,o.kt)("strong",null,"text")," - text which will appear (on hover of corner image, or on bottom bar)",(0,o.kt)("br",null),(0,o.kt)("strong",null,"link")," - URL which will be opened on click on text set in ",(0,o.kt)("code",null,"text")," or / and ",(0,o.kt)("code",null,"image"),(0,o.kt)("br",null),(0,o.kt)("strong",null,"image")," - URL of image (formats: *.jpg, *.png, *.svg) which will appear in corner, or on bar (after the text)",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, only ",(0,o.kt)("strong",null,"Powered by Veedmo")," will appear in top right corner of player.")))),(0,o.kt)("h2",{id:"macros"},"Macros"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("strong",null,"Macro")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Description"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"$$WIDTH$$")),(0,o.kt)("td",null,"Numeric value. Returns player width, in pixels.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"$$HEIGHT$$")),(0,o.kt)("td",null,"Numeric value. Returns player height, in pixels.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"$$REFERER$$")),(0,o.kt)("td",null,"Returns hostname and path of website, where player is embedded (e.g. ",(0,o.kt)("code",null,"domain.com/news/article"),").")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"$$REFERER_DOMAIN$$")),(0,o.kt)("td",null,"Returns hostname of website, where player is embedded (e.g. ",(0,o.kt)("code",null,"domain.com"),").")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"$$GDPR$$")),(0,o.kt)("td",null,"Passes information about GDPR status on website:",(0,o.kt)("br",null),(0,o.kt)("strong",null,"0")," - GDPR not required",(0,o.kt)("br",null),(0,o.kt)("strong",null,"1")," - GDPR required",(0,o.kt)("br",null),(0,o.kt)("br",null),"Used in pair with the $$GDPR_CONSENT$$ macro.",(0,o.kt)("br",null),(0,o.kt)("br",null),"IMPORTANT: ",(0,o.kt)("a",{href:"https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework",target:"_blank"},"IAB\u2019s GDPR Transparency & Consent Framework")," must be implemented on website for this to work.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"$$GDPR_CONSENT$$")),(0,o.kt)("td",null,"Passes GDPR consent string content, only when GDPR is required (defined by $$GDPR$$ macro). If GDPR is not required, value is not set.",(0,o.kt)("br",null),(0,o.kt)("br",null),"Used in pair with the $$GDPR$$ macro.",(0,o.kt)("br",null),(0,o.kt)("br",null),"IMPORTANT: ",(0,o.kt)("a",{href:"https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework",target:"_blank"},"IAB\u2019s GDPR Transparency & Consent Framework")," must be implemented on website for this to work.")))),(0,o.kt)("h2",{id:"live-example"},"Live example"),(0,o.kt)("p",null,'Below there is an the example showing how Veedmo video player can be embedded on page using manual JavaScript configuration. Click on "Result" tab to see the result.'),(0,o.kt)("h3",{id:"instream-player-example"},"Instream player example"),(0,o.kt)("iframe",{width:"100%",height:"600",src:"//jsfiddle.net/veedmo/qfroesdy/104/embedded/html,result/dark/",allowfullscreen:"allowfullscreen",allowpaymentrequest:!0,frameborder:"0"}),(0,o.kt)("h3",{id:"outstream-player-example"},"Outstream player example"),(0,o.kt)("iframe",{width:"100%",height:"600",src:"//jsfiddle.net/veedmo/tsL3z72m/7/embedded/html,result/dark/",allowfullscreen:"allowfullscreen",allowpaymentrequest:!0,frameborder:"0"}))}p.isMDXComponent=!0}}]);