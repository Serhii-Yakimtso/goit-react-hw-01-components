(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__wKgVp",description:"Profile_description__3L00W",avatar:"Profile_avatar__3LDu8",stats:"Profile_stats__334Ig",quantity:"Profile_quantity__XCH4J"}},,function(e,a,t){e.exports={table:"TransactionHistory_table__EK7Rv",tableHead:"TransactionHistory_tableHead__1P4hf",tableItem:"TransactionHistory_tableItem__3uQXb",tableRow:"TransactionHistory_tableRow__1GTbL"}},,function(e,a,t){e.exports={friends:"FriendList_friends__Y6KdJ",friendsList:"FriendList_friendsList__CLlSs",item:"FriendList_item__2O1fV",status:"FriendList_status__bhe7Y",isOffline:"FriendList_isOffline__2Cias",avatar:"FriendList_avatar__1c5ih"}},function(e,a,t){e.exports={statistics:"Statistics_statistics__297KB",statList:"Statistics_statList__GD7A0",item:"Statistics_item__1QaLi",percentage:"Statistics_percentage__3ZIOX"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,function(e,a,t){},function(e,a,t){},,,,function(e,a,t){"use strict";t.r(a);var s=t(4),c=t.n(s),i=t(9),n=t.n(i),r=(t(17),t(18),t(1)),l=t.n(r),d=t(0),o=function(e){var a=e.name,t=e.tag,s=e.location,c=e.avatar,i=e.stats,n=i.followers,r=i.views,o=i.likes;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:l.a.profile,children:[Object(d.jsxs)("div",{className:l.a.description,children:[Object(d.jsx)("img",{src:c,alt:a,width:"300",className:l.a.avatar}),Object(d.jsx)("p",{className:l.a.name,children:a}),Object(d.jsx)("p",{className:l.a.tag,children:t}),Object(d.jsx)("p",{className:l.a.location,children:s})]}),Object(d.jsxs)("ul",{className:l.a.stats,children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:l.a.label,children:"Followers "}),Object(d.jsx)("span",{className:l.a.quantity,children:n})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:l.a.label,children:"Views "}),Object(d.jsx)("span",{className:l.a.quantity,children:r})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:l.a.label,children:"Likes "}),Object(d.jsx)("span",{className:l.a.quantity,children:o})]})]})]})})},b=t(2),m=t.n(b),j=t(5),u=t.n(j),p=function(e){var a=e.friends;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("section",{className:u.a.friends,children:[Object(d.jsx)("h2",{children:"FriendList"}),Object(d.jsx)("ul",{className:u.a.friendsList,children:a.map((function(e){var a=e.avatar,t=e.name,s=e.isOnline,c=e.id,i=[u.a.status];return s||i.push(u.a.isOffline),Object(d.jsxs)("li",{className:u.a.item,children:[Object(d.jsx)("span",{className:i.join(" "),children:s}),Object(d.jsx)("img",{className:u.a.avatar,src:a,alt:t,width:"48"}),Object(d.jsx)("p",{className:u.a.name,children:t})]},c)}))})]})})},f=p;p.protoTypes={avatar:m.a.string.isRequired,name:m.a.string.isRequired,isOnline:m.a.bool.isRequired,id:m.a.string.isRequired};var h=t(6),O=t.n(h),y=function(e){var a=e.title,t=e.stats;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("section",{className:O.a.statistics,children:[a&&Object(d.jsx)("h2",{className:O.a.title,children:"Upload stats"}),Object(d.jsx)("ul",{className:O.a.statList,children:t.map((function(e){var a=e.id,t=e.label,s=e.percentage;return Object(d.jsxs)("li",{className:O.a.item,children:[Object(d.jsx)("span",{className:O.a.label,children:t}),Object(d.jsxs)("span",{className:O.a.percentage,children:[s,"%"]})]},a)}))})]})})},x=y;y.defaultProps={title:"string"};var v=t(3),_=t.n(v),g=function(e){var a=e.transaction;return console.log(a),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"TransactionHistory"}),Object(d.jsxs)("table",{className:_.a.table,children:[Object(d.jsx)("thead",{className:_.a.tableHead,children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:_.a.tableItem,children:"Type"}),Object(d.jsx)("th",{className:_.a.tableItem,children:"Amount"}),Object(d.jsx)("th",{className:_.a.tableItem,children:"Currency"})]})}),Object(d.jsx)("tbody",{children:a.map((function(e){var a=e.id,t=e.type,s=e.amount,c=e.currency;return Object(d.jsxs)("tr",{className:_.a.tableRow,children:[Object(d.jsx)("td",{className:_.a.tableItem,children:t}),Object(d.jsx)("td",{className:_.a.tableItem,children:s}),Object(d.jsx)("td",{className:_.a.tableItem,children:c})]},a)}))})]})]})},w=g;g.protoTypes={id:m.a.string.isRequired,type:m.a.string.isRequired,amount:m.a.number.isRequired,currency:m.a.string.isRequired};var N=t(7),L=t(10),R=t(11),q=t(12),F=N.name,I=N.tag,P=N.location,S=N.avatar,T=N.stats;var H=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"hello"}),Object(d.jsx)(o,{name:F,tag:I,location:P,avatar:S,stats:T}),Object(d.jsx)(x,{title:"Upload stats",stats:L}),Object(d.jsx)(f,{friends:R}),Object(d.jsx)(w,{transaction:q})]})};n.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(H,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.4e125db1.chunk.js.map