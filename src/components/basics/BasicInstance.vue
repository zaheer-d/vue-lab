<template>
    <div>
        <md-card>
        <md-card-area>
            <md-card-header>
                 <h1 class="md-title">The Vue() Instance.</h1>
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
          <h3> {{ message }} </h3>
        </md-card-content>
            <md-card-actions>
                <md-button @click.native="onClick()" class="md-raised md-accent">Click Me</md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>
<script>
    export default{
        name : 'BasicInstance',
        data(){
            return {
                message : '',
                sourceCode: 'new Vue({ \n'+
                ' el : "#app", \n'+
                ' data : { \n'+
                '    message : "" \n'+
                ' }, \n'+
                ' methods : { \n'+
                '    onClick(){ \n'+
                '       this.message = "Hello World" \n'+
                '    } \n'+
                ' }, \n'+
                '})'
            }

        },
        methods:{
            onClick(){
                this.message = 'Hello World';
            }
        }

    }
</script>