<template>
  <div>
    <mfwheader></mfwheader>
    <div class="com">
      <div class="clearfix">
        <div class="com-aside">
          <ul >
            <li>
              <p>海外冬季目的地精选</p>
            </li>
            <li>
              <p>国内冬季目的地推荐</p>
            </li>
            <li>
              <p>奔向海岛</p>
            </li>
            <li>
              <p>主题推荐</p>
            </li>
          </ul>
          <div class="aside_img">
            <span class="float-left"></span>
            <input type="text" placeholder="请输入想去的地方，如:香港">
          </div>
          <div class="aside_load">
            <a href="">
              <img src="../../../../public/img/mfw/list/logo_gonglve_v6.png" alt="">
            </a>
            <div>
              <a href="">
                <p>马蜂窝自由行APP下载</p>
                <span>iPhone版|andro版|iPad版</span>
              </a>
            </div>
          </div>
        </div>
        <div class="carousel" id="car">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="w-100" src="../../../../public/img/mfw/list/carousel.png" alt="">
            </div>
            <div class="carousel-item">
              <img class="w-100" src="../../../../public/img/mfw/list/carousel1.jpeg" alt="">
            </div>
            <div class="carousel-item">
              <img class="w-100" src="../../../../public/img/mfw/list/carousel2.jpeg" alt="">
            </div>
            <div class="carousel-item">
              <img class="w-100" src="../../../../public/img/mfw/list/carousel3.png" alt="">
            </div>
            <div class="carousel-item">
              <img class="w-100" src="../../../../public/img/mfw/list/carousel4.jpeg" alt="">
            </div>
          </div>
          <ul class="carousel-indicators">
            <li class="carousel-indicators active" data-slide-to="0" data-target="#car"></li>
            <li class="carousel-indicators" data-slide-to="1" data-target="#car"></li>
            <li class="carousel-indicators" data-slide-to="2" data-target="#car"></li>
            <li class="carousel-indicators" data-slide-to="3" data-target="#car"></li>
            <li class="carousel-indicators" data-slide-to="4" data-target="#car"></li>
          </ul>
        </div>
        </div>
      <div class="listBody clearfix">
        <div class="body-aside">
        <div>旅游攻略导航</div>
          <ul class="cd">
            <li class="breadcrumb-item" @click="changeState(0)" :class="currentIndex[0].isSelect?'active':''">
              国内<span :class="currentIndex[0].isSelect?'activeI':''"></span>
              <div class="drop-top" :style="currentIndex[0].style">
                <div class="inner">
                  <ul>
                    <li>
                      <a href="">四川(27)</a>
                    </li>
                    <li>
                      <a href="">云南(27)</a>
                    </li>
                    <li>
                      <a href="">江苏(27)</a>
                    </li>
                    <li>
                      <a href="">北京(21)</a>
                    </li>
                    <li>
                      <a href="">浙江(21)</a>
                    </li>
                    <li>
                      <a href="">广东(19)</a>
                    </li>
                    <li>
                      <a href="">河北(16)</a>
                    </li>
                    <li>
                      <a href="">台湾(16)</a>
                    </li>
                    <li>
                      <a href="">贵州(15)</a>
                    </li>
                    <li>
                      <a href="">山东(15)</a>
                    </li>
                    <li>
                      <a href="">内蒙古(14)</a>
                    </li>
                    <li>
                      <a href="">西藏(13)</a>
                    </li>
                    <li>
                      <a href="">江西(12)</a>
                    </li>
                    <li>
                      <a href="">广西(11)</a>
                    </li>
                    <li>
                      <a href="">青海(11)</a>
                    </li>
                    <li>
                      <a href="">河南(10)</a>
                    </li>
                    <li>
                      <a href="">黑龙江(10)</a>
                    </li>
                    <li>
                      <a href="">新疆(10)</a>
                    </li>
                    <li>
                      <a href="">安徽(9)</a>
                    </li>
                    <li>
                      <a href="">福建(9)</a>
                    </li>
                    <li>
                      <a href="">海南(9)</a>
                    </li>
                    <li>
                      <a href="">湖北(9)</a>
                    </li>
                    <li>
                      <a href="">吉林(9)</a>
                    </li>
                    <li>
                      <a href="">湖南(8)</a>
                    </li>
                    <li>
                      <a href="">山西(8)</a>
                    </li>
                    <li>
                      <a href="">陕西(8)</a>
                    </li>
                    <li>
                      <a href="">甘肃(7)</a>
                    </li>
                    <li>
                      <a href="">辽宁(6)</a>
                    </li>
                    <li>
                      <a href="">澳门(5)</a>
                    </li>
                    <li>
                      <a href="">香港(4)</a>
                    </li>
                    <li>
                      <a href="">重庆(4)</a>
                    </li>
                    <li>
                      <a href="">上海(3)</a>
                    </li>
                    <li>
                      <a href="">宁夏(2)</a>
                    </li>
                    <li>
                      <a href="">天津(2)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="breadcrumb-item" @click="changeState(1)" :class="currentIndex[1].isSelect?'active':''">
              国外<span :class="currentIndex[1].isSelect?'activeI':''"></span>
              <div class="drop-top" :style="currentIndex[1].style">
                <div class="inner">
                  <ul>
                    <li>
                      <a href="">欧洲(102)</a>
                    </li>
                    <li>
                      <a href="">东南亚(73)</a>
                    </li>
                    <li>
                      <a href="">北美洲(40)</a>
                    </li>
                    <li>
                      <a href="">东亚(27)</a>
                    </li>
                    <li>
                      <a href="">大洋洲(23)</a>
                    </li>
                    <li>
                      <a href="">南亚(20)</a>
                    </li>
                    <li>
                      <a href="">非洲(17)</a>
                    </li>
                    <li>
                      <a href="">西亚(7)</a>
                    </li>
                    <li>
                      <a href="">南美洲(3)</a>
                    </li>
                    <li>
                      <a href="">南极洲(1)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="breadcrumb-item" @click="changeState(2)" :class="currentIndex[2].isSelect?'active':''">
              主题<span :class="currentIndex[2].isSelect?'activeI':''"></span>
              <div class="drop-top" :style="currentIndex[2].style">
                <div class="inner">
                  <ul>
                    <li>
                      <a href="">数据报告(35)</a>
                    </li>
                    <li>
                      <a href="">休闲(27)</a>
                    </li>
                    <li>
                      <a href="">户外(18)</a>
                    </li>
                    <li>
                      <a href="">文化(18)</a>
                    </li>
                    <li>
                      <a href="">特别策划(15)</a>
                    </li>
                    <li>
                      <a href="">美食(14)</a>
                    </li>
                    <li>
                      <a href="">购物(12)</a>
                    </li>
                    <li>
                      <a href="">自驾(11)</a>
                    </li>
                    <li>
                      <a href="">节庆(11)</a>
                    </li>
                    <li>
                      <a href="">必备(9)</a>
                    </li>
                    <li>
                      <a href="">观赏(9)</a>
                    </li>
                    <li>
                      <a href="">周边(9)</a>
                    </li>
                    <li>
                      <a href="">摄影(7)</a>
                    </li>
                    <li>
                      <a href="">旅行主义(7)</a>
                    </li>
                    <li>
                      <a href="">建筑(5)</a>
                    </li>
                    <li>
                      <a href="">家庭(4)</a>
                    </li>
                    <li>
                      <a href="">星旅行(3)</a>
                    </li>
                    <li>
                      <a href="">滑雪(1)</a>
                    </li>
                    <li>
                      <a href="">登山(1)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <ul class="md">
            <li class="download">
              <a href="" title="大阪">
                <img src="../../../../public/img/mfw/list/body-aside.jpeg" alt="">
              </a>
              <p class="uTiem">更新日期:2016-07-15</p>
              <div class="load"><span ></span><p>1307395人下载</p></div>
            </li>
            <li><span>2</span><a href="">成都</a></li>
            <li><span>3</span><a href="">京都</a></li>
            <li><span>4</span><a href="">西安</a></li>
            <li><span>5</span><a href="">日本</a></li>
            <li><span>6</span><a href="">东京</a></li>
            <li><span>7</span><a href="">北京</a></li>
            <li><span>8</span><a href="">重庆</a></li>
            <li><span>9</span><a href="">青岛</a></li>
            <li><span>10</span><a href="">大理</a></li>
          </ul>
        </div>
        <div class="section">
          <div>推荐攻略</div>
          <div class="feed-item">
            <a href="">
              <div>
                <div class="clearfix">
                  <span class="top2">
                    <span>119</span>
                    <span>蜂蜂顶</span>
                    <i></i>
                  </span>
                  <span class="top1">
                    <i></i>
                    来自<strong>游记</strong>
                  </span>
                </div>
                <p class="title">[孤独周末暴走咖20]！2个小时CityWalk扫街：首次文艺解析&小...</p>
                <dl class="art">
                  <dt>
                    <img src="../../../../public/img/mfw/list/section1.jpeg" alt="">
                  </dt>
                  <dd>
                    <div class="content">
                      A线路2小时：1.长宁路1187号，2.圣约翰大学旧址，3.开纳公寓，4.江苏路285号，5.美丽园，6.唐绍仪故居，7.永福路，8.五原路，9.巴金故居，10.东平路，11.衡山路B线路2.5小时：1.古城公园，2.圣三一教堂，3.中央商场，4.和平饭店，5.外滩27,29号，6.黄...
                    </div>
                    <div class="user">
                      <span class="uname">
                        <img src="../../../../public/img/mfw/list/uname1.jpeg" alt="">Jackie YU
                      </span>
                      <span>1984浏览，21评论</span>
                    </div>
                  </dd>
                </dl>
              </div>
            </a>
          </div>
          <div class="hr"></div>
          <div class="feed-item">
            <a href="">
              <div>
                <div class="clearfix">
                  <span class="top2">
                    <span>0</span>
                    <span>蜂蜂体验过</span>
                    <i></i>
                  </span>
                  <span class="top1">
                    <i></i>
                    来自<strong>自由行攻略</strong>
                  </span>
                </div>
                <p class="title">塞班岛旅游怎么玩不枉此行，一篇攻略让你玩转塞班岛!</p>
                <ul class="imgs clearfix">
                  <li>
                    <img src="../../../../public/img/mfw/list/section2.jpeg" alt="">
                  </li>
                  <li>
                    <img src="../../../../public/img/mfw/list/section3.png" alt="">
                  </li>
                  <li>
                    <img src="../../../../public/img/mfw/list/section4.png" alt="">
                  </li>
                  <li class="lL">39643浏览</li>
                </ul>
              </div>
            </a>
          </div>
          <div class="hr"></div>
          <div class="feed-item">
            <a href="">
              <div>
                <div class="clearfix">
                  <span class="top2">
                    <span>162</span>
                    <span>蜂蜂顶</span>
                    <i></i>
                  </span>
                  <span class="top1">
                    <i></i>
                    来自<strong>游记</strong>
                  </span>
                </div>
                <p class="title">“把美食与爱装进口袋里，浪荡在成都街上”</p>
                <dl class="art">
                  <dt>
                    <img src="../../../../public/img/mfw/list/section5.jpg" alt="">
                  </dt>
                  <dd>
                    <div class="content">
                      前言&nbsp;成都于我来说是一座特别的城市，它是火辣的，也是迷人的，它又带着古朴的魅力，凸显它的文艺。我想一定是跟它特别有缘分才能在这里"驻扎"这么久。在成都的好几个年头了，依然很喜欢它。忙碌工作后的美食安慰就像一支暖心剂，空暇的时间在成都的...
                    </div>
                    <div class="user">
                      <span class="uname">
                        <img src="../../../../public/img/mfw/list/uname2.jpeg" alt="">说书人
                      </span>
                      <span>72浏览，3评论</span>
                    </div>
                  </dd>
                </dl>
              </div>
            </a>
          </div>
          <div class="hr"></div>
          <div class="feed-item">
            <a href="">
              <div>
                <div class="clearfix">
                  <span class="top2">
                    <span>0</span>
                    <span>蜂蜂体验过</span>
                    <i></i>
                  </span>
                  <span class="top1">
                    <i></i>
                    来自<strong>自由行攻略</strong>
                  </span>
                </div>
                <p class="title">峡谷奇观&nbsp;山水相逢--云台山</p>
                <div class="content">小编汇集了马蜂窝上关于云台山的各种分享，整理了云台山所有好看、好玩、好住的游玩攻略，看一篇顶十篇，"豫"见云台山，给旅行一个理由!</div>
                <ul class="imgs clearfix">
                  <li>
                    <img src="../../../../public/img/mfw/list/section6.jpeg" alt="">
                  </li>
                  <li>
                    <img src="../../../../public/img/mfw/list/section7.jpeg" alt="">
                  </li>
                  <li>
                    <img src="../../../../public/img/mfw/list/section8.png" alt="">
                  </li>
                  <li class="lL">428417浏览</li>
                </ul>
              </div>
            </a>
          </div>
          <div class="hr"></div>
          <div class="feed-item">
            <a href="">
              <div>
                <div class="clearfix">
                  <span class="top2">
                    <span>134</span>
                    <span>蜂蜂顶</span>
                    <i></i>
                  </span>
                  <span class="top1">
                    <i></i>
                    来自<strong>游记</strong>
                  </span>
                </div>
                <p class="title">【大阪关西】走进宫崎骏的动画世界【京都-奈良-大阪6天自由行...</p>
                <dl class="art">
                  <dt>
                    <img src="../../../../public/img/mfw/list/section9.jpg" alt="">
                  </dt>
                  <dd>
                    <div class="content">
                      元旦从新西兰回来，刚下飞机就跟小伙伴心心念念想着，下次我们去日本玩把，然后3月份看到南航的特价机票，端午假期，从广州直飞大阪往返，包含2件23kg行李额度才1990元，果断撸起来，愉快地开启了我们的第四次旅途————日本关西执行；先看看我列的行程单...
                    </div>
                    <div class="user">
                      <span class="uname">
                        <img src="../../../../public/img/mfw/list/uname3.jpeg" alt="">嘉嘉所长
                      </span>
                      <span>1973浏览，0评论</span>
                    </div>
                  </dd>
                </dl>
              </div>
            </a>
          </div>
          <div class="hr"></div>
          <div class="feed-item">
            <a href="">
              <div>
                <div class="clearfix">
                  <span class="top2">
                    <span>0</span>
                    <span>蜂蜂体验过</span>
                    <i></i>
                  </span>
                  <span class="top1">
                    <i></i>
                    来自<strong>自由行攻略</strong>
                  </span>
                </div>
                <p class="title">超走心攻略，上海迪士尼【别排队了！这里有快速攻略】</p>
                <ul class="imgs clearfix">
                  <li>
                    <img src="../../../../public/img/mfw/list/section10.jpeg" alt="">
                  </li>
                  <li>
                    <img src="../../../../public/img/mfw/list/section11.png" alt="">
                  </li>
                  <li>
                    <img src="../../../../public/img/mfw/list/section12.png" alt="">
                  </li>
                  <li class="lL">185733浏览</li>
                </ul>
              </div>
            </a>
          </div>
          <div class="hr"></div>
          <div class="feed-item">
            <a href="">
              <div>
                <div class="clearfix">
                  <span class="top2">
                    <span>0</span>
                    <span>蜂蜂体验过</span>
                    <i></i>
                  </span>
                  <span class="top1">
                    <i></i>
                    来自<strong>自由行攻略</strong>
                  </span>
                </div>
                <p class="title">在青岛吃吃喝喝，这些美食不能错过!</p>
                <ul class="imgs clearfix">
                  <li>
                    <img src="../../../../public/img/mfw/list/section13.jpeg" alt="">
                  </li>
                  <li>
                    <img src="../../../../public/img/mfw/list/section14.jpeg" alt="">
                  </li>
                  <li>
                    <img src="../../../../public/img/mfw/list/section15.jpeg" alt="">
                  </li>
                  <li class="lL">23502浏览</li>
                </ul>
              </div>
            </a>
          </div>
          <div class="hr"></div>
          <div class="feed-item">
            <a href="">
              <div>
                <div class="clearfix">
                  <span class="top2">
                    <span>3306</span>
                    <span>蜂蜂顶</span>
                    <i></i>
                  </span>
                  <span class="top1">
                    <i></i>
                    来自<strong>游记</strong>
                  </span>
                </div>
                <p class="title">请来一杯小份的马达加斯加</p>
                <dl class="art">
                  <dt>
                    <img src="../../../../public/img/mfw/list/section16.jpeg" alt="">
                  </dt>
                  <dd>
                    <div class="content">
                      马达加斯加，号称世界第四岛，可以玩的非常多，猴面包树大道和众多的狐猴公园，还有贝马哈石林，RN7公路之旅，圣玛丽观鲸，诺西贝看海，等等等等。只是由于马岛的交通实在不加，要一一玩遍的话起码两到三周。不想舟车劳顿的走马观花，有没有一个地方，能把狐猴，猴面包树，石林和大海全都纳入囊中呢？答案也许就在...
                    </div>
                    <div class="user">
                      <span class="uname">
                        <img src="../../../../public/img/mfw/list/uname4.jpeg" alt="">鹌鹑君
                      </span>
                      <span>57797浏览，526评论</span>
                    </div>
                  </dd>
                </dl>
              </div>
            </a>
          </div>
          <div class="hr"></div>
          <div class="feed-item">
            <a href="">
              <div>
                <div class="clearfix">
                  <span class="top2">
                    <span>0</span>
                    <span>蜂蜂体验过</span>
                    <i></i>
                  </span>
                  <span class="top1">
                    <i></i>
                    来自<strong>自由行攻略</strong>
                  </span>
                </div>
                <p class="title">2019详细的呼伦贝尔旅游攻略信息，欢迎转发！！！</p>
                <div class="content">一篇全新的攻略</div>
                <ul class="imgs clearfix">
                  <li>
                    <img src="../../../../public/img/mfw/list/section17.jpeg" alt="">
                  </li>
                  <li>
                    <img src="../../../../public/img/mfw/list/section18.jpg" alt="">
                  </li>
                  <li>
                    <img src="../../../../public/img/mfw/list/section19.jpeg" alt="">
                  </li>
                  <li class="lL">11540浏览</li>
                </ul>
              </div>
            </a>
          </div>
          <div class="hr"></div>
          <div class="feed-item">
            <a href="">
              <div>
                <div class="clearfix">
                  <span class="top2">
                    <span>4449</span>
                    <span>蜂蜂顶</span>
                    <i></i>
                  </span>
                  <span class="top1">
                    <i></i>
                    来自<strong>游记</strong>
                  </span>
                </div>
                <p class="title">厦门缘浅，台湾情深————这里有一份小三通上宝岛的路书</p>
                <dl class="art">
                  <dt>
                    <img src="../../../../public/img/mfw/list/section20.jpeg" alt="">
                  </dt>
                  <dd>
                    <div class="content">
                      《绿岛小夜曲》，作曲：周蓝萍，作词：潘英杰歌中的“绿岛”指的是台湾岛，并不是指台湾的离岛绿岛。本游记的配乐是邓丽君演唱的版本，希望大家喜欢。把日韩台游成江浙沪本着把日韩台游成江浙沪的精神，我在2018圣诞夜第七次踏上宝岛，这次是和我先生...
                    </div>
                    <div class="user">
                      <span class="uname">
                        <img src="../../../../public/img/mfw/list/uname5.jpeg" alt="">Emily YU
                      </span>
                      <span>3205浏览，36评论</span>
                    </div>
                  </dd>
                </dl>
              </div>
            </a>
          </div>
          <div class="hr"></div>
          <div class="feed-item">
            <a href="">
              <div>
                <div class="clearfix">
                  <span class="top2">
                    <span>0</span>
                    <span>蜂蜂体验过</span>
                    <i></i>
                  </span>
                  <span class="top1">
                    <i></i>
                    来自<strong>自由行攻略</strong>
                  </span>
                </div>
                <p class="title">新疆旅游最全攻略---让您一篇就了解最全新疆</p>
                <div class="content">新疆的景点分布以乌鲁木齐为中心，东、南、西、北四个方向，我为大家先介绍一下每个方向的最经典景点，让大家有个初步的景点分布的概念</div>
                <ul class="imgs clearfix">
                  <li>
                    <img src="../../../../public/img/mfw/list/section21.jpeg" alt="">
                  </li>
                  <li>
                    <img src="../../../../public/img/mfw/list/section22.jpeg" alt="">
                  </li>
                  <li>
                    <img src="../../../../public/img/mfw/list/section23.jpeg" alt="">
                  </li>
                  <li class="lL">21687浏览</li>
                </ul>
              </div>
            </a>
          </div>
          <div class="hr"></div>
          <div class="feed-item">
            <a href="">
              <div>
                <div class="clearfix">
                  <span class="top2">
                    <span>119</span>
                    <span>蜂蜂顶</span>
                    <i></i>
                  </span>
                  <span class="top1">
                    <i></i>
                    来自<strong>游记</strong>
                  </span>
                </div>
                <p class="title">[孤独周末暴走咖20]！2个小时CityWalk扫街：首次文艺解析&小...</p>
                <dl class="art">
                  <dt>
                    <img src="../../../../public/img/mfw/list/section1.jpeg" alt="">
                  </dt>
                  <dd>
                    <div class="content">
                      A线路2小时：1.长宁路1187号，2.圣约翰大学旧址，3.开纳公寓，4.江苏路285号，5.美丽园，6.唐绍仪故居，7.永福路，8.五原路，9.巴金故居，10.东平路，11.衡山路B线路2.5小时：1.古城公园，2.圣三一教堂，3.中央商场，4.和平饭店，5.外滩27,29号，6.黄...
                    </div>
                    <div class="user">
                      <span class="uname">
                        <img src="../../../../public/img/mfw/list/uname1.jpeg" alt="">Jackie YU
                      </span>
                      <span>1984浏览，21评论</span>
                    </div>
                  </dd>
                </dl>
              </div>
            </a>
          </div>
          <div class="hr"></div>
          <div class="feed-item">
            <a href="">
              <div>
                <div class="clearfix">
                  <span class="top2">
                    <span>0</span>
                    <span>蜂蜂体验过</span>
                    <i></i>
                  </span>
                  <span class="top1">
                    <i></i>
                    来自<strong>自由行攻略</strong>
                  </span>
                </div>
                <p class="title">塞班岛旅游怎么玩不枉此行，一篇攻略让你玩转塞班岛!</p>
                <ul class="imgs clearfix">
                  <li>
                    <img src="../../../../public/img/mfw/list/section2.jpeg" alt="">
                  </li>
                  <li>
                    <img src="../../../../public/img/mfw/list/section3.png" alt="">
                  </li>
                  <li>
                    <img src="../../../../public/img/mfw/list/section4.png" alt="">
                  </li>
                  <li class="lL">39643浏览</li>
                </ul>
              </div>
            </a>
          </div>
          <div class="hr"></div>
          <div class="feed-item">
            <a href="">
              <div>
                <div class="clearfix">
                  <span class="top2">
                    <span>119</span>
                    <span>蜂蜂顶</span>
                    <i></i>
                  </span>
                  <span class="top1">
                    <i></i>
                    来自<strong>游记</strong>
                  </span>
                </div>
                <p class="title">[孤独周末暴走咖20]！2个小时CityWalk扫街：首次文艺解析&小...</p>
                <dl class="art">
                  <dt>
                    <img src="../../../../public/img/mfw/list/section1.jpeg" alt="">
                  </dt>
                  <dd>
                    <div class="content">
                      A线路2小时：1.长宁路1187号，2.圣约翰大学旧址，3.开纳公寓，4.江苏路285号，5.美丽园，6.唐绍仪故居，7.永福路，8.五原路，9.巴金故居，10.东平路，11.衡山路B线路2.5小时：1.古城公园，2.圣三一教堂，3.中央商场，4.和平饭店，5.外滩27,29号，6.黄...
                    </div>
                    <div class="user">
                      <span class="uname">
                        <img src="../../../../public/img/mfw/list/uname1.jpeg" alt="">Jackie YU
                      </span>
                      <span>1984浏览，21评论</span>
                    </div>
                  </dd>
                </dl>
              </div>
            </a>
          </div>
          <div class="hr"></div>
          <div class="feed-item">
            <a href="">
              <div>
                <div class="clearfix">
                  <span class="top2">
                    <span>0</span>
                    <span>蜂蜂体验过</span>
                    <i></i>
                  </span>
                  <span class="top1">
                    <i></i>
                    来自<strong>自由行攻略</strong>
                  </span>
                </div>
                <p class="title">塞班岛旅游怎么玩不枉此行，一篇攻略让你玩转塞班岛!</p>
                <ul class="imgs clearfix">
                  <li>
                    <img src="../../../../public/img/mfw/list/section2.jpeg" alt="">
                  </li>
                  <li>
                    <img src="../../../../public/img/mfw/list/section3.png" alt="">
                  </li>
                  <li>
                    <img src="../../../../public/img/mfw/list/section4.png" alt="">
                  </li>
                  <li class="lL">39643浏览</li>
                </ul>
              </div>
            </a>
          </div>
          <div class="hr"></div>
        </div>
      </div>
    </div>
    <mfwfooter></mfwfooter>
  </div>
</template>
<script>
import Header from '../common/header.vue'
import Footer from '../common/footer.vue'
export default {
  data(){
    return {
       isChange:1,
       num:1,
       currentIndex:[
        {isSelect:false,style:{display:"none"}},
        {isSelect:false,style:{display:"none"}},
        {isSelect:false,style:{display:"none"}},
      ]
    }
  },
  methods: {
    changeState(n){
      if(this.isChange==n){      
        this.num+=1;
        if(this.num%2==0){
          this.currentIndex[n].isSelect=false;
          this.currentIndex[n].style.display="none"
        }else{
          this.currentIndex[n].isSelect=true;
          this.currentIndex[n].style.display="block";
        }
        return;
      }
      this.num=1;
      this.isChange=n;
      for(var i=0;i<this.currentIndex.length;i++){
        if(i===n){
          // if(this.t!=n){
            this.currentIndex[i].isSelect=true;
            this.currentIndex[i].style.display="block";
          // }else{
          //   this.currentIndex[i].isSelect=false;
          //   this.currentIndex[i].style.display="none";
          // }
        }else{
          this.currentIndex[i].isSelect=false;
          this.currentIndex[i].style.display="none";
        }
      }
      // console.log(t);
    }
  },
  components:{
    "mfwheader":Header,
    "mfwfooter":Footer
  }
}
</script>
<style lang="scss" scoped>
a{
  color:#666;
}
.com{
  width:1000px;
  margin:15px auto;
}
.com-aside{float:left;width:260px;}
.com-aside>ul>li{
  font-size:14px;
  color:#666;
  height:40px;
  padding:0px 5px;
  border:1px solid #d5d5d5;
  line-height:40px;
}
.com-aside>ul>li+li{
  border-top:none;
}
.aside_img{
  margin-top:10px;
  height:40px;
  border:2px solid #FFA800;
  line-height:40px;
}
.aside_img>span{
  width:36px;height:36px;
  display:inline-block;
  background:url("../../../../public/img/mfw/list/search.png") no-repeat;
}
.aside_img>input{
  float: left;
  font-size:12px;
  margin-left:10px;
  margin-top:2px;
  width:206px;
  height:30px;
  line-height:40px;
  padding:3px 0px;
  border:0;
  background:0;
  outline:none;
}
.aside_load{
  margin-top:20px;height:50px;
  padding-bottom: 70px;
  border-bottom:1px solid #e5e5e5;
}
.aside_load::after{
  display:block;
  content:"";
  clear:both;
}
.aside_load>a{float: left;}
.aside_load>a>img{
  width:50px;height:50px;
}
.aside_load>div{
  height:50px;
  float: left;
  margin-left:20px;
  text-align: center;
}
.aside_load>div>a>p{
  font-size:16px;color:#ff8a00;
  margin-bottom:5px;
}
.aside_load>div>a>span{
  font-size:14px;color:#333;
}
.aside_load>div>a:hover{
  text-decoration:none;
}
.carousel{
  width:700px;height:340px;
  float:left;
  margin-left:40px;
}
.carousel-indicators li{
  width:0.8rem;height:0.8rem;
  background-color:#fff;margin-left:0.4rem;
  margin-right:0.4rem;border-radius: 50%;
}
.carousel-indicators .active{
  background-color: #0aa1ed;
}
.listBody{margin-top:50px;}
.body-aside{
  width:160px;
  float: left;
}
.body-aside>div:first-child{
  font-size:16px;
  height:50px;
  line-height:50px;
  border-bottom:1px solid #e5e5e5;
}
.cd{
  height:40px;
  display:flex;
  margin-top:10px;
  border-bottom:1px solid #e5e5e5;
  line-height:40px;
  position:relative;
  li{
    cursor: pointer;
    div{
      cursor: default;
      a:hover{
        color:#ff9d00;
      }
    }
  }
}
.cd>li+li{
  margin-left:4px;
}
.cd>li>span{
  float:right;
  margin-top:-20px;
  margin-left:5px;
  border-left:4px dashed transparent;
  border-top:4px solid #999;
  border-right:4px dashed transparent;
}
.drop-top{
  display:none;
  position:absolute;
  z-index:1;
  margin-top:10px;
  width:452px;
  padding:20px;
  background-color:#fff;
  border:1px solid #e5e5e5;
  line-height:30px;
  .inner{
    ul{
      display:flex;
      flex-flow:row wrap;
      li{
        margin:0 15px;
        a{
          font-size:14px;
        }
      }
      li::before{
        display: inline-block;
        margin: 8px 12px 0 -15px;
        width:1px;height:13px;
        background-color: #eee;
        content: "";
      }
    }
  }
}
.active{
  color: #ff9d00;
  border-bottom: 3px solid #ff9d00;
}
.activeI{
  border-top:4px solid #ff9d00 !important;
}
.breadcrumb-item + .breadcrumb-item::before {
  display: inline-block;
  padding-right: 5px;;
  padding-left: 0px;;
  color: #6c757d;
  content: "|";
}
.body-aside>div:nth-child(4){
  width:130px;
  font-size:12px;color:#666;
  text-align:center;
}
.load{
    height: 24px;
    width: 130px;
    background: #EBEBEB;
    border-radius: 30px;
    margin-top: 5px;
    position: relative;
    line-height:24px;
    span{
      float:left;
      width:24px;height:24px;
      background:url("../../../../public/img/mfw/list/xiazai.png") no-repeat;
    }
}
.md{
  margin-top:10px;
}
.md>li{
  padding:15px 0;
  a:hover{
    color:#ff9d00;
  }
}
.md li+li{
  border-top:1px solid #e5e5e5;
  font-size:14px;
}
.download{
  width:130px;
  margin-right:40px;
  font-size:12px;
  text-align: center;
}
.md>li>span{
  font-size:18px;font-weight:bold;
  color:#ff8a00;margin-right:10px;
}
.section{
  width:790px;
  float: right;
}
.section>div:first-child{
  font-size:20px;
  height:50px;
  line-height:50px;
  border-bottom:1px solid #e5e5e5;
}
.content{
  margin-bottom:16px;
  color:#666;
}
.feed-item{
  padding: 20px 0;
  font-size: 14px;
  line-height: 24px;
  a{
    text-decoration: none;
    .top1{
      float: left;
      line-height:20px;
      strong{
        margin-left:5px;
        color:#ff8a00;
        font-weight:normal;
      }
    }
    .top2{
      float: right;
      line-height:30px;
      font-size:14px;
      padding:0 15px;
      border:1px solid #ff8a00;
      border-radius:15px;
      span{
        margin-left:5px;
      }
      i{
        margin-left:5px;
      }
    }
    .title{
      font-size:20px;
      color:#333;
      margin-bottom:15px;
    }
    dl{
      display:flex;
      dd{
        margin-left:24px;
        .content{
          margin-bottom:16px;
          padding-top:10px;
          height:102px;
          color:#666;
        }
        .user{
          float: right;
          font-size:12px;
          color:#999;
          line-height:22px;
          .uname{
            color:#ff8a00;
            margin-right:5px;
            img{
              margin-right:5px;
              width:16px;height:16px;
              border-radius:50%;
              overflow: hidden;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }
}
.feed-item:hover{
    background-color:#f8f8f8;
    padding: 21px 15px 20px;
    margin: -1px -15px 0;
    .title{
      color:#ff9d00;
    }
  }
.hr{
  margin-top:20px;
  height:1px;
  background-color:#e5e5e5;
  overflow: hidden;
}
.imgs{
  li{
    float: left;
    margin-right:15px;
  }
  .lL{
    width:auto;
    float: right;
    margin-right:0;
    line-height:130px;
    font-size:12px;
    color:#999;
  }
}
</style>