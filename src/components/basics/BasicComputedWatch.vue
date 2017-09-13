<template>
    <div>
        <md-card>
            <md-card-area>
                <md-card-header>
                    <h1 class="md-title">Computed and Watched</h1>
                </md-card-header>
            </md-card-area>
            <md-card-content>
                <md-whiteframe md-elevation="2">
                    <highlight-code lang="javascript">{{ sourceCode }}</highlight-code>
                </md-whiteframe>
            </md-card-content>
        </md-card>
        <br>
        <md-card>
            <md-card-header>
                <h2 class="md-title">Results</h2>
            </md-card-header>
            <md-card-content>
                <h3>{{ message }}</h3>
                <h3> {{ reverseMe }} </h3> <br>
                <hr>
                <h2>{{ asyncData.answer }}</h2>
                <img :src="asyncData.image" />
            </md-card-content>
            <md-card-actions>
                <md-button class="md-raised" @click.native="runMe">Fetch Data</md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                asyncData : '',
                message : 'Vue is awesome!',
                sourceCode: 'new Vue({ \n'+
                ' el : "#app", \n'+
                ' data : { \n'+
                '    message : "Vue is awesome!" \n'+
                ' }, \n'+
                ' computed : { \n'+
                '    reverseMe(){ \n'+
                '      return this.message.split(\'\').reverse().join(\'\') \n'+
                '    } \n'+
                ' }, \n'+
                '})'
            }
        },
        computed:{
            reverseMe : function(){
                return this.message.split('').reverse().join('');
            }
        },
        watch:{
           asyncData: function(){
                runMe();
           }
        },
        methods: {

          runMe(){
                  var vm = this;
                  this.$http.get('https://yesno.wtf/api').then(response => {

                    // get body data
                    vm.asyncData = response.body;
                    console.log("HTTP -----> "+response.body);

                  }, response => {
                    // error callback
                  });
        }
        }

    }


</script>