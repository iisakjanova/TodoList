import { ADD_TASK, DELETE_TASK, CHANGE_TASK_STATUS, EDIT_TASK } from "../constants/tasksConstants";

export const addTask = (task) => {
    return {
        type: ADD_TASK, 
        payload: task
    };
};

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK, 
        payload: id
    };
};

export const changeTaskStatus = (id) => ({type: CHANGE_TASK_STATUS, payload: id});
export const editTask = (task) => ({type: EDIT_TASK, payload: task});