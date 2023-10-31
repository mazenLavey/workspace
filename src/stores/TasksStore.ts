import { reactive } from "vue";
import { defineStore } from "pinia";
import type { TaskType } from "@/types/tasksType";
import { nanoid } from "nanoid";

type TasksStateType = {
    activeTasks: TaskType[],
    deletedTasks: TaskType[]
}

// export const useTasksStore = defineStore("tasksStore", () => {
//     const tasksState: TasksStateType = reactive({
//         activeTasks: [],
//         deletedTasks: []
//     })

//     const addNewTask = (value: string) => {
//         console.log(value)
//         const newTask: TaskType = {
//             id: nanoid(),
//             created_at: new Date().getTime(),
//             text: value,
//             status: "active"
//         }

//         tasksState.activeTasks.push(newTask)
//     }

//     const toggleTaskStatus = (taskId: string) => {
//         tasksState.activeTasks = tasksState.activeTasks.map(el => {
//             if (el.id === taskId) {
//                 return {
//                     ...el,
//                     status: el.status === "active" ? "done" : "active"
//                 }
//             } else {
//                 return el
//             }
//         })
//     }

//     const deleteTask = (taskId: string) => {
//         const updatedList = tasksState.activeTasks.filter(el => el.id !== taskId);
//         tasksState.activeTasks = updatedList;
//     }

//     const editTask = (taskId: string) => {
//     }

//     return {
//         activeTasks: tasksState.activeTasks,
//         deletedTasks: tasksState.deletedTasks,
//         addNewTask,
//         toggleTaskStatus,
//         deleteTask,
//         editTask
//     }
// })

export const useTasksStore = defineStore("tasks", {
    state: () => reactive({
        activeTasks: [],
        deletedTasks: []
    } as TasksStateType),
    actions: {
        addNewTask(value: string) {
            const newTask: TaskType = {
                id: nanoid(),
                created_at: new Date().getTime(),
                text: value,
                isCompleted: false,
                status: "active"
            }

            this.activeTasks.push(newTask);
        },
        toggleTaskStatus(taskId: string) {
            this.activeTasks = this.activeTasks.map(el => {
                if (el.id === taskId) {
                    return {
                        ...el,
                        status: el.status === "active" ? "done" : "active"
                    }
                } else {
                    return el
                }
            });
        },
        deleteTask(taskId: string) {
            const targetedTask = this.activeTasks.find(el => el.id === taskId)
            const updatedList = this.activeTasks.filter(el => el.id !== taskId);
            this.activeTasks = updatedList;

            if (targetedTask) {
                targetedTask.status = "deleted"
                this.deletedTasks.push(targetedTask)
            }
        },
        editTask(taskId: string, newValue: string) {
            const taskIndex = this.activeTasks.findIndex(el => el.id === taskId)
            this.activeTasks[taskIndex].text = newValue;
        },
        handleComplete(taskId: string, status: boolean) {
            const taskIndex = this.activeTasks.findIndex(el => el.id === taskId)
            this.activeTasks[taskIndex].isCompleted = status;
        }
    },
    getters: {
        allActiveTasks: state => state.activeTasks,
        allDeletedTasks: state => state.deletedTasks,
    }
});