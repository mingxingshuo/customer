webpackJsonp([1],{"4Lld":function(t,e){},N3y0:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=s("VU/8")({name:"App"},i,!1,function(t){s("r4zD")},null,null).exports,n=s("/ocq"),l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.onRoutes,mode:"horizontal","unique-opened":"",router:""}},[t._l(t.navlist,function(e){return[s("el-menu-item",{key:e.index,attrs:{index:e.index}},[s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])]})],2),t._v(" "),s("div",{staticClass:"field"},[s("transition",{attrs:{name:"move",mode:"out-in"}},[s("keep-alive",[s("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var r=s("VU/8")({computed:{onRoutes:function(){return this.$router.replace({path:"/msg_view"})}},data:function(){return{activeIndex:"1",activeIndex2:"1",navlist:[{index:"showMessage",title:"首页"},{index:"addMessage",title:"添加客服消息"}]}},methods:{}},l,!1,function(t){s("QLvd")},"data-v-1720a256",null).exports,c=s("mtWM"),u=s.n(c),d={data:function(){return{form:{},type:"1",subForm:{},picMessageData:[],codes:[],task:!1,delay:1,description:"",picMessageSwitch:!1,imgUrl:"",gonghaoList:[],contentData:{},contents:[]}},mounted:function(){this.get_codes()},methods:{onCreate:function(){var t=this;"1"==this.type?(this.contentData.description=this.description,this.contents.push(this.contentData)):this.contents=this.picMessageData,u()({url:"/message/create",method:"post",data:{contents:this.contents,type:this.type,task:this.task,delay:this.delay,codes:this.codes}}).then(function(e){e.data.success?(t.$message({type:"success",message:e.data.success}),window.location.href="/msg_view/",t.form={},t.description="",t.picMessageData=t.codes=[]):t.$message.error(e.data.err)})},cancel:function(){this.$router.push("/msg_view")},addOne:function(){this.subForm.picurl=this.imgUrl,this.picMessageData.push(this.subForm),this.subForm={},this.imgUrl=""},handleAvatarSuccess:function(t,e){this.imgUrl="http://crm.rrdtjj.top/uploads/"+t.filename},change:function(){this.form={}},deleteMessage:function(t,e){this.picMessageData.splice(t,1)},get_codes:function(){var t=this;u()({url:"/message/get_code",method:"get",params:{}}).then(function(e){""!=e.data.codes&&(t.gonghaoList=e.data.codes)})}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"add-message"},[s("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px",size:"mini"}},[s("el-form-item",{attrs:{label:"类型"}},[s("el-radio-group",{attrs:{size:"medium"},on:{change:t.change},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[s("el-radio",{attrs:{border:"",label:"1"}},[t._v("文本消息")]),t._v(" "),s("el-radio",{attrs:{border:"",label:"0"}},[t._v("图文消息")])],1)],1),t._v(" "),1!=t.type?s("el-form",{ref:"subForm",attrs:{model:t.subForm,"label-width":"80px",size:"mini"}},[s("el-form-item",{attrs:{label:"图片",prop:"imageFile"}},[s("el-upload",{attrs:{"show-file-list":!1,enctype:"multipart/form-data",name:"imageFile",action:"http://crm.rrdtjj.top/message/upload","on-success":t.handleAvatarSuccess}},[s("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),t._v(" "),t.imgUrl?s("img",{attrs:{src:t.imgUrl,alt:"",width:"200"}}):t._e()],1)],1),t._v(" "),s("el-form-item",{attrs:{label:"标题"}},[s("el-input",{staticStyle:{width:"500px"},model:{value:t.subForm.title,callback:function(e){t.$set(t.subForm,"title",e)},expression:"subForm.title"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"链接"}},[s("el-input",{staticStyle:{width:"500px"},model:{value:t.subForm.url,callback:function(e){t.$set(t.subForm,"url",e)},expression:"subForm.url"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"详细信息",prop:"description"}},[s("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea"},model:{value:t.subForm.description,callback:function(e){t.$set(t.subForm,"description",e)},expression:"subForm.description"}})],1),t._v(" "),s("el-form-item",{attrs:{size:"large"}},[s("el-button",{attrs:{type:"primary"},on:{click:t.addOne}},[t._v("添加")])],1),t._v(" "),s("el-form-item",{attrs:{label:"图文消息",prop:"pic_message"}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.picMessageData,border:""}},[s("el-table-column",{attrs:{prop:"title",label:"标题",width:"100"}}),t._v(" "),s("el-table-column",{attrs:{prop:"picurl",label:"图片",width:"200"},scopedSlots:t._u([{key:"default",fn:function(t){return[s("img",{attrs:{src:t.row.picurl,width:"100%"}})]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"url",label:"链接",width:"200"}}),t._v(" "),s("el-table-column",{attrs:{prop:"description",label:"详细信息",width:"300"}}),t._v(" "),s("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{staticClass:"send-message",attrs:{size:"small",type:"success"},on:{click:function(s){t.deleteMessage(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1)],1):s("el-form-item",{attrs:{label:"详细信息",prop:"description"}},[s("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"是否延时"}},[s("el-switch",{model:{value:t.task,callback:function(e){t.task=e},expression:"task"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"延时时间"}},[s("el-input",{staticStyle:{width:"100px"},attrs:{disabled:!t.task},model:{value:t.delay,callback:function(e){t.delay=e},expression:"delay"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"公号",prop:"codes"}},[s("el-checkbox-group",{model:{value:t.codes,callback:function(e){t.codes=e},expression:"codes"}},t._l(t.gonghaoList,function(e,a){return s("el-checkbox",{key:a,attrs:{label:e.code,name:"codes"}},[t._v(t._s(e.name))])}))],1),t._v(" "),s("el-form-item",{attrs:{size:"large"}},[s("el-button",{attrs:{type:"primary"},on:{click:t.onCreate}},[t._v("立即创建")]),t._v(" "),s("el-button",{on:{click:t.cancel}},[t._v("取消")])],1)],1)],1)},staticRenderFns:[]};var p=s("VU/8")(d,m,!1,function(t){s("sw0L")},"data-v-09ce4e00",null).exports,h=s("NYxO");a.default.use(h.a);var f=new h.a.Store({state:{messageData:{},isShow:!0},mutations:{changeisShow:function(t,e){t.isShow=e},setMessageData:function(t,e){t.messageData=e||{}}}}),b={data:function(){return{form:{},type:"1",subForm:{},picMessageData:[],codes:[],contents:[],task:!1,delay:1,description:"",picMessageSwitch:!1,imgUrl:"",gonghaoList:[],obj:{},contentData:{}}},mounted:function(){this.get_codes(),this.showList()},methods:{onSave:function(){var t=this;1==this.type?(this.contentData.description=this.description,this.contents.push(this.contentData)):this.contents=this.picMessageData,u()({url:"/message/update",method:"post",data:{id:this.obj._id,contents:this.contents,type:this.type,task:this.task,delay:this.delay,codes:this.codes}}).then(function(e){e.data.success?(window.location.href="/msg_view/",t.$message({type:"success",message:e.data.success})):t.$message.error(e.data.err)})},addOne:function(){this.subForm.picurl=this.imgUrl,this.picMessageData.push(this.subForm),this.subForm={},this.imgUrl=""},saveOne:function(){this.picMessageData.splice(this.subForm.index,1,this.subForm),this.subForm={},this.imgUrl=""},change:function(){this.form={}},handleAvatarSuccess:function(t,e){this.imgUrl="http://crm.rrdtjj.top/uploads/"+t.filename},updateOne:function(t,e){this.subForm=e,this.subForm.index=t,this.imgUrl=this.subForm.picurl},deleteOne:function(t,e){var s=this;this.$confirm("此操作删除此条客服消息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){s.$message({type:"success",message:"删除成功"}),s.picMessageData.splice(t,1),s.showList()}).catch(function(){s.$message({type:"info",message:"已取消删除"})})},showList:function(){this.obj=f.state.messageData,this.picMessageData=this.obj.contents,this.type=this.obj.type.toString(),this.codes=this.obj.codes,this.description=this.obj.contents[0].description},cancel:function(){window.location.href="/msg_view/"},get_codes:function(){var t=this;u()({url:"/message/get_code",method:"get",params:{}}).then(function(e){""!=e.data.codes&&(t.gonghaoList=e.data.codes)})}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"add-message"},[s("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px",size:"mini"}},[s("el-form-item",[s("h2",[t._v("修改客服消息")])]),t._v(" "),s("el-form-item",{attrs:{label:"类型"}},[s("el-radio-group",{attrs:{size:"medium"},on:{change:t.change},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[s("el-radio",{attrs:{border:"",label:"1"}},[t._v("文本消息")]),t._v(" "),s("el-radio",{attrs:{border:"",label:"0"}},[t._v("图文消息")])],1)],1),t._v(" "),1!=t.type?s("el-form",{ref:"subForm",attrs:{model:t.subForm,"label-width":"80px",size:"mini"}},[s("el-form-item",{attrs:{label:"图片"}},[s("el-upload",{attrs:{"show-file-list":!1,enctype:"multipart/form-data",name:"imageFile",action:"http://crm.rrdtjj.top/message/upload","on-success":t.handleAvatarSuccess}},[s("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),t._v(" "),t.imgUrl?s("img",{attrs:{src:t.imgUrl,alt:"",width:"200"}}):t._e()],1)],1),t._v(" "),s("el-form-item",{attrs:{label:"标题"}},[s("el-input",{staticStyle:{width:"500px"},model:{value:t.subForm.title,callback:function(e){t.$set(t.subForm,"title",e)},expression:"subForm.title"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"链接"}},[s("el-input",{staticStyle:{width:"500px"},model:{value:t.subForm.url,callback:function(e){t.$set(t.subForm,"url",e)},expression:"subForm.url"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"详细信息",prop:"description"}},[s("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea"},model:{value:t.subForm.description,callback:function(e){t.$set(t.subForm,"description",e)},expression:"subForm.description"}})],1),t._v(" "),s("el-form-item",{attrs:{size:"large"}},[s("el-button",{attrs:{type:"success"},on:{click:t.addOne}},[t._v("添加")]),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:t.saveOne}},[t._v("保存")])],1),t._v(" "),s("el-form-item",{attrs:{label:"图文消息",prop:"pic_message"}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.picMessageData,border:""}},[s("el-table-column",{attrs:{prop:"title",label:"标题",width:"100"}}),t._v(" "),s("el-table-column",{attrs:{prop:"picurl",label:"图片",width:"200"},scopedSlots:t._u([{key:"default",fn:function(t){return[s("img",{attrs:{src:t.row.picurl,width:"100%"}})]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"url",label:"链接",width:"200"}}),t._v(" "),s("el-table-column",{attrs:{prop:"description",label:"详细信息",width:"300"}}),t._v(" "),s("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(s){t.updateOne(e.$index,e.row)}}},[t._v("修改")]),t._v(" "),s("el-button",{staticClass:"send-message",attrs:{size:"small",type:"success"},on:{click:function(s){t.deleteOne(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1)],1):s("el-form-item",{attrs:{label:"详细信息",prop:"description"}},[s("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"是否延时"}},[s("el-switch",{model:{value:t.task,callback:function(e){t.task=e},expression:"task"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"延时时间"}},[s("el-input",{staticStyle:{width:"100px"},model:{value:t.delay,callback:function(e){t.delay=e},expression:"delay"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"公号",prop:"codes"}},[s("el-checkbox-group",{model:{value:t.codes,callback:function(e){t.codes=e},expression:"codes"}},t._l(t.gonghaoList,function(e,a){return s("el-checkbox",{key:a,attrs:{label:e.code,name:"codes"}},[t._v(t._s(e.name))])}))],1),t._v(" "),s("el-form-item",{attrs:{size:"large"}},[s("el-button",{attrs:{type:"primary"},on:{click:t.onSave}},[t._v("保存")]),t._v(" "),s("el-button",{on:{click:t.cancel}},[t._v("取消")])],1)],1)],1)},staticRenderFns:[]};var g={computed:{isShow:function(){return f.state.isShow}},components:{editMessage:s("VU/8")(b,v,!1,function(t){s("4Lld")},"data-v-2ba2183e",null).exports},data:function(){return{tableData:[],desShow:""}},mounted:function(){this.showMessage()},methods:{showMessage:function(){var t=this;u()({url:"/message",method:"get",parmas:{},withCredentials:!0}).then(function(e){0!=e.data.messages.length&&(t.tableData=e.data.messages)})},editMessage:function(t,e){f.commit("setMessageData",e),f.commit("changeisShow",!1)},sendMessage:function(t,e){var s=this;this.$confirm("此操作发送此条客服消息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){u()({url:"/message/send",method:"get",params:{id:e._id}}).then(function(t){s.$message({type:"success",message:t.data.success})})}).catch(function(){s.$message({type:"info",message:"已取消发送"})})},deleteMessage:function(t,e){var s=this;this.$confirm("此操作删除此条客服消息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){u()({url:"/message/delete",method:"get",params:{id:e._id}}).then(function(t){s.$message({type:"success",message:t.data.success}),console.log(t.data.data),s.showMessage()})}).catch(function(){s.$message({type:"info",message:"已取消删除"})})}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"show-message"},[t.isShow?s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[s("el-table-column",{attrs:{prop:"type",label:"类型",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(1==e.row.type?"文本消息":"图文消息")+t._s(e.row.contents.length>1?"(多)":""))])]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"task",label:"是否延时",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("  \n                "+t._s(1==e.row.task?"是":"否")+"  \n            ")]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"delay",label:"延时时间",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("  \n                "+t._s(1==e.row.task?e.row.delay:"——")+"  \n            ")]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"contents[0].title",label:"标题",width:"100"}}),t._v(" "),s("el-table-column",{attrs:{prop:"contents[0].description",label:"详细信息",width:"300"}}),t._v(" "),s("el-table-column",{attrs:{prop:"contents[0].url",label:"链接",width:"150"}}),t._v(" "),s("el-table-column",{attrs:{prop:"contents[0].picurl",label:"图片",width:"200"}}),t._v(" "),s("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(s){t.editMessage(e.$index,e.row)}}},[t._v("修改")]),t._v(" "),s("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.row.task,expression:"!scope.row.task"}],attrs:{size:"small",type:"success"},on:{click:function(s){t.sendMessage(e.$index,e.row)}}},[t._v("发送消息")]),t._v(" "),s("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(s){t.deleteMessage(e.$index,e.row)}}},[t._v("删除")])]}}])})],1):s("edit-message")],1)},staticRenderFns:[]};var w=s("VU/8")(g,_,!1,function(t){s("N3y0")},"data-v-fcf06c58",null).exports;a.default.use(n.a);var y=new n.a({mode:"history",routes:[{path:"/msg_view",redirect:"/msg_view/showMessage"},{path:"/msg_view",component:r,children:[{path:"/msg_view/showMessage",component:w,meta:{title:"首页"}},{path:"/msg_view/addMessage",component:p,meta:{title:"添加客服消息"}}]}]}),x=s("zL8q"),k=s.n(x);s("tvR6");u.a.defaults.withCredentials=!0,a.default.config.productionTip=!1,a.default.use(k.a),new a.default({el:"#app",router:y,components:{App:o},template:"<App/>"})},QLvd:function(t,e){},r4zD:function(t,e){},sw0L:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2abd2abb8c7fc30698ca.js.map