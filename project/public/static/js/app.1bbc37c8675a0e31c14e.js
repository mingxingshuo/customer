webpackJsonp([1],{"Ek7+":function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var l=s("VU/8")({name:"App"},o,!1,function(e){s("r4zD")},null,null).exports,n=s("/ocq"),i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.onRoutes,mode:"horizontal","unique-opened":"",router:""}},[e._l(e.navlist,function(t){return[s("el-menu-item",{key:t.index,attrs:{index:t.index}},[s("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))])])]})],2),e._v(" "),s("div",{staticClass:"field"},[s("transition",{attrs:{name:"move",mode:"out-in"}},[s("keep-alive",[s("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var r=s("VU/8")({computed:{onRoutes:function(){return this.$route.path.replace("/","")}},data:function(){return{activeIndex:"1",activeIndex2:"1",navlist:[{index:"showMessage",title:"首页"},{index:"addMessage",title:"添加客服消息"}]}},methods:{}},i,!1,function(e){s("NU0t")},"data-v-3577341a",null).exports,c=s("mtWM"),u=s.n(c),d={data:function(){return{form:{},type:"1",subForm:{},picMessageData:[],codes:[],task:!1,delay:1,des:"",picMessageSwitch:!1,imgUrl:"",gonghaoList:[],contentData:{},contents:[]}},mounted:function(){this.get_codes()},methods:{onCreate:function(){var e=this;"1"==this.type?(this.contentData.des=this.des,this.contents.push(this.contentData),console.log(this.contents)):(this.contents=this.picMessageData,console.log(this.codes)),u()({url:"/message_1/create",method:"post",data:{contents:this.contents,type:this.type,task:this.task,delay:this.delay,codes:this.codes}}).then(function(t){t.data.success?(e.$message({type:"success",message:t.data.success}),e.$router.push("/"),e.form={},e.des="",e.picMessageData=e.codes=[]):e.$message.error(t.data.err)})},addOne:function(){this.subForm.img=this.imgUrl,this.picMessageData.push(this.subForm),this.subForm={},this.imgUrl=""},handleAvatarSuccess:function(e,t){this.imgUrl="http://crm.rrdtjj.top/uploads/"+e.filename},change:function(){this.form={}},deleteMessage:function(e,t){this.picMessageData.splice(e,1)},get_codes:function(){var e=this;u()({url:"/message_1/get_code",method:"get",params:{}}).then(function(t){""!=t.data.codes&&(e.gonghaoList=t.data.codes)})}}},m={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"add-message"},[s("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px",size:"mini"}},[s("el-form-item",{attrs:{label:"类型"}},[s("el-radio-group",{attrs:{size:"medium"},on:{change:e.change},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[s("el-radio",{attrs:{border:"",label:"1"}},[e._v("文本消息")]),e._v(" "),s("el-radio",{attrs:{border:"",label:"0"}},[e._v("图文消息")])],1)],1),e._v(" "),1!=e.type?s("el-form",{ref:"subForm",attrs:{model:e.subForm,"label-width":"80px",size:"mini"}},[s("el-form-item",{attrs:{label:"图片",prop:"imageFile"}},[s("el-upload",{attrs:{"show-file-list":!1,enctype:"multipart/form-data",name:"imageFile",action:"http://crm.rrdtjj.top/message_1/upload","on-success":e.handleAvatarSuccess}},[s("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),e.imgUrl?s("img",{attrs:{src:e.imgUrl,alt:"",width:"200"}}):e._e()],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"标题"}},[s("el-input",{staticStyle:{width:"500px"},model:{value:e.subForm.title,callback:function(t){e.$set(e.subForm,"title",t)},expression:"subForm.title"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"链接"}},[s("el-input",{staticStyle:{width:"500px"},model:{value:e.subForm.url,callback:function(t){e.$set(e.subForm,"url",t)},expression:"subForm.url"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"详细信息",prop:"des"}},[s("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea"},model:{value:e.subForm.des,callback:function(t){e.$set(e.subForm,"des",t)},expression:"subForm.des"}})],1),e._v(" "),s("el-form-item",{attrs:{size:"large"}},[s("el-button",{attrs:{type:"primary"},on:{click:e.addOne}},[e._v("添加")])],1),e._v(" "),s("el-form-item",{attrs:{label:"图文消息",prop:"pic_message"}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.picMessageData,border:""}},[s("el-table-column",{attrs:{prop:"title",label:"标题",width:"100"}}),e._v(" "),s("el-table-column",{attrs:{prop:"img",label:"图片",width:"200"},scopedSlots:e._u([{key:"default",fn:function(e){return[s("img",{attrs:{src:e.row.img,width:"100%"}})]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"url",label:"链接",width:"200"}}),e._v(" "),s("el-table-column",{attrs:{prop:"des",label:"详细信息",width:"300"}}),e._v(" "),s("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{staticClass:"send-message",attrs:{size:"small",type:"success"},on:{click:function(s){e.deleteMessage(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1)],1):s("el-form-item",{attrs:{label:"详细信息",prop:"des"}},[s("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea"},model:{value:e.des,callback:function(t){e.des=t},expression:"des"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"是否延时"}},[s("el-switch",{model:{value:e.task,callback:function(t){e.task=t},expression:"task"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"延时时间"}},[s("el-input",{staticStyle:{width:"100px"},attrs:{disabled:!e.task},model:{value:e.delay,callback:function(t){e.delay=t},expression:"delay"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"公号",prop:"codes"}},[s("el-checkbox-group",{model:{value:e.codes,callback:function(t){e.codes=t},expression:"codes"}},e._l(e.gonghaoList,function(t,a){return s("el-checkbox",{key:a,attrs:{label:t.code,name:"codes"}},[e._v(e._s(t.name))])}))],1),e._v(" "),s("el-form-item",{attrs:{size:"large"}},[s("el-button",{attrs:{type:"primary"},on:{click:e.onCreate}},[e._v("立即创建")]),e._v(" "),s("el-button",[e._v("取消")])],1)],1)],1)},staticRenderFns:[]};var p=s("VU/8")(d,m,!1,function(e){s("wYbF")},"data-v-39da9246",null).exports,h=s("NYxO");a.default.use(h.a);var f=new h.a.Store({state:{messageData:{},isShow:!0},mutations:{changeisShow:function(e,t){e.isShow=t},setMessageData:function(e,t){e.messageData=t||{}}}}),b={data:function(){return{form:{},type:"1",subForm:{},picMessageData:[],codes:[],contents:[],task:!1,delay:1,des:"",picMessageSwitch:!1,imgUrl:"",gonghaoList:[],obj:{},contentData:{}}},mounted:function(){this.get_codes(),this.obj=f.state.messageData,this.picMessageData=this.obj.contents,this.type=this.obj.type.toString(),this.codes=this.obj.codes,this.des=this.obj.contents[0].des},methods:{onSave:function(){var e=this;1==this.type?(this.contentData.des=this.des,this.contents.push(this.contentData)):this.contents=this.picMessageData,u()({url:"/message_1/update",method:"post",data:{id:this.obj._id,contents:this.contents,type:this.type,task:this.task,delay:this.delay,codes:this.codes}}).then(function(t){t.data.success?(e.$message({type:"success",message:t.data.success}),e.$router.push("/")):e.$message.error(t.data.err)})},addOne:function(){this.subForm.img=this.imgUrl,this.picMessageData.push(this.subForm),this.subForm={},this.imgUrl=""},saveOne:function(){console.log(this.subForm),this.picMessageData.splice(this.subForm.index,1,this.subForm),console.log(this.picMessageData),this.subForm={},this.imgUrl=""},change:function(){this.form={}},handleAvatarSuccess:function(e,t){this.imgUrl="http://crm.rrdtjj.top/uploads/"+e.filename},updateMessage:function(e,t){console.log(t),console.log(e),this.subForm=t,this.subForm.index=e,this.imgUrl=this.subForm.img,console.log(this.subForm)},deleteMessage:function(e,t){},cancel:function(){f.commit("changeisShow",!0)},get_codes:function(){var e=this;u()({url:"/message_1/get_code",method:"get",params:{}}).then(function(t){""!=t.data.codes&&(e.gonghaoList=t.data.codes)})}}},g={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"add-message"},[s("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px",size:"mini"}},[s("el-form-item",[s("h2",[e._v("修改客服消息")])]),e._v(" "),s("el-form-item",{attrs:{label:"类型"}},[s("el-radio-group",{attrs:{size:"medium"},on:{change:e.change},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[s("el-radio",{attrs:{border:"",label:"1"}},[e._v("文本消息")]),e._v(" "),s("el-radio",{attrs:{border:"",label:"0"}},[e._v("图文消息")])],1)],1),e._v(" "),1!=e.type?s("el-form",{ref:"subForm",attrs:{model:e.subForm,"label-width":"80px",size:"mini"}},[s("el-form-item",{attrs:{label:"图片"}},[s("el-upload",{attrs:{"show-file-list":!1,enctype:"multipart/form-data",name:"imageFile",action:"http://crm.rrdtjj.top/message_1/upload","on-success":e.handleAvatarSuccess}},[s("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),e.imgUrl?s("img",{attrs:{src:e.imgUrl,alt:"",width:"200"}}):e._e()],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"标题"}},[s("el-input",{staticStyle:{width:"500px"},model:{value:e.subForm.title,callback:function(t){e.$set(e.subForm,"title",t)},expression:"subForm.title"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"链接"}},[s("el-input",{staticStyle:{width:"500px"},model:{value:e.subForm.url,callback:function(t){e.$set(e.subForm,"url",t)},expression:"subForm.url"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"详细信息",prop:"des"}},[s("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea"},model:{value:e.subForm.des,callback:function(t){e.$set(e.subForm,"des",t)},expression:"subForm.des"}})],1),e._v(" "),s("el-form-item",{attrs:{size:"large"}},[s("el-button",{attrs:{type:"success"},on:{click:e.addOne}},[e._v("添加")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.saveOne}},[e._v("保存")])],1),e._v(" "),s("el-form-item",{attrs:{label:"图文消息",prop:"pic_message"}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.picMessageData,border:""}},[s("el-table-column",{attrs:{prop:"title",label:"标题",width:"100"}}),e._v(" "),s("el-table-column",{attrs:{prop:"img",label:"图片",width:"200"},scopedSlots:e._u([{key:"default",fn:function(e){return[s("img",{attrs:{src:e.row.img,width:"100%"}})]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"url",label:"链接",width:"200"}}),e._v(" "),s("el-table-column",{attrs:{prop:"des",label:"详细信息",width:"300"}}),e._v(" "),s("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(s){e.updateMessage(t.$index,t.row)}}},[e._v("修改")]),e._v(" "),s("el-button",{staticClass:"send-message",attrs:{size:"small",type:"success"},on:{click:function(s){e.deleteMessage(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1)],1):s("el-form-item",{attrs:{label:"详细信息",prop:"des"}},[s("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea"},model:{value:e.des,callback:function(t){e.des=t},expression:"des"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"是否延时"}},[s("el-switch",{model:{value:e.task,callback:function(t){e.task=t},expression:"task"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"延时时间"}},[s("el-input",{staticStyle:{width:"100px"},model:{value:e.delay,callback:function(t){e.delay=t},expression:"delay"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"公号",prop:"codes"}},[s("el-checkbox-group",{model:{value:e.codes,callback:function(t){e.codes=t},expression:"codes"}},e._l(e.gonghaoList,function(t,a){return s("el-checkbox",{key:a,attrs:{label:t.code,name:"codes"}},[e._v(e._s(t.name))])}))],1),e._v(" "),s("el-form-item",{attrs:{size:"large"}},[s("el-button",{attrs:{type:"primary"},on:{click:e.onSave}},[e._v("保存")]),e._v(" "),s("el-button",{on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)},staticRenderFns:[]};var v={computed:{isShow:function(){return f.state.isShow}},components:{editMessage:s("VU/8")(b,g,!1,function(e){s("T4wo")},"data-v-4248f129",null).exports},data:function(){return{tableData:[],desShow:""}},mounted:function(){this.showMessage()},methods:{showMessage:function(){var e=this;u()({url:"/message_1",method:"get",parmas:{},withCredentials:!0}).then(function(t){0!=t.data.messages.length&&(e.tableData=t.data.messages)})},editMessage:function(e,t){f.commit("setMessageData",t),f.commit("changeisShow",!1)},sendMessage:function(e,t){var s=this;this.$confirm("此操作发送此条客服消息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){u()({url:"/message_1/send",method:"get",params:{id:t._id}}).then(function(e){s.$message({type:"success",message:e.data.success})})}).catch(function(){s.$message({type:"info",message:"已取消发送"})})},deleteMessage:function(e,t){var s=this;this.$confirm("此操作删除此条客服消息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){u()({url:"/message_1/delete",method:"get",params:{id:t._id}}).then(function(e){s.$message({type:"success",message:e.data.success}),s.showMessage()})}).catch(function(){s.$message({type:"info",message:"已取消删除"})})}}},_={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"show-message"},[e.isShow?s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[s("el-table-column",{attrs:{prop:"type",label:"类型",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(1==t.row.type?"文本消息":"图文消息"))])]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"task",label:"是否延时",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("  \n                "+e._s(1==t.row.task?"是":"否")+"  \n            ")]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"delay",label:"延时时间",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("  \n                "+e._s(1==t.row.task?t.row.delay:"——")+"  \n            ")]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"contents[0].title",label:"标题",width:"100"}}),e._v(" "),s("el-table-column",{attrs:{prop:"contents[0].des",label:"详细信息",width:"300"}}),e._v(" "),s("el-table-column",{attrs:{prop:"contents[0].url",label:"链接",width:"150"}}),e._v(" "),s("el-table-column",{attrs:{prop:"contents[0].img",label:"图片",width:"200"}}),e._v(" "),s("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(s){e.editMessage(t.$index,t.row)}}},[e._v("修改")]),e._v(" "),s("el-button",{directives:[{name:"show",rawName:"v-show",value:!t.row.task,expression:"!scope.row.task"}],attrs:{size:"small",type:"success"},on:{click:function(s){e.sendMessage(t.$index,t.row)}}},[e._v("发送消息")]),e._v(" "),s("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(s){e.deleteMessage(t.$index,t.row)}}},[e._v("删除")])]}}])})],1):s("edit-message")],1)},staticRenderFns:[]};var y=s("VU/8")(v,_,!1,function(e){s("Ek7+")},"data-v-51369c32",null).exports;a.default.use(n.a);var w=new n.a({mode:"history",routes:[{path:"/",redirect:"/showMessage"},{path:"/",component:r,children:[{path:"/showMessage",component:y,meta:{title:"首页"}},{path:"/addMessage",component:p,meta:{title:"添加客服消息"}}]}]}),k=s("zL8q"),x=s.n(k);s("tvR6");u.a.defaults.withCredentials=!0,a.default.config.productionTip=!1,a.default.use(x.a),new a.default({el:"#app",router:w,components:{App:l},template:"<App/>"})},NU0t:function(e,t){},T4wo:function(e,t){},r4zD:function(e,t){},tvR6:function(e,t){},wYbF:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.1bbc37c8675a0e31c14e.js.map