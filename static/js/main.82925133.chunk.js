(this["webpackJsonpjob-search-platform"]=this["webpackJsonpjob-search-platform"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t(11)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(3),c=t.n(i),l=(t(9),t(1));t(10);var r=function(){return s.a.createElement("div",{className:"header shadow-sm"},s.a.createElement("div",{className:"brand"}),s.a.createElement("div",{className:"menu"},s.a.createElement("div",{className:"menu-item"},"Home"),s.a.createElement("div",{className:"menu-item active"},"Find Job"),s.a.createElement("div",{className:"menu-item"},"Company"),s.a.createElement("div",{className:"menu-item"},"Employee"),s.a.createElement("div",{className:"menu-item"},"Post Job")),s.a.createElement("div",{className:"user"}))};function m(e){return s.a.createElement("div",{className:"shadow-sm dropdown-contract"},s.a.createElement("div",{className:e.isShowContract?"":"d-none"},s.a.createElement("div",{className:"dropdown-contract-item",onClick:function(){return e.setContract("Full-Time")}},"Full-Time"),s.a.createElement("div",{className:"dropdown-contract-item",onClick:function(){return e.setContract("Part-Time")}},"Part-Time")))}function o(e){return s.a.createElement("div",{className:e.isShowMoney?"":"d-none"},s.a.createElement("div",{className:"shadow-sm money-wrapper"},s.a.createElement("input",{type:"range",className:"custom-range"})))}function u(e){return s.a.createElement("div",{className:e.isShowKeyword?"":"d-none"},s.a.createElement("div",{className:"result"},s.a.createElement("input",{type:"text",className:"result-input",placeholder:"input keyword",onChange:function(a){e.setKeyword(a.currentTarget.value)}}),s.a.createElement("div",{className:"result-wrapper"},s.a.createElement("div",{className:"result-item"}))))}var d=function(e){var a=Object(n.useState)(!1),t=Object(l.a)(a,2),i=t[0],c=t[1],r=Object(n.useState)("Contract"),d=Object(l.a)(r,2),v=d[0],p=d[1],E=Object(n.useState)(!1),N=Object(l.a)(E,2),h=N[0],b=N[1],f=Object(n.useState)(!1),g=Object(l.a)(f,2),w=g[0],y=g[1];return s.a.createElement("div",{className:"search shadow-sm"},s.a.createElement("div",{className:"search-keyword w-100"},s.a.createElement("div",{className:"search-icon",onClick:function(){return b(!h)}},s.a.createElement("i",{className:"fas fa-search"})),s.a.createElement(u,{isShowKeyword:h,setKeyword:e.setKeyword})),s.a.createElement("div",{className:"d-none d-md-block w-100"},s.a.createElement("div",{className:"search-location"},s.a.createElement("div",{className:"search-icon"},s.a.createElement("i",{className:"far fa-paper-plane"})),s.a.createElement("div",{className:"seach-text"},"USA, Florida"))),s.a.createElement("div",{className:"d-none d-md-block w-100"},s.a.createElement("div",{className:"search-contract",onClick:function(){return c(!i)}},s.a.createElement("div",{className:"search-icon"},s.a.createElement("i",{className:"fas fa-suitcase"})),s.a.createElement("div",{className:"seach-text"},v),s.a.createElement(m,{isShowContract:i,setContract:p}))),s.a.createElement("div",{className:"d-none d-md-block w-100"},s.a.createElement("div",{className:"search-money"},s.a.createElement("div",{className:"search-icon",onClick:function(){return y(!w)}},s.a.createElement("i",{className:"fas fa-tag"})),s.a.createElement("div",{className:"seach-text"},"500$ - 800$"),s.a.createElement(o,{isShowMoney:w}))),s.a.createElement("div",{className:"search-button"},"Search"))};function v(e){var a=Object(n.useState)(!1),t=Object(l.a)(a,2),i=t[0],c=t[1];return s.a.createElement("div",{className:"job-item shadow-sm"},s.a.createElement("div",{className:"company-logo"},s.a.createElement("div",{className:"logo-wrapper"},s.a.createElement("div",{className:"logo-image shadow-sm"},s.a.createElement("i",{className:"fab fa-microsoft fa-2x"})),s.a.createElement("div",{className:"company-size"},"14/150"))),s.a.createElement("div",{className:"company-details"},s.a.createElement("div",{className:i?"liked":"like",onClick:function(){return c(!i)}},s.a.createElement("i",{className:"fas fa-heart"})),s.a.createElement("div",{className:"company-name"},e.company),s.a.createElement("div",{className:"job-name"},e.title),s.a.createElement("div",{className:"job-location"},"USA, Florida"),s.a.createElement("div",{className:"job-footer d-md-flex"},s.a.createElement("div",{className:"job-skill"},s.a.createElement("div",{className:"skill-name"},"C#"),s.a.createElement("div",{className:"skill-name"},"C++"),s.a.createElement("div",{className:"skill-name"},"Python")),s.a.createElement("div",{className:"date-create mt-2"},"10/08/2020"))))}var p=[{id:1,company:"Microsoft",title:"Sr.Back-end Developer"},{id:2,company:"Google",title:"Full-Stack Developer"},{id:3,company:"Amazone",title:"User Experience Designer"},{id:4,company:"Alibaba",title:"Sr.User Interface Designer"},{id:5,company:"Apple",title:"Web Developer"}],E=function(e){return s.a.createElement("div",{className:"job"},p.filter((function(a){return a.title.toLowerCase().includes(e.keyword.toLowerCase())})).map((function(e){return s.a.createElement(v,{company:e.company,title:e.title,key:e.id})})))};var N=function(){var e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],i=a[1];return s.a.createElement("div",{className:"details bg-white shadow-sm rounded"},s.a.createElement("div",{className:"cover"},s.a.createElement("img",{src:"https://cdn.thegentlemansjournal.com/wp-content/uploads/2015/02/google-highest-paid-jobs-1-1800x756-c-center.jpg",alt:"Google",className:"cover-image"}),s.a.createElement("div",{className:"cover-logo"},s.a.createElement("img",{src:"https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg",alt:"logo",className:"shadow-sm"}))),s.a.createElement("div",{className:"share"},s.a.createElement("button",{className:"btn btn-share",type:"button"},s.a.createElement("i",{className:"fas fa-check text-success"})),s.a.createElement("button",{className:"btn btn-share",type:"button"},s.a.createElement("i",{className:"fas fa-share"})),s.a.createElement("button",{className:"btn btn-share",type:"button",onClick:function(){return i(!t)}},s.a.createElement("i",{className:t?"far fa-heart text-danger":"far fa-heart"}))),s.a.createElement("div",{className:"summary"},s.a.createElement("div",{className:"detail-name h3 mb-3 font-weight-bold"},"User Experience Designer"),s.a.createElement("div",{className:"d-flex justify-content-between"},s.a.createElement("div",null,s.a.createElement("a",{href:"/#",className:"brand-name"},"Google")," \u2022 USA, San Francisco"),s.a.createElement("div",null,"17 review \u2022 94 rating"))),s.a.createElement("div",{className:"description"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed sapien vitae felis blandit condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non velit eu nibh sollicitudin ullamcorper. Etiam quis ipsum vitae libero vehicula venenatis quis ac sapien. Integer nec lorem vehicula libero lobortis cursus. Integer finibus eros non fringilla porta. Mauris ipsum ante, luctus vitae augue at, sollicitudin porttitor nulla. Ut pellentesque rutrum nunc non rutrum. Fusce rutrum dapibus justo sit amet lobortis.",s.a.createElement("br",null),"Nunc sollicitudin pharetra dui, ac mattis felis auctor quis. Fusce ornare neque urna, non tristique magna mollis at. Praesent porta tristique feugiat. In hac habitasse platea dictumst. Nam convallis aliquam lectus sed varius. Mauris mollis lobortis leo. Proin sit amet risus a enim rhoncus bibendum. Nam ipsum justo, pharetra id iaculis vitae, lacinia consequat quam.",s.a.createElement("br",null),"Maecenas ante erat, volutpat elementum dignissim id, suscipit a tellus. Etiam vel nibh at felis commodo pulvinar sed et ante. Maecenas eleifend, augue eget dictum egestas, nunc velit tincidunt urna, quis pharetra tellus diam ac nulla. Aenean sit amet volutpat justo. Donec interdum turpis vel nulla hendrerit, sit amet elementum elit tempus. Nulla posuere est quis lorem consequat volutpat. Nunc feugiat turpis ut ex facilisis finibus a sit amet nibh. Aenean congue, nibh ut consequat imperdiet, nisi ex porttitor neque, eu posuere massa augue vel tellus. Fusce volutpat neque sit amet nisl egestas, vitae dignissim lorem posuere. Aenean sed elementum ligula, feugiat viverra odio.",s.a.createElement("br",null),"Suspendisse posuere, ligula eu porta fermentum, nisl dolor ullamcorper nunc, quis consequat velit arcu eu arcu. Phasellus imperdiet purus non felis dignissim euismod. Pellentesque gravida eros tellus, in euismod arcu tempor eu. Sed non molestie metus. Proin at tristique augue. Quisque malesuada ante nec dui cursus, non eleifend velit accumsan. Proin sed porttitor orci. Suspendisse potenti. Integer maximus risus mauris, sit amet consectetur nibh consectetur quis. Nulla nec blandit purus.",s.a.createElement("br",null),"Sed vehicula et velit id euismod. Pellentesque imperdiet luctus enim sit amet porta. In aliquam neque eu eros congue, in condimentum libero sagittis. Suspendisse urna nisl, tincidunt eget placerat quis, suscipit in quam. Nunc laoreet magna et tortor ornare ultricies. Mauris vehicula efficitur mollis. Morbi in purus ac nisl interdum placerat id in turpis. Ut gravida urna quis turpis euismod vulputate. In faucibus lacinia dictum. Donec luctus suscipit pretium. Donec felis nibh, pulvinar vitae sagittis eu, tincidunt id mi."))};var h=function(){var e=Object(n.useState)(""),a=Object(l.a)(e,2),t=a[0],i=a[1];return s.a.createElement("div",{className:"app"},s.a.createElement(r,null),s.a.createElement("div",{className:"row mt-4"},s.a.createElement("div",{className:"col-md-1"}),s.a.createElement("div",{className:"col-md-10"},s.a.createElement("div",{className:"container-fluid"},s.a.createElement(d,{setKeyword:i}),s.a.createElement("div",{className:"row mt-4"},s.a.createElement("div",{className:"col-md-5"},s.a.createElement(E,{keyword:t})),s.a.createElement("div",{className:"col-md-7"},s.a.createElement(N,null))))),s.a.createElement("div",{className:"col-md-1"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.82925133.chunk.js.map