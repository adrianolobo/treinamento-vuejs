<template>
  <div class="hello sm-4">
    <transition name="fade" mode="in-out">
      <span v-if="ativo">
        Ativo
      </span>
      <span v-if="!ativo">
        Inativo
      </span>
    </transition>
    <br>
    <button @click="toggle">
      toggle
    </button>
  </div>
</template>

<script>
import Panel from './Panel';

export default {
  components: {
    Panel,
  },
  name: 'HelloWorld',
  data() {
    return {
      ativo: false,
    };
  },
  computed: {
    nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  },
  methods: {
    toggle() {
      this.ativo = !this.ativo;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alert {
  color: red
}
.warning {
  color: orange
}
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
