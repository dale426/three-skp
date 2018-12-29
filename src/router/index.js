import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/show3d',
            name: 'Show3d',
            component: resolve => { require(['@/components/view/show3d.vue'], resolve) }
        }
    ]
})
