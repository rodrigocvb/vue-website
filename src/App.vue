<template>
  <div id="app">
    <Menu/>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HelloI18n/>
    <Switcher/>
    <router-link to="/foo">Go to Foo</router-link>
    <p>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloI18n from "./components/HelloI18n";
import Menu from "./components/Menu";
import Switcher from "./components/Switcher";

export default {
  name: 'app',
  components: {
    HelloWorld,
    HelloI18n,
    Menu,
    Switcher
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
