import { createRouter, createWebHistory} from 'vue-router'
import home from './views/home.vue';
import countries from '/views/countries/index.vue';


export default createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/',
        component: home
        },
        {
            
        }
    ]
})