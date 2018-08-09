<template>
  <div class="" ref="container">
    {{ nome }}
    <mudar-nome
      :value.sync="nome"
    ></mudar-nome>
  </div>
</template>
<style>
</style>

<script>
import MudarNome from './MudarNome';

export default {
  components: {
    MudarNome,
  },
  props: {},
  data() {
    return {
      nome: 'Adriano',
    };
  },
  methods: {
  },
  computed: {
  },
  created() {
    console.log(this.$refs.container);
  },
  mounted() {
    console.log(this.$refs.container);
  },
};
</script>
