<template>
  <div class="block-name__element-name_mod-name_var">
    User name: {{ user.name }}
    <br>
    <input type="text" @input="setUserNameLocal" :value="user.name">
  </div>
</template>

<style>
</style>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
  },
  props: {},
  data() {
    return {
      userName: 'Adriano',
    };
  },
  methods: {
    setUserNameLocal(event) {
      this.setUserName(event.target.value);
    },
    ...mapActions(['setUserName']),
  },
  computed: {
    ...mapGetters(['user']),
  },
};
</script>
