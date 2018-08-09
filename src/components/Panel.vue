<template>
  <div class="panel">
    <h1>
      <slot name="titulo"></slot>
    </h1>
    <div
      class="conteudo"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style>
  .conteudo {
    border: 1px solid #000;
  }
</style>

<script>

export default {
  components: {
  },
  props: {
    titulo: String,
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
};
</script>
