(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=n(150),l=(n(170),function(e){var t=e.link,n=e.text;return i.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},n)}),u=n(172),c=n.n(u);n.d(t,"default",function(){return p});var p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(s.a,null,i.a.createElement("div",{id:"main"},i.a.createElement("a",{name:"description"}),i.a.createElement("header",null,i.a.createElement("h1",null,"Level Set Segmentation")),i.a.createElement("p",null,"In the 2016-2017 school year, I got the opportunity to work in the Northeastern University Computer Architecture Research lab, working on a parallel computing project under Julian Gutierrez and Dr. David Kaeli."),i.a.createElement("p",null,"The goal of the project was to develop algorithms for object detection in images using CUDA, NVIDIA's GPU programming framework for C/C++. The approach uses a flood-fill method as opposed to more computationally-expensive solving of partial differential equations to find object borders. You can read more about the details of the project in the paper ",i.a.createElement(l,{link:"https://ieeexplore.ieee.org/document/7833307",text:"here"}),"!"),i.a.createElement("p",null,"I focused on analyzing whether ",i.a.createElement(l,{link:"https://devblogs.nvidia.com/cuda-dynamic-parallelism-api-principles/",text:"dynamic parallelism"}),", firing threads from within threads on the GPU, was faster or slower than offloading some work on the top level to the CPU and communicating more between the CPU and GPU. My research found that dynamic parallelism proved more efficient for images of multiple, simple objects, while the combined CPU/GPU implementation was faster for images of a single object with an intricate border."),i.a.createElement("p",null,"I reported on these findings at Northeastern RISE 2017, an annual undergraduate research exposition. You can see the poster I presented ",i.a.createElement(l,{link:c.a,text:"here"}),".")))},t}(i.a.Component)},146:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(147)),o=a(n(148)),i=a(n(7)),s=a(n(51)),l=a(n(52)),u=a(n(4)),c=a(n(0)),p=n(16),f=n(149);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:u.default.string,activeStyle:u.default.object},m=function(e){function t(t){var n;n=e.call(this)||this,(0,l.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,s=t.onClick,l=t.onMouseEnter,u=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=d(n);return c.default.createElement(p.Link,(0,o.default)({to:v,state:u,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:u,replace:h})),!0}},m))},t}(c.default.Component);m.propTypes=(0,o.default)({},h,{innerRef:u.default.func,onClick:u.default.func,to:u.default.string.isRequired,replace:u.default.bool});var v=m;t.default=v;var g=function(e,t){window.___navigate(d(e),t)};t.navigate=g;var w=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(d(e))};t.push=w;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(d(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),w(e)}},147:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},148:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},170:function(e,t,n){"use strict";n(171)("link",function(e){return function(t){return e(this,"a","href",t)}})},171:function(e,t,n){var a=n(11),r=n(24),o=n(17),i=/"/g,s=function(e,t,n,a){var r=String(o(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},172:function(e,t,n){e.exports=n.p+"static/2017-RISE-Poster-177d4bfa6184b978cac778fc22c2279a.pdf"}}]);
//# sourceMappingURL=component---src-pages-projects-lss-js-1321925e588e6a8beebd.js.map