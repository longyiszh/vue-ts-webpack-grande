<template>
  <section id="app">
    
    <main class="router">
      <router-view></router-view>
    </main>

  </section>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'app'
})
export default class App extends Vue {
  
}
</script>
