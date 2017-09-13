<template>
  <div id="app">
      <app-header></app-header>
        <div class="mainContent">
        <router-view ></router-view>
      </div>
  </div>
</template>

<script>
import HomeCard from './components/home.vue'
import Header from './components/Header.vue'
export default {
  name: 'app',
  components : {
    'home-card' : HomeCard,
    'app-header' : Header
  }
}
</script>
<style>
  .mainContent{
    height: 100%;
    margin-top : 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>


