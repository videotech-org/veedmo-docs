"use strict";(self.webpackChunkveedmo_docs=self.webpackChunkveedmo_docs||[]).push([[356],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),d=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return l.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?l.createElement(k,i(i({ref:t},u),{},{components:n})):l.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var d=2;d<o;d++)i[d]=n[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1517:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var l=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],a={title:"Embed using code snippet",id:"embed-using-js-code-snippet",pagination_prev:null,pagination_next:null,custom_edit_url:null},s="Embed slideshow using code snippet",d={unversionedId:"slideshow/embed-using-js-code-snippet",id:"slideshow/embed-using-js-code-snippet",title:"Embed using code snippet",description:"To embed Veedmo slideshow using manual JavaScript configuration you need to add, to your website, specially prepared JavaScript code snippet and manually set all player options in it.",source:"@site/docs/03-slideshow/embed-using-js-code-snippet.md",sourceDirName:"03-slideshow",slug:"/slideshow/embed-using-js-code-snippet",permalink:"/slideshow/embed-using-js-code-snippet",editUrl:null,tags:[],version:"current",frontMatter:{title:"Embed using code snippet",id:"embed-using-js-code-snippet",pagination_prev:null,pagination_next:null,custom_edit_url:null},sidebar:"docsSidebar"},u=[{value:"JavaScript code snippet (sample)",id:"javascript-code-snippet-sample",children:[],level:2},{value:"Configuration parameters",id:"configuration-parameters",children:[],level:2},{value:"Live example",id:"live-example",children:[],level:2}],c={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"embed-slideshow-using-code-snippet"},"Embed slideshow using code snippet"),(0,o.kt)("p",null,"To embed Veedmo slideshow using manual JavaScript configuration you need to add, to your website, specially prepared JavaScript code snippet and manually set all player options in it."),(0,o.kt)("h2",{id:"javascript-code-snippet-sample"},"JavaScript code snippet (sample)"),(0,o.kt)("p",null,"Specially prepared JavaScript code snippet (mentioned below) can be added to website in various ways (e.g. via 3rd party frameworks, Google Tag Manager, ...); we recommend to inject it before closing ",(0,o.kt)("inlineCode",{parentName:"p"},"</body>")," tag as it requires website's DOM (Document Object Model) to be loaded, so player could be injected in given (in configuration) query selector on page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'(function veedmoSlider(config) {\n  (function veedmoSliderApply() {\n    var el = document.querySelector(config.query_selector);\n    if (el) {\n      var script = document.createElement("script");\n      script.src = "https://cdn.veedmo-static.com/cdn/slideshow/v1/current.js";\n      document.body ? document.body.appendChild(script) : document.head.appendChild(script);\n      script.addEventListener("load", () => {\n        window.veedmoSlider(config);\n      });\n    } else {\n      setTimeout(veedmoSliderApply, 100);\n    }\n  })();\n})({\n  "partner_id": UNIQUE_NUMERIC_PARTNER_ID,\n  "rss_url": "https://www.theverge.com/rss/index.xml",\n  "max_slides_amount": 5,\n  "query_selector": "#element",\n  "slide_duration": 4,\n  "theme_color": "#2962ff",\n  "max_number_of_injected_ads": 0,\n  "video_player_config": {\n    "tag_url_desktop": "",\n    "tag_url_mobile": ""\n  }\n});\n')),(0,o.kt)("h2",{id:"configuration-parameters"},"Configuration parameters"),(0,o.kt)("p",null,"Below there is a list of supported configuration parameters. ",(0,o.kt)("span",{class:"highlight--red"},(0,o.kt)("strong",null,"*"))," - mandatory parameter."),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("strong",null,"Param")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Description"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"partner_id")," ",(0,o.kt)("span",{class:"highlight--red"},(0,o.kt)("strong",null,"*"))),(0,o.kt)("td",null,"Unique numeric ID of Veedmo partner account. ",(0,o.kt)("a",{class:"nav-link","data-section-id":"contact"},"Contact us")," to obtain your partner account and ",(0,o.kt)("code",null,"partner_id"),".")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"query_selector")," ",(0,o.kt)("span",{class:"highlight--red"},(0,o.kt)("strong",null,"*"))),(0,o.kt)("td",null,"JavaScript querySelector (e.g. id, class name) of the page element to inject slideshow into.",(0,o.kt)("br",null),(0,o.kt)("br",null),"IMPORTANT: do not use ",(0,o.kt)("strong",null,"veedmo")," as your query selector name as it is system reserved name.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"rss_url")," ",(0,o.kt)("span",{class:"highlight--red"},(0,o.kt)("strong",null,"*"))),(0,o.kt)("td",null,"URL of RSS feed to generate slideshow from.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"slide_duration")),(0,o.kt)("td",null,"Time duration of showing single slide (in seconds).",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"4 seconds")," will be used.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"max_slides_amount")),(0,o.kt)("td",null,"Max. number of slides to be shown in slideshow.",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"6")," will be used.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"theme_color")),(0,o.kt)("td",null,"Slideshow theme color, used on: progress bars, title bar, hover on controls - HEX RGB (e.g. FF0000) or text value (e.g. red).")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"max_number_of_injected_ads")),(0,o.kt)("td",null,"Max. number of ads injected in slideshow. Cannot be greater than ",(0,o.kt)("code",null,"max_slides_amount"),".",(0,o.kt)("br",null),(0,o.kt)("br",null),"Ad is injected after slide.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"video_player_config")),(0,o.kt)("td",null,"Config of video player, handling ads, shown after slides. It is an object containing two elements, ",(0,o.kt)("code",null,"tag_url_desktop")," and ",(0,o.kt)("code",null,"tag_url_mobile"),".",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("code",null,"tag_url_desktop")," - URL(s) of ad tag(s), or pure XML(s) content of ad(s), to display on desktop devices. If empty, no ad(s) will be displayed on mobile devices.",(0,o.kt)("br",null),(0,o.kt)("code",null,"tag_url_mobile")," - URL(s) of ad tag(s), or pure XML(s) content of ad(s), to display on mobile devices. If empty, no ad(s) will be displayed on mobile devices.",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("code",null,"tag_url_desktop")," and ",(0,o.kt)("code",null,"tag_url_mobile")," handle single URL, or XML content of ad tag, or multiple URLs / XMLs content, via waterfall mechanism.",(0,o.kt)("br",null),(0,o.kt)("br",null),"To set up waterfall mechanism, pass array of objects, where each object contains ad tag URL / XML content, and a type (acceptable types are: ",(0,o.kt)("code",null,"vast")," - for ad tag URL(s), and ",(0,o.kt)("code",null,"vastxml")," - for ad XML(s) content).",(0,o.kt)("br",null),(0,o.kt)("br",null),"Example:",(0,o.kt)("br",null),(0,o.kt)("code",null,'"tag_url_desktop": [',(0,o.kt)("br",null),"\xa0\xa0","{",(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0url: "AD_1 URL",',(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0type: "vast"',(0,o.kt)("br",null),"\xa0\xa0","}",",",(0,o.kt)("br",null),"\xa0\xa0","{",(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0url: "AD_2 XML content",',(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0type: "vastxml"',(0,o.kt)("br",null),"\xa0\xa0","}",",",(0,o.kt)("br",null),"],",(0,o.kt)("br",null),'"tag_url_mobile": [',(0,o.kt)("br",null),"\xa0\xa0","{",(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0url: "AD_1 URL",',(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0type: "vast"',(0,o.kt)("br",null),"\xa0\xa0","}",",",(0,o.kt)("br",null),"\xa0\xa0","{",(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0url: "AD_2 XML content",',(0,o.kt)("br",null),'\xa0\xa0\xa0\xa0type: "vastxml"',(0,o.kt)("br",null),"\xa0\xa0","}",",",(0,o.kt)("br",null),"],"),"Waterfall mechanism waits max. 5sec for each ad tag request to return response. If no ad, empty ad or ad error is returned, mechanism jumps to next ad tag, in set order, and performs request.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"show_items_without_img")),(0,o.kt)("td",null,"Possible values:",(0,o.kt)("br",null),(0,o.kt)("strong",null,"0")," - do not show, in slideshow, items from RSS feed which do not have image",(0,o.kt)("br",null),(0,o.kt)("strong",null,"1")," - show, in slideshow, items from RSS feed which do not have image",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, ",(0,o.kt)("strong",null,"0")," (do not show items without image) will be used.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"branding")),(0,o.kt)("td",null,"Customizable slideshow branding. Branding appears as 32px height (proportional width) clickable image in top right corner of slideshow.",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("code",null,"corner")," branding is an object, with 3 configurable parameters:",(0,o.kt)("br",null),(0,o.kt)("strong",null,"text")," - text which will appear (on hover of corner image, or on bottom bar)",(0,o.kt)("br",null),(0,o.kt)("strong",null,"link")," - URL which will be opened on click on image set in ",(0,o.kt)("code",null,"image"),(0,o.kt)("br",null),(0,o.kt)("strong",null,"image")," - URL of image (formats: *.jpg, *.png, *.svg) which will appear in corner",(0,o.kt)("br",null),(0,o.kt)("br",null),"If not defined, only ",(0,o.kt)("strong",null,"Powered by Veedmo")," will appear in top right corner of slideshow.")))),(0,o.kt)("h2",{id:"live-example"},"Live example"),(0,o.kt)("p",null,'Below there is an the example showing how Veedmo slideshow can be embedded on page using manual JavaScript configuration. Click on "Result" tab to see the result.'),(0,o.kt)("iframe",{width:"100%",height:"600",src:"//jsfiddle.net/veedmo/qex6ckLm/11/embedded/html,result/dark/",allowfullscreen:"allowfullscreen",allowpaymentrequest:!0,frameborder:"0"}))}p.isMDXComponent=!0}}]);