<template>
<div class="filter-task" >
    <h3>filter : </h3>
    <select @change="filter" v-model="filterNumber">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
    </select>
</div>
</template>

<script>
import { ref } from 'vue';
import { getTodos } from "../stores/counter.js";
const counterFilterTasks = getTodos();

export default {
    name : "filterTask" ,
    setup(){
        const filterNumber = ref("")
        
        async function filter() {
            await counterFilterTasks.filterTasks(filterNumber.value)
        }
        return{
            counterFilterTasks,
            filterNumber,
            filter,
        }
    }


    

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_vars.scss';
@import '../assets/scss/_mixins.scss';
.filter-task{
    padding: 10px 20px;
    @include flex-direction(column);
    gap: 5px;
    h3{
        font-weight: 500;
    }
    select{
        width: 100px;
        border-radius: 5px;
        background-color:$secendColor;
        padding: 5px;

    }
}
</style>
