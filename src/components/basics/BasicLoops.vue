<template>
    <div>
        <md-card>
            <md-card-area>
                <md-card-header>
                    <h1 class="md-title">Lists with v-for</h1>
                </md-card-header>
            </md-card-area>
            <md-card-content>
                <md-whiteframe md-elevation="2">
                    <highlight-code lang="html">{{ sourceCode }}</highlight-code>
                </md-whiteframe>
            </md-card-content>
        </md-card>
        <br>

        <md-card>
            <md-card-header>
                <h2 class="md-title">Results</h2>
            </md-card-header>
            <md-card-content>

                <md-list>
                    <md-list-item v-for="i in items">{{ i }}</md-list-item>
                </md-list>


            </md-card-content>
        </md-card>
    </div>
</template>
<script>
    export default{
        name : 'BasicLoops',
        data(){
            return {
                items: ['Superman', 'Batman', 'Joker', 'Night-wing', 'Two Face', 'Robin'],
                sourceCode: '<ul> \n' +
                '   <li v-for="i in items"> {{i}} </li> \n' +
                '</ul> \n'
            }

        }
    }

</script>