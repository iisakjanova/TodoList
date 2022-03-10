import { 
    GET_TASKS_REQUEST, 
    GET_TASKS_SUCCESS,
    GET_TASKS_FAILURE,
    CHANGE_TASK_STATUS_REQUEST,
    CHANGE_TASK_STATUS_SUCCESS,
    CHANGE_TASK_STATUS_FAILURE,
    UPDATE_TASK_SUCCESS,
    UPDATE_TASK_FAILURE,
    UPDATE_TASK_REQUEST,
    DELETE_TASK_REQUEST,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_FAILURE,
    ADD_TASK_SUCCESS,
    ADD_TASK_REQUEST,
    ADD_TASK_FAILURE
} from "../constants/tasksConstants";

import Axios from "../../AxiosApi";

export const addTaskRequest = () => ({type: ADD_TASK_REQUEST});
export const addTaskSuccess = (task) => ({type: ADD_TASK_SUCCESS, payload: task});
export const addTaskFailure = (error) => ({type: ADD_TASK_FAILURE, payload: error});

export const deleteTaskRequest = () => ({type: DELETE_TASK_REQUEST});
export const deleteTaskSuccess = (id) => ({type: DELETE_TASK_SUCCESS, payload: id});
export const deleteTaskFailure = (error) => ({type: DELETE_TASK_FAILURE, payload: error});

export const getTasksRequest = () => ({type: GET_TASKS_REQUEST});
export const getTasksSuccess = (tasks) => ({type: GET_TASKS_SUCCESS, payload: tasks});
export const getTasksFailure = (error) => ({type: GET_TASKS_FAILURE, payload: error});

export const changeTaskStatusRequest = () => ({type: CHANGE_TASK_STATUS_REQUEST});
export const changeTaskStatusSuccess = (id) => ({type: CHANGE_TASK_STATUS_SUCCESS, payload: id});
export const changeTaskStatusFailure = (error) => ({type: CHANGE_TASK_STATUS_FAILURE, payload: error});

export const updateTaskRequest = () => ({type: UPDATE_TASK_REQUEST});
export const updateTaskSuccess = (task) => ({type: UPDATE_TASK_SUCCESS, payload: task});
export const updateTaskFailure = (error) => ({type: UPDATE_TASK_FAILURE, payload: error});

export const getTasks = () => {
    return async dispatch => {
        try {
            dispatch(getTasksRequest());
            const response = await Axios.get('/');
            dispatch(getTasksSuccess(response.data));
        } catch(e) {
            dispatch(getTasksFailure(e));
        }
    };
};

export const changeTaskStatus = (data) => {
    return async dispatch => {
        try {
            dispatch(changeTaskStatusRequest());
            await Axios.put('/', 
                {
                    id: data.id, 
                    active: data.active
                }
            );
            dispatch(changeTaskStatusSuccess(data.id));
        } catch(e) {
            dispatch(changeTaskStatusFailure(e));
        }
    };
};

export const updateTask = (task) => {
    return async dispatch => {
        try {
            dispatch(updateTaskRequest());
            await Axios.put('/', task);
            dispatch(updateTaskSuccess(task));
        } catch(e) {
            dispatch(updateTaskFailure(e));
        }
    };
};

export const deleteTask = (id) => {
    return async dispatch => {
        try {
            dispatch(deleteTaskRequest());
            await Axios.delete(`/${id}`);
            dispatch(deleteTaskSuccess(id));
        } catch(e) {
            dispatch(deleteTaskFailure(e));
        }
    };
};

export const addTask = (task) => {
    return async dispatch => {
        try {
            dispatch(addTaskRequest());
            const response = await Axios.post('/', task);
            dispatch(addTaskSuccess(response.data));
        } catch(e) {
            dispatch(addTaskFailure(e));
        }
    };
};