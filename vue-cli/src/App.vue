<template>
  <div class="container">
    <HeaderVue title="Task Trakr" ></HeaderVue>
    <AddTask :tasks="tasks" @add-task="handleAddTaks" />
    <TasksVue :tasks="tasks" @delete-task="handleDelete" @toggle-div="handleToggle" />
  </div>
</template>

<script>
import HeaderVue from './components/HeaderVue.vue'
import TasksVue from './components/TasksVue.vue'
import AddTask from './components/AddTask.vue'
 
export default {
  name: 'App',

  data() {
    return {
      tasks: []
    }
  },

  created() {
    this.tasks = [
        { id: 1, text: 'Doctor Appointment', day: 'March 1st at 2:30pm', reminder: true },
        { id: 2, text: 'Meeting at School', day: 'March 3rd at 1:30pm', reminder: true },
        { id: 3, text: 'Food Shopping', day: 'March 3rd at 11:00am', reminder: false }
    ]
  },

  components: {
    HeaderVue,
    TasksVue,
    AddTask
  },

  methods: {
    handleDelete(e) {
      if (confirm('Delete Task?')) {
        const index = (this.tasks.indexOf((this.tasks.filter(t => t.id === e)[0])));      
        this.tasks.splice(index, 1)
      }
    },
    handleToggle(e) {
      const index = (this.tasks.indexOf((this.tasks.filter(t => t.id === e)[0])));
      this.tasks[index].reminder = !this.tasks[index].reminder
    },
    handleAddTaks(e) {
      this.tasks.push(e)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
