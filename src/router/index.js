
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入自己再pages里声明的四个组件
import MSite from '../pages/MSite/MSite.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/order.vue'
import login from '../pages/login/login.vue'



//声明使用插件
/*
路由器对象,向外暴露路由器
*/

Vue.use(VueRouter)
//向外暴露一个路由
export default new VueRouter({
    //所有的路由
    routes:[
        //所有的路由即为对象属性,有两个属性
         {
            
             path:'/',
             redirect:'/msite'
         },
         {
            path:'/profile',
            component:Profile,
            meta:{
               showFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFooter:true
             }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooter:true
             }
        },
        {
            //默认显示再第一个的内容
            path:'/msite',   
            component:MSite,
            meta:{
                showFooter:true
             }
        },
        {
           
            path:'/login',
            component:login
        }



    ]
})
