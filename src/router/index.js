import { createMemoryHistory, createRouter } from 'vue-router'

import ProductList from './../pages/ProductList.vue'
import OrderList from './../pages/OrderList.vue'
import HomePage from './../pages/HomePage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/products', component: ProductList },
    { path: '/create-order', component: ProductList },
    { path: '/orders-list', component: OrderList },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})