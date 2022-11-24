<template>
  <v-card 
    class="card" 
    :title="props.user.name" 
    :text="props.user.email" 
    variant="tonal"
  ></v-card>
</template>

<script setup>
const props = defineProps(['user'])
</script>

<style scoped>
  .card {
    margin: 10px;
  }
</style>