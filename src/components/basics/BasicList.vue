<template>
    <md-card style="height:100%;">
        <md-card-area>
        <md-card-header md-theme="green">
                <h1 class="md-title">Whats on the menu</h1>
        </md-card-header>
        </md-card-area>
            <md-card-content>
                <div>
                    <md-list>
                        <md-list-item>
                            <router-link to="/basics/instance" active-class="md-accent" exact>Vue()</router-link>
                        </md-list-item>
                        <md-list-item>
                            <router-link to="/basics/loops" active-class="md-accent" exact>Lists</router-link>
                        </md-list-item>
                        <md-list-item>
                            <router-link to="/basics/conditional" active-class="md-accent" exact>Conditional
                            </router-link>
                        </md-list-item>
                        <md-list-item>
                            <router-link to="/basics/compwatch" active-class="md-accent" exact>Computed and Watched
                            </router-link>
                        </md-list-item>
                        <md-list-item>
                            <router-link to="/basics/forms" active-class="md-accent" exact>Forms</router-link>
                        </md-list-item>
                    </md-list>
                </div>
            </md-card-content>


    </md-card>
</template>
<script>
    import {EventBus} from '../../events';

    export default{
            methods: {
                ChangeViewClick(vn){
                    EventBus.$emit('OnViewChange', vn);
                    //EventBus.OnViewChange(vn);
                    console.log('------- ChangeViewClick '+vn);
                }
            }
    }

</script>
<style scoped>
 .reset{
    margin : 0;
    padding:0;

 }
</style>