import { 
    GET_TASKS_REQUEST, 
    GET_TASKS_SUCCESS, 
    GET_TASKS_FAILURE, 
    CHANGE_TASK_STATUS_SUCCESS, 
    CHANGE_TASK_STATUS_REQUEST, 
    CHANGE_TASK_STATUS_FAILURE, 
    UPDATE_TASK_SUCCESS,
    UPDATE_TASK_REQUEST,
    UPDATE_TASK_FAILURE,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_REQUEST,
    DELETE_TASK_FAILURE,
    ADD_TASK_SUCCESS,
    ADD_TASK_REQUEST,
    ADD_TASK_FAILURE
} from "../constants/tasksConstants";

const initialState = {
    tasks: {},
    fetchLoading: false,
    addTaskLoading: false,
    updateLoading: false,
    deleteLoading: false,
    error: null
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK_REQUEST:
            return {
                ...state,
                addTaskLoading: true,
                error: null
            };
        case ADD_TASK_SUCCESS:
            return {
                ...state, 
                tasks: {
                    ...state.tasks,
                    [action.payload.id]: {
                        id: action.payload.id,
                        name: action.payload.name,
                        active: action.payload.active
                    }
                },
                addTaskLoading: false
            };
        case ADD_TASK_FAILURE: 
            return {
                ...state,
                addTaskLoading: false,
                error: action.payload
            };
        case UPDATE_TASK_REQUEST:
            return {
                ...state,
                updateLoading: true,
                error: null
            };
        case UPDATE_TASK_SUCCESS:
            return {
                ...state, 
                tasks: {
                    ...state.tasks,
                    [action.payload.id]: {
                        id: action.payload.id,
                        name: action.payload.name,
                        active: action.payload.active
                    }
                },
                updateLoading: false
            };
        case UPDATE_TASK_FAILURE:
            return {
                ...state,
                updateLoading: false,
                error: action.payload
            };
        case DELETE_TASK_REQUEST: 
            return {
                ...state,
                deleteLoading: true,
                error: null
            };
        case DELETE_TASK_SUCCESS:
            const {[action.payload]: _, ...rest} = state.tasks; 

            return {
                ...state, 
                tasks: rest,
                deleteLoading: false,
            };
        case DELETE_TASK_FAILURE:
            return {
                ...state,
                deleteLoading: false,
                error: action.payload
            };
        case CHANGE_TASK_STATUS_REQUEST:
            return {
                ...state,
                updateLoading: true,
                error: null
            };
        case CHANGE_TASK_STATUS_SUCCESS:
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    [action.payload]: {
                        id: action.payload,
                        name: state.tasks[action.payload].name,
                        active: Boolean(!state.tasks[action.payload].active)
                    }
                },
                updateLoading: false
            };
        case CHANGE_TASK_STATUS_FAILURE:
            return {
                ...state,
                updateLoading: false,
                error: action.payload
            };
        case GET_TASKS_REQUEST:
            return {
                ...state,
                fetchLoading: true,
                error: action.payload
            };
        case GET_TASKS_SUCCESS:
            return {
                ...state,
                tasks: action.payload,
                fetchLoading: false
            };
        case GET_TASKS_FAILURE:
            return {
                ...state,
                fetchLoading: false,
                error: action.payload
            };
        default: 
            return state;
    }
};

export default tasksReducer;