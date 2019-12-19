<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body{
  min-width:1000px;
  font-family:Arial,"Lucida Grande","Microsoft Yahei","Hiragino Sans GB","Hiragino Sans GB W3",SimSun,"PingFang SC",STHeiti;
  overflow-x:hidden ;
}
/*一级容器定宽居中*/
body>.container{
  width:1000px;
  min-width:1000px;
  margin:0 auto;
}
/* .clearfix:after{
  display: block;
  content: "";
  height: 0;
  clear: both;
  visibility: hidden;
} */
ul,li,p,dd,dl{
  list-style: none;
  padding:0;
  margin:0;
}
</style>
