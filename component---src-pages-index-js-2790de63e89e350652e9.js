(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),c=a(49),l=a.n(c),o=a(0),s=a.n(o),r=a(161),m=a.n(r),u=a(158),p=a(4),d=a.n(p),g=a(168),h=a.n(g),b=function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(l()(l()(t))),t.gotoNext=t.gotoNext.bind(l()(l()(t))),t.gotoPrevious=t.gotoPrevious.bind(l()(l()(t))),t.gotoImage=t.gotoImage.bind(l()(l()(t))),t.handleClickImage=t.handleClickImage.bind(l()(l()(t))),t.openLightbox=t.openLightbox.bind(l()(l()(t))),t}i()(t,e);var a=t.prototype;return a.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},a.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},a.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},a.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},a.gotoImage=function(e){this.setState({currentImage:e})},a.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},a.renderGallery=function(){var e=this,t=this.props.images;if(t){var a=t.map(function(t,a){return s.a.createElement("article",{className:"6u 12u$(xsmall) work-item",key:a},s.a.createElement("a",{className:"image fit thumb",href:t.src,onClick:function(t){return e.openLightbox(a,t)}},s.a.createElement("img",{src:t.thumbnail})),s.a.createElement("h3",null,t.caption),s.a.createElement("p",null,t.description))});return s.a.createElement("div",{className:"row"},a)}},a.render=function(){return s.a.createElement("div",null,this.renderGallery(),s.a.createElement(h.a,{currentImage:this.state.currentImage,images:this.props.images,isOpen:this.state.lightboxIsOpen,onClickImage:this.handleClickImage,onClickNext:this.gotoNext,onClickPrev:this.gotoPrevious,onClickThumbnail:this.gotoImage,onClose:this.closeLightbox}))},t}(o.Component);b.displayName="Gallery",b.propTypes={images:d.a.array};var f=b,E=a(212),x=a.n(E),I=a(213),N=a.n(I),v=a(214),L=a.n(v),k=a(215),P=a.n(k),C=a(216),S=a.n(C),j=a(217),w=a.n(j),y=a(218),O=a.n(y),q=a(219),A=a.n(q),G=a(220),$=a.n(G),T=a(221),M=a.n(T),D=a(222),J=a.n(D),R=a(223),F=a.n(R),U=[{id:"1",src:O.a,thumbnail:x.a,caption:"Photo 1",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat."},{id:"2",src:A.a,thumbnail:N.a,caption:"Photo 2",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat."},{id:"3",src:$.a,thumbnail:L.a,caption:"Photo 3",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat."},{id:"4",src:M.a,thumbnail:P.a,caption:"Photo 4",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat."},{id:"5",src:J.a,thumbnail:S.a,caption:"Photo 5",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat."},{id:"6",src:F.a,thumbnail:w.a,caption:"Photo 6",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat."}],W=function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(l()(l()(t))),t.gotoNext=t.gotoNext.bind(l()(l()(t))),t.gotoPrevious=t.gotoPrevious.bind(l()(l()(t))),t.openLightbox=t.openLightbox.bind(l()(l()(t))),t.handleClickImage=t.handleClickImage.bind(l()(l()(t))),t}i()(t,e);var a=t.prototype;return a.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},a.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},a.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},a.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},a.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},a.render=function(){return s.a.createElement(u.a,null,s.a.createElement(m.a,null,s.a.createElement("title",null,"Gatsby Starter - Strata"),s.a.createElement("meta",{name:"description",content:"Site description"})),s.a.createElement("div",{id:"main"},s.a.createElement("section",{id:"one"},s.a.createElement("header",{className:"major"},s.a.createElement("h2",null,"Ipsum lorem dolor aliquam ante commodo",s.a.createElement("br",null),"magna sed accumsan arcu neque.")),s.a.createElement("p",null,"Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia."),s.a.createElement("ul",{className:"actions"},s.a.createElement("li",null,s.a.createElement("a",{href:"#",className:"button"},"Learn More")))),s.a.createElement("section",{id:"two"},s.a.createElement("h2",null,"Recent Work"),s.a.createElement(f,{images:U.map(function(e){e.id;return{src:e.src,thumbnail:e.thumbnail,caption:e.caption,description:e.description}})}),s.a.createElement("ul",{className:"actions"},s.a.createElement("li",null,s.a.createElement("a",{href:"#",className:"button"},"Full Portfolio")))),s.a.createElement("section",{id:"three"},s.a.createElement("h2",null,"Get In Touch"),s.a.createElement("p",null,"Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor."),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"8u 12u$(small)"},s.a.createElement("form",{method:"post",action:"#"},s.a.createElement("div",{className:"row uniform 50%"},s.a.createElement("div",{className:"6u 12u$(xsmall)"},s.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Name"})),s.a.createElement("div",{className:"6u 12u$(xsmall)"},s.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Email"})),s.a.createElement("div",{className:"12u"},s.a.createElement("textarea",{name:"message",id:"message",placeholder:"Message",rows:"4"})))),s.a.createElement("ul",{className:"actions"},s.a.createElement("li",null,s.a.createElement("input",{type:"submit",value:"Send Message"})))),s.a.createElement("div",{className:"4u 12u$(small)"},s.a.createElement("ul",{className:"labeled-icons"},s.a.createElement("li",null,s.a.createElement("h3",{className:"icon fa-home"},s.a.createElement("span",{className:"label"},"Address")),"1234 Somewhere Rd.",s.a.createElement("br",null),"Nashville, TN 00000",s.a.createElement("br",null),"United States"),s.a.createElement("li",null,s.a.createElement("h3",{className:"icon fa-mobile"},s.a.createElement("span",{className:"label"},"Phone")),"000-000-0000"),s.a.createElement("li",null,s.a.createElement("h3",{className:"icon fa-envelope-o"},s.a.createElement("span",{className:"label"},"Email")),s.a.createElement("a",{href:"#"},"hello@untitled.tld"))))))))},t}(s.a.Component);t.default=W},212:function(e,t,a){e.exports=a.p+"static/01-6c866ee91adf8b061eaa83d7d286f64a.jpg"},213:function(e,t,a){e.exports=a.p+"static/02-5a005bd6e50a92ebb852094e87bae405.jpg"},214:function(e,t,a){e.exports=a.p+"static/03-6c07129022e286d50d1da5af14d28045.jpg"},215:function(e,t,a){e.exports=a.p+"static/04-f91f216f6dcccc296c646ccf71110979.jpg"},216:function(e,t,a){e.exports=a.p+"static/05-b9b1fc8ff6a17498e1436ed653764b58.jpg"},217:function(e,t,a){e.exports=a.p+"static/06-46276d05380390ac1bf441cac76b8f54.jpg"},218:function(e,t,a){e.exports=a.p+"static/01-ce87a7b005c8d7be981ccd8137fcba3b.jpg"},219:function(e,t,a){e.exports=a.p+"static/02-6b930b4d9fa8b3049018335dccf73ce1.jpg"},220:function(e,t,a){e.exports=a.p+"static/03-527df6325a53113613522e648f6c2d4c.jpg"},221:function(e,t,a){e.exports=a.p+"static/04-21d06c5d186485c6e486f7745faeb5b9.jpg"},222:function(e,t,a){e.exports=a.p+"static/05-6c7ec15e9ddfe636dbd8a07070266ef5.jpg"},223:function(e,t,a){e.exports=a.p+"static/06-4bc7a84922de28318f2ec45282e1bffe.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-2790de63e89e350652e9.js.map