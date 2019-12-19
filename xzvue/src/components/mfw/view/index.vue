<template>
  <div>
    <mfwheader></mfwheader>
    <div class="clearfix width">
      <div class="carousel float-right" id="demo" data-ride="carousel">
        <div class="carousel-inner">
          <div v-for="(item,index) of list" :key="index" v-bind:class="{'active':index==0}" class="carousel-item">
            <img class="w-100" :src="`http://127.0.0.1:5000/`+item.pic" alt=""/>
          </div>
        </div>
        <a href="#demo" data-slide="prev" class="carousel-control-prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a href="#demo" data-slide="next" class="carousel-control-next">
          <span class="carousel-control-next-icon"></span>
        </a>
        <ul class="carousel-indicators">
          <li data-target="#demo" v-for="(k,i) of list" :key="i" :data-slide-to="i" v-bind:class="{'active':i==0}"></li>
        </ul>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="contain clearfix">
      <ul class="d-flex list-unstyled mt-2">
        <li>
          <a href="" class="img7">
            <span class="">自由行</span><br/>
            <span class="my_font">旅行就要更自在</span>
          </a>
        </li>
        <li>
          <a href="" class="img8">
            <span class="">跟团游</span><br/>
            <span class="my_font">行程透明省心游</span>
          </a>
        </li>
        <li>
          <a href="" class="img9">
            <span class="">当地游</span><br/>
            <span class="my_font">最地道的玩法体验</span>
          </a>
        </li>
        <li>
          <a href="" class="img3">
            <span class="">机票</span><br/>
            <span class="my_font">特惠一折起</span>
          </a>
        </li>
        <li>
          <a href="" class="img4">
            <span class="">订酒店</span><br/>
            <span class="my_font">一键全网比价</span>
          </a>
        </li>
        <li>
          <a href="" class="img5">
            <span class="">签证</span><br/>
            <span class="my_font">出签率高服务佳</span>
          </a>
        </li>
        <li>
          <a href="" class="img6">
            <span class="">邮轮</span><br/>
            <span class="my_font">移动的海上城堡</span>
          </a>
        </li>
      </ul>
      <div class="section clearfix">
        <div class="navba clearfix">
          <ul class="tn-nav">
            <li class="active">
              <a href="" class="text-warning font-1">热门游记</a>
              <span class="font-3">筛选</span>
            </li>
            <li class="text-center">
              <a href="" class="font-1">最新发表</a>
            </li>
          </ul>
          <div class="btn-write">
            <a href="" class="btn btn-warning w-100">
              <i class="image"></i>
              写游记
            </a>
          </div>
        </div>
        <div class="item">
          <div class="item1">
            <a href="">
              <img src="../../../../public/img/mfw/index/index-section.jpg" alt="">
            </a>
          </div>
          <div class="item2 ml-4">
            <dl>
              <dt>
                <a href="" class="font-1 text-muted">告别酒店躺猪，6000RMB来【巴厘岛】感受人以“...</a>
              </dt>
              <dd>
                <a href="" class="font-3 text-muted">
                  你想过吗，是什么让你对一个地方念念不忘？ 是美景吗？ 一定不仅仅是美景， 是你感受到自己被一个地方接纳， 是你喜欢那时那刻的自己。 美丽的景色会存于人的记忆，而当你和一个地方发生了...
                </a>
              </dd>
            </dl>
            <div>
              <span class="font-3">
                <img src="../../../../public/img/mfw/index/small_img1.png" alt="">
                <a href="">巴厘岛</a>，by
              </span>
              <a href="" class="font-3 text-warning">
                <img src="../../../../public/img/mfw/index/index-section_img1.jpeg" alt="">
                数花盆
              </a>
              <span class="font-3 text-muted">
                  <img src="../../../../public/img/mfw/index/small_img2.png" alt="">
                  2222/165
              </span>
              <span class="ding ">
                <i>17</i>
                <a href="" class="btn-ding"></a>
              </span>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item1">
            <a href="">
              <img src="../../../../public/img/mfw/index/index-section1.jpg" alt="">
            </a>
          </div>
          <div class="item2 ml-4">
            <dl>
              <dt>
                <a href="" class="font-1 text-muted">“东西”夫妇首次合体，泰国曼谷、清迈9天超全旅游攻略...</a>
              </dt>
              <dd>
                <a href="" class="font-3 text-muted">
                  酝酿这次旅程似乎有点迅速 本来的计划是约几位好友一起自驾去 西藏 结果，有朋友因工作用原因无法出行 最后，我和东哥就选择了 泰国 这个在我心目中一直向往的国度 繁 华城市 曼谷 小城清幽 ...
                </a>
              </dd>
            </dl>
            <div>
              <span class="font-3">
                <img src="../../../../public/img/mfw/index/small_img1.png" alt="">
                <a href="">泰国</a>，by
              </span>
              <a href="" class="font-3 text-warning">
                <img src="../../../../public/img/mfw/index/index-section_img2.jpeg" alt="">
                陈西西_Cc
              </a>
              <span class="font-3 text-muted">
                  <img src="../../../../public/img/mfw/index/small_img2.png" alt="">
                  489/3
              </span>
              <span class="ding ">
                <i>14</i>
                <a href="" class="btn-ding"></a>
              </span>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item1">
            <a href="">
              <img src="../../../../public/img/mfw/index/index-section2.jpg" alt="">
            </a>
          </div>
          <div class="item2 ml-4">
            <dl>
              <dt>
                <a href="" class="font-1 text-muted">大西北丨夏天最美的青甘大环线，一次看尽万般风景...</a>
              </dt>
              <dd>
                <a href="" class="font-3 text-muted">
                  说在前面的话 假如人生不曾相遇，我还是那个我，偶尔做做梦，徘徊于两点一线之间，在办公室里做着那份一眼就能看到头的工作，日复一日，年复一年，未曾想到遇见你之后，我的生活发生了改变...
                </a>
              </dd>
            </dl>
            <div>
              <span class="font-3">
                <img src="../../../../public/img/mfw/index/small_img1.png" alt="">
                <a href="">青海</a>，by
              </span>
              <a href="" class="font-3 text-warning">
                <img src="../../../../public/img/mfw/index/index-section_img3.jpeg" alt="">
                沈小娴
              </a>
              <span class="font-3 text-muted">
                  <img src="../../../../public/img/mfw/index/small_img2.png" alt="">
                  24375/74
              </span>
              <span class="ding ">
                <i>787</i>
                <a href="" class="btn-ding"></a>
              </span>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item1">
            <a href="">
              <img src="../../../../public/img/mfw/index/index-section3.jpg" alt="">
            </a>
          </div>
          <div class="item2 ml-4">
            <dl>
              <dt>
                <a href="" class="font-1 text-muted">东山岛的美，需要用心感受——两天一夜超全攻略...</a>
              </dt>
              <dd>
                <a href="" class="font-3 text-muted">
                  攻略写在前面 为了方便大家做攻略，我把行程建议放在最前面，文章正文有大量美景，美食和视频，让大家避坑不踩雷，当然，攻略之前先给大家介绍这期的两个小伙伴，冰冰和宝宝，用下面这个视...
                </a>
              </dd>
            </dl>
            <div>
              <span class="font-3">
                <img src="../../../../public/img/mfw/index/small_img1.png" alt="">
                <a href="">东山岛</a>，by
              </span>
              <a href="" class="font-3 text-warning">
                <img src="../../../../public/img/mfw/index/index-section_img4.jpeg" alt="">
                摄影师 花生
              </a>
              <span class="font-3 text-muted">
                  <img src="../../../../public/img/mfw/index/small_img2.png" alt="">
                  6767/38
              </span>
              <span class="ding ">
                <i>321</i>
                <a href="" class="btn-ding"></a>
              </span>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item1">
            <a href="">
              <img src="../../../../public/img/mfw/index/index-section4.jpg" alt="">
            </a>
          </div>
          <div class="item2 ml-4">
            <dl>
              <dt>
                <a href="" class="font-1 text-muted">Zizi的旅行记录。 [ 从北到南，十五天迷失在越南的滴...</a>
              </dt>
              <dd>
                <a href="" class="font-3 text-muted">
                  Vietnam，just go 开篇碎碎念 越南 ，对我来说 有滴漏咖啡的香醇，有奥黛摇曳的美丽，有摩托车大军的呼啸，有三十六行街里的檀香，有 会安 的灯笼，有 岘港 的海湾，有 大叻 的花园...... ...
                </a>
              </dd>
            </dl>
            <div>
              <span class="font-3">
                <img src="../../../../public/img/mfw/index/small_img1.png" alt="">
                <a href="">越南</a>，by
              </span>
              <a href="" class="font-3 text-warning">
                <img src="../../../../public/img/mfw/index/index-section_img5.jpeg" alt="">
                zizi
              </a>
              <span class="font-3 text-muted">
                  <img src="../../../../public/img/mfw/index/small_img2.png" alt="">
                  2218/26
              </span>
              <span class="ding ">
                <i>170</i>
                <a href="" class="btn-ding"></a>
              </span>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item1">
            <a href="">
              <img src="../../../../public/img/mfw/index/index-section5.jpg" alt="">
            </a>
          </div>
          <div class="item2 ml-4">
            <dl>
              <dt>
                <a href="" class="font-1 text-muted">法式风情 轻松度假——越南胡志明市&富国岛JW...</a>
              </dt>
              <dd>
                <a href="" class="font-3 text-muted">
                  13天的愉快的行程结束了。每次旅行都有不一样的收获，有点看人生的感觉，或许会收获意外的惊喜、认识不同国家的肤色的人。或许会闹心、无力吐槽.... 几次旅行下来真是感叹小人儿的成长、以前...
                </a>
              </dd>
            </dl>
            <div>
              <span class="font-3">
                <img src="../../../../public/img/mfw/index/small_img1.png" alt="">
                <a href="">富国岛</a>，by
              </span>
              <a href="" class="font-3 text-warning">
                <img src="../../../../public/img/mfw/index/index-section_img6.jpeg" alt="">
                孙文科 Vinzent
              </a>
              <span class="font-3 text-muted">
                  <img src="../../../../public/img/mfw/index/small_img2.png" alt="">
                  4156/32
              </span>
              <span class="ding ">
                <i>141</i>
                <a href="" class="btn-ding"></a>
              </span>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item1">
            <a href="">
              <img src="../../../../public/img/mfw/index/index-section6.jpg" alt="">
            </a>
          </div>
          <div class="item2 ml-4">
            <dl>
              <dt>
                <a href="" class="font-1 text-muted">潼宝看世界- 蓝色鸦片“菲”了个够-巴拉望、薄荷...</a>
              </dt>
              <dd>
                <a href="" class="font-3 text-muted">
                  13天的愉快的行程结束了。每次旅行都有不一样的收获，有点看人生的感觉，或许会收获意外的惊喜、认识不同国家的肤色的人。或许会闹心、无力吐槽.... 几次旅行下来真是感叹小人儿的成长、以前...
                </a>
              </dd>
            </dl>
            <div>
              <span class="font-3">
                <img src="../../../../public/img/mfw/index/small_img1.png" alt="">
                <a href="">菲律宾</a>，by
              </span>
              <a href="" class="font-3 text-warning">
                <img src="../../../../public/img/mfw/index/index-section_img7.jpeg" alt="">
                潼之猫咪
              </a>
              <span class="font-3 text-muted">
                  <img src="../../../../public/img/mfw/index/small_img2.png" alt="">
                  221/0
              </span>
              <span class="ding ">
                <i>12</i>
                <a href="" class="btn-ding"></a>
              </span>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item1">
            <a href="">
              <img src="../../../../public/img/mfw/index/index-section7.jpg" alt="">
            </a>
          </div>
          <div class="item2 ml-4">
            <dl>
              <dt>
                <a href="" class="font-1 text-muted">清迈-曼谷-芭提雅 导游小程带着两个老小孩儿的泰国自...</a>
              </dt>
              <dd>
                <a href="" class="font-3 text-muted">
                  期待了很久的这个8月，本来是计划和李先生的蜜月行的，结果他临时出差，被放鸽子了 。临时起意，那就和爸妈一起出去玩吧～商量过后选定了 泰国 ，近些年都没有和他俩一起旅游过，这次又是国...
                </a>
              </dd>
            </dl>
            <div>
              <span class="font-3">
                <img src="../../../../public/img/mfw/index/small_img1.png" alt="">
                <a href="">泰国</a>，by
              </span>
              <a href="" class="font-3 text-warning">
                <img src="../../../../public/img/mfw/index/index-section_img8.jpeg" alt="">
                程小帅
              </a>
              <span class="font-3 text-muted">
                  <img src="../../../../public/img/mfw/index/small_img2.png" alt="">
                  2222/165
              </span>
              <span class="ding ">
                <i>97</i>
                <a href="" class="btn-ding"></a>
              </span>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item1">
            <a href="">
              <img src="../../../../public/img/mfw/index/index-section8.jpg" alt="">
            </a>
          </div>
          <div class="item2 ml-4">
            <dl>
              <dt>
                <a href="" class="font-1 text-muted">菲律宾—菲旅宾GO(附最硬实用干货)...</a>
              </dt>
              <dd>
                <a href="" class="font-3 text-muted">
                  前言 为什么要去 菲律宾 和 菲律宾 结缘是在网上看到一些旅游爱好者在 薄荷岛 跳海的视频，被从未见过的薄荷绿般的大海深深吸引从此埋下想跳海的种子，于是对 菲律宾 的关注也越来越多后来...
                </a>
              </dd>
            </dl>
            <div>
              <span class="font-3">
                <img src="../../../../public/img/mfw/index/small_img1.png" alt="">
                <a href="">菲律宾</a>，by
              </span>
              <a href="" class="font-3 text-warning">
                <img src="../../../../public/img/mfw/index/index-section_img9.jpeg" alt="">
                癫癫燕
              </a>
              <span class="font-3 text-muted">
                  <img src="../../../../public/img/mfw/index/small_img2.png" alt="">
                  4102/68
              </span>
              <span class="ding ">
                <i>269</i>
                <a href="" class="btn-ding"></a>
              </span>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item1">
            <a href="">
              <img src="../../../../public/img/mfw/index/index-section9.jpg" alt="">
            </a>
          </div>
          <div class="item2 ml-4">
            <dl>
              <dt>
                <a href="" class="font-1 text-muted">一次，我去的不是“假”的泰国（曼谷与苏梅，一边买...</a>
              </dt>
              <dd>
                <a href="" class="font-3 text-muted">
                  今年4月份，去了一次 泰国 。 除了酒店，可以说有点儿一路泰囧：打车被黑，吃饭被坑，热到想哭，还什么都没买成。 和闺蜜回来以后，面面相觑：咱俩去的是假的 泰国 吧？ 也许吧。 更或许是，...
                </a>
              </dd>
            </dl>
            <div>
              <span class="font-3">
                <img src="../../../../public/img/mfw/index/small_img1.png" alt="">
                <a href="">泰国</a>，by
              </span>
              <a href="" class="font-3 text-warning">
                <img src="../../../../public/img/mfw/index/index-section_img10.jpeg" alt="">
                我就是八爪
              </a>
              <span class="font-3 text-muted">
                  <img src="../../../../public/img/mfw/index/small_img2.png" alt="">
                  1524/13
              </span>
              <span class="ding ">
                <i>91</i>
                <a href="" class="btn-ding"></a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="index-aside">
        <img src="../../../../public/img/mfw/index/index-link.png" alt="">
        <div class="aside">
          <div class="title">
            <span class="font-1">旅行者专栏</span>
            <a href="" class="font-2 float-right">专栏首页</a>
          </div>
          <img src="../../../../public/img/mfw/index/index-aside.jpeg" alt="">
          <h6><a href="">暹粒油淋鱼</a></h6>
          <p class="font-3">默默等待，鱼上桌，迅速夹一口塞在嘴里——我就像个戒烟多日的老烟枪终于抽上了烟，心里的空洞瞬间被填满了。</p>
        </div>
        <div class="aside">
          <div class="title">
            <span class="font-1">旅行攻略推荐</span>
            <a href="" class="font-2 float-right">更多</a>
          </div>
          <img src="../../../../public/img/mfw/index/index-aside2.jpeg" alt="">
          <h6><a href="">老武汉私藏的吉庆街美食攻略|带...</a></h6>
        </div>
        <div class="aside">
          <div class="title">
            <span class="font-1">最新活动</span>
            <a href="" class="font-2 float-right">查看全部></a>
          </div>
          <img src="../../../../public/img/mfw/index/index-aside3.jpeg" alt="">
          <h6><a href="" class="text-warning">神隐宝华山，自在活成诗</a></h6>
          <p class="font-3">宝华山脚下的千年历史，等你来寻</p>
        </div>
        <div class="aside">
          <div class="title">
            <span class="font-1">未知旅行实验室</span>
            <a href="" class="font-2 float-right">查看更多></a>
          </div>
          <img src="../../../../public/img/mfw/index/index-aside4.png" alt=""/>
        </div>
        <div class="aside">
          <div class="title">
            <span class="font-1">加入马蜂窝</span>
            <a href="" class="font-2 float-right">了解详情></a>
          </div>
          <img src="../../../../public/img/mfw/index/index-aside5.jpeg" alt="">
        </div>
        <div class="aside">
          <p class="font-1">马蜂窝旅游网最新资讯</p>
          <p class="font-2 text-muted">08月06日 <a href="" class="text-muted">从马蜂窝大数据看七夕过节新潮流</a></p>
          <p class="font-2 text-muted">08月01日 <a href="" class="text-muted">马蜂窝发布中国出境自由行报告</a></p>
          <p class="font-2 text-muted">07月24日 <a href="" class="text-muted">马蜂窝7月大促引爆暑假旅游热</a></p>
          <p class="font-2 text-muted">07月19日<a href="" class="text-muted">盘点最适合夜游的五大城市</a></p>
          <p class="font-2 text-muted">07月19日 <a href="" class="text-muted">如何在马蜂窝实现"双面人生"</a></p>
          <p class="font-2 text-muted">07月17日 <a href="" class="text-muted">马蜂窝用"声画联觉"打造想象空间</a></p>
        </div>
      </div>
    </div>
    <mfwfooter></mfwfooter>
  </div>
</template>
<script>
import mfwHeader from "../common/header.vue"
import mfwFooter from "../common/footer.vue"
export default {
  data(){
    return {
      n:0,
      list:[]
    }
  },
  methods: {
    nav(){
      this.n++;
      var url="nav";
      var obj={pno:this.n};
      this.axios.get(url,{params:obj})
      .then(
        res=>{
          this.list=res.data.data;
          console.log(this.list)
        }
      )
    }
  },
  created() {
    this.nav();
  },
  components:{
    "mfwheader":mfwHeader,
    "mfwfooter":mfwFooter
  }
}
</script>
<style lang="scss" scoped>
@media (max-width: 1140px) {
  .contain{
    margin:0 70px !important;
  }
}
.width{
  width:100%;
  margin-bottom:20px;
}
.contain {
    width: 1000px;
    margin:0 auto;
}
a{color:#333;}
.carousel-control-prev, .carousel-control-next{
  width:4%;height:20%;
  top:40%;
  border-radius:0.25rem;
  background-color: #999;
} 
.carousel-indicators li{
  width:0.6rem;height:0.6rem;
  border-radius:50%;
  background-color:#fff;
  margin-left:0.2rem;
  margin-right:0.2rem
}
.carousel-indicators .active{
  background-color:#0AA1ED;
}
.contain>ul:nth-child(1){
  margin-bottom:19px;
}
.contain>ul:nth-child(1)>li>a{
  width:136px;
  border:1px solid #e5e5e5;
  background-image:url("../../../../public/img/mfw/index/1.png");
  background-repeat:no-repeat;
  background-size:104px auto;
  display: inline-block;
  overflow: hidden;
  color:#330;
  padding-top:8px;
  padding-left:7px;
}
.contain>ul:nth-child(1)>li+li{margin-left:8px;}
.my_font{font-size:12px;}
.img7{
  background-position:57px -655px;
}
.img8{
  background-position:57px -28px;
}
.img9{
  background-position:57px -130px;
}
.img3{
  background-position:57px -443px;
}
.img4{
  background-position:57px -550px;
}
.img5{
  background-position:57px -340px;
}
.img6{
  background-position:57px -236px;
}
.index-aside{float:left;width:260px;}
.index-aside>img{width:218px;;margin-bottom:30px;}
.title{height:35px;line-height: 35px;margin-bottom:12px;}
.font-1{font-size:18px;font-weight:normal;}
.font-2{font-size:12px;color:#999;}
.font-3{font-size:14px;}
.aside{margin-bottom:30px;}
h6>a{color:#212529;}
.section{
  width:700px;
  float:right;
}
.index-aside{float:left;width:260px;}
.navba{
  margin-bottom:40px;
  height:36px;line-height:36px;
  padding-bottom:50px;
  border-bottom:1px solid #e4e4e4;
}
.tn-nav{
  list-style:none;
  display:flex;
  float:left;
  padding-left:0;
}
.tn-nav .active{
  width:180px;
  padding:6px;
  border-bottom:3px solid #ff9d00;
  position:realtive;
  z-index:11;
}
.tn-nav>.active>span{
  display:online-block;
  margin-left:6px;
  line-height: 20px;
  border:1px solid #e5e5e5;
  padding:0 10px 0 8px;
  vertical-align: 2px;
}
.text-center{
  display:inline;
  line-height:47px;
}
.btn-write{
  float:right;
  width:140px;
}
.image{
  width:18px;height:17px;
  background:url("../../../../public/img/mfw/index/index-sprites9.png") no-repeat;
  background-position:0px 0px !important;
  display: inline-block;
  overflow: hidden;
  vertical-align: -3px;
}
.item,.item1{float:left;}
.item{padding:15px 0;;}
.item2{float:right;width:455px;}
.item2>div>a>img{border-radius: 50%;}
.item2>div{height:33px;line-height:33px;
    word-wrap: break-word;display:block;
}
.ding{
  height:33px;
  float:right;font-size:14px;
  color:#ff9d00;text-align:right;
  position: relative;
}
.ding>i{position: absolute;
  bottom:-2px;right:44px;
  font-style:normal;
}
.ding>span{line-height:33px !important;float: right;}
.btn-ding{
  width:38px;height:33px;
  background:url("../../../../public/img/mfw/index/index-sprites9.png") no-repeat;
  background-position:-60px 0px !important;
  display: inline-block;
  overflow: hidden;
}

</style>