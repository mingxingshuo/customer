webpackJsonp([1],{BELh:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App"},o,!1,function(e){s("r4zD")},null,null).exports,n=s("/ocq"),l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.onRoutes,mode:"horizontal","unique-opened":"",router:""}},[e._l(e.navlist,function(t){return[s("el-menu-item",{key:t.index,attrs:{index:t.index}},[s("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))])])]})],2),e._v(" "),s("div",{staticClass:"field"},[s("transition",{attrs:{name:"move",mode:"out-in"}},[s("keep-alive",[s("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var r=s("VU/8")({computed:{onRoutes:function(){return this.$router.replace({path:"/msg_view"})}},data:function(){return{activeIndex:"1",activeIndex2:"1",navlist:[{index:"showMessage",title:"首页"},{index:"addMessage",title:"添加客服消息"}]}},methods:{}},l,!1,function(e){s("QLvd")},"data-v-1720a256",null).exports,c=s("mtWM"),d=s.n(c),u={data:function(){return{form:{},type:"1",subForm:{},picMessageData:[],codes:[],codes1:[],codes2:[],task:!1,delay:1,description:"",picMessageSwitch:!1,imgUrl:"",gonghaoList1:[],gonghaoList2:[],contentData:{},contents:[],flag:!0}},mounted:function(){this.get_codes()},methods:{onCreate:function(){var e=this;"1"==this.type?(this.contentData.description=this.description,this.contents.push(this.contentData)):this.contents=this.picMessageData,1==this.flag?this.codes=this.codes1:this.codes=this.codes2,d()({url:"/message/create",method:"post",data:{contents:this.contents,type:this.type,task:this.task,delay:this.delay,codes:this.codes,img:this.contents[0].picurl,take_over:this.flag}}).then(function(t){t.data.success?(e.$message({type:"success",message:t.data.success}),window.location.href="/msg_view/",e.form={},e.description="",e.picMessageData=e.codes=[]):e.$message.error(t.data.err)})},cancel:function(){this.$router.push("/msg_view")},addOne:function(){this.subForm.picurl=this.imgUrl,this.picMessageData.push(this.subForm),this.subForm={},this.imgUrl=""},handleAvatarSuccess:function(e,t){this.imgUrl="http://crm.rrdtjj.top/uploads/"+e.filename},change:function(){this.form={}},deleteMessage:function(e,t){this.picMessageData.splice(e,1)},get_codes:function(){var e=this;d()({url:"/message/get_code",method:"get",params:{}}).then(function(t){if(""!=t.data.codes){for(var s=[],a=[],o=0;o<t.data.codes.length;o++){var i=o;1==t.data.codes[i].take_over?(console.log(111),s.push(t.data.codes[i])):(console.log(222),a.push(t.data.codes[i]))}console.log(s),e.gonghaoList1=s,e.gonghaoList2=a}})}}},m={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"add-message"},[s("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px",size:"mini"}},[s("el-form-item",{attrs:{label:"类型"}},[s("el-radio-group",{attrs:{size:"medium"},on:{change:e.change},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[s("el-radio",{attrs:{border:"",label:"1"}},[e._v("文本消息")]),e._v(" "),s("el-radio",{attrs:{border:"",label:"0"}},[e._v("图文消息")])],1)],1),e._v(" "),1!=e.type?s("el-form",{ref:"subForm",attrs:{model:e.subForm,"label-width":"80px",size:"mini"}},[s("el-form-item",{attrs:{label:"图片",prop:"imageFile"}},[s("el-upload",{attrs:{"show-file-list":!1,enctype:"multipart/form-data",name:"imageFile",action:"http://crm.rrdtjj.top/message/upload","on-success":e.handleAvatarSuccess}},[s("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),e.imgUrl?s("img",{attrs:{src:e.imgUrl,alt:"",width:"200"}}):e._e()],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"标题"}},[s("el-input",{staticStyle:{width:"500px"},model:{value:e.subForm.title,callback:function(t){e.$set(e.subForm,"title",t)},expression:"subForm.title"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"链接"}},[s("el-input",{staticStyle:{width:"500px"},model:{value:e.subForm.url,callback:function(t){e.$set(e.subForm,"url",t)},expression:"subForm.url"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"详细信息",prop:"description"}},[s("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea"},model:{value:e.subForm.description,callback:function(t){e.$set(e.subForm,"description",t)},expression:"subForm.description"}})],1),e._v(" "),s("el-form-item",{attrs:{size:"large"}},[s("el-button",{attrs:{type:"primary"},on:{click:e.addOne}},[e._v("添加")])],1),e._v(" "),s("el-form-item",{attrs:{label:"图文消息",prop:"pic_message"}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.picMessageData,border:""}},[s("el-table-column",{attrs:{prop:"title",label:"标题",width:"100"}}),e._v(" "),s("el-table-column",{attrs:{prop:"picurl",label:"图片",width:"200"},scopedSlots:e._u([{key:"default",fn:function(e){return[s("img",{attrs:{src:e.row.picurl,width:"100%"}})]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"url",label:"链接",width:"200"}}),e._v(" "),s("el-table-column",{attrs:{prop:"description",label:"详细信息",width:"300"}}),e._v(" "),s("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{staticClass:"send-message",attrs:{size:"small",type:"success"},on:{click:function(s){e.deleteMessage(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1)],1):s("el-form-item",{attrs:{label:"详细信息",prop:"description"}},[s("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"是否延时"}},[s("el-switch",{model:{value:e.task,callback:function(t){e.task=t},expression:"task"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"延时时间(分钟)"}},[s("el-input",{staticStyle:{width:"100px"},attrs:{disabled:!e.task},model:{value:e.delay,callback:function(t){e.delay=t},expression:"delay"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"是否接管"}},[s("el-switch",{model:{value:e.flag,callback:function(t){e.flag=t},expression:"flag"}})],1),e._v(" "),e.flag?s("el-form-item",{attrs:{label:"公号",prop:"codes1"}},[s("el-checkbox-group",{model:{value:e.codes1,callback:function(t){e.codes1=t},expression:"codes1"}},e._l(e.gonghaoList1,function(t,a){return s("el-checkbox",{key:a,attrs:{label:t.code,name:"codes1"}},[e._v(e._s(t.name))])}))],1):s("el-form-item",{attrs:{label:"公号",prop:"codes2"}},[s("el-checkbox-group",{model:{value:e.codes2,callback:function(t){e.codes2=t},expression:"codes2"}},e._l(e.gonghaoList2,function(t,a){return s("el-checkbox",{key:a,attrs:{label:t.code,name:"codes2"}},[e._v(e._s(t.name))])}))],1),e._v(" "),s("el-form-item",{attrs:{size:"large"}},[s("el-button",{attrs:{type:"primary"},on:{click:e.onCreate}},[e._v("立即创建")]),e._v(" "),s("el-button",{on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)},staticRenderFns:[]};var p=s("VU/8")(u,m,!1,function(e){s("n5TV")},"data-v-614e6b12",null).exports,h=s("NYxO");a.default.use(h.a);var f=new h.a.Store({state:{messageData:{},isShow:!0},mutations:{changeisShow:function(e,t){e.isShow=t},setMessageData:function(e,t){e.messageData=t||{}}}}),g={data:function(){return{form:{},type:"1",subForm:{},picMessageData:[],codes:[],codes1:[],codes2:[],contents:[],task:!1,delay:1,description:"",picMessageSwitch:!1,imgUrl:"",gonghaoList:[],flag:!0,obj:{},contentData:{}}},mounted:function(){this.get_codes(),this.showList()},methods:{onSave:function(){var e=this;1==this.type?(this.contentData.description=this.description,this.contents.push(this.contentData)):this.contents=this.picMessageData,1==this.flag?this.codes=this.codes1:this.codes=this.codes2,d()({url:"/message/update",method:"post",data:{id:this.obj._id,contents:this.contents,type:this.type,task:this.task,delay:this.delay,codes:this.codes,img:this.contents[0].picurl,take_over:this.flag}}).then(function(t){t.data.success?(window.location.href="/msg_view/",e.$message({type:"success",message:t.data.success})):e.$message.error(t.data.err)})},addOne:function(){this.subForm.picurl=this.imgUrl,this.picMessageData.push(this.subForm),this.subForm={},this.imgUrl=""},saveOne:function(){this.picMessageData.splice(this.subForm.index,1,this.subForm),this.subForm={},this.imgUrl=""},change:function(){this.form={}},handleAvatarSuccess:function(e,t){this.imgUrl="http://crm.rrdtjj.top/uploads/"+e.filename},updateOne:function(e,t){this.subForm=t,this.subForm.index=e,this.imgUrl=this.subForm.picurl},deleteOne:function(e,t){var s=this;this.$confirm("此操作删除此条客服消息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){s.picMessageData.length<=1?s.$message({type:"info",message:"列表中至少需要展示一条数据"}):(s.$message({type:"success",message:"删除成功"}),s.picMessageData.splice(e,1),s.showList())}).catch(function(){s.$message({type:"info",message:"已取消删除"})})},showList:function(){this.obj=f.state.messageData,this.picMessageData=this.obj.contents,this.type=this.obj.type.toString(),this.codes=this.obj.codes,this.description=this.obj.contents[0].description,this.task=this.obj.task,this.delay=this.obj.delay,this.flag=this.obj.take_over},cancel:function(){window.location.href="/msg_view/"},get_codes:function(){var e=this;d()({url:"/message/get_code",method:"get",params:{}}).then(function(t){if(""!=t.data.codes){for(var s=[],a=[],o=0;o<t.data.codes;o++){var i=o;1==t.data.codes[i].take_over?s.push(t.data.codes[i]):a.push(t.data.codes[i])}e.gonghaoList1=s,e.gonghaoList2=a}})}}},b={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"add-message"},[s("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px",size:"mini"}},[s("el-form-item",[s("h2",[e._v("修改客服消息")])]),e._v(" "),s("el-form-item",{attrs:{label:"类型"}},[s("el-radio-group",{attrs:{size:"medium"},on:{change:e.change},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[s("el-radio",{attrs:{border:"",label:"1"}},[e._v("文本消息")]),e._v(" "),s("el-radio",{attrs:{border:"",label:"0"}},[e._v("图文消息")])],1)],1),e._v(" "),1!=e.type?s("el-form",{ref:"subForm",attrs:{model:e.subForm,"label-width":"80px",size:"mini"}},[s("el-form-item",{attrs:{label:"图片"}},[s("el-upload",{attrs:{"show-file-list":!1,enctype:"multipart/form-data",name:"imageFile",action:"http://crm.rrdtjj.top/message/upload","on-success":e.handleAvatarSuccess}},[s("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),e.imgUrl?s("img",{attrs:{src:e.imgUrl,alt:"",width:"200"}}):e._e()],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"标题"}},[s("el-input",{staticStyle:{width:"500px"},model:{value:e.subForm.title,callback:function(t){e.$set(e.subForm,"title",t)},expression:"subForm.title"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"链接"}},[s("el-input",{staticStyle:{width:"500px"},model:{value:e.subForm.url,callback:function(t){e.$set(e.subForm,"url",t)},expression:"subForm.url"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"详细信息",prop:"description"}},[s("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea"},model:{value:e.subForm.description,callback:function(t){e.$set(e.subForm,"description",t)},expression:"subForm.description"}})],1),e._v(" "),s("el-form-item",{attrs:{size:"large"}},[s("el-button",{attrs:{type:"success"},on:{click:e.addOne}},[e._v("添加")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.saveOne}},[e._v("保存")])],1),e._v(" "),s("el-form-item",{attrs:{label:"图文消息",prop:"pic_message"}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.picMessageData,border:""}},[s("el-table-column",{attrs:{prop:"title",label:"标题",width:"100"}}),e._v(" "),s("el-table-column",{attrs:{prop:"picurl",label:"图片",width:"200"},scopedSlots:e._u([{key:"default",fn:function(e){return[s("img",{attrs:{src:e.row.picurl,width:"100%"}})]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"url",label:"链接",width:"200"}}),e._v(" "),s("el-table-column",{attrs:{prop:"description",label:"详细信息",width:"300"}}),e._v(" "),s("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(s){e.updateOne(t.$index,t.row)}}},[e._v("修改")]),e._v(" "),s("el-button",{staticClass:"send-message",attrs:{size:"small",type:"success"},on:{click:function(s){e.deleteOne(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1)],1):s("el-form-item",{attrs:{label:"详细信息",prop:"description"}},[s("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"是否延时"}},[s("el-switch",{model:{value:e.task,callback:function(t){e.task=t},expression:"task"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"延时时间(分钟)"}},[s("el-input",{staticStyle:{width:"100px"},model:{value:e.delay,callback:function(t){e.delay=t},expression:"delay"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"是否接管"}},[s("el-switch",{model:{value:e.flag,callback:function(t){e.flag=t},expression:"flag"}})],1),e._v(" "),e.flag?s("el-form-item",{attrs:{label:"接管公号",prop:"codes1"}},[s("el-checkbox-group",{model:{value:e.codes1,callback:function(t){e.codes1=t},expression:"codes1"}},e._l(e.gonghaoList1,function(t,a){return s("el-checkbox",{key:a,attrs:{label:t.code,name:"codes1"}},[e._v(e._s(t.name))])}))],1):s("el-form-item",{attrs:{label:"未接管公号",prop:"codes2"}},[s("el-checkbox-group",{model:{value:e.codes2,callback:function(t){e.codes2=t},expression:"codes2"}},e._l(e.gonghaoList2,function(t,a){return s("el-checkbox",{key:a,attrs:{label:t.code,name:"codes2"}},[e._v(e._s(t.name))])}))],1),e._v(" "),s("el-form-item",{attrs:{size:"large"}},[s("el-button",{attrs:{type:"primary"},on:{click:e.onSave}},[e._v("保存")]),e._v(" "),s("el-button",{on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)},staticRenderFns:[]};var v={computed:{isShow:function(){return f.state.isShow}},components:{editMessage:s("VU/8")(g,b,!1,function(e){s("YO8O")},"data-v-fb3f65aa",null).exports},data:function(){return{tableData:[],desShow:""}},mounted:function(){this.showMessage()},methods:{aa:function(e){console.log(e)},showMessage:function(){var e=this;d()({url:"/message",method:"get",parmas:{},withCredentials:!0}).then(function(t){0!=t.data.messages.length&&(e.tableData=t.data.messages)})},editMessage:function(e,t){f.commit("setMessageData",t),f.commit("changeisShow",!1)},sendMessage:function(e,t){var s=this;this.$confirm("此操作发送此条客服消息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){d()({url:"/message/send",method:"get",params:{id:t._id}}).then(function(e){s.$message({type:"success",message:e.data.success})})}).catch(function(){s.$message({type:"info",message:"已取消发送"})})},deleteMessage:function(e,t){var s=this;this.$confirm("此操作删除此条客服消息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){d()({url:"/message/delete",method:"get",params:{id:t._id}}).then(function(e){0==e.data.data?(s.$message({type:"success",message:"已删除最后一条数据"}),s.tableData=[]):(s.$message({type:"success",message:e.data.success}),s.showMessage())})}).catch(function(){s.$message({type:"info",message:"已取消删除"})})}}},_={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"show-message"},[e.isShow?s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[s("el-table-column",{attrs:{prop:"type",label:"类型",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(1==t.row.type?"文本消息":"图文消息")+e._s(t.row.contents.length>1?"(多)":""))])]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"task",label:"是否延时",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("  \n                "+e._s(1==t.row.task?"是":"否")+"  \n            ")]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"delay",label:"延时时间(分钟)",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("  \n                "+e._s(1==t.row.task?t.row.delay:"——")+"  \n            ")]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"contents[0].title",label:"标题",width:"100"}}),e._v(" "),s("el-table-column",{attrs:{prop:"contents[0].description",label:"详细信息",width:"300"}}),e._v(" "),s("el-table-column",{attrs:{prop:"contents[0].url",label:"链接",width:"150"}}),e._v(" "),s("el-table-column",{attrs:{prop:"img",label:"图片",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.img?s("img",{attrs:{src:t.row.img,width:"100%"}}):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(s){e.editMessage(t.$index,t.row)}}},[e._v("修改")]),e._v(" "),s("el-button",{directives:[{name:"show",rawName:"v-show",value:!t.row.task,expression:"!scope.row.task"}],attrs:{size:"small",type:"success"},on:{click:function(s){e.sendMessage(t.$index,t.row)}}},[e._v("发送消息")]),e._v(" "),s("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(s){e.deleteMessage(t.$index,t.row)}}},[e._v("删除")])]}}])})],1):s("edit-message")],1)},staticRenderFns:[]};var w=s("VU/8")(v,_,!1,function(e){s("BELh")},"data-v-04f6268d",null).exports;a.default.use(n.a);var y=new n.a({mode:"history",routes:[{path:"/msg_view",redirect:"/msg_view/showMessage"},{path:"/msg_view",component:r,children:[{path:"/msg_view/showMessage",component:w,meta:{title:"首页"}},{path:"/msg_view/addMessage",component:p,meta:{title:"添加客服消息"}}]}]}),k=s("zL8q"),x=s.n(k);s("tvR6");d.a.defaults.withCredentials=!0,a.default.config.productionTip=!1,a.default.use(x.a),new a.default({el:"#app",router:y,components:{App:i},template:"<App/>"})},QLvd:function(e,t){},YO8O:function(e,t){},n5TV:function(e,t){},r4zD:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.1a560424f4d42185c3ae.js.map