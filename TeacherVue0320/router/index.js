import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import News from '../views/News.vue';
import Products from '../views/Products.vue'

const router=createRouter({

    //import.meta.env.BASE_URL ,提供應用程序的基本的URL
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {path:'/',name:'home',component:Home},
        {path:'/about',name:'about',component:About},
        {path:'/news',news:'news',component:News},
        {path:'/products',name:'products',component:Products}
    ]
});

export default router;

