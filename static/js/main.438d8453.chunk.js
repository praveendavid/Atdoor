(this["webpackJsonpatdoor-establishment"]=this["webpackJsonpatdoor-establishment"]||[]).push([[0],{14:function(e,a,t){},19:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var s=t(1),i=t.n(s),c=t(6),l=t.n(c),n=(t(14),t(2)),r=t(0),o=function(e){return Object(r.jsx)("div",{id:"about",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-xs-12 col-md-12",children:Object(r.jsxs)("div",{className:"about-text",children:[Object(r.jsx)("h2",{children:"About Us"}),Object(r.jsx)("p",{children:e.data?e.data.paragraph1:"loading..."}),Object(r.jsx)("p",{children:e.data?e.data.paragraph2:"loading..."}),Object(r.jsx)("h3",{children:"Why Choose Us?"}),Object(r.jsxs)("div",{className:"list-style",children:[Object(r.jsx)("div",{className:"col-lg-6 col-sm-6 col-xs-12",children:Object(r.jsx)("ul",{children:e.data?e.data.Why1.map((function(e,a){return Object(r.jsx)("li",{children:e},"".concat(e,"-").concat(a))})):"loading"})}),Object(r.jsx)("div",{className:"col-lg-6 col-sm-6 col-xs-12",children:Object(r.jsx)("ul",{children:e.data?e.data.Why2.map((function(e,a){return Object(r.jsxs)("li",{children:[" ",e]},"".concat(e,"-").concat(a))})):"loading"})})]})]})})})})})},d=t(3),m=t(4),j=t(7),b=t.n(j),h={name:"",email:"",message:""},g=function(e){var a=Object(s.useState)(h),t=Object(n.a)(a,2),i=t[0],c=i.name,l=i.email,o=i.message,j=t[1],g=Object(s.useState)(),p=Object(n.a)(g,2),u=p[0],x=p[1],O=function(e){var a=e.target,t=a.name,s=a.value;j((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(d.a)({},t,s))}))};return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{id:"contact",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"col-md-8",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"section-title",children:[Object(r.jsx)("h2",{children:"Get In Touch"}),Object(r.jsx)("p",{children:"Please fill out the form below to send us an email and we will get back to you as soon as possible."})]}),Object(r.jsxs)("form",{name:"sentMessage",validate:"noValidate",onSubmit:function(e){e.preventDefault(),console.log(c,l,o),b.a.sendForm("service_e300l05","template_38u6phl",e.target,"user_7DibKxRvO8LTTX4sdVDa9").then((function(e){console.log(e.text),j(Object(m.a)({},h)),x("Message is sent!"),setTimeout((function(){x(null)}),2e3)}),(function(e){console.log(e.text)}))},children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-md-6",children:Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"text",id:"name",name:"name",value:c,className:"form-control",placeholder:"Name",required:!0,onChange:O}),Object(r.jsx)("p",{className:"help-block text-danger"})]})}),Object(r.jsx)("div",{className:"col-md-6",children:Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"email",id:"email",name:"email",value:l,className:"form-control",placeholder:"Email",required:!0,onChange:O}),Object(r.jsx)("p",{className:"help-block text-danger"})]})})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("textarea",{name:"message",value:o,id:"message",className:"form-control",rows:"4",placeholder:"Message",required:!0,onChange:O}),Object(r.jsx)("p",{className:"help-block text-danger"})]}),Object(r.jsx)("div",{id:"success"}),Object(r.jsx)("button",{type:"submit",className:"btn btn-custom btn-lg",children:"Send Message"})]}),u&&Object(r.jsx)("div",{className:"alert alert-success",children:u})]})}),Object(r.jsxs)("div",{className:"col-md-3 col-md-offset-1 contact-info",children:[Object(r.jsxs)("div",{className:"contact-item",children:[Object(r.jsx)("h3",{children:"Contact Info"}),Object(r.jsxs)("p",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("i",{className:"fa fa-map-marker"})," Address"]}),e.data?e.data.address:"loading"]})]}),Object(r.jsx)("div",{className:"contact-item",children:Object(r.jsxs)("p",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("i",{className:"fa fa-phone"})," Phone"]})," ",e.data?e.data.phone:"loading"]})}),Object(r.jsx)("div",{className:"contact-item",children:Object(r.jsxs)("p",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})," ",e.data?e.data.email:"loading"]})})]}),Object(r.jsx)("div",{className:"col-md-12",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"social",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:e.data?e.data.facebook:"/",children:Object(r.jsx)("i",{className:"fa fa-facebook"})})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:e.data?e.data.twitter:"/",children:Object(r.jsx)("i",{className:"fa fa-twitter"})})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:e.data?e.data.linkedin:"/",children:Object(r.jsx)("i",{className:"fa fa-fa fa-linkedin"})})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:e.data?e.data.youtube:"/",children:Object(r.jsx)("i",{className:"fa fa-fa fa-youtube"})})})]})})})})]})}),Object(r.jsx)("div",{id:"footer",children:Object(r.jsx)("div",{className:"container text-center",children:Object(r.jsxs)("p",{children:["\xa9 2017 Atdoor Establishment"," "]})})})]})},p=function(e){return Object(r.jsx)("div",{id:"features",className:"text-center",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"col-md-10 col-md-offset-1 section-title",children:Object(r.jsx)("h2",{children:"Features"})}),Object(r.jsx)("div",{className:"row",children:e.data?e.data.map((function(e,a){return Object(r.jsxs)("div",{className:"col-xs-6 col-md-3",children:[" ",Object(r.jsx)("i",{className:e.icon}),Object(r.jsx)("h3",{children:e.title}),Object(r.jsx)("p",{children:e.text})]},"".concat(e.title,"-").concat(a))})):"Loading..."})]})})},u=function(e){return Object(r.jsx)("header",{id:"header",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"intro",children:Object(r.jsx)("div",{className:"overlay",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"col-md-8 col-md-offset-2 intro-text",children:[Object(r.jsxs)("h1",{children:[e.data?e.data.title:"Loading",Object(r.jsx)("span",{})]}),Object(r.jsx)("p",{children:e.data?e.data.paragraph:"Loading"}),Object(r.jsx)("a",{href:"#features",className:"btn btn-custom btn-lg page-scroll",children:"Learn More"})," "]})})})})})})},x=function(){return Object(r.jsxs)("nav",{id:"menu",className:"navbar navbar-default navbar-fixed-top",children:[Object(r.jsxs)("div",{className:"navbar-header",children:[Object(r.jsxs)("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1",children:[" ",Object(r.jsx)("span",{className:"sr-only",children:"Toggle navigation"})," ",Object(r.jsx)("span",{className:"icon-bar"})," ",Object(r.jsx)("span",{className:"icon-bar"})," ",Object(r.jsx)("span",{className:"icon-bar"})," "]}),Object(r.jsx)("a",{className:"navbar-brand page-scroll",href:"#page-top",children:"Atdoor"})," "]}),Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1",children:Object(r.jsxs)("ul",{className:"nav navbar-nav navbar-right",children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#features",className:"page-scroll",children:"Features"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#services",className:"page-scroll",children:"Services"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#pricing",className:"page-scroll",children:"Pricing"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#testimonials",className:"page-scroll",children:"Testimonials"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#team",className:"page-scroll",children:"Team"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#about",className:"page-scroll",children:"About"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#contact",className:"page-scroll",children:"Contact"})})]})})]})},O=function(e){return Object(r.jsx)("div",{id:"pricing",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"section-title text-center",children:Object(r.jsx)("h2",{children:"Student Project Pricing"})}),Object(r.jsx)("div",{className:"row",children:e.data&&e.data.length>0&&e.data.map((function(e,a){return Object(r.jsx)("div",{className:"col-md-4 col-sm-6",children:Object(r.jsxs)("div",{className:"pricing-table-3 basic",children:[Object(r.jsxs)("div",{className:"pricing-table-header",children:[Object(r.jsx)("h4",{className:"plan",children:Object(r.jsx)("strong",{children:e.planName})}),Object(r.jsx)("p",{children:e.desc})]}),Object(r.jsx)("div",{className:"price",children:Object(r.jsx)("strong",{children:e.price})}),Object(r.jsxs)("div",{className:"pricing-body",children:[Object(r.jsx)("ul",{className:"pricing-table-ul pricing-ul",children:e.features&&e.features.length>0&&e.features.map((function(e,a){return Object(r.jsxs)("li",{children:[Object(r.jsx)("i",{className:"fa fa-send"}),e]},"".concat(e,"-").concat(a))}))}),Object(r.jsx)("a",{href:"#/",className:"view-more",children:"View More"})]})]})},"".concat(e.planName,"-").concat(a))}))})]})})},f=function(e){return Object(r.jsx)("div",{id:"services",className:"text-center",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"section-title",children:[Object(r.jsx)("h2",{children:"Our Services"}),Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec."})]}),Object(r.jsx)("div",{className:"row",children:e.data?e.data.map((function(e,a){return Object(r.jsxs)("div",{className:"col-md-4",children:[" ",Object(r.jsx)("i",{className:e.icon}),Object(r.jsxs)("div",{className:"service-desc",children:[Object(r.jsx)("h3",{children:e.name}),Object(r.jsx)("p",{children:e.text})]})]},"".concat(e.name,"-").concat(a))})):"loading"})]})})},v=function(e){return Object(r.jsx)("div",{id:"team",className:"text-center",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"col-md-8 col-md-offset-2 section-title",children:[Object(r.jsx)("h2",{children:"Meet the Team"}),Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec."})]}),Object(r.jsx)("div",{id:"row",children:e.data?e.data.map((function(e,a){return Object(r.jsx)("div",{className:"col-md-3 col-sm-6 team",children:Object(r.jsxs)("div",{className:"thumbnail",children:[" ",Object(r.jsx)("img",{src:e.img,alt:"...",className:"team-img"}),Object(r.jsxs)("div",{className:"caption",children:[Object(r.jsx)("h4",{children:e.name}),Object(r.jsx)("p",{children:e.job})]})]})},"".concat(e.name,"-").concat(a))})):"loading"})]})})},N=function(e){return Object(r.jsx)("div",{id:"testimonials",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"section-title text-center",children:Object(r.jsx)("h2",{children:"What our clients say"})}),Object(r.jsx)("div",{className:"row",children:e.data?e.data.map((function(e,a){return Object(r.jsx)("div",{className:"col-md-4",children:Object(r.jsxs)("div",{className:"testimonial",children:[Object(r.jsxs)("div",{className:"testimonial-image",children:[" ",Object(r.jsx)("img",{src:e.img,alt:"Testimonial"})," "]}),Object(r.jsxs)("div",{className:"testimonial-content",children:[Object(r.jsxs)("p",{children:['"',e.text,'"']}),Object(r.jsxs)("div",{className:"testimonial-meta",children:[" - ",e.name," "]})]})]})},"".concat(e.name,"-").concat(a))})):"loading"})]})})},w=t(8),P=t(9),S=t.n(P),T=(t(19),new S.a('a[href*="#"]',{speed:1e3,speedAsDuration:!0}),function(){var e=Object(s.useState)({}),a=Object(n.a)(e,2),t=a[0],i=a[1];return Object(s.useEffect)((function(){i(w)}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)(x,{}),Object(r.jsx)(u,{data:t.Header}),Object(r.jsx)(p,{data:t.Features}),Object(r.jsx)(f,{data:t.Services}),Object(r.jsx)(O,{data:t.Pricing}),Object(r.jsx)(N,{data:t.Testimonials}),Object(r.jsx)(v,{data:t.Team}),Object(r.jsx)(o,{data:t.About}),Object(r.jsx)(g,{data:t.Contact})]})});l.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(T,{})}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('{"Header":{"title":"AT DOOR ESTABLISHMENT","paragraph":"AtDoor, strives to provide best of our services at affordable cost, and to add immediate value for customers in 3 different means, 1. future-facing professional training (Placement and Training \u2013 P&T), 2. Human Resource Outsourcing (HRO), and 3. Web Development and Hosting solutions."},"About":{"paragraph1":"We offer web hosting solutions along with domain registration, Email Hosting, SSL Certificate and CDN Management solutions at incredibly affordable prices. We also make custom build website for clients who are new to web platform. We have 24/7 support for any queries via phone and email.","paragraph2":"We have support for VPS (Virtual private server) / dedicated hosting to provide more control to the clients","Why1":["Shared Hosting","Reseller Hosting ","CMS Hosting","WordPress Hosting","WooCommerce Hosting","Reseller Web Hosting"],"Why2":["Virtual Private Servers","Dedicated Servers","Domain Registration","SSL Certificate","Magento","Drupal"]},"Gallery":[{"title":"Project Title","largeImage":"img/portfolio/01-large.jpg","smallImage":"img/portfolio/01-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/02-large.jpg","smallImage":"img/portfolio/02-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/03-large.jpg","smallImage":"img/portfolio/03-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/04-large.jpg","smallImage":"img/portfolio/04-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/05-large.jpg","smallImage":"img/portfolio/05-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/06-large.jpg","smallImage":"img/portfolio/06-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/07-large.jpg","smallImage":"img/portfolio/07-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/08-large.jpg","smallImage":"img/portfolio/08-small.jpg"},{"title":"Project Title","largeImage":"img/portfolio/09-large.jpg","smallImage":"img/portfolio/09-small.jpg"}],"Services":[{"icon":"fa fa-wordpress","name":"Placement and Training \u2013 P&T","text":"We provide practical approach towards training the students to gain real-time exposure on competitive technologies.Trainings are offered by employees from MNCs to give real-time corporate exposure. We prefer practical approach to master the depth of technology. Trainings are focused on improving technical skills for Students and Freshers. We do have plans to expand the horizontal by mastering working professional in the future."},{"icon":"fa fa-cart-arrow-down","name":"Human Resource Outsourcing - HRO","text":"If Clients are in need of candidates, we do provide freshers and experienced ones allowing the Clients to focus of developing the organization rather than going on a hunt for employees."},{"icon":"fa fa-cloud-download","name":"Web Development and Hosting Solutions","text":"Website development and hosting."}],"Testimonials":[{"img":"img/testimonials/01.jpgg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"Atdoor"},{"img":"img/testimonials/02.jpgg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"Atdoor"},{"img":"img/testimonials/06.jpgg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"Atdoor"}],"Team":[{"img":"img/team/img1.jpg","name":"Praveen Kumar David","job":"Member"},{"img":"img/team/img2.jpg","name":"Gowri Shankar","job":"Member"},{"img":"img/team/04.jpgg","name":"Suthi","job":"Member"},{"img":"img/team/03.jpgg","name":"Balasurendran","job":"Member"},{"img":"img/team/04.jpgg","name":"Jayaram","job":"Member"},{"img":"img/team/04.jpgg","name":"Udhaya","job":"Member"}],"Contact":{"address":"515, Sallivan Street, Coimbatore \u2013 641 001","phone":"+91 98423 93234","email":"info@atdoor.net, support@atdoor.net ","facebook":"https://www.facebook.com/atdoorofficial","linkedin":"https://www.linkedin.com/company/atdoorofficial/","twitter":"https://twitter.com/atdoorofficial","youtube":"https://www.youtube.com/channel/UC69JxB7yPBY7wmOxjPkoFsg/about"},"Features":[{"icon":"fa fa-comments-o","title":"Lorem ipsum","text":"Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."},{"icon":"fa fa-bullhorn","title":"Lorem ipsum","text":"Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."},{"icon":"fa fa-group","title":"Lorem ipsum","text":"Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."},{"icon":"fa fa-magic","title":"Lorem ipsum","text":"Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."}],"Pricing":[{"planName":"Starter","price":"Rs.2500","desc":"Loerm Ipsum Donor Sit Amet","features":["High Level Design","Project Abstract","Project Architecture"]},{"planName":"Basic","price":"Rs.5200","desc":"Loerm Ipsum Donor Sit Amet","features":["High Level Design","Project Abstract","Project Architecture","Project Code","Project Documentation"]},{"planName":"Premium","price":"Rs.7600","desc":"Loerm Ipsum Donor Sit Amet","features":["High Level Design","Project Abstract","Project Architecture","Project Code","Project Documentation","Unit Test Case","Online Hosting"]},{"planName":"Elite","price":"Rs.11999","desc":"Loerm Ipsum Donor Sit Amet","features":["High Level Design","Project Abstract","Project Architecture","Project Code","Project Documentation","Unit Test Case","Online Hosting","Integration Testing","CI/CD Integration(Own Account)"]}]}')}},[[20,1,2]]]);
//# sourceMappingURL=main.438d8453.chunk.js.map