<template>  
  <div v-for="task in tasks" :key="task.id">
    <TaskVue @delete-task="$emit('delete-task', task.id)" @toggle-div="$emit('toggle-div', task.id)" :task="task" />
  </div>
</template>

<script>
  import TaskVue from './TaskVue.vue'

  export default {
    props: {
      tasks: Array
    },

    components: {
      TaskVue
    },
    emits: ['delete-task', 'toggle-div']
  }
</script>