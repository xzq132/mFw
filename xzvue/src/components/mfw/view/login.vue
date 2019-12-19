<template>
  <div class="login">
    <div class="login_m">
      <div>
        <a href="http://127.0.0.1:5500/mfw_index.html"><img src="../../../../public/img/mfw/login/logo-gray-@2x.png" alt=""></a>
      </div>
      <div class="login-body">
          <div>
            <div>
              <input type="text" placeholder="您的邮箱/手机号" v-model="ep"><br/>
              <input type="password" placeholder="您的密码" v-model="upwd" class="pd"><br/>
              <p><a href="" class="a1">忘记密码</a></p>
              <button class="btn btn-warning clearfix" @click="login">登录</button>
            </div>
            <div>
              <p class="p1">用合作网站账户直接登录</p>
              <a href="">
                <i class="img"></i>
                新浪微博
              </a>
              <a href="">
                <i class="img1"></i>
                QQ
              </a>
              <a href="">
                <i class="img2"></i>
                微信
              </a>
            </div>
          </div>
          <div>
            <img src="../../../../public/img/mfw/login/2.jpg" alt="">
            <p>扫一扫<br/>下载马蜂窝APP</p>
          </div>
      </div>
      <div class="bottom-link">
        还没有账号？<a href="http://127.0.0.1:5500/zhuce.html" class="text-warning">马上注册</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      ep:"",
      upwd:""
    }
  },
  methods:{
    login(){
      var email=/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
      var phone=/^1(3[0-9]|5[189]|8[26789])[0-9]{8}$/;
      var pwd=/^[0-9a-z]{6,16}$/i;
      if(!email.test(this.ep) && !phone.test(this.ep)){
        alert("手机号或邮箱格式不正确");
        return;
      }
      if(!pwd.test(this.upwd)){
        alert("密码格式不正确");
        return;
      }
      var url="login";
      var obj={ep:this.ep,upwd:this.upwd};
      this.axios.get(url,{params:obj})
      .then(
        res=>{
          if(res.data.code<0){
            alert("邮箱或者密码错误")
          }else{
            this.$router.push("/mfwIndex")
          }
        }
      )
    }
  }
}
</script>
<style lang="scss" scoped>
.login{
  width:100%;
  height:920px;
  position: fixed;
  background:url("../../../../public/img/mfw/login/1.jpg") no-repeat;
  background-position:50% 50%;
  background-size:cover;
  overflow: hidden;
  opacity:0.9;
}
.login-img:after{
  bottom: 0;
  content: "";
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
}
.login_m{
  width:600px;
  position: absolute;
  top:50%;;left:50%;
  margin-left:-300px;
  margin-top:-300px;
  text-align: center;
}
.login_m>div:first-child>a>img{
  width:90px;height:78px;
  margin-bottom:20px;
}
.login-body{
  background-color:#fff;
  box-shadow: 0 3px 3px rgba(0,0,0,.4);
  border-radius:5px;
  padding-top:26px;
}
.login-body>div:first-child{
  float: left;
}
.login-body>div:last-child{
  float: right;
  width:234px ;height:300px;
  border-left:1px solid #ebebeb;
  text-align:center;
  padding:20px 0 0 20px;
  margin-left:-30px;
}
.login-body>div:last-child>p{
  font-size:15px;color:#797979;
  line-height:24px;margin-top:20px;
}
.login-body::after{
  display:block;
  content:"";
  clear:both;
}
.login-body>div:first-child>div{
  padding:0 30px 0 30px;
}
.login-body>div:first-child>div>input{
  width:306px;height:42px;
  border:1px solid #d8d8d8;
  border-radius:4px;color:#333;
  line-height:42px;
  padding:6px 0 6px 12px;
  box-shadow: 0 0 5px #fff;
  outline:0;
  font-size:16px;
}
.login-body>div:first-child>div>p{
  text-align:right;margin-bottom:10px;
}
.login-body>div:first-child>div:last-child>p{
  text-align:left;margin-top:10px;
  padding:10px 0 0px 0px;
}
.login-body>div:first-child>div:last-child{
  text-align: left;
}
.login-body>div:first-child>div:last-child>a{
  width:58px;height:84px;
  display:inline-block;
  text-align:center;font-size:12px;
  color:#999;
  margin:10px 25px 10px 0;
}
.a1{font-size:12px;color:#ffa800;}
.p1{
  padding:15px 0 20px 24px;
  font-size:12px;color:#999;
  border-top:1px solid #ebebeb;
}
.pd{margin-top:10px;}
.login-body>div:last-child>img{
  width:180px;height:180px;
}
.btn{
  width:100%;color:#fff;
}
.img,.img1,.img2{
  width:54px;height:56px;
  display:inline-block;
  background:url("../../../../public/img/mfw/login/header-sprites9@2x.png") no-repeat;
}
.img{
  background-position:0 -158px;
}
.img1{
  background-position:-60px -158px;
}
.img2{
  background-position:-60px -328px;
}
.bottom-link{
  width:140px;margin:10px auto;
  border-radius:15px;
  background-color:rgba(0,0,0,.4);
  text-align:center;
  font-size:12px;
  color:#fff;
  padding:4px 0;
}
a:hover{
  text-decoration: none;
  color:#ffa800;
}
</style>