<template>
  <div id="app">
    <router-view name="header"></router-view>
    <main>
      <fade-transition origin="center" mode="out-in" :duration="250">
        <router-view />
      </fade-transition>
    </main>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { FadeTransition } from "vue2-transitions"

export default {
  components: {
    FadeTransition,
  },
};
</script>

<style>
  @import './assets/css/main.css';
</style>