(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(s,a,e){s.exports={profile:"styles_profile__7sErs",description:"styles_description__2jNZ0",avatar:"styles_avatar__1AAx4",name:"styles_name__3p4ic",tag:"styles_tag__33hoi",location:"styles_location__3ZOJJ",stats:"styles_stats__3z4l_",list_item:"styles_list_item__1skMe",label:"styles_label__3x79M",quantity:"styles_quantity__2n3Ip"}},,function(s,a,e){s.exports={wrapper:"styles_wrapper__1Hg6I",title:"styles_title__WahOE",stat_list:"styles_stat_list__39uWd",item:"styles_item__38gAo"}},function(s,a,e){s.exports={friend_list:"styles_friend_list__1aj-J",item:"styles_item__It6zj",status:"styles_status__2H7aF",is_online:"styles_is_online__3jpfp styles_status__2H7aF",is_offline:"styles_is_offline__3Pqe4 styles_status__2H7aF",avatar:"styles_avatar__2LPe3",name:"styles_name__Xs8wr"}},function(s){s.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,function(s,a,e){s.exports={container:"styles_container__1FM6z"}},function(s){s.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(s){s.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},,,,,,,function(s){s.exports=JSON.parse("{}")},,function(s,a,e){"use strict";e.r(a);var t=e(2),i=e.n(t),n=e(7),l=e.n(n),c=e(11),r=e(1),o=e.n(r),_=e(0),j=function(s){var a=s.followers,e=s.views,t=s.likes;return Object(_.jsxs)("ul",{className:o.a.stats,children:[Object(_.jsxs)("li",{className:o.a.list_item,children:[Object(_.jsx)("span",{className:o.a.label,children:"Followers"}),Object(_.jsx)("span",{className:o.a.quantity,children:a})]}),Object(_.jsxs)("li",{className:o.a.list_item,children:[Object(_.jsx)("span",{className:o.a.label,children:"Views"}),Object(_.jsx)("span",{className:o.a.quantity,children:e})]}),Object(_.jsxs)("li",{className:o.a.list_item,children:[Object(_.jsx)("span",{className:o.a.label,children:"Likes"}),Object(_.jsx)("span",{className:o.a.quantity,children:t})]})]})},d=function(s){var a=s.name,e=s.avatar,t=s.tag,i=s.location,n=s.stats;return Object(_.jsxs)("div",{className:o.a.profile,children:[Object(_.jsxs)("div",{className:o.a.description,children:[Object(_.jsx)("img",{src:e,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:o.a.avatar}),Object(_.jsx)("p",{className:o.a.name,children:a}),Object(_.jsxs)("p",{className:o.a.tag,children:["@",t]}),Object(_.jsx)("p",{className:o.a.location,children:i})]}),Object(_.jsx)(j,Object(c.a)({},n))]},a)},m=e(3),p=e.n(m);var b=function(s){var a=s.label,e=s.percentage;return Object(_.jsxs)("li",{className:p.a.item,style:{backgroundColor:"#"+Math.floor(16777215*Math.random()).toString(16)},children:[Object(_.jsx)("span",{className:p.a.label,children:a}),Object(_.jsx)("span",{className:p.a.percentage,children:e})]})},v=function(s){var a=s.title,e=s.stats;return Object(_.jsx)("section",{className:p.a.statistics,children:Object(_.jsxs)("div",{className:p.a.wrapper,children:[a&&Object(_.jsx)("h2",{className:p.a.title,children:a}),Object(_.jsx)("ul",{className:p.a.stat_list,children:e.map((function(s){var a=s.id,e=s.label,t=s.percentage;return Object(_.jsx)(b,{label:e,percentage:t},a)}))})]})})},O=e.p+"static/media/default.75fdf75c.svg",u=e(4),x=e.n(u),f=function(s){var a=s.avatar,e=s.name,t=s.isOnline;return Object(_.jsxs)("li",{className:x.a.item,children:[Object(_.jsx)("span",{className:t?x.a.is_online:x.a.is_offline}),Object(_.jsx)("img",{className:x.a.avatar,src:a,alt:"avatar"+e,width:"48"}),Object(_.jsx)("p",{className:x.a.name,children:e})]})};f.defaultProps={avatar:O};var h=f,g=function(s){var a=s.friends;return Object(_.jsx)("ul",{className:x.a.friend_list,children:a.map((function(s){var a=s.avatar,e=s.name,t=s.isOnline,i=s.id;return Object(_.jsx)(h,{avatar:a,name:e,isOnline:t,id:i},i)}))})},N=e(8),w=e.n(N),y=function(s){var a=s.children;return Object(_.jsx)("div",{className:w.a.container,children:a})},J=e(5),k=e(9),q=e(10),M=(e(17),function(){return Object(_.jsxs)("div",{className:"app",children:[Object(_.jsx)(y,{children:Object(_.jsx)(d,{name:J.name,avatar:J.avatar,tag:J.tag,location:J.location,stats:J.stats})}),Object(_.jsx)(y,{children:Object(_.jsx)(v,{title:"Upload stats",stats:q})}),Object(_.jsx)(y,{children:Object(_.jsx)(g,{friends:k})})]})});e(18);l.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(M,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.66c26161.chunk.js.map