import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

export const getTodos = defineStore('todo', {
    state : () => {
      return {
      tasks : [],
      }
    },

    getters : {
        allTasksCounter (state){
            return state.tasks
        }
    },

    actions : {
        async fetchAllTasks() {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
                const responseData = await response.json();
                this.tasks = responseData;
            } catch (error) {
                Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
                })
            }
        },

        async filterTasks(number) {
            try {
                const Response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${number}`)
                const ResponseData = await Response.json();
                this.tasks = ResponseData;
            } catch (error) {
                Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
                })
            }
        },

        async addTask(newtask) {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos` , {
                    method : 'POST' ,
                    body: JSON.stringify({
                        userId : 1,
                        title : newtask.title,
                        completed : newtask.completed,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                const responseData = await response.json();
                this.tasks.unshift(responseData)
                Swal.fire({
                    title: 'Task added!',
                    icon: 'success',
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000,
                    toast: true,
                    position: "top",
                    })
            } catch (error) {
                Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
                })
            }

        },

        async changeTask(updatedTask) {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${updatedTask.id}` , {               
                    method: 'PUT',
                    body: JSON.stringify({
                    title: updatedTask.title ,
                    userId: updatedTask.userId ,
                    completed : !updatedTask.completed ,
                    }),
                    headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                // 6037 9982 5160 1984
                // 6568
                // 1406/10
                const responseData = await response.json()
                this.tasks.splice(responseData.id-1 , 1 , responseData)
                Swal.fire({
                    title: 'Task updated!',
                    icon: 'success',
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000,
                    toast: true,
                    position: "top",
                })
            } catch (error) {
                Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
                })
            }
        },
        async deleteTaskCounter(task) {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${task.id}`,{
                    method: 'DELETE'
                })
                this.tasks.splice(task.id-1 , 1)
                Swal.fire({
                    title: 'Task deleted!',
                    icon: 'success',
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000,
                    toast: true,
                    position: "top",
                    })
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                    })
            }

        }
    }
})




