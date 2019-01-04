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
            path: '/model-one',
            name: 'model-one',
            component: resolve => { require(['@/components/view/model-show/model-one.vue'], resolve) }
        },
        {
            path: '/model-two',
            name: 'model-two',
            component: resolve => { require(['@/components/view/model-show/model-two.vue'], resolve) }
        },
        {
            path: '/model-three',
            name: 'model-three',
            component: resolve => { require(['@/components/view/model-show/model-three.vue'], resolve) }
        },
        {
            path: '/advance-one',
            name: 'advance-one',
            component: resolve => { require(['@/components/view/advantage/advance-one.vue'], resolve) }
        },
        {
            path: '/advance-two',
            name: 'advance-two',
            component: resolve => { require(['@/components/view/advantage/advance-two.vue'], resolve) }
        },
        {
            path: '/advance-three',
            name: 'advance-three',
            component: resolve => { require(['@/components/view/advantage/advance-three.vue'], resolve) }
        }
    ]
})
