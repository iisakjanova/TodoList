import { ADD_TASK, DELETE_TASK, CHANGE_TASK_STATUS, EDIT_TASK } from "../constants/tasksConstants";

const initialState = {
    tasks: {},
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state, 
                tasks: {
                    ...state.tasks,
                    [action.payload.id]: {
                        id: action.payload.id,
                        name: action.payload.name,
                        active: action.payload.active
                    }
                }
            };
        case EDIT_TASK:
            return {
                ...state, 
                tasks: {
                    ...state.tasks,
                    [action.payload.id]: {
                        id: action.payload.id,
                        name: action.payload.name,
                        active: action.payload.active
                    }
                }
            };
        case DELETE_TASK:
            const {[action.payload]: _, ...rest} = state.tasks; 

            return {
                ...state, 
                tasks: rest
            };
        case CHANGE_TASK_STATUS:
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    [action.payload]: {
                        id: action.payload,
                        name: state.tasks[action.payload].name,
                        active: Boolean(!state.tasks[action.payload].active)
                    }
                }
            };
        default: 
            return state;
    }
};

export default tasksReducer;