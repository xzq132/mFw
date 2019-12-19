<template>
  <div class="header">
    <ul>
      <li>
        <a href="javascript:;">蜂鸟首页</a>
      </li>
      <li class="dropdown">
        <span>
          网站导航
          <i></i>
        </span>
        <div>
          <dl>
            <dt>
              <a href="">资讯</a>
            </dt>
            <dd>
              <a href="">器材评测</a>
            </dd>
            <dd>
              <a href="">大师作品</a>
            </dd>
            <dd>
              <a href="">技法学院</a>
            </dd>
            <dd>
              <a href="">手机拍照</a>
            </dd>
            <dd>
              <a href="">汽车摄影</a>
            </dd>
            <dd>
              <a href="">旅游摄影</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="">论坛</a>
            </dt>
            <dd>
              <a href="">主题摄影</a>
            </dd>
            <dd>
              <a href="">器材讨论</a>
            </dd>
            <dd>
              <a href="">品牌交流</a>
            </dd>
            <dd>
              <a href="">自建论坛</a>
            </dd>
            <dd>
              <a href="">地方论坛</a>
            </dd>
            <dd>
              <a href="">线下活动</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="">课堂</a>
            </dt>
            <dd>
              <a href="">新手入学</a>
            </dd>
            <dd>
              <a href="">人像摄影</a>
            </dd>
            <dd>
              <a href="">风光摄影</a>
            </dd>
            <dd>
              <a href="">后期教学</a>
            </dd>
            <dd>
              <a href="">器材讲解</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="">交易</a>
            </dt>
            <dd>
              <a href="">蜂鸟严选</a>
            </dd>
            <dd>
              <a href="">蜂鸟回收</a>
            </dd>
            <dd>
              <a href="">蜂鸟鉴定</a>
            </dd>
            <dd>
              <a href="">蜂鸟租赁</a>
            </dd>
            <dd>
              <a href="">闲置商品</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="">作品</a>
            </dt>
            <dd>
              <a href="">蜂鸟影赛</a>
            </dd>
            <dd>
              <a href="">蜂鸟专题</a>
            </dd>
            <dd>
              <a href="">蜂鸟相册</a>
            </dd>
            <dd>
              <a href="">蜂鸟图库</a>
            </dd>
            <dd>
              <a href="">蜂鸟标签</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="">专栏</a>
            </dt>
            <dd>
              <a href="">器材库</a>
            </dd>
            <dd>
              <a href="">蜂鸟印</a>
            </dd>
            <dd>
              <a href="">蜂鸟说</a>
            </dd>
            <dd>
              <a href="">四光圈</a>
            </dd>
            <dd>
              <a href="">盒·影像</a>
            </dd>
            <dd>
              <a href="">蜂·辞典</a>
            </dd>
          </dl>
        </div>
      </li>
      <li class="dropdown1">
        <span>
          蜂鸟手机端
          <i></i>
        </span>
        <div>
          <ul>
            <li>
              <a href="">爱摄影</a>
            </li>
            <li>
              <a href="">手机网站</a>
            </li>
            <li>
              <a href="">蜂鸟摄影</a>
            </li>
            <li>
              <a href="">焦圈直播</a>
            </li>
            <li>
              <a href="">摄影美图</a>
            </li>
          </ul>
        </div>
      </li>
      <li class="dropdown1">
        <span>
          微博微信
          <i></i>
        </span>
        <div class="dropdown2">
          <ul>
            <li>
              <a href="">官方微信</a>
            </li>
            <li>
              <a href="">官方微博</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a href="javascript:;">
          佳能影像专区
          <span></span>
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="">
          <span></span>
          登录
        </a>
      </li>
      <li>
        <a href="">免费注册注册</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.header{
  width:100%;
  min-width:1200px;
  font-size:12px;
  background-color:#111;
  position:fixed;
  top:0;left:0;
  z-index:666;
  li>span{
    color:#ccc;
    height:44px;
    padding:0px 26px 0 14px; 
    position: relative;
    top:0;left:0;
    line-height:44px;
  }
  >ul{
    display: flex;
    position: relative;
  }
  >ul>li>a{
    text-decoration: none;
    color:#ccc;
    padding:0px 12px 0 20px; 
  }
  >ul:first-child{
    float: left;
    height:44px;
    line-height:44px;
    margin:0px 0px 0px 20px;
  }
  >ul:first-child>li{
    margin-right:10px;
    min-width: 60px;
  }
  >ul:first-child>li>span>i{
    position: absolute;
    float: left;
    top:50%;right:8px;
    margin:-1px 0px 0px 4px;
    border-top:4px solid #666;
    border-left:4px dashed transparent;
    border-right:4px dashed transparent;
    font: 0/0 arial;
  }
  >ul:first-child>li>a>span{
    width:16px;height:16px;
    background: url("../../../../public/img/xin.png") no-repeat;
    display: inline-block;
  }
  >ul:last-child{
    float: right;
    height:44px;
    line-height:44px;
    margin:0 10px 0 0;
  }
  >ul:last-child>li>a>span{
    display:inline-block;
    width:15px;height:16px;
    background:url("../../../../public/img/login.png") no-repeat;
    background-position: 0 0;
    margin:0px 10px 0 0;
    vertical-align: -2px;
  }
}
.header::after{
  content:"";
  display: table;
  clear:both;
}
.dropdown>div{
  display:none;
  z-index: 999;
  position: absolute;
  border:1px solid #ccc;
  border-top:0 none;
  width:458px;
  dl{
    display:flex;
    font-size:14px;
    margin-left:10px;
    line-height:52px;
  }
  dl+dl{
    border-top:1px dashed #ccc; 
  }
  a{
    text-decoration: none;
  }
  dl dt,dl dd{
    margin-right:10px;
  }
  dl dt a{
    padding: 0 10px 0 0;
    border-right:2px solid #d7d7d7;
    color:#ed3945;
  }
  dl dd a{
    color:#666;
  }
}
.header > ul > li > a:hover{
    text-decoration: underline;
}
.header > ul:last-child > li > a:hover{
  color:#ff3d3a;
}
.dropdown:hover{
  position: relative;
  background-color:#fff;
  span{
    color:#000;
  }
  >span>i{
    border-top:none;
    border-left:4px dashed transparent;
    border-right:4px dashed tra nsparent;
  }
  div{
    display:block;
    background-color:#fff;
  }
}
.dropdown1>div{
  display:none;
  position: absolute;
  border:1px solid #ccc;
  border-top:0 none;
  width:130px;
  ul{
    font-size:14px;
    margin-left:10px;
  }
  li+li{
    border-top:1px dashed #ccc; 
  }
  ul>li>a{
    background:url("../../../../public/img/login.png") no-repeat;
    min-width:50px;
    height:38px;
    text-decoration: none;
    color:#666;
    display:block;
    padding:0px 0px 0 38px;
    margin:5px 0 5px 0;
  }
  ul>li:first-child>a{
    background-position:-50px -160px;
  }
  ul>li:nth-child(2)>a{
    background-position:-50px -200px;
  }
  ul>li:nth-child(3)>a{
    background-position:-50px -366px;
  }
  ul>li:nth-child(4)>a{
    background-position:-50px -323px;
  }
  ul>li:last-child>a{
    background-position:-50px -280px;
  }
}
.dropdown1:hover{
  background-color:#fff;
  li{
    color:#ed3945;
  }
  span{
    color:#000;
  }
  div{
    display:block;
    background-color:#fff;
  }
}
.dropdown2{
  ul>li:first-child>a{
    background-position:-50px -80px !important;
  }
  ul>li:last-child>a{
    background-position:-50px -120px !important;
  }
}
.dropdown a:hover{
  color:#ff3d3a;
}
.dropdown1 a:hover{
  color:#ff3d3a;
}
</style>