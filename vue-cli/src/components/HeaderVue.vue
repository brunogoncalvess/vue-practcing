<template>
  <header>
    <h1>{{ title }}</h1>
    <Button color="green">Add Task</Button>
  </header>
</template>

<script>
import Button from './ButtonVue.vue'

export default {
  name: 'HeaderVue',
  props: {
    title: {
      type: String,
      default: "Hello, World!"
    }
  },
  components: {
    Button
  }
}
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
</style>