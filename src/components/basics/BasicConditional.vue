<template>
    <div>
        <md-card>
            <md-card-area>
                <md-card-header>
                <h1 class="md-title">Conditionals with v-if and v-else</h1>
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
                <p v-if="result === 'true'">Hey im True</p>
                <p v-else>Hey im False</p>
            </md-card-content>
            <md-card-actions>
                <md-radio v-model="result" name="my-test-group6" md-value="true">True</md-radio>
                <md-radio v-model="result" name="my-test-group6" md-value="false">False</md-radio>
            </md-card-actions>
        </md-card>
    </div>
</template>
<script>
    export default{
        name : 'BasicConditional',
        data(){
            return {
                result : 'true',
                sourceCode: '<p v-if="result === true">Hey im true</p> \n \n' +
                '<p v-else>Hey im false</p> \n \n'
            }

        }

    }


</script>