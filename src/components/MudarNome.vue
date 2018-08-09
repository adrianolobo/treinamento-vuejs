<template>
  <div class="block-name__element-name_mod-name_var">
    {{ value }}
    <button type="button" @click="mudarNome" name="button">
      mudar nome
    </button>
  </div>
</template>
<style>
</style>

<script>

export default {
  components: {
  },
  props: {
    value: String,
  },
  data() {
    return {
    };
  },
  methods: {
    mudarNome() {
      this.$emit('update:value', 'Leo');
    },
  },
  computed: {
  },
  created() {
  },
};
</script>
