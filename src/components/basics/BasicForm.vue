<template>
    <div>
        <md-card>
            <md-card-area>
                <md-card-header>
                    <h1 class="md-title">Forms</h1>
                </md-card-header>
            </md-card-area>
            <md-card-content>

                    <form novalidate @submit.stop.prevent="submit">
                        <md-input-container>
                            <label>Required</label>
                            <md-input v-model="requiredText" required @keyup.native.enter="showMe"></md-input>
                        </md-input-container>

                        <md-input-container :class="{ 'md-input-invalid' : !isValid }">
                            <label>Error</label>
                            <md-input required></md-input>
                        </md-input-container>

                        <md-input-container :class="{ 'md-input-invalid' : !isValid }">
                            <label>Error with message</label>
                            <md-input required></md-input>

                            <span class="md-error">Validation message</span>
                        </md-input-container>

                    </form>

            </md-card-content>

            <md-card-actions>
                <md-button @click.native="toggleValidation">Validate</md-button>
                <md-button class="md-raised md-accent">Save</md-button>
            </md-card-actions>
        </md-card>

    </div>
</template>
<script>
    export default{
        name : 'BasicForm',
        data(){
            return {
                requiredText : '',
                isValid : true,
                items: ['Superman', 'Batman', 'Joker', 'Night-wing', 'Two Face', 'Robin']

            }

        },
        methods:{
            toggleValidation(){
                this.isValid = !this.isValid;
            },
            showMe(){
               alert(this.requiredText);
            }
        }

    }


</script>