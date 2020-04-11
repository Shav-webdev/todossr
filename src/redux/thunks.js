import { requestApps, receiveApps } from "./actions";

export function fetchTodosThunk() {
    return (dispatch) => {
        dispatch(requestApps());
        const query = `
        query {
             getAllTodos{
                title, id, status, createdAt
             }
        }
    `;
        return fetch("/graphql", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ query }),
        })
            .then((response) => response.json())
            .then((res) => {
                if (res.data && res.data.getAllTodos) {
                    dispatch(receiveApps(res.data.getAllTodos));
                } else {
                    dispatch(receiveApps([]));
                }
            });
    };
}

export function deleteTodoThunk(id) {
    return (dispatch) => {
        dispatch(requestApps());
        const query = `
        mutation {
          deleteToDo(id: "${id}")
        }
    `;
        return fetch("/graphql", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ query }),
        })
            .then((response) => response.json())
            .then((res) => {
                dispatch(fetchTodosThunk());
            })
            .catch((e) => console.log(e));
    };
}

export function updateTodoThunk(id) {
    return (dispatch) => {
        dispatch(requestApps());
        const query = `
        mutation {
          finishToDo(id: "${id}"){
            title, id, status
          }
        }
        `;

        fetch("/graphql", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ query }),
        })
            .then((res) => res.json())
            .then(() => {
                dispatch(fetchTodosThunk());
            })
            .catch((e) => console.log(e));
    };
}

export function createTodoThunk(todo) {
    return (dispatch) => {
        dispatch(requestApps());
        const query = `
            mutation {
               addNewTodo(todo: {
                  title: "${todo}"
               }) {
                    title, status, createdAt, id
                  }
               }
            `;

        fetch("/graphql", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ query }),
        })
            .then((res) => res.json())
            .then(() => {
                dispatch(fetchTodosThunk());
            })
            .catch((e) => console.log(e));
    };
}
