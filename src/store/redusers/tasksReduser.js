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
    fetchError: null,
    addTaskLoading: false,
    addTaskError: null,
    updateLoading: false,
    updateError: null,
    deleteLoading: false,
    deletError: null
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK_REQUEST:
            return {
                ...state,
                addTaskLoading: true,
                addTaskError: null
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
                addTaskError: action.payload
            };
        case UPDATE_TASK_REQUEST:
            return {
                ...state,
                updateLoading: true,
                updateError: null
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
                updateError: action.payload
            };
        case DELETE_TASK_REQUEST: 
            return {
                ...state,
                deleteLoading: true,
                deleteError: null
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
                deletError: action.payload
            };
        case CHANGE_TASK_STATUS_REQUEST:
            return {
                ...state,
                updateLoading: true,
                updateError: null
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
                updateError: action.payload
            };
        case GET_TASKS_REQUEST:
            return {
                ...state,
                fetchLoading: true
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
                fetchError: action.payload
            };
        default: 
            return state;
    }
};

export default tasksReducer;