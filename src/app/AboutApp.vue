<template>
  <div class="block-name__element-name_mod-name_var">
    App: Treinamento
    <br>
    ID: {{ appId }}
  </div>
</template>
<style>

</style>

<script>

export default {
  components: {
  },
  props: {},
  data() {
    return {
    };
  },
  methods: {
  },
  computed: {
    appId() {
      return this.$route.params.id;
    },
  },
  created() {
    console.log(this.$route.params.id);
  },
};
</script>
