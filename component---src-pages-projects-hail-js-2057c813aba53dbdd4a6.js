(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"59GK":function(e,t,a){e.exports=a.p+"static/tensors-fdff589b56453032ed90e25cb3f5a2d8.png"},Bl7J:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);a("wcMv");var o=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",{id:"footer"},r.a.createElement("div",{className:"inner"},r.a.createElement("ul",{className:"icons"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/daniel-goldstein",target:"_blank",rel:"noopener noreferrer",className:"icon fa-github"},r.a.createElement("span",{className:"label"},"Github"))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/daniel--goldstein/",target:"_blank",rel:"noopener noreferrer",className:"icon fa-linkedin"},r.a.createElement("span",{className:"label"},"LinkedIn"))),r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:danielgold95@gmail.com",className:"icon fa-envelope-o"},r.a.createElement("span",{className:"label"},"Mail")))),r.a.createElement("br",null),r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",null,"Powered by ",r.a.createElement("a",{href:"https://www.gatsbyjs.org/starters/codebushi/gatsby-starter-strata",target:"_blank",rel:"noopener noreferrer"},"Gatsby Starter Strata")))))},n}(r.a.Component),l=a("RjcY"),i=a.n(l),s=a("Wbzz");var c=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("header",{id:"header"},r.a.createElement("div",{className:"inner"},r.a.createElement(s.Link,{to:"#",className:"image avatar"},r.a.createElement("img",{src:i.a,alt:""})),r.a.createElement("h1",null,r.a.createElement(s.Link,{to:"#"},r.a.createElement("strong",null,"Hi, I'm Daniel!"))),r.a.createElement("br",null),r.a.createElement("h1",null,r.a.createElement(s.Link,{to:"#about-me"},"About Me")),r.a.createElement("h1",null,r.a.createElement(s.Link,{to:"#projects"},"Projects")),r.a.createElement("h1",null,r.a.createElement(s.Link,{to:"#reach-out"},"Reach Out"))),r.a.createElement(o,null))},n}(r.a.Component);var m=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.children;return r.a.createElement("div",null,r.a.createElement(c,null),e)},n}(r.a.Component);t.a=m},MGjC:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),r=a.n(n);var o=function(e,t,a){return r.a.createElement("li",null,r.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"icon "+t},r.a.createElement("span",{className:"label"},a)))},l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.websiteUrl,a=e.githubUrl;return r.a.createElement("ul",{className:"icons"},t&&o(t,"fa-globe","Website"),a&&o(a,"fa-github","Github"))},n}(r.a.Component)},RjcY:function(e,t,a){e.exports=a.p+"static/avatar-a532ab9c7e6a41e88e213734d393b58b.jpeg"},bXoz:function(e,t,a){e.exports=a.p+"static/comp-graph-bc8b2e362d8d65e5283663ae33c70eca.png"},nSJv:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("Bl7J"),l=a("MGjC"),i=a("bXoz"),s=a.n(i),c=a("59GK"),m=a.n(c);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{id:"main"},r.a.createElement("a",{name:"description"}),r.a.createElement("header",{className:"major"},r.a.createElement("h1",null,"Tensor Algebra in Hail"),r.a.createElement(l.a,{websiteUrl:"https://hail.is",githubUrl:"https://github.com/hail-is/hail"})),r.a.createElement("p",null,"Instead of taking Spring semester classes, I spent January - June 2019 working as a Software Engineer at the Broad Institute. This work experience was part of Northeastern's co-op program, where students take a break from classes to work a full-time entry-level position in their industry. I spent my six months working on a tool called Hail, a distributed computing engine for doing statistical analyses on big (and I mean very big) genetic data sets."),r.a.createElement("p",null,"I spent a large portion of my co-op working on expanding the linear algebra component of hail by implementing the infrastructure necessary in the compiler to represent tensors (arrays, matrices, and higher-dimensional arrays). By being able to express tensors in the language of hail, we could achieve two great feats:",r.a.createElement("ul",null,r.a.createElement("li",null,"Users can articulate machine learning models in few lines of code instead of hail engineers writing models on the back-end"),r.a.createElement("li",null,"We can optimize across more of a user's pipeline to avoid unnecessary linear algebra computations"))),r.a.createElement("div",{className:"project-image-box"},r.a.createElement("p",null,"My work primarily centered around modeling linear algebra formulas as computation graphs on tensors. When a user writes the following code: (G - 2 * p) / sqrt(4 * p * (1 - p)) in Python, where G is a matrix and p is a vector, instead of directly executing the computation hail constructs a computation graph describing the operations on the data in the equation."),r.a.createElement("img",{src:s.a,width:"60%"})),r.a.createElement("p",null,"Modeling the above equation as this graph allows the compiler to efficiently infer the minimal calculations that must be done to obtain the final result of the equation. It also allows us to save memory and time in minimizing the production of intermediate results, an important optimization on the scale of genetic data."),r.a.createElement("div",{className:"project-image-box"},r.a.createElement("p",null,"This model allows us to write down linear algebra in a clear way that runs efficiently. This model also extends to the distributed world, allowing us to consider a very large tensor as a collection of smaller tensors, each on its own machine."),r.a.createElement("img",{src:m.a,width:"60%"})),r.a.createElement("p",null,"The above diagram depicts a distributed 3-tensor, and how it can be represented by blocking multiple local 3-tensors. Extending tensors to be distributed is coming up close in hail's future. Even though my co-op ended and I wasn't around to see this project to completion, I'm greatful for all that I learned about compilers and distributed systems during my co-op. I'm excited to see where hail goes next!")))}}}]);
//# sourceMappingURL=component---src-pages-projects-hail-js-2057c813aba53dbdd4a6.js.map