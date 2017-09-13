/**
 * Created by Zaheer on 11 Mar 2017.
 */
import BasicHome from './components/basics/BasicHome.vue'
import BasicList from './components/basics/BasicList.vue'
import Home from './components/Home.vue'
import BasicLoops from './components/basics/BasicLoops.vue'
import BasicConditional from './components/basics/BasicConditional.vue'
import BasicInstance from './components/basics/BasicInstance.vue'
import BasicForm from './components/basics/BasicForm.vue'
import BasicComputedWatch from './components/basics/BasicComputedWatch.vue'
export const routes = [
    {
        path : '/',
        component : Home
    },
    {
        path : '/basics',
        component: BasicHome,
        children:[
            {
                path : 'loops',
                components: {
                    default : BasicList,
                    tutorial: BasicLoops
                }
            },
            {
                path : 'conditional',
                components: {
                    default : BasicList,
                    tutorial: BasicConditional
                }
            },
            {
                path : 'instance',
                components: {
                    default : BasicList,
                    tutorial: BasicInstance
                }
            },
            {
                path : 'forms',
                components: {
                    default : BasicList,
                    tutorial: BasicForm
                }
            },
            {
                path: 'compwatch',
                components: {
                    default: BasicList,
                    tutorial: BasicComputedWatch
                }
            }

        ]
    }
]