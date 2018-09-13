webpackJsonp([0],{"26dS":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("NYxO"),r=t("Dd8w"),n=t.n(r),o={name:"Header",data:function(){return{dialogTitle:"",loadingFlag:!1,changePawwordVisiable:!1,changePasswordForm:{oldPassword:"",newPassword:"",confirmNewPassword:""}}},computed:n()({},Object(a.c)(["userInfo","systemName"])),methods:n()({},Object(a.b)(["getUserInfo","logout","changePassword"]),{signOut:function(){var e=this;this.logout().then(function(s){0==s.errno?(e.$router.push({path:"/login"}),e.$store.commit("USER_INFO",{})):e.$message.error(s.errmsg||"服务器开小差")})},changPassword:function(){this.changePawwordVisiable=!0,this.dialogTitle="修改密码"},handleClose:function(){this.clearAll(),this.changePawwordVisiable=!1},clearAll:function(){this.changePasswordForm.oldPassword="",this.changePasswordForm.newPassword="",this.changePasswordForm.confirmNewPassword=""},confirmChangePassword:function(){var e=this;if(this.changePasswordForm.oldPassword)if(this.changePasswordForm.newPassword)if(this.changePasswordForm.confirmNewPassword)if(this.changePasswordForm.newPassword!=this.changePasswordForm.confirmNewPassword)this.$message.warning("新密码和确认密码不一致");else{if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(this.changePasswordForm.newPassword)){var s={usernum:this.userInfo.usernum,oldpassword:this.changePasswordForm.oldPassword,newpassword:this.changePasswordForm.newPassword};this.loadingFlag=!0,this.changePassword(s).then(function(s){0===s.errno?(e.clearAll(),e.changePawwordVisiable=!1,e.$message.success("密码修改成功")):e.$message.error(s.errmsg),e.loadingFlag=!1}).catch()}else this.$message.warning("密码需满足至少6-16位,必须含有数字和字母")}else this.$message.warning("请输入确认新密码");else this.$message.warning("请输入新密码");else this.$message.warning("请输入原密码")}})},i={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("header",{staticClass:"header"},[t("div",{staticClass:"header-box"},[t("el-row",{attrs:{type:"flex",justify:"center"}},[t("el-col",{attrs:{span:12}},[t("a",{staticClass:"header-logo",attrs:{href:"/"}},[t("i",{staticClass:"el-icon-edit-outline"}),e._v(" "),t("h1",[e._v(" | "+e._s(e.systemName))])])]),e._v(" "),t("el-col",{attrs:{span:11}},[t("el-row",{attrs:{type:"flex",justify:"end"}},[t("el-dropdown",[t("div",{staticClass:"header-user-name"},[e._v(e._s(e.userInfo.username)),t("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),e._v(" "),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",[t("a",{on:{click:function(s){e.changPassword()}}},[e._v("修改密码")])]),e._v(" "),t("el-dropdown-item",[t("a",{on:{click:function(s){e.signOut()}}},[e._v("退出")])])],1)],1)],1)],1)],1)],1),e._v(" "),t("el-dialog",{attrs:{title:e.dialogTitle,visible:e.changePawwordVisiable,width:"400px","before-close":e.handleClose,center:""},on:{"update:visible":function(s){e.changePawwordVisiable=s}}},[t("el-form",{attrs:{"label-position":"right","label-width":"80px",model:e.changePasswordForm}},[t("el-form-item",{attrs:{label:"原密码"}},[t("el-input",{attrs:{maxlength:"16",oninput:"this.value=this.value.replace(/[^\\w]/g,'') "},model:{value:e.changePasswordForm.oldPassword,callback:function(s){e.$set(e.changePasswordForm,"oldPassword",s)},expression:"changePasswordForm.oldPassword"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"新密码"}},[t("el-input",{attrs:{maxlength:"16",oninput:"this.value=this.value.replace(/[^\\w]/g,'')"},model:{value:e.changePasswordForm.newPassword,callback:function(s){e.$set(e.changePasswordForm,"newPassword",s)},expression:"changePasswordForm.newPassword"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"确认密码"}},[t("el-input",{attrs:{maxlength:"16",oninput:"this.value=this.value.replace(/[^\\w]/g,'')"},model:{value:e.changePasswordForm.confirmNewPassword,callback:function(s){e.$set(e.changePasswordForm,"confirmNewPassword",s)},expression:"changePasswordForm.confirmNewPassword"}})],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(s){e.handleClose()}}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary",loading:e.loadingFlag},on:{click:function(s){e.confirmChangePassword()}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var l=t("VU/8")(o,i,!1,function(e){t("rMJu")},"data-v-4c810b9d",null).exports,c={name:"asideItem",data:function(){return{router:!0}},computed:n()({},Object(a.c)(["userInfo"]),{menuList:function(){return this.$router.options.routes.filter(function(e){return e.meta})}}),methods:{allowUse:function(e){return this.userInfo.menuId.split(",").indexOf(e)>-1}}},d={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"menu",attrs:{id:"menu"}},[t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",router:!1,"default-active":e.$route.path}},[e._l(e.menuList[1].children,function(s){return[s.isNest?t("el-submenu",{key:s.meta.zhName,attrs:{index:s.path}},[t("router-link",{attrs:{to:s.path}},[t("i",{class:s.icon}),e._v(e._s(s.meta.zhName)+"\n         ")]),e._v(" "),e._l(s.children,function(s){return[e._e()]})],2):e._e(),e._v(" "),!s.isNest&&s.meta.role>=e.userInfo.role?t("el-menu-item",{key:s.meta.path,attrs:{index:s.path}},[t("router-link",{attrs:{to:s.path}},[t("i",{class:s.icon}),e._v(e._s(s.meta.zhName)+"\n         ")])],1):e._e()]})],2)],1)},staticRenderFns:[]};var u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("footer",{staticClass:"footer"},[s("p",[this._v("这是底部")])])}]};var h={data:function(){return{}},components:{headerBar:l,menuBar:t("VU/8")(c,d,!1,function(e){t("bj26")},"data-v-4e69ac06",null).exports,footerBar:t("VU/8")({name:"Footer",data:function(){return{}},computed:{}},u,!1,function(e){t("vs4F")},"data-v-563629c1",null).exports}},m={render:function(){var e=this.$createElement,s=this._self._c||e;return s("div",{attrs:{id:"app"}},[s("header-bar"),this._v(" "),s("div",{staticClass:"container"},[s("menu-bar",{ref:"lefeMenu",staticClass:"sidebar-container"}),this._v(" "),s("div",{staticClass:"right-box"},[s("div",{staticClass:"content"},[s("router-view")],1),this._v(" "),s("footer-bar")],1)],1)],1)},staticRenderFns:[]};var w=t("VU/8")(h,m,!1,function(e){t("SU4n")},null,null);s.default=w.exports},SU4n:function(e,s){},bj26:function(e,s){},rMJu:function(e,s){},vs4F:function(e,s){}});
//# sourceMappingURL=0.1b06b356f6b18cd8b704.js.map