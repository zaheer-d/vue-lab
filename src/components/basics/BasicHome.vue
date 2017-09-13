<template>
    <div class="container">
        <md-layout md-gutter="24">
            <md-layout md-column md-flex="25">
                <div class="menu__left">
                    <basic-list></basic-list>
                </div>
            </md-layout>
            <md-layout md-column>
                <div class="content__right">
                    <transition name="slide-fade" mode="out-in">
                        <router-view name="tutorial"></router-view>
                    </transition>
                </div>
            </md-layout>
        </md-layout>
    </div>
</template>
<script>
    import BasicList from './BasicList.vue'
    import BasicLoops from './BasicLoops.vue'
    import BasicConditional from './BasicConditional.vue'
    import {EventBus} from  '../../events'

    export default{
        data(){
            return {
              viewName : 'BasicLoops'
            }
        },
        components :{
            BasicList,
            BasicLoops,
            BasicConditional
        },
        created : function(){
            EventBus.$on('OnViewChange', (view) =>{
           //     this.viewName = view;
            //    console.log('created method');
            })
        }
    }

</script>
<style>
   .container{

        width:90%;
   }

    .menu__left{
        width:100%;
        float:left;
        margin : 1rem;
        height:100%;
    }

    .content__right{

        margin : 1rem;
        width:100%;
        height:100%;
    }

   /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
      transition: all .3s ease;
    }
    .slide-fade-leave-active {
      transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for <2.1.8 */ {
      transform: translateY(30px);
      opacity:0;
    }

</style>