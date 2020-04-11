import { REQUEST_TODOS, RECEIVE_TODOS } from "./actions";

const initialState = {
    isFetching: false,
    todos: [],
};

function apps(state = initialState, action) {
    switch (action.type) {
        case REQUEST_TODOS:
            return {
                ...state,
                isFetching: true,
            };
        case RECEIVE_TODOS:
            return {
                ...state,
                isFetching: false,
                todos: action.payload,
            };
        default:
            return state;
    }
}

export default apps;
