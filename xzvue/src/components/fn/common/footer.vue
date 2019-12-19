<template>
  <div class="footer clearfix">
    <div class="warpper clearfix">
      <div class="mai">
        <span class="link">
          <a href="">蜂鸟简介</a>
          <a href="">联系我们</a>
          <a href="">友情链接</a>
          <a href="">招聘信息</a>
          <a href="">用户服务协议</a>
          <a href="">隐私权声明</a>
          <a href="">法律投诉声明</a>
        </span>
        <span class="logo"></span>
        <div class="txt">
          <p>2019 fengniao.com. All rights reserved . 北京蜂鸟映像电子商务有限公司（蜂鸟网）版权所有</p>
          <p class="txt1">京ICP证150110号 京ICP备15000193号-2</p>
          <p class="icon1">京公网安备11010802021289号</p>
          <p class="txt2">违法和不良信息举报电话: 010-82728310</p>
          <p class="txt3">举报邮箱: fengniao@fengniao.com</p>
        </div>
      </div>
      <div class="aside">
        <div class="cont">
          <h4>关注公众号</h4>
          <span class="weixin"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  // 底部
.footer{
  height:200px;
  background:#282c31;
  clear:both;
  width:100%;
  .mai{
    width:78%;
    height:135px;
    float: left;
    margin:26px 0 0 0;
    .link{
      width:100%;
      height:26px;
      float: left;
      a{
        font-size: 14px;
        line-height: 26px;
        color: #959ba2;
        display: inline-block;
        margin-right: 45px;
      }
      a:hover{
        color:#ff3d3a;
      }
    }
    .logo{
      clear: both;
      width: 101px;
      height: 58px;
      float: left;
      margin-top: 40px;
      background:url("../../../../public/img/fn/footer/logo1.png") no-repeat;
    }
    .txt{
      width:576px;
      height:74px;
      float: left;
      margin:24px 0 0 40px;
      font-size:12px;
      line-height:20px;
      color:#666c74;
    }
  }
  .aside{
    width: 21.5%;
    float: left;
    height: 168px;
    background-position: -1364px -490px;
    margin-top: 24px;
    border-left:1px solid #080a0c;
    .cont{
      width: 112px;
      float: right;
      height: 144px;
      text-align: center;
      h4{
        font-size: 14px;
      line-height: 20px;
      color: #959ba2;
      display: inline-block;
      margin-bottom: 12px;
      font-weight: normal;
      }
      .weixin{
        background:url("../../../../public/img/fn/footer/footerbg.png") no-repeat;
        display: block;
        background-position: -390px -890px;
        width: 110px;
        height: 110px;
      }
    }
  }
}
@media screen and (max-width:1200px){
  .footer{width:1200px;}
}
.warpper{
  width:100%;
  max-width:1400px;
  min-width:1200px;
  margin:0 auto;
}
.txt1{
  width:250px;
  margin:5px 0;
  float: left;
}
.icon1{
  background:url("../../../../public/img/fn/footer/1.png") no-repeat;
  padding-left: 28px;
  margin-left: 28px;
  margin:5px 0;
  float: left;
}
.txt2{
  margin-right: 29px;
  clear: both;
  width: 250px;
  margin: 5px 0;
  float: left;
}
.txt3{
  margin:5px 0;
  float: left;
}
</style>