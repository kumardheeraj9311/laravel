import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload)


function lazyView(view) {
    return () => import(`./components/${view}.vue`)
}


const routes = [
    {
        path: '/', component: lazyView('Dashboard'), name: 'Dashboard'
    },
    {
        path: '/product', component: lazyView('Product'), name: 'Product'
    },
    {
        path: '/product/new', component: lazyView('ProductNew'), name: 'ProductNew'
    },
    {
        path: '/product/edit/:productid', component: lazyView('Productview'), name: 'Productview'
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router;