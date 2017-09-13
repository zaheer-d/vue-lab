import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueHighlightJS from 'vue-highlight.js'
import VueRouter from 'vue-router'
import { routes } from './routes'
import 'highlight.js/styles/monokai-sublime.css';
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.use(VueHighlightJS)
Vue.use(VueResource)

Vue.material.registerTheme({
    default: {
        primary: {
            color: 'green',
            hue : 600
        },
        accent: 'red'
    },
    teal: {
        primary: 'blue',
        accent: 'pink'
    },
    purple: {
        primary: {
            color: 'green',
            hue: 800
        },
    }
})




const router = new VueRouter({
    routes
})


new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
