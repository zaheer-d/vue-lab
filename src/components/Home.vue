<template>
    <div class="home-container">
    <md-layout md-gutter="24">
        <md-layout md-column>
        <md-card >
            <md-card-header>
                    <div class="md-title">What is Vue</div>
            </md-card-header>
            <md-card-content>
                To get a rough idea of what Vue (pronounced “view”) does, think about it as the ‘V’ in an MV* pattern. If you’d like to compare it to something else, it’s probably closest to React but with a far lower barrier of entry. No need to learn something like JSX or pre-compile files just to give it a try. Drop it into your HTMLs header like any JS library, and you’re all set. Templating will probably look familiar to anyone who has worked with Angular or Mustache in the past.
            </md-card-content>
        </md-card>
        </md-layout>
        <md-layout md-column>

            <md-card>
                <md-card-header>
                    <div class="md-title">Its Focused</div>
                </md-card-header>
                <md-card-content>
                    Vue has a narrow use case: building user interfaces for the web. The creators know that there are already plenty of libraries out there to help you iterate arrays or handle promises and HTTP requests, so you won’t find any of that duplicated in Vue.
                    This focus allows Vue to avoid the bloat of other frameworks. But just as importantly, the minimal surface areas of its API allows its creators to focus more on improving Vue than maintaining it.
                </md-card-content>


            </md-card>
        </md-layout>
        <md-layout md-column>

            <md-card>
                <md-card-header>
                    <div class="md-title">Simplicity</div>
                </md-card-header>
                <md-card-content>
                    Even those with only a basic understanding of HTML and JS — perhaps designers and juniors on a team — can get a sense of how Vue code works. For more experienced developers, this simplicity allows immediate productivity.
                    If the success of jQuery is anything to go by, Vue’s standing as the simplest of the frameworks could take it a long way.
                </md-card-content>
            </md-card>
        </md-layout>
        <md-layout md-column>

            <md-card class="md-primary">
                <md-card-header>
                    <md-card-header-text>
                        <div class="md-title">{{ msg }}</div>
                        <div class="md-subhead">Created by Evan You</div>
                    </md-card-header-text>

                    <md-card-media md-big>
                        <img src="../assets/logo.png" alt="VueLogo">
                    </md-card-media>
                </md-card-header>

                <md-card-actions>
                    <router-link to="/basics"><md-button class="md-raised md-accent">Lets Go!</md-button></router-link>
                </md-card-actions>
            </md-card>
        </md-layout>
    </md-layout>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Vue.js'
    }
  }
}
</script>
<style scoped>
.md-card{
 height:100%;
}
    .home-container{
    margin:1.5rem;
    }
</style>

