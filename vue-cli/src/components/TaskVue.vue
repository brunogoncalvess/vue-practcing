<template>
  <div @dblclick="() => onToggleDiv(task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
    <h3>{{ task.text }} 
     <span @click="() => onDelete(task.id)">&times;</span>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
  export default {
    name: 'TaskVue',

    props: {
      task: Object
    },

    methods: {
      onDelete(id) {
        this.$emit('delete-task', id)
      },
      onToggleDiv(e) {
        this.$emit('toggle-div', e)
      }
    }
  }
</script>

<style scope>
  span {
    color: red;
  }

  .task {
    background: #f4f4f4;
    padding: 10px;
    margin-bottom: 5px;
    cursor: pointer;
  }

  .task.reminder {
    border-left: 3px solid green;
  }

  .task h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>