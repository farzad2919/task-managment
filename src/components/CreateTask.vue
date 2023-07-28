<template>
<div  class="create-task" >
    <h3>create Task : </h3>
    <div>
        <input type="text" v-model="newTask">
        <button @click.prevent="createTask">create <i class='bx bx-loader-alt bx-spin loading' v-show="loading"></i></button>
    </div>
    <div class="error" >{{ errorText }}</div>
</div>
</template>

<script>
import { ref } from "vue";
import { getTodos } from "../stores/counter.js";
const store = getTodos();

export default {
    name : "createTasks" ,
    setup() {
        const newTask = ref("")
        const errorText = ref("")
        const loading = ref(false)

        async function createTask(){
            if (newTask.value) {
                loading.value = true
                await store.addTask({
                    title : newTask.value,
                    completed : false
                })
                loading.value = false
            }else{
                errorText.value = "title is required"
            }
        }
        return{
            newTask ,
            errorText ,
            loading ,
            createTask ,
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_vars.scss';
@import '../assets/scss/_mixins.scss';
.create-task{
    padding: 10px 20px;
    @include flex-direction(column);
    // gap: 10px;
    border-bottom: 1px solid gray; 
    h3{
        font-size: 26px;      
    }
    div:not([class]) {
        @include flex-direction();
        gap: 15px;
        input{
            border-radius: 10px;
            width: 300px;
            padding: 15px 15px;
            background-color:$secendColor;
        }
        button{
            padding: 8px 25px;
            border-radius: 10px;
            color: white;
            background-color: $secendHeader;
            &:hover{
                cursor: pointer;
            }
        }
    }
}
.error{
    color: $errorColor;
    font-size: 12px;
}
</style>
