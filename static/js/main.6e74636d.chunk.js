(this.webpackJsonplgv2=this.webpackJsonplgv2||[]).push([[0],{218:function(t,e,n){},232:function(t,e){},241:function(t,e){},259:function(t,e){},261:function(t,e){},278:function(t,e){},279:function(t,e){},343:function(t,e){},345:function(t,e){},354:function(t,e){},356:function(t,e){},381:function(t,e){},383:function(t,e){},384:function(t,e){},390:function(t,e){},403:function(t,e){},415:function(t,e){},418:function(t,e){},423:function(t,e){},434:function(t,e){},437:function(t,e){},490:function(t){t.exports=JSON.parse('{"abi":[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"totalSupply","type":"uint256"},{"name":"tokenOwnerAddress","type":"address"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]}')},498:function(t,e,n){"use strict";n.r(e);var a=n(3),s=n.n(a),i=n(206),o=n.n(i),r=(n(218),n(4)),c=n(7),u=n(11),p=n(10),l=(n(69),n(29)),d=n(16),b=n(15),y=n.n(b),m=n(33),h=n(207),f=new(n.n(h).a)(window.web3.currentProvider),j=new f.eth.Contract([{constant:!1,inputs:[],name:"claim",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"getAirdrop",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newLG_Addr",type:"address"}],name:"modifyLGAddr",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_AirdropAmount",type:"uint256"}],name:"setAirdropAmount",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"_LG",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{constant:!0,inputs:[],name:"AirdropAmount",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"isget",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"LG",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"}],"0x6ce2f1206a8b6736543e357049a7e17f0cb29368"),x=new f.eth.Contract([{constant:!1,inputs:[{name:"spender",type:"address"},{name:"value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"spender",type:"address"},{name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"spender",type:"address"},{name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"}],"0x7cc0c1a34b1ae55f9bd2a19ece9d4b166b66e70c"),O=new f.eth.Contract([{constant:!0,inputs:[{name:"_id",type:"uint256"}],name:"getAIadr",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_user",type:"address"},{name:"_value",type:"uint256"}],name:"addGongxianzhi",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"AIadrId",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_AIadr",type:"address"}],name:"addAIadr",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_user",type:"address"}],name:"getGongxianzhi",outputs:[{name:"",type:"uint256"},{name:"",type:"address"},{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"userID",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"}],"0x379e0FA77a2aF8f23408E38a063f1D8A7E186c45"),w=n(0),A=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={AirdropAmount:"",user:"",LGbalance:"",Airdrop_LGbalance:"",balance:"",value:"",airdrop_adr:"0x6ce2f1206a8b6736543e357049a7e17f0cb29368",GXvalue:""},t.getAirdrop=function(){j.methods.getAirdrop().send({from:window.defaultAccount})},t.onSubmit=function(){var e=Object(m.a)(y.a.mark((function e(n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),j.methods.setAirdropAmount(f.utils.toWei(t.state.value,"ether")).send({from:window.defaultAccount});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=Object(m.a)(y.a.mark((function t(){var e,n,a,s,i,o,r,c,u;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("undefined"===typeof window.ethereum){t.next=21;break}return(e=window.ethereum).autoRefreshOnNetwoorkChange=!1,t.prev=3,t.next=6,e.enable();case 6:n=t.sent,console.log(n),a=window.ethereum,console.log(a),console.log(a.chainId),window.defaultAccount=n[0].toLowerCase(),console.log(window.defaultAccount),e.on("accountsChanged",(function(t){console.log("accountsChanged:"+t)})),e.on((function(t){console.log(t)})),t.next=19;break;case 17:t.prev=17,t.t0=t.catch(3);case 19:t.next=22;break;case 21:console.log("\u6ca1\u6709metamask");case 22:return s=window.defaultAccount,this.setState({user:s}),t.next=26,j.methods.AirdropAmount().call();case 26:return i=t.sent,this.setState({AirdropAmount:i}),t.next=30,x.methods.balanceOf(window.defaultAccount).call();case 30:return o=t.sent,this.setState({LGbalance:o}),t.next=34,x.methods.balanceOf(this.state.airdrop_adr).call();case 34:return r=t.sent,this.setState({Airdrop_LGbalance:r}),console.log(r),t.next=39,f.eth.getBalance(window.defaultAccount);case 39:return c=t.sent,this.setState({balance:c}),t.next=43,O.methods.getGongxianzhi(window.defaultAccount).call();case 43:u=t.sent,this.setState({GXvalue:u[2]});case 45:case"end":return t.stop()}}),t,this,[[3,17]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(w.jsxs)("div",{style:{fontSize:"17px",lineHeight:"100%"},children:[Object(w.jsx)("hr",{}),Object(w.jsxs)("div",{children:[Object(w.jsx)("p",{children:"\u60a8\u7684\u5f53\u524d\u5e10\u6237:"}),Object(w.jsx)("p",{style:{fontSize:"15px"},children:this.state.user})]}),Object(w.jsx)("hr",{}),Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{children:"\u60a8\u7684\u8d44\u4ea7\u4f59\u989d"}),Object(w.jsxs)("p",{children:["HT----",f.utils.fromWei(this.state.balance,"ether")]}),Object(w.jsxs)("p",{children:["LG----",f.utils.fromWei(this.state.LGbalance,"ether")]}),Object(w.jsx)("p",{style:{color:"blue",fontSize:"10px",lineHeight:"10%"},children:"LG\u5408\u7ea6\u5730\u5740: 0x7cc0c1a34b1ae55f9bd2a19ece9d4b166b66e70c"})]}),Object(w.jsx)("hr",{}),Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{children:"LG\u7a7a\u6295"}),Object(w.jsxs)("p",{children:["\u7a7a\u6295\u6c60\u4f59\u989d:  ",f.utils.fromWei(this.state.Airdrop_LGbalance,"ether"),"LG",Object(w.jsx)("nobr",{style:{color:"blue",fontSize:"10px"},children:"\uff08\u4e0d\u5b9a\u671f\u6dfb\u52a0\u4f59\u989d\uff0c\u5c11\u4e8e100\u65f6\u8bf7\u4e0d\u8981\u9886\u53d6\uff09"})]}),Object(w.jsxs)("p",{children:["\u6bcf\u4e2a\u5e10\u6237\u53ef\u9886\u53d6\u6570\u91cf\uff1a ",this.state.AirdropAmount/Math.pow(10,18),"LG \xa0\xa0",Object(w.jsx)("button",{onClick:function(){t.getAirdrop()},children:"\u9886\u53d6\u7a7a\u6295"})]})]}),Object(w.jsx)("hr",{}),Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{children:"LG\u751f\u6001"}),Object(w.jsxs)("p",{style:{color:"blue",fontSize:"12px"},children:["\u5929\u5973\u53f7\u7a7a\u6295\u673a\u6b63\u5f0f\u4e0a\u7ebf\uff0c",Object(w.jsx)("br",{}),"\u8bf7\u5bfc\u822a\u81f3\uff1a\u751f\u6001--\u5929\u5973\u53f7\u7a7a\u6295\u673a",Object(w.jsx)("br",{}),"\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u901a\u8fc7\u6b64\u5de5\u5177\u7ed9\u60a8\u7684\u5c0f\u4f19\u4f34\u7a7a\u6295\u60a8\u559c\u6b22\u7684\u4efb\u4e00\u706b\u5e01\u94fe\u4e0a\u7684\u5e01\u79cd"]})]}),Object(w.jsx)("hr",{}),Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{children:"LG\u8d21\u732e\u503c\u7cfb\u7edf"}),Object(w.jsxs)("p",{children:["\u60a8\u7684\u8d21\u732e\u503c\uff1a",this.state.GXvalue]}),Object(w.jsxs)("p",{style:{color:"blue",fontSize:"16px"},children:["\u8d21\u732e\u503c\u8bb0\u5f55\uff0c\u60a8\u5728\u4f7f\u7528\u672c\u5e73\u53f0\u65f6\u5c06\u4f1a\u81ea\u52a8\u8bb0\u5f55\u8d21\u732e\u503c\uff0c \u8bb0\u5f55\u7684\u8d21\u732e\u503c\u5c06\u53ef\u4ee5\u9886\u53d6\u76f8\u5e94\u7684LG\u901a\u8bc1\uff0c\u5177\u4f53\u65b9\u6848\u5f85\u516c\u5e03",Object(w.jsx)("br",{})]})]})]})}}]),n}(a.Component),v=(n.p,new f.eth.Contract([{constant:!1,inputs:[{name:"_id",type:"uint256"},{name:"_tokenAdr",type:"address"},{name:"_weeks",type:"uint256"},{name:"_remarks",type:"string"}],name:"buy",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_tokenAdr",type:"address"}],name:"claim",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_tokenAdr",type:"address"}],name:"getAirdrop",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"getHT",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_tokenAdr",type:"address"},{name:"_AirdropAmount",type:"uint256"},{name:"_AirdropTotal",type:"uint256"}],name:"giveAirdrop",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_tokenAdr",type:"address"},{name:"_AirdropAmount",type:"uint256"}],name:"modifyAirdropAmount",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_value",type:"uint256"}],name:"modifyGXbuy",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_value",type:"uint256"}],name:"modifyGXgetAirdrop",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_value",type:"uint256"}],name:"modifyGXgiveAirdrop",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_addr",type:"address"}],name:"modifyILGgongxianAddr",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_fee",type:"uint256"}],name:"setFee",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_feeToken",type:"uint256"}],name:"setfeeToken",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_yesORno",type:"uint256"}],name:"setisfeetoken",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_yesORno",type:"uint256"}],name:"setisSaveGX",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"_IGXaddr",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{constant:!0,inputs:[],name:"fee",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"feeToken",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_id",type:"uint256"}],name:"getAddrByExid",outputs:[{name:"",type:"address"},{name:"",type:"uint256"},{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_tokenAdr",type:"address"}],name:"getAirTokenInfo",outputs:[{name:"",type:"address"},{name:"",type:"uint256"},{name:"",type:"address"},{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"GXbuy",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"GXgetAirdrop",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"GXgiveAirdrop",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"ILGgongxianAddr",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isfeetoken",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isSaveGX",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"}],"0x68eDC077a12980525442e7B4e781951CFdF60701")),g=function(t){Object(u.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={AirdropAdr:"",AirdropAmount:"",AirdropTotal:"",ApproveTotal:"",anyAirdropaddr:"0x68eDC077a12980525442e7B4e781951CFdF60701",user:"",erc20abi:"",AirdropinfoAmount:"",ERC20symbol:"",AirdropBalance:"",modifyAirdropAmount:""},t.onSubmitApprove=function(){var e=Object(m.a)(y.a.mark((function e(n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),new f.eth.Contract(t.state.erc20abi.abi,t.state.AirdropAdr).methods.approve(t.state.anyAirdropaddr,f.utils.toWei(t.state.ApproveTotal,"ether")).send({from:window.defaultAccount});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.onSubmitgiveAirdrop=function(){var e=Object(m.a)(y.a.mark((function e(n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),v.methods.giveAirdrop(t.state.AirdropAdr,f.utils.toWei(t.state.AirdropAmount,"ether"),f.utils.toWei(t.state.AirdropTotal,"ether")).send({from:window.defaultAccount});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.onSubmitgetAirdrop=function(){var e=Object(m.a)(y.a.mark((function e(n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),v.methods.getAirdrop(t.state.AirdropAdr).send({from:window.defaultAccount});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.claim=function(){var e=Object(m.a)(y.a.mark((function e(n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),v.methods.claim(t.state.AirdropAdr).send({from:window.defaultAccount});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.modifyAirdropAmount=function(){var e=Object(m.a)(y.a.mark((function e(n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),v.methods.modifyAirdropAmount(t.state.AirdropAdr,f.utils.toWei(t.state.modifyAirdropAmount,"ether")).send({from:window.defaultAccount});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.getAirdropinfo=function(){var e=new f.eth.Contract(t.state.erc20abi.abi,t.state.AirdropAdr);e.methods.symbol().call().then((function(e){t.setState({ERC20symbol:e})})),e.methods.balanceOf(t.state.anyAirdropaddr).call().then((function(e){t.setState({AirdropBalance:e})})),v.methods.getAirTokenInfo(t.state.AirdropAdr).call().then((function(e){console.log(e),t.setState({AirdropinfoAmount:e[1]/Math.pow(10,18)}),console.log(t.state.AirdropinfoAmount)}))},t}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var t=Object(m.a)(y.a.mark((function t(){var e,a,s,i,o;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("undefined"===typeof window.ethereum){t.next=21;break}return(e=window.ethereum).autoRefreshOnNetwoorkChange=!1,t.prev=3,t.next=6,e.enable();case 6:a=t.sent,console.log(a),s=window.ethereum,console.log(s),console.log(s.chainId),window.defaultAccount=a[0].toLowerCase(),console.log(window.defaultAccount),e.on("accountsChanged",(function(t){console.log("accountsChanged:"+t)})),e.on((function(t){console.log(t)})),t.next=19;break;case 17:t.prev=17,t.t0=t.catch(3);case 19:t.next=22;break;case 21:console.log("\u6ca1\u6709metamask");case 22:i=window.defaultAccount,this.setState({user:i}),console.log(v),o=n(490),this.setState({erc20abi:o});case 27:case"end":return t.stop()}}),t,this,[[3,17]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(w.jsxs)("div",{children:[Object(w.jsx)("hr",{}),Object(w.jsxs)("div",{children:[Object(w.jsx)("p",{children:"\u5929\u5973\u53f7\u7a7a\u6295\u673a\u7b80\u4ecb:"}),Object(w.jsxs)("p",{style:{color:"blue",fontSize:"12px"},children:["\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u901a\u8fc7\u672c\u5de5\u5177\u5411\u60a8\u7684\u5c0f\u4f19\u4f34\u4eec\u7a7a\u6295\u60a8\u559c\u6b22\u7684\u4efb\u4f55\u706b\u5e01\u94fe\u4e0a\u7684\u901a\u8bc1\u3001 \u4e14\u53ef\u4ee5\u591a\u6b21\u53d1\u5e03\u3002",Object(w.jsx)("a",{href:"https://hecoinfo.com/address/0x68eDC077a12980525442e7B4e781951CFdF60701#code",children:"\u67e5\u770b\u7a7a\u6295\u673a\u5408\u7ea6\u6e90\u4ee3\u7801"})]})]}),Object(w.jsx)("hr",{}),Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{children:"\u9886\u7a7a\u6295"}),Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{children:[Object(w.jsxs)("p",{children:["\u5408\u7ea6\u5730\u5740\uff1a",Object(w.jsx)("input",{style:{width:"305px"},value:this.state.AirdropAdr,placeholder:"\u8f93\u5165\u901a\u8bc1\u7684\u5408\u7ea6\u5730\u5740\uff0c\u627e\u53d1\u9001\u7a7a\u6295\u8005\u8981",onChange:function(e){t.setState({AirdropAdr:e.target.value})}})]}),Object(w.jsxs)("p",{style:{color:"blue"},children:["\u540d\u79f0\uff1a",this.state.ERC20symbol,"\xa0\xa0\xa0\xa0 \u53ef\u9886\uff1a",this.state.AirdropinfoAmount,"\xa0\xa0\xa0\xa0 \u7a7a\u6295\u673a\u4e2d\u4f59\u989d\uff1a",f.utils.fromWei(this.state.AirdropBalance,"ether"),"\xa0\xa0\xa0\xa0"]})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("button",{onClick:function(){t.getAirdropinfo()},children:Object(w.jsx)("h3",{children:"\u67e5\u8be2\u7a7a\u6295"})}),Object(w.jsx)("nobr",{style:{color:"blue",fontSize:"12px"},children:"\u5728\u4e0a\u65b9\u8f93\u5165\u901a\u8bc1\u7684\u5408\u7ea6\u5730\u5740\u518d\u70b9\u51fb\u67e5\u8be2"})]})]}),Object(w.jsx)("div",{children:Object(w.jsxs)("form",{onSubmit:this.onSubmitgetAirdrop,children:[Object(w.jsx)("button",{children:Object(w.jsx)("h3",{children:"\u9886\u53d6\u7a7a\u6295"})}),Object(w.jsx)("nobr",{style:{color:"blue",fontSize:"12px",lineHeight:"10%"},children:"\u5728\u4e0a\u65b9\u8f93\u5165\u901a\u8bc1\u7684\u5408\u7ea6\u5730\u5740,\u518d\u70b9\u9886\u53d6"})]})})]}),Object(w.jsx)("hr",{}),Object(w.jsx)("hr",{}),Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{children:"\u53d1\u9001\u7a7a\u6295"}),Object(w.jsx)("div",{children:Object(w.jsxs)("form",{onSubmit:this.onSubmitApprove,children:[Object(w.jsxs)("p",{children:["\u5408\u7ea6\u5730\u5740\uff1a",Object(w.jsx)("input",{style:{width:"305px"},value:this.state.AirdropAdr,placeholder:"\u8f93\u5165\u901a\u8bc1\u7684\u5408\u7ea6\u5730\u5740",onChange:function(e){t.setState({AirdropAdr:e.target.value})}})]}),Object(w.jsxs)("p",{children:["\u6388\u6743\u6570\u91cf\uff1a",Object(w.jsx)("input",{style:{width:"120px"},value:this.state.ApproveTotal,placeholder:"\u8f93\u5165\u6388\u6743\u989d",onChange:function(e){t.setState({ApproveTotal:e.target.value})}}),Object(w.jsx)("button",{children:"\u6388\u6743"})]})]})}),Object(w.jsxs)("form",{onSubmit:this.onSubmitgiveAirdrop,children:[Object(w.jsxs)("p",{children:["\u5355\u4e2a\u6570\u91cf\uff1a",Object(w.jsx)("input",{style:{width:"120px"},value:this.state.AirdropAmount,placeholder:"\u5355\u4e2a\u7a7a\u6295\u989d\u5ea6",onChange:function(e){t.setState({AirdropAmount:e.target.value})}})]}),Object(w.jsxs)("p",{children:["\u7a7a\u6295\u603b\u91cf\uff1a",Object(w.jsx)("input",{style:{width:"120px"},value:this.state.AirdropTotal,placeholder:"\u4e0d\u5f97\u5927\u4e8e\u6388\u6743\u989d\u5ea6",onChange:function(e){t.setState({AirdropTotal:e.target.value})}}),Object(w.jsx)("button",{children:"\u53d1\u9001\u7a7a\u6295"})]})]}),Object(w.jsx)("p",{children:"\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026"}),Object(w.jsx)("form",{onSubmit:this.modifyAirdropAmount,children:Object(w.jsxs)("p",{children:["\u4fee\u6539\u5355\u4e2a\u7a7a\u6295\u6570\u91cf\uff1a",Object(w.jsx)("input",{style:{width:"100px"},value:this.state.modifyAirdropAmount,placeholder:"\u5355\u4e2a\u7a7a\u6295\u989d\u5ea6",onChange:function(e){t.setState({modifyAirdropAmount:e.target.value})}}),Object(w.jsx)("button",{children:"\u4fee\u6539"})]})}),Object(w.jsxs)("form",{onSubmit:this.claim,children:[Object(w.jsx)("button",{children:"\u9886\u53d6\u5269\u4f59\u7684\u5168\u90e8\u7a7a\u6295"}),Object(w.jsx)("nobr",{style:{color:"blue",fontSize:"12px",lineHeight:"10%"},children:"\u5728\u4e0a\u65b9\u8f93\u5165\u901a\u8bc1\u7684\u5408\u7ea6\u5730\u5740,\u518d\u70b9\u9886\u53d6"})]})]})]})}}]),a}(a.Component);var M=function(){return Object(w.jsx)("div",{children:Object(w.jsx)("p",{children:"\u656c\u8bf7\u671f\u5f85"})})};var S=function(){return Object(w.jsxs)("div",{style:{fontSize:"16px"},children:[Object(w.jsx)("hr",{}),Object(w.jsxs)(l.a,{children:[Object(w.jsx)(l.b,{to:"/STAirdrop",children:"\u5929\u5973\u53f7\u7a7a\u6295\u673a"}),"\xa0\xa0\xa0",Object(w.jsx)(l.b,{to:"/SThongbao",children:"\u53d1\u7ea2\u5305"}),"\xa0\xa0\xa0",Object(w.jsxs)(d.c,{children:[Object(w.jsx)(d.a,{path:"/STAirdrop",exact:!0,component:g}),Object(w.jsx)(d.a,{path:"/SThongbao",exact:!0,component:M})]})]})]})};var k=function(){return Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{style:{lineHeight:"100%",color:"red",fontSize:"15px"},children:[Object(w.jsx)("hr",{}),Object(w.jsx)("h3",{style:{color:"blue",textAlign:"center"},children:"\u514d\u8d23\u58f0\u660e:"}),Object(w.jsx)("p",{children:"\u672c\u7f51\u7ad9\u7cfb\u533a\u5757\u94fe\u7231\u597d\u8005\u521b\u7acb\uff0c\u65e8\u5728\u5f00\u53d1\u5404\u7c7b\u667a\u80fd\u5408\u7ea6\u8ba9\u533a\u5757\u94fe\u843d\u5730\u5e94\u7528\u3002\u575a\u5b88\u9053\u5fb7\u51c6\u7ef3\u3002 \u8d4b\u80fd\u5b9e\u4f53\u7ecf\u6d4e\u662f\u6211\u4eec\u7684\u65b9\u5411\uff01\u6253\u9020\u94b1\u5305\u5185\u7684\u7b2c\u4e00\u5fc5\u5907\u7f51\u7ad9\u662f\u6211\u4eec\u7684\u68a6\u60f3\uff01"}),Object(w.jsx)("p",{children:"\u8bf7\u5145\u5206\u4e86\u89e3\u533a\u5757\u94fe\u884c\u4e1a\u7684\u5404\u79cd\u98ce\u9669\uff0c\u672c\u5e73\u53f0\u4e0d\u627f\u62c5\u4efb\u4f55\u539f\u56e0\u5bfc\u81f4\u7684\u60a8\u7684\u635f\u5931\uff0c \u5305\u62ec\u672c\u7f51\u7ad9\u53ef\u80fd\u5b58\u5728\u7684\u4ee3\u7801\u6f0f\u6d1e\u3001\u9ed1\u5ba2\u653b\u51fb\u7b49\u3002"}),Object(w.jsx)("p",{children:"\u672c\u7f51\u7ad9\u7684\u6240\u6709\u751f\u6001\u90fd\u4e25\u683c\u575a\u5b88\u9053\u5fb7\u51c6\u7ef3\u3001\u4e0d\u8e29\u6cd5\u5f8b\u7ea2\u7ebf\u3002 \u8bf7\u5408\u6cd5\u4f7f\u7528\u672c\u7f51\u7ad9\uff0c\u5982\u5229\u7528\u672c\u7f51\u7ad9\u4ece\u4e8b\u4e00\u5207\u6d89\u5acc\u8fdd\u6cd5\u6d3b\u52a8\u4e0e\u672c\u7f51\u7ad9\u65e0\u5173\u3002"})]}),Object(w.jsxs)("div",{style:{lineHeight:"100%",fontSize:"15px"},children:[Object(w.jsx)("h3",{style:{color:"blue",textAlign:"center"},children:"\u5173\u4e8eLG\u901a\u8bc1"}),Object(w.jsx)("p",{children:"\u603b\u91cf2100\u4e07"}),Object(w.jsx)("p",{children:"\u521b\u59cb\u4eba51%----1071\u4e07---5\u5e74\u5185\u7981\u6b62\u6d41\u901a"}),Object(w.jsx)("p",{children:"\u6280\u672f\u56e2\u961f20%---420\u4e07---2\u5e74\u5185\u7981\u6b62\u6d41\u901a\uff0c2\u5e74\u540e\u9650\u5236\u6216\u7ee7\u7eed\u7981\u6b62"}),Object(w.jsx)("p",{children:"\u5546\u52a1\u5408\u4f5c5%----105\u4e07---2\u5e74\u5185\u7981\u6b62\u6d41\u901a\uff0c\u5546\u52a1\u5408\u4f5c\u540e\u9650\u5236\u6d41\u901a"}),Object(w.jsx)("p",{children:"\u7528\u6237\u6fc0\u52b124%---504\u4e07---\u81ea\u7531\u6d41\u901a"}),Object(w.jsx)("p",{children:"\u7528\u6237\u6fc0\u52b1\u7684\u5176\u4e2d24\u4e07\u4e00\u5e74\u5185\u7528\u4e8e\u7a7a\u6295\u65b0\u7528\u6237\u3001\u4f59\u4e0b\u7684\u901a\u8fc7\u8d21\u732e\u503c\u5206\u914d"}),Object(w.jsx)("p",{style:{color:"red"},children:"\u6ce8\uff1aLG\u901a\u8bc1\u4ec5\u7528\u4e8e\u589e\u5f3a\u7528\u6237\u7c98\u6027\u3001\u4ee5\u53ca\u5229\u6da6\u5206\u6210\u3002 \u672c\u5e73\u53f0\u4e0d\u4f1a\u901a\u8fc7LG\u901a\u8bc1\u52df\u96c6\u8d44\u91d1\u3001\u7092\u4f5c\u7b49\uff0c\u7531\u4e8e\u533a\u5757\u94fe\u7684\u9ad8\u6d41\u901a\u6027\uff0c \u6211\u4eec\u65e0\u6cd5\u9650\u5b9a\u7528\u6237\u624b\u4e2d\u7684\u901a\u8bc1\u4e0d\u8fdb\u884c\u6d41\u901a\uff0c\u6545\u5982\u679c\u60a8\u53c2\u4e0e\u4e86\u901a\u8bc1\u7684\u4e70\u5356\u8bf7\u81ea\u62c5\u76c8\u4e8f\u3002"})]})]})};var G=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)("hr",{}),Object(w.jsx)("p",{children:"\u94fe\u63a5\u5e93"}),Object(w.jsxs)("div",{style:{color:"blue",fontSize:"12px",lineHeight:"50%"},children:[Object(w.jsxs)("p",{children:["LG\u533a\u5757\u94fe\u7f51\uff1a",Object(w.jsx)("a",{href:"https://lg-qkl.xyz",children:"https://lg-qkl.xyz"})]}),Object(w.jsxs)("p",{children:["\u706b\u5e01\u7f51APP\u4e0b\u8f7d\uff1a",Object(w.jsx)("a",{href:"https://m.huobi.be/zh-cn/download",children:"https://m.huobi.be/zh-cn/download"})]}),Object(w.jsxs)("p",{children:["TP\u94b1\u5305APP\u4e0b\u8f7d\uff1a",Object(w.jsx)("a",{href:"https://www.tokenpocket.pro",children:"https://www.tokenpocket.pro"})]}),Object(w.jsxs)("p",{children:["IM\u94b1\u5305APP\u4e0b\u8f7d\uff1a",Object(w.jsx)("a",{href:"https://token.im",children:"https://token.im"})]}),Object(w.jsxs)("p",{children:["\u706b\u5e01\u94b1\u5305APP\u4e0b\u8f7d\uff1a",Object(w.jsx)("a",{href:"https://www.huobiwallet.com/download?from_channel=grouppage",children:"https://www.huobiwallet.com/download"})]}),Object(w.jsxs)("p",{children:["\u5e01\u5b89\u7f51\uff1a",Object(w.jsx)("a",{href:"https://www.binancezh.cc",children:"https://www.binancezh.cc"})]}),Object(w.jsx)("br",{}),Object(w.jsxs)("p",{children:["\u6bd4\u7279\u5e01\u533a\u5757\u6e38\u89c8\u5668\uff1a",Object(w.jsx)("a",{href:"https://btc.com/",children:"https://btc.com/"})]}),Object(w.jsxs)("p",{children:["\u4ee5\u592a\u574a\u533a\u5757\u6e38\u89c8\u5668\uff1a",Object(w.jsx)("a",{href:"https://cn.etherscan.com/",children:"https://cn.etherscan.com/"})]}),Object(w.jsxs)("p",{children:["\u706b\u5e01\u94fe\u533a\u5757\u6e38\u89c8\u5668\uff1a",Object(w.jsx)("a",{href:"https://hecoinfo.com/",children:"https://hecoinfo.com/"})]})]})]})},C=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(w.jsx)("div",{style:{margin:6,fontSize:"18px"},children:Object(w.jsxs)(l.a,{children:[Object(w.jsx)(l.b,{to:"/",children:"\u4e3b\u9875"}),"\xa0\xa0\xa0",Object(w.jsx)(l.b,{to:"/ST",children:"\u751f\u6001"}),"\xa0\xa0\xa0",Object(w.jsx)(l.b,{to:"/KnowledgeBase",children:"\u533a\u5757\u94fe\u4e16\u754c\u5165\u53e3"}),"\xa0\xa0\xa0",Object(w.jsx)(l.b,{to:"/warning",style:{color:"red"},children:"\u514d\u8d23\u58f0\u660e"}),Object(w.jsxs)(d.c,{children:[Object(w.jsx)(d.a,{path:"/ST",component:S}),Object(w.jsx)(d.a,{path:"/KnowledgeBase",component:G}),Object(w.jsx)(d.a,{path:"/warning",component:k}),Object(w.jsx)(d.a,{path:"/",exact:!0,component:A})," //\u52a0exact\u6216\u8005\u628a\u8fd9\u4e00\u884c\u653e\u6700\u5e95\u4e0b"]})]})})}}]),n}(a.Component),_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,502)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),a(t),s(t),i(t),o(t)}))};o.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(C,{})}),document.getElementById("root")),_()},69:function(t,e,n){}},[[498,1,2]]]);
//# sourceMappingURL=main.6e74636d.chunk.js.map