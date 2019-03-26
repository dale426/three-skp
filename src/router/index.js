import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
Router.prototype.goBack = function () {
    this.isBack = true
    window.history.go(-1)
}

export default new Router({
    routes: [
        {
            path: '/',
            name: 'model-one-01',
            component: resolve => { require(['@/components/view/model-show/model-one.vue'], resolve) }
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
        },
        {
            path: '/advance-certificate',
            name: 'advance-certificate',
            component: resolve => { require(['@/components/view/advantage/advance-certificate.vue'], resolve) }
        },
        {
            path: '/advance-four',
            name: 'advance-four',
            component: resolve => { require(['@/components/view/advantage/advance-four.vue'], resolve) }
        },
        {
            path: '/advance-five',
            name: 'advance-five',
            component: resolve => { require(['@/components/view/advantage/advance-five.vue'], resolve) }
        },
        {
            path: '/applicable-disease',
            name: 'applicable-disease',
            component: resolve => { require(['@/components/view/user-effect/ApplicableDisease.vue'], resolve) }
        },
        {
            path: '/test',
            name: 'test',
            component: resolve => { require(['@/components/view/test.vue'], resolve) }
        }
    ]
})
