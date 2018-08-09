<template>
  <div class="">
    <ul class="menu">
      <li v-for="item in lista" v-bind:key="item">
        {{ item }}
      </li>
    </ul>
    <input
      type="text"
      v-model="listItem"
    >
    <button @click="changeList">
      add Lista
    </button>
  </div>
</template>
<style scoped>

</style>

<script>

export default {
  components: {
  },
  props: {
    lista: Array,
  },
  data() {
    return {
      listItem: '',
    };
  },
  methods: {
    changeList() {
      this.$emit('add-item', this.listItem);
    },
  },
  computed: {
  },
  created() {
  },
};
</script>
