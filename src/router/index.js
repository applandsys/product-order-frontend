import { createMemoryHistory, createRouter } from 'vue-router'

import ProductList from './../pages/ProductList.vue'
import OrderList from './../pages/OrderList.vue'
import HomePage from './../pages/HomePage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/products', component: ProductList },
    { path: '/orders', component: OrderList },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})