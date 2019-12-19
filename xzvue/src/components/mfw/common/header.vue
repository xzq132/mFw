<template>
  <div class="header w-100">
    <div class="header-wrap">
      <div class="logo"><a href="" class="logoA"></a></div>
      <ul class="header-nav clearfix">
        <li class="active"><a href="">首页</a></li>
        <li class="header_a"><a href="">目的地</a></li>
        <li class="header_a"><a href="">旅游攻略</a></li>
        <li class="rela" @mouseover="mouseOver(0)" @mouseleave="mouseLeave(0)">
          <a href="">
            <span>去旅行</span>  
            <i class="icon"></i>
          </a>
          <ul class="abso" :style="active1">
            <li><a href="">自由行<span class="badge badge-danger">hot</span></a></li>
            <li><a href="">跟团游</a></li>
            <li><a href="">当地游</a></li>
            <li><a href="">邮轮</a></li>
            <li><a href="">签证</a></li>
          </ul>
        </li>
        <li class="nav-fight header_a"><a href="">机票</a></li>
        <li class="header_a"><a href="">订酒店</a></li>
        <li class="rela" @mouseover="mouseOver(1)" @mouseleave="mouseLeave(1)">
          <a class="shequ">
            <span>社区</span>
            <i class="icon"></i>
          </a>
          <div class="abso1 clearfix" :style="active">
            <ul class="list">
              <li><a href="" class="text-warning">问答<i class="i-hot">hot</i></a></li>
              <li><a href="">马蜂窝周边<i class="i-new">new</i></a></li>
              <li><a href="">峰首俱乐部</a></li>
              <li><a href="">结伴</a></li>
            </ul>
            <ul class="nav-list">
              <li><a href="">小组论坛</a></li>
              <li><a href="">分舵同城</a></li>
              <li><a href="">马蜂窝拍卖行</a></li>
              <li><a href="">照片PK</a></li>
              <li><a href="">真心兽</a></li>
              <li><a href="">道具商店</a></li>
            </ul>
          </div>
        </li>
        <li class="header_a"><a href="">APP</a></li>
        <li class="header_a"><a href="" class="w-2"></a></li>
      </ul>
      <div class="header-3 clearfix">
        <a href="" class="img"></a>
        <a href="" class="img1"></a>
        <a href="" class="img2"></a>
        <a href="http://127.0.0.1:5501/login.html" class="item" @click="login">登录</a>
        <span class="split">|</span>
        <a href="http://127.0.0.1:5501/zhuce.html" class="item">注册</a>
      </div>
      <!-- <div>
        <a href="" class="user"></a>
        <a href="" class="reduce">注销</a>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      active:"display:none",
      active1:"display:none",
      isLogin:false
    }
  },
  methods:{
    login(){
      console.log(1);
      this.$router.push('/mfwLogin');
    },
    mouseOver(i){
      if(i==0){
        this.active1="display:block";
      }else{
        this.active="display:block";
      }
    },
    mouseLeave(i){
      if(i==0){
        this.active1="display:none";
      }else{
        this.active="display:none";
      }
    },
    getters(){
      var obj=this.$store.getters.getState;
      this.isLogin=obj.isLogin
    }
  },
  created() {
    this.getters();  
  },
}
</script>
<style lang="scss" scoped>
li,a{
  box-sizing:border-box;
}
@media screen and (max-width: 1440px){
 .header{
    height:68px;
    line-height:66px;
  }
  .logo{
    padding: 16px 0 13px;
    height: 39px;
  }
  .header_a a:hover{
    height:55px;
  }
  .rela{
    line-height:54px !important;
  }
}
@media screen and (max-width: 1140px){
 .header-wrap{
    margin:0 10px !important;
  }
}
.header{
  height:58px;
  line-height:58px;
}
.header-wrap {
    width: 1120px;
    height: 100%;
    margin: 0 auto;
    _overflow: hidden;
    position: relative;
}
.logo{
  float: left;
  width:136px;
  padding:13px 0;
  height:100%;
}

.logoA{width:120px;height:33px;
    background:url("../../../../public/img/mfw/header/header-small-sprites3.png") no-repeat;
    background-position:0px -25px;
    background-size:cover;
    display: inline-block;
    overflow: hidden;
}
.header-nav{
  float: left;
  display: flex;
  height:100%;
  font-size: 14px;
  padding:0 10px 0 25px;
}
.header-nav li{
  position:relative;
}
.header-nav a{
  display:inline-block;
  padding:0 16px;
  vertical-align: top;
  overflow: hidden;
  color:#333;
}
.nav-fight:after{
  content: '特价';
  display: block;
  position: absolute;
  top: 9px;
  right:-10px;
  z-index: 3;
  height: 16px;
  line-height: 16px;
  padding: 0 4px;
  border-radius: 4px 0 4px 0;
  font-size: 11px;
  color: #fff;
  font-family: PingFangSC-Semibold;
  font-weight: bold;
  background: linear-gradient(135deg,rgba(255,74,74,1) 0,rgba(255,115,115,1) 100%);
  background: -webkit-linear-gradient(135deg,rgba(255,74,74,1) 0,rgba(255,115,115,1) 100%);
}
.w-2{width:75px;height:58px;
    background:url("../../../../public/img/mfw/header/mfwzx.png") no-repeat center;
    background-size:75px 30px;
    display: inline-block;
    overflow: hidden;
}
.img{width:26px;height:26px;
    background:url("../../../../public/img/mfw/header/header-sprites15.png") no-repeat;
    background-position:0px -50px;
    display: inline-block;
    overflow: hidden;
    vertical-align: -7px;
    margin-right:6px;
}
.img1{width:26px;height:26px;
    background:url("../../../../public/img/mfw/header/header-sprites15.png") no-repeat;
    background-position:0px -165px;
    display: inline-block;
    overflow: hidden;
    vertical-align: -7px;
    margin-right:6px;
}
.img2{width:26px;height:26px;
    background:url("../../../../public/img/mfw/header/header-sprites15.png") no-repeat;
    background-position:-30px -50px;
    display: inline-block;
    overflow: hidden;
    vertical-align: -7px;
    margin-right:6px;
}
.header-3{
  float: right;
}
.text-warning + .text-warning::before{
    display:inline-block;
    content:"|";
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    color: #6c757d;
}
.icon{
    border-top:4px solid #666;
    border-left:4px dashed transparent;
    border-right:4px dashed transparent;
    display:inline-block;
    margin:0 -5px 2px 3px;
}
.header a:hover{
    text-decoration: none;
}
.header_a:hover{
  border-bottom:3px solid #ff9d00;
  a{
    color:#ff9d00;
  }
}
.rela{
  line-height:64px;
}
.rela:hover{
  border-top:3px solid #ff9d00;
  border-left:1px solid rgb(234,234,234);
  border-right:1px solid rgb(234,234,234);
  >a{
    color:#ff9d00;
  }
}
.active a{
  background-color:#ff9d00;
  color:#fff;
}
.active a:hover{
  color:#fff;
}

/* 自由行菜单 */
.abso{
  width:140px;
  position:absolute;
  top:auto;right:auto;
  background-color: rgba(255,255,255,.95);
  box-shadow: 0 2px 2px rgba(0,0,0,.3);
  border: 1px solid #d6d6d6;
  z-index:10000;
}
.abso1{
  width:300px;
  padding: 20px 0 0 0;
  height: 300px;
  overflow: hidden;
  position:absolute;
  left:auto;right:auto;top:auto;
  background-color: rgba(255,255,255,.95);
  box-shadow: 0 2px 2px rgba(0,0,0,.3);
  z-index:10000;
}
.abso1 ul{
  float: left;
  padding-left: 17px;
  width: 141px;
}
.list li{
  height: 75px;
  line-height: 32px;
  font-size: 16px;
}
.nav-list{
  padding-left:25px !important;
}
.nav-list li{
  height:32px;
  line-height:32px;
}
.i-hot,.i-new{
  position: absolute;
  margin: 8px 0 0 8px;
  height: 14px;
  background-color: #f46240;
  color: #fff;
  font-size: 12px;
  line-height: 14px;
  padding: 0 4px 0 3px;
  font-style: normal;
}
.i-new{
   background-color:#1ec896;
}
.item{
  color:#ff9d00;
  font-size:14px;
}
.item:hover{
  text-decoration: underline !important;
}
.split{
  display: inline-block;
  margin:0 10px;
  width:1px;
  height:14px;
  background-color: #c9c9c9;
  overflow: hidden;
  vertical-align: -2px;
}
</style>