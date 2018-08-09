<template>
  <div id="app">
    <router-link :to="{ name: 'AboutUser' }">
      About
    </router-link>
    <router-link :to="{ name: 'HelloWorld' }">
      HelloWorld
    </router-link>
    <router-link :to="{ name: 'AboutApp', params: { id: 65464 } }">
      AboutApp
    </router-link>
    ------- Usuário: {{ user.name }}
    <br>
    ----------------------------------------------------------------------------
    <br>
    <transition name="fade" mode="out-in">
      <router-view teste="ROUTER PROP"/>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      imgSrc: '/static/logo.png',
    };
  },
  computed: {
    ...mapGetters(['user']),
  },
};
</script>

<style>
.router-link-exact-active {
  color: red
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
