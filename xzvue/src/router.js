import Vue from 'vue'
import Router from 'vue-router'
// 蜂鸟网站
import fnHeader from './components/fn/common/header.vue'
import fnFooter from './components/fn/common/footer.vue'
import fnIndex from './components/fn/html/index.vue'

// 马蜂窝旅游网
import mfwHeader from './components/mfw/common/header.vue'
import mfwFooter from './components/mfw/common/footer.vue'
import mfwIndex from './components/mfw/view/index.vue'
import mfwLogin from './components/mfw/view/login.vue'
import mfwRegister from './components/mfw/view/register.vue'
import mfwDetail from './components/mfw/view/detail.vue'
import mfwList from './components/mfw/view/list.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:mfwIndex},
    {path:"/mfwList",component:mfwList},
    {path:"/mfwDetail",component:mfwDetail},
    {path:"/mfwRegister",component:mfwRegister},
    {path:"/mfwLogin",component:mfwLogin},
    {path:"/mfwheader",component:mfwHeader},
    {path:"/mfwfooter",component:mfwFooter},
    {path:"/mfwIndex",component:mfwIndex},
  ]
})
