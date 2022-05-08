"use strict";(self.webpackChunkveedmo_docs=self.webpackChunkveedmo_docs||[]).push([[665],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),d=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return l.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=d(n),k=r,m=p["".concat(s,".").concat(k)]||p[k]||c[k]||o;return n?l.createElement(m,i(i({ref:t},u),{},{components:n})):l.createElement(m,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var d=2;d<o;d++)i[d]=n[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5335:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var l=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],a={title:"Embed using code snippet",id:"embed-using-js-code-snippet",pagination_prev:null,pagination_next:null,custom_edit_url:null},s="Embed stories using code snippet",d={unversionedId:"stories/embed-using-js-code-snippet",id:"stories/embed-using-js-code-snippet",title:"Embed using code snippet",description:"To embed Veedmo stories using manual JavaScript configuration you need to add, to your website, specially prepared JavaScript code snippet and manually set all configuration options in it.",source:"@site/docs/03-stories/embed-using-js-code-snippet.md",sourceDirName:"03-stories",slug:"/stories/embed-using-js-code-snippet",permalink:"/veedmo-docs/0c8bb67063965bdc55da8fe7ede86402e20a55de/stories/embed-using-js-code-snippet",editUrl:null,tags:[],version:"current",frontMatter:{title:"Embed using code snippet",id:"embed-using-js-code-snippet",pagination_prev:null,pagination_next:null,custom_edit_url:null},sidebar:"docsSidebar"},u=[{value:"JavaScript code snippet (sample)",id:"javascript-code-snippet-sample",children:[],level:2},{value:"Configuration parameters",id:"configuration-parameters",children:[],level:2},{value:"Live example",id:"live-example",children:[],level:2}],c={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"embed-stories-using-code-snippet"},"Embed stories using code snippet"),(0,o.kt)("p",null,"To embed Veedmo stories using manual JavaScript configuration you need to add, to your website, specially prepared JavaScript code snippet and manually set all configuration options in it."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In some cases, Veedmo stories might be blocked by ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/wiki/CORS_Enabled"},"CORS")," mechanism and do not load RSS feed - such situation can happen when RSS feed (set in ",(0,o.kt)("inlineCode",{parentName:"p"},"rss_url")," param) is hosted in different domain (e.g. domain-1.com) than Veedmo stories were loaded (e.g. domain-2.com)."),(0,o.kt)("p",{parentName:"div"},"To resolve this problem, and make Veedmo stories to load RSS feed correctly, the server hosting RSS feed (e.g. domain-1.com), should add domain on which Veedmo stories are loaded (e.g. domain-2.com) to CORS whitelist (property ",(0,o.kt)("strong",{parentName:"p"},"Access-Control-Allow-Origin"),")."))),(0,o.kt)("h2",{id:"javascript-code-snippet-sample"},"JavaScript code snippet (sample)"),(0,o.kt)("p",null,"Specially prepared JavaScript code snippet (mentioned below) can be added to website in various ways (e.g. via 3rd party frameworks, Google Tag Manager, ...); we recommend to inject it before closing ",(0,o.kt)("inlineCode",{parentName:"p"},"</body>")," tag as it requires website's DOM (Document Object Model) to be loaded, so player could be injected in given (in configuration) query selector on page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'(function veedmoSlider(config) {\n  (function veedmoSliderApply() {\n    var el = document.querySelector(config.query_selector);\n    if (el) {\n      var script = document.createElement("script");\n      script.src = "https://cdn.veedmo-static.com/cdn/slideshow/v1/current.js";\n      document.body ? document.body.appendChild(script) : document.head.appendChild(script);\n      script.addEventListener("load", function() {\n        window.veedmoSlider(config);\n      });\n    } else {\n      setTimeout(veedmoSliderApply, 100);\n    }\n  })();\n})({\n  "partner_id": UNIQUE_NUMERIC_PARTNER_ID,\n  "rss_url": "https://www.theverge.com/rss/index.xml",\n  "max_slides_amount": 7,\n  "query_selector": "#element",\n  "slide_duration": 4,\n  "theme_color": "#2962ff",\n  "max_number_of_injected_ads": 0,\n  "video_player_config": {\n    "tag_url_desktop": "",\n    "tag_url_mobile": ""\n  }\n});\n')),(0,o.kt)("h2",{id:"configuration-parameters"},"Configuration parameters"),(0,o.kt)("p",null,"Below there is a list of supported configuration parameters. ",(0,o.kt)("span",{class:"highlight--red"},(0,o.kt)("strong",null,"*"))," - mandatory parameter."),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("strong",null,"Param")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Description"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"partner_id")," ",(0,o.kt)("span",{class:"highlight--red"},(0,o.kt)("strong",null,"*"))),(0,o.kt)("td",null,"Unique numeric ID of Veedmo partner account. ",(0,o.kt)("a",{class:"nav-link","data-section-id":"contact"},"Contact us")," to obtain your partner account and ",(0,o.kt)("code",null,"partner_id"),".")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"query_selector")," ",(0,o.kt)("span",{class:"highlight--red"},(0,o.kt)("strong",null,"*"))),(0,o.kt)("td",null,"JavaScript querySelector (e.g. id, class name) of the page element to inject stories into.",(0,o.kt)("br",null),(0,o.kt)("br",null),"IMPORTANT: do not use ",(0,o.kt)("strong",null,"veedmo")," as your query selector name as it is system reserved name.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"rss_url")," ",(0,o.kt)("span",{class:"highlight--red"},(0,o.kt)("strong",null,"*"))),(0,o.kt)("td",null,"URL of RSS feed to generate stories from.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"slide_duration")),(0,o.kt)("td",null,"Time duration of showing single slide (in seconds).",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"4 seconds")," will be used.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"max_slides_amount")),(0,o.kt)("td",null,"Max. number of slides to be shown in stories.",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"6")," will be used.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"position")),(0,o.kt)("td",null,"Set slider position on page (in page content, floating, in page content + floating).",(0,o.kt)("br",null),(0,o.kt)("br",null),"Possible values:",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("code",null,"type")," param:",(0,o.kt)("br",null),(0,o.kt)("strong",null,"1")," - in page content",(0,o.kt)("br",null),(0,o.kt)("strong",null,"2")," - floating (floating stories corner and distance set by ",(0,o.kt)("code",null,"corner")," and ",(0,o.kt)("code",null,"vertical_margin")," and ",(0,o.kt)("code",null,"horizontal_margin")," params)",(0,o.kt)("br",null),(0,o.kt)("strong",null,"3")," - in page content + floating (floating stories corner and distance set by ",(0,o.kt)("code",null,"corner")," and ",(0,o.kt)("code",null,"vertical_margin")," and ",(0,o.kt)("code",null,"horizontal_margin")," params)",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("code",null,"corner")," param:",(0,o.kt)("br",null),(0,o.kt)("strong",null,"bl")," - bottom left corner of the screen",(0,o.kt)("br",null),(0,o.kt)("strong",null,"br")," - bottom right corner of the screen",(0,o.kt)("br",null),(0,o.kt)("strong",null,"tl")," - top left corner of the screen",(0,o.kt)("br",null),(0,o.kt)("strong",null,"tr")," - top right corner of the screen",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("code",null,"vertical_margin")," - floating stories distance from top / bottom (depending on set ",(0,o.kt)("code",null,"corner")," param value) edge of the screen, in pixels (px) or percent (%). Required only if ",(0,o.kt)("code",null,"position")," is set to ",(0,o.kt)("strong",null,"2")," or ",(0,o.kt)("strong",null,"3"),(0,o.kt)("br",null),(0,o.kt)("code",null,"horizontal_margin")," - floating stories distance from left / right (depending on set ",(0,o.kt)("code",null,"corner")," param value) edge of the screen, in pixels (px) or percent (%). Required only if ",(0,o.kt)("code",null,"position")," is set to ",(0,o.kt)("strong",null,"2")," or ",(0,o.kt)("strong",null,"3"),(0,o.kt)("br",null),(0,o.kt)("code",null,"max_width")," - floating stories max. width,in pixels (px) or percent (%). Required only if ",(0,o.kt)("code",null,"position")," is set to ",(0,o.kt)("strong",null,"2")," or ",(0,o.kt)("strong",null,"3"),(0,o.kt)("br",null),(0,o.kt)("code",null,"min_width")," - floating stories min. width,in pixels (px) or percent (%). Required only if ",(0,o.kt)("code",null,"position")," is set to ",(0,o.kt)("strong",null,"2")," or ",(0,o.kt)("strong",null,"3"),(0,o.kt)("br",null),(0,o.kt)("br",null),"Example:",(0,o.kt)("br",null),(0,o.kt)("code",null,'"position": ',"{",(0,o.kt)("br",null),'\xa0\xa0"type": 3,',(0,o.kt)("br",null),'\xa0\xa0"config": ',"{",(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0"corner": "br",',(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0"vertical_margin": "20px",',(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0"horizontal_margin": "20px",',(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0"max_width": "20%",',(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0"min_width": "300px",',(0,o.kt)("br",null),"\xa0\xa0},",(0,o.kt)("br",null),"},"),"If not defined, stories will appear in page content (without floating mode).")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"theme_color")),(0,o.kt)("td",null,"Stories theme color, used on: progress bars, title bar, hover on controls - HEX RGB (e.g. FF0000) or text value (e.g. red).")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"show_items_without_img")),(0,o.kt)("td",null,"Possible values:",(0,o.kt)("br",null),(0,o.kt)("strong",null,"0")," - do not show, in stories, items from RSS feed which do not have image",(0,o.kt)("br",null),(0,o.kt)("strong",null,"1")," - show, in stories, items from RSS feed which do not have image",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"0")," (do not show items without image) will be used.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"open_links_in_new_tab")),(0,o.kt)("td",null,"Possible values:",(0,o.kt)("br",null),(0,o.kt)("strong",null,"0")," - open slides' links in the same tab (as stories)",(0,o.kt)("br",null),(0,o.kt)("strong",null,"1")," - open slides' links in the new tab",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"1")," (open slides' links in the new tab) will be used.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"max_number_of_injected_ads")),(0,o.kt)("td",null,"Max. number of ads injected in stories. Cannot be greater than ",(0,o.kt)("code",null,"max_slides_amount"),".",(0,o.kt)("br",null),(0,o.kt)("br",null),"Ad is injected after slide.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"video_player_config")),(0,o.kt)("td",null,"Config of video player, handling ads, shown after slides. It is an object containing two elements, ",(0,o.kt)("code",null,"tag_url_desktop")," and ",(0,o.kt)("code",null,"tag_url_mobile"),".",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("code",null,"tag_url_desktop")," - URL(s) of ad tag(s), or pure XML(s) content of ad(s), to display on desktop devices. If empty, no ad(s) will be displayed on mobile devices.",(0,o.kt)("br",null),(0,o.kt)("code",null,"tag_url_mobile")," - URL(s) of ad tag(s), or pure XML(s) content of ad(s), to display on mobile devices. If empty, no ad(s) will be displayed on mobile devices.",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("code",null,"tag_url_desktop")," and ",(0,o.kt)("code",null,"tag_url_mobile")," handle single URL, or XML content of ad tag, or multiple URLs / XMLs content, via waterfall mechanism.",(0,o.kt)("br",null),(0,o.kt)("br",null),"To set up waterfall mechanism, pass array of objects, where each object contains ad tag URL / XML content, and a type (acceptable types are: ",(0,o.kt)("code",null,"vast")," - for ad tag URL(s), and ",(0,o.kt)("code",null,"vastxml")," - for ad XML(s) content).",(0,o.kt)("br",null),(0,o.kt)("br",null),"Example:",(0,o.kt)("br",null),(0,o.kt)("code",null,'"tag_url_desktop": [',(0,o.kt)("br",null),"\xa0\xa0","{",(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0url: "AD_1 URL",',(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0type: "vast"',(0,o.kt)("br",null),"\xa0\xa0","}",",",(0,o.kt)("br",null),"\xa0\xa0","{",(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0url: "AD_2 XML content",',(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0type: "vastxml"',(0,o.kt)("br",null),"\xa0\xa0","}",",",(0,o.kt)("br",null),"],",(0,o.kt)("br",null),'"tag_url_mobile": [',(0,o.kt)("br",null),"\xa0\xa0","{",(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0url: "AD_1 URL",',(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0type: "vast"',(0,o.kt)("br",null),"\xa0\xa0","}",",",(0,o.kt)("br",null),"\xa0\xa0","{",(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0url: "AD_2 XML content",',(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0type: "vastxml"',(0,o.kt)("br",null),"\xa0\xa0","}",",",(0,o.kt)("br",null),"],"),"Waterfall mechanism waits max. 5sec for each ad tag request to return response. If no ad, empty ad or ad error is returned, mechanism jumps to next ad tag, in set order, and performs request.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"branding")),(0,o.kt)("td",null,"Customizable stories branding. Branding appears as 32px height (proportional width) clickable image in top right corner of stories.",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("code",null,"corner")," branding is an object, with 3 configurable parameters:",(0,o.kt)("br",null),(0,o.kt)("strong",null,"text")," - text which will appear (on hover of corner image, or on bottom bar)",(0,o.kt)("br",null),(0,o.kt)("strong",null,"link")," - URL which will be opened on click on image set in ",(0,o.kt)("code",null,"image"),(0,o.kt)("br",null),(0,o.kt)("strong",null,"image")," - URL of image (formats: *.jpg, *.png, *.svg) which will appear in corner",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, only ",(0,o.kt)("strong",null,"Powered by Veedmo")," will appear in top right corner of stories.")))),(0,o.kt)("h2",{id:"live-example"},"Live example"),(0,o.kt)("p",null,'Below there is an the example showing how Veedmo stories can be embedded on page using manual JavaScript configuration. Click on "Result" tab to see the result.'),(0,o.kt)("iframe",{width:"100%",height:"600",src:"//jsfiddle.net/veedmo/qex6ckLm/22/embedded/html,result/dark/",allowfullscreen:"allowfullscreen",allowpaymentrequest:!0,frameborder:"0"}))}p.isMDXComponent=!0}}]);