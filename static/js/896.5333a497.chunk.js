(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[896],{896:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>A});var s=n(791),r=n(87),a=n(842),i=n(184);const c=e=>{let{data:t}=e;return(0,i.jsx)("article",{className:"degree-container",children:(0,i.jsxs)("header",{children:[(0,i.jsx)("h4",{className:"degree",children:t.degree}),(0,i.jsxs)("p",{className:"school",children:[(0,i.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},o=e=>{let{data:t}=e;return(0,i.jsxs)("div",{className:"education",children:[(0,i.jsx)("div",{className:"link-to",id:"education"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Education"})}),t.map((e=>(0,i.jsx)(c,{data:e},e.school)))]})};o.defaultProps={data:[]};const l=o;var u=n(892),d=n.n(u),h=n(745);const m=e=>{let{data:{name:t,position:n,url:s,startDate:r,endDate:a,summary:c,highlights:o}}=e;return(0,i.jsxs)("article",{className:"jobs-container",children:[(0,i.jsxs)("header",{children:[(0,i.jsxs)("h4",{children:[(0,i.jsx)("a",{href:s,children:t})," - ",n]}),(0,i.jsxs)("p",{className:"daterange",children:[" ",d()(r).format("MMMM YYYY")," - ",a?d()(a).format("MMMM YYYY"):"PRESENT"]})]}),c?(0,i.jsx)(h.ZP,{options:{overrides:{p:{props:{className:"summary"}}}},children:c}):null,o?(0,i.jsx)("ul",{className:"points",children:o.map((e=>(0,i.jsx)("li",{children:e},e)))}):null]})},f=e=>{let{data:t}=e;return(0,i.jsxs)("div",{className:"experience",children:[(0,i.jsx)("div",{className:"link-to",id:"experience"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Experience"})}),t.map((e=>(0,i.jsx)(m,{data:e},"".concat(e.name,"-").concat(e.position))))]})};f.defaultProps={data:[]};const p=f,g=e=>{let{handleClick:t,active:n,label:s}=e;return(0,i.jsx)("button",{className:"skillbutton ".concat(n[s]?"skillbutton-active":""),type:"button",onClick:()=>t(s),children:s})},y=e=>{let{data:t,categories:n}=e;const{category:s,competency:r,title:a}=t,c={background:n.filter((e=>s.includes(e.name))).map((e=>e.color))[0]},o={...c,width:"".concat(String(Math.min(100,Math.max(r/5*100,0))),"%")};return(0,i.jsxs)("div",{className:"skillbar clearfix",children:[(0,i.jsx)("div",{className:"skillbar-title",style:c,children:(0,i.jsx)("span",{children:a})}),(0,i.jsx)("div",{className:"skillbar-bar",style:o}),(0,i.jsxs)("div",{className:"skill-bar-percent",children:[r," / 5"]})]})};y.defaultProps={categories:[]};const v=y,b=e=>{let{skills:t,categories:n}=e;const r=Object.fromEntries([["All",!1]].concat(n.map((e=>{let{name:t}=e;return[t,!1]})))),[a,c]=(0,s.useState)(r),o=e=>{const t=Object.keys(a).reduce(((t,n)=>({...t,[n]:e===n&&!a[n]})),{});t.All=!Object.keys(a).some((e=>t[e])),c(t)};return(0,i.jsxs)("div",{className:"skills",children:[(0,i.jsx)("div",{className:"link-to",id:"skills"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Skills"})}),(0,i.jsx)("div",{className:"skill-button-container",children:Object.keys(a).map((e=>(0,i.jsx)(g,{label:e,active:a,handleClick:o},e)))}),(0,i.jsx)("div",{className:"skill-row-container",children:(()=>{const e=Object.keys(a).reduce(((e,t)=>a[t]?t:e),"All");return t.sort(((e,t)=>{let n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((t=>"All"===e||t.category.includes(e))).map((e=>(0,i.jsx)(v,{categories:n,data:e},e.title)))})()})]})};b.defaultProps={skills:[],categories:[]};const $=b,j=e=>{let{data:t,last:n}=e;return(0,i.jsxs)("li",{className:"course-container",children:[(0,i.jsxs)("a",{href:t.link,children:[(0,i.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,i.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,i.jsx)("div",{className:"course-dot",children:(0,i.jsx)("p",{className:"course-name",children:" \u2022"})})]})};j.defaultProps={last:!1};const x=j,D=e=>{let{data:t}=e;return(0,i.jsxs)("div",{className:"courses",children:[(0,i.jsx)("div",{className:"link-to",id:"courses"}),(0,i.jsx)("div",{className:"title"}),(0,i.jsx)("ul",{className:"course-list",children:(n=t,n.sort(((e,t)=>{let n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map(((e,t)=>(0,i.jsx)(x,{data:e,last:t===n.length-1},e.title))))})]});var n};D.defaultProps={data:[]};const M=[{school:"Vimal Jyothi Engineering College, Kannur University",degree:"B-Tech, Electronics and Communication",link:"https://vjec.ac.in/",year:2018},{school:"Amrita Vidyalayam, Thalassery",degree:"Plus two higher secondary",year:2014}],k=[{name:"Innovature Software Labs, Kochi, Kerala",position:"Software Engineer",startDate:"2022-03",endDate:"2024-06",highlights:["Developed and maintained responsive and user-friendly web applications using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and optimal performance.","Integrated RESTful APIs to fetch and display real-time data, utilizing RxJS observables to manage asynchronous data streams effectively.","Actively participated in Agile development practices, attending daily stand-ups and contributing to sprint planning and retrospectives.","Mentored junior developers, providing guidance on best practices and assisting with onboarding new team members."]},{name:"Innovature Software Labs, Kochi, Kerala",position:"Associate Software Developer",startDate:"2021-03",endDate:"2022-03",highlights:["Assisted in the creation and maintenance of technical documentation, ensuring accurate and up-to-date records of project progress and specifications.","Assisted in troubleshooting and debugging issues within the codebase, employing problem-solving skills to identify root causes and implement effective solutions, thereby improving overall system stability and performance.","Collaborated with senior developers to implement new features and enhancements using Angular and React."]},{name:"Camerinfolks Pvt. Ltd, Kochi, Kerala",position:"Associate Software Developer",startDate:"2020-01",endDate:"2021-06",highlights:["Actively participated in team meetings and brainstorming sessions, sharing ideas and insights for project improvement.","Demonstrated strong problem-solving skills and a willingness to learn and adapt to new technologies and tools.","Gained hands-on experience with Angular Material, implementing responsive and visually appealing user interfaces."]}],S=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"React",competency:3,category:["Web Development","Javascript"]},{title:"Angular",competency:4,category:["Web Development","Typescript"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"Flask",competency:2,category:["Web Development","Python"]},{title:"Git",competency:4,category:["Tools"]},{title:"AWS",competency:3,category:["Tools","Web Development"]},{title:"Jupyter",competency:3,category:["Python"]},{title:"Typescript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"HTML + CSS + bootstrap + materials + chakra ui",competency:4,category:["Web Development","Languages"]}].map((e=>({...e,category:e.category.sort()}))),w=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],N=[...new Set(S.flatMap((e=>{let{category:t}=e;return t})))].sort().map(((e,t)=>({name:e,color:w[t]}))),O={Education:()=>(0,i.jsx)(l,{data:M}),Experience:()=>(0,i.jsx)(p,{data:k}),Skills:()=>(0,i.jsx)($,{skills:S,categories:N})},A=()=>(0,i.jsx)(a.Z,{title:"Resume",description:"Adwaith Mohan's Resume. Vimal Jyothi Engineering College Graduate.",children:(0,i.jsxs)("article",{className:"post",id:"resume",children:[(0,i.jsx)("header",{children:(0,i.jsxs)("div",{className:"title",children:[(0,i.jsx)("h2",{children:(0,i.jsx)(r.rU,{to:"resume",children:"Resume"})}),(0,i.jsx)("div",{className:"link-container",children:Object.keys(O).map((e=>(0,i.jsx)("h4",{children:(0,i.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)))})]})}),Object.entries(O).map((e=>{let[t,n]=e;return(0,i.jsx)(n,{},t)}))]})})},892:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,s="millisecond",r="second",a="minute",i="hour",c="day",o="week",l="month",u="quarter",d="year",h="date",m="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var s=String(e);return!s||s.length>=t?e:""+Array(t+1-s.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),s=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+y(s,2,"0")+":"+y(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var s=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(s,l),a=n-r<0,i=t.clone().add(s+(a?-1:1),l);return+(-(s+(n-r)/(a?r-i:i-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:o,d:c,D:h,h:i,m:a,s:r,ms:s,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",$={};$[b]=g;var j="$isDayjsObject",x=function(e){return e instanceof S||!(!e||!e[j])},D=function e(t,n,s){var r;if(!t)return b;if("string"==typeof t){var a=t.toLowerCase();$[a]&&(r=a),n&&($[a]=n,r=a);var i=t.split("-");if(!r&&i.length>1)return e(i[0])}else{var c=t.name;$[c]=t,r=c}return!s&&r&&(b=r),r||!s&&b},M=function(e,t){if(x(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new S(n)},k=v;k.l=D,k.i=x,k.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function g(e){this.$L=D(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[j]=!0}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var s=t.match(f);if(s){var r=s[2]-1||0,a=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,a)):new Date(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,a)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return k},y.isValid=function(){return!(this.$d.toString()===m)},y.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return M(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<M(e)},y.$g=function(e,t,n){return k.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,s=!!k.u(t)||t,u=k.p(e),m=function(e,t){var r=k.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return s?r:r.endOf(c)},f=function(e,t){return k.w(n.toDate()[e].apply(n.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return s?m(1,0):m(31,11);case l:return s?m(1,g):m(0,g+1);case o:var b=this.$locale().weekStart||0,$=(p<b?p+7:p)-b;return m(s?y-$:y+(6-$),g);case c:case h:return f(v+"Hours",0);case i:return f(v+"Minutes",1);case a:return f(v+"Seconds",2);case r:return f(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,o=k.p(e),u="set"+(this.$u?"UTC":""),m=(n={},n[c]=u+"Date",n[h]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[i]=u+"Hours",n[a]=u+"Minutes",n[r]=u+"Seconds",n[s]=u+"Milliseconds",n)[o],f=o===c?this.$D+(t-this.$W):t;if(o===l||o===d){var p=this.clone().set(h,1);p.$d[m](f),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else m&&this.$d[m](f);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[k.p(e)]()},y.add=function(s,u){var h,m=this;s=Number(s);var f=k.p(u),p=function(e){var t=M(m);return k.w(t.date(t.date()+Math.round(e*s)),m)};if(f===l)return this.set(l,this.$M+s);if(f===d)return this.set(d,this.$y+s);if(f===c)return p(1);if(f===o)return p(7);var g=(h={},h[a]=t,h[i]=n,h[r]=e,h)[f]||1,y=this.$d.getTime()+s*g;return k.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||m;var s=e||"YYYY-MM-DDTHH:mm:ssZ",r=k.z(this),a=this.$H,i=this.$m,c=this.$M,o=n.weekdays,l=n.months,u=n.meridiem,d=function(e,n,r,a){return e&&(e[n]||e(t,s))||r[n].slice(0,a)},h=function(e){return k.s(a%12||12,e,"0")},f=u||function(e,t,n){var s=e<12?"AM":"PM";return n?s.toLowerCase():s};return s.replace(p,(function(e,s){return s||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return k.s(t.$y,4,"0");case"M":return c+1;case"MM":return k.s(c+1,2,"0");case"MMM":return d(n.monthsShort,c,l,3);case"MMMM":return d(l,c);case"D":return t.$D;case"DD":return k.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,o,2);case"ddd":return d(n.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(a);case"HH":return k.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return f(a,i,!0);case"A":return f(a,i,!1);case"m":return String(i);case"mm":return k.s(i,2,"0");case"s":return String(t.$s);case"ss":return k.s(t.$s,2,"0");case"SSS":return k.s(t.$ms,3,"0");case"Z":return r}return null}(e)||r.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(s,h,m){var f,p=this,g=k.p(h),y=M(s),v=(y.utcOffset()-this.utcOffset())*t,b=this-y,$=function(){return k.m(p,y)};switch(g){case d:f=$()/12;break;case l:f=$();break;case u:f=$()/3;break;case o:f=(b-v)/6048e5;break;case c:f=(b-v)/864e5;break;case i:f=b/n;break;case a:f=b/t;break;case r:f=b/e;break;default:f=b}return m?f:k.a(f)},y.daysInMonth=function(){return this.endOf(l).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),s=D(e,t,!0);return s&&(n.$L=s),n},y.clone=function(){return k.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),w=S.prototype;return M.prototype=w,[["$ms",s],["$s",r],["$m",a],["$H",i],["$W",c],["$M",l],["$y",d],["$D",h]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,S,M),e.$i=!0),M},M.locale=D,M.isDayjs=x,M.unix=function(e){return M(1e3*e)},M.en=$[b],M.Ls=$,M.p={},M}()}}]);
//# sourceMappingURL=896.5333a497.chunk.js.map