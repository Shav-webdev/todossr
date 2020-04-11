export const REQUEST_TODOS = "REQUEST_TODOS";
export const RECEIVE_TODOS = "RECEIVE_TODOS";

export function requestApps() {
    return {
        type: REQUEST_TODOS,
    };
}

export function receiveApps(todos) {
    return {
        type: RECEIVE_TODOS,
        payload: todos,
    };
}
