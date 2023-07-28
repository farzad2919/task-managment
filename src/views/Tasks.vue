<template>
<div>
  <i class='bx bx-loader-alt bx-spin loading' v-show="loading"></i>
  <div class="conteiner" v-show="!loading">
      <Header class="conteiner__header"></Header>
      <createTask></createTask>
      <filterTask></filterTask>
      <div class="conteiner__show-tasks" >
        <div v-for="task in allTasksGetters" :key="task.id" class="conteiner__card" :class="{'done-task' :task.completed }">
          <s v-if="task.completed" >{{ task.title }}</s>
          <p v-else > {{ task.title }} </p>
          <div>
            <i v-if="!task.completed" @click="updateTask(task)" class='bx bx-check'></i>
            <i v-else class='bx bx-check-double' @click="updateTask(task)"></i>
            <i @click="deleteTask(task)" class='bx bxs-trash'></i>
            <!-- <i class='bx bx-loader-alt bx-spin' v-show="smallLoading"></i> -->
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import Header from "../components/Header.vue";
import filterTask from "../components/filterTask.vue";
import createTask from "../components/CreateTask.vue";
import { computed , ref } from "vue";
import { getTodos } from "../stores/counter.js";
const apiTasks = getTodos();

export default{
    name : "Tasks" ,
    components : {
      Header,
      filterTask,
      createTask,
    },

    setup(){
      const allTasksGetters = computed(()=>apiTasks.allTasksCounter)
      const loading = ref(false)
      const smallLoading = ref(false)
      
      async function getTasks (){
        loading.value = true
        await apiTasks.fetchAllTasks()
        loading.value = false
      };
      getTasks()

      async function updateTask(task) {
        smallLoading.value = true
        await apiTasks.changeTask(task)
        smallLoading.value = false
      }

      async function deleteTask(task) {
        smallLoading.value = true
        apiTasks.deleteTaskCounter(task)
        smallLoading.value = false
      }

      return{
        allTasksGetters ,
        loading ,
        smallLoading ,
        getTasks ,
        updateTask ,
        deleteTask ,
      }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_vars.scss';
@import '../assets/scss/_mixins.scss';
.conteiner{
  position: absolute;
  top: 80px;
  background-color:$bodyColor;
  width: 100%;
  min-height: 100vh;

  &__header{
    position: fixed;
    top: 0px;
  }

  &__show-tasks{
    padding: 20px;
    @include flex-direction();
    flex-wrap: wrap;
    gap: 20px;
  }
  &__card{
    @include flex-direction();
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border-radius: 10px;
    gap: 5px;
    width: fit-content;
    height: fit-content;
    background-color:$secendColor;
    width: 300px;
    height: 70px;
    font-size: 14px;
    p{
      padding-right: 20px; 
    }
    div:not([class]){
      @include flex-direction();
      gap: 5px;
    }
  }
}
.loading{
  font-size: 60px;
  align-self: center;
  position: absolute;
  top: 40vh;
  left: 50vw;
}
.done-task{
  background-color: $doneTask;
}
</style>
  
  