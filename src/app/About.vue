<template>
  <div class="block-name__element-name_mod-name_var">
    <br>
    <router-view></router-view>
  </div>
</template>
<style>
</style>

<script>

export default {
  components: {
  },
  props: {
    teste: String,
  },
  data() {
    return {
    };
  },
  methods: {
  },
  computed: {
  },
  created() {
  },
  beforeRouteEnter (to, from, next) {
    console.log('ABOUT ROUTE');
    next();
  }
};
</script>
