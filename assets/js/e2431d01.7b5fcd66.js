(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{227:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return p}));var a=r(3),o=r(7),n=(r(0),r(246)),i={title:"Usage with Heroku"},c={unversionedId:"tutorials/usage-with-heroku",id:"tutorials/usage-with-heroku",isDocsHomePage:!1,title:"Usage with Heroku",description:"HEROKU WECHATY GETTING STARTED",source:"@site/docs/tutorials/usage-with-heroku.md",sourceDirName:"tutorials",slug:"/tutorials/usage-with-heroku",permalink:"/docs/tutorials/usage-with-heroku",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/tutorials/usage-with-heroku.md",version:"current",lastUpdatedBy:"\u9a91\u9a6c\u5c0f\u732b",lastUpdatedAt:1619085479,formattedLastUpdatedAt:"4/22/2021",frontMatter:{title:"Usage with Heroku"},sidebar:"docs",previous:{title:"Usage with Docker",permalink:"/docs/tutorials/docker"},next:{title:"Using Plugin with Wechaty",permalink:"/docs/tutorials/using-plugin-with-wechaty"}},b=[{value:"HEROKU WECHATY GETTING STARTED",id:"heroku-wechaty-getting-started",children:[]},{value:"About <code>Deploy to Heroku</code> Button",id:"about-deploy-to-heroku-button",children:[]},{value:"FEATURES",id:"features",children:[]},{value:"LIMITATIONS",id:"limitations",children:[]},{value:"SEE ALSO",id:"see-also",children:[]},{value:"Use Cases",id:"use-cases",children:[]},{value:"HISTORY",id:"history",children:[{value:"v0.4 (Feb 3, 2020)",id:"v04-feb-3-2020",children:[]},{value:"v0.0.1 (Aug 9, 2018)",id:"v001-aug-9-2018",children:[]}]},{value:"AUTHOR",id:"author",children:[]},{value:"COPYRIGHT &amp; LICENSE",id:"copyright--license",children:[]}],l={toc:b};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"heroku-wechaty-getting-started"},"HEROKU WECHATY GETTING STARTED"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/chatie/wechaty"},Object(n.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-blue.svg",alt:"Powered by Wechaty"})),"\n",Object(n.b)("a",{parentName:"p",href:"https://travis-ci.com/wechaty/heroku-wechaty-getting-started"},Object(n.b)("img",{parentName:"a",src:"https://travis-ci.com/wechaty/heroku-wechaty-getting-started.svg?branch=master",alt:"Build Status"})),"\n",Object(n.b)("a",{parentName:"p",href:"https://greenkeeper.io/"},Object(n.b)("img",{parentName:"a",src:"https://badges.greenkeeper.io/wechaty/heroku-wechaty-getting-started.svg",alt:"Greenkeeper badge"}))),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://heroku.com/deploy"},Object(n.b)("img",{parentName:"a",src:"https://www.herokucdn.com/deploy/button.svg",alt:"Deploy"}))),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/wechaty/heroku-wechaty-getting-started"},"Deploy to Heroku for Wechaty Starter Project Repository")),Object(n.b)("h2",{id:"about-deploy-to-heroku-button"},"About ",Object(n.b)("inlineCode",{parentName:"h2"},"Deploy to Heroku")," Button"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://devcenter.heroku.com/articles/heroku-button"},"Creating a 'Deploy to Heroku' Button")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"The \u2018Deploy to Heroku\u2019 button enables users to deploy apps to Heroku without leaving the web browser, and with little or no configuration. The button is ideal for customers, open-source project maintainers or add-on providers who wish to provide their customers with a quick and easy way to deploy and configure a Heroku app.")),Object(n.b)("h2",{id:"features"},"FEATURES"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Deploy to Heroku without leaving the Web Browser. See ",Object(n.b)("inlineCode",{parentName:"li"},"Deploy to Heroku")," Button above"),Object(n.b)("li",{parentName:"ol"},"Restore Wechat Bot Session across Restart by enable MemoryCard with AWS S3. See ",Object(n.b)("inlineCode",{parentName:"li"},"src/get-memory.ts")),Object(n.b)("li",{parentName:"ol"},"Hot Module Reload Enabled for convenience when developing. See ",Object(n.b)("inlineCode",{parentName:"li"},"src/handlers/on-*.ts")),Object(n.b)("li",{parentName:"ol"},"Send Online/Offline Notification Message to BotSelf when the Program Start/Stop. See ",Object(n.b)("inlineCode",{parentName:"li"},"src/finis.ts")),Object(n.b)("li",{parentName:"ol"},"Simpel Web Server that can be used to Scan QR Code, or any other operations integrated with Wechaty. See ",Object(n.b)("inlineCode",{parentName:"li"},"src/start-web.ts"))),Object(n.b)("h2",{id:"limitations"},"LIMITATIONS"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"https://devcenter.heroku.com/articles/free-dyno-hours#dyno-sleeping"},"If an app has a web dyno, and that web dyno receives no traffic in a 30 minute period, the web dyno will sleep")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"https://devcenter.heroku.com/articles/dynos#restarting"},"Dynos are restarted (cycled) at least once per day to help maintain the health of applications running on Heroku"))),Object(n.b)("h2",{id:"see-also"},"SEE ALSO"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://devcenter.heroku.com/articles/heroku-button"},"Creating a 'Deploy to Heroku' Button")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://blog.heroku.com/heroku-button"},"Introducing Heroku Button")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/heroku/button-sample"},"https://github.com/heroku/button-sample")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://www.expeditedssl.com/heroku-button-maker"},"Heroku App.Json Manifest and Button Maker")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://help.heroku.com/ROG3H81R/why-does-sigterm-handling-not-work-correctly-in-nodejs-with-npm"},"Why does SIGTERM handling not work correctly in NodeJS with NPM?"))),Object(n.b)("h2",{id:"use-cases"},"Use Cases"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"https://github.com/wechaty/friday"},"Friday BOT")," - ",Object(n.b)("a",{parentName:"li",href:"https://bot-friday.herokuapp.com/"},"https://bot-friday.herokuapp.com/")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"https://github.com/kaiyuanshe/OSS-bot"},"OSSBot")," - ",Object(n.b)("a",{parentName:"li",href:"https://oss-bot-dev.herokuapp.com/"},"https://oss-bot-dev.herokuapp.com/")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"https://github.com/huan/mike-bo"},"Mike BO")," - ",Object(n.b)("a",{parentName:"li",href:"http://mike-bo.herokuapp.com/"},"http://mike-bo.herokuapp.com/")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"https://github.com/juzibot/qijibot"},"QiJi BOT")," - ",Object(n.b)("a",{parentName:"li",href:"https://qiji-bot.herokuapp.com/"},"https://qiji-bot.herokuapp.com/")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"https://github.com/juzibot/botops"},"Bot Ops")," - ",Object(n.b)("a",{parentName:"li",href:"https://bot-ops.herokuapp.com/"},"https://bot-ops.herokuapp.com/")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"https://github.com/juzibot/rui-bot"},"Rui Assistant BOT")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"https://github.com/juzibot/juzi-bot"},"Juzi.BOT"))),Object(n.b)("h2",{id:"history"},"HISTORY"),Object(n.b)("h3",{id:"v04-feb-3-2020"},"v0.4 (Feb 3, 2020)"),Object(n.b)("p",null,"Wechaty 0.56"),Object(n.b)("h3",{id:"v001-aug-9-2018"},"v0.0.1 (Aug 9, 2018)"),Object(n.b)("p",null,"Init version for deploy to HeroKu"),Object(n.b)("h2",{id:"author"},"AUTHOR"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"http://linkedin.com/in/zixia"},"Huan LI (\u674e\u5353\u6853)")," \\",Object(n.b)("a",{parentName:"p",href:"mailto:zixia@zixia.net%5C"},"zixia@zixia.net\\")),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://stackexchange.com/users/265499"},Object(n.b)("img",{parentName:"a",src:"https://stackexchange.com/users/flair/265499.png",alt:"Profile of Huan LI (\u674e\u5353\u6853) on StackOverflow"}))),Object(n.b)("h2",{id:"copyright--license"},"COPYRIGHT & LICENSE"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Code & Docs \xa9 2018 Huan LI \\",Object(n.b)("a",{parentName:"li",href:"mailto:zixia@zixia.net%5C"},"zixia@zixia.net\\")),Object(n.b)("li",{parentName:"ul"},"Code released under the Apache-2.0 License"),Object(n.b)("li",{parentName:"ul"},"Docs released under Creative Commons")))}p.isMDXComponent=!0},246:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=p(r),h=a,m=u["".concat(i,".").concat(h)]||u[h]||s[h]||n;return r?o.a.createElement(m,c(c({ref:t},l),{},{components:r})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=h;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<n;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);