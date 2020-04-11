import React, { useState } from "react";
import Button from "./button";
import {
    deleteTodoThunk,
    updateTodoThunk,
} from "../redux/thunks";
import { connect } from "react-redux";

function ListItem({ todos, deleteToDo, updateTodoState }) {
    const [finished, setFinished] = useState(false);

    const handleDelete = (id) => {
        deleteToDo(id);
    };

    const handleInputChecked = (e, id) => {
        const checked = e.target.checked;
        setFinished(checked);
        updateTodoState(id);
    };

    return (
        <>
            {todos.length > 0 ? (
                <ul className="list-group w-100">
                    {todos.map((todo, index) => (
                        <li
                            key={todo.id}
                            className={`list-group-item d-flex justify-content-between listItem my-2 ${
                                todo.status === "finished" ? "finishedToDo" : ""
                            }`}
                        >
                            <div className="d-flex flex-row justify-content-start">
                                <div className="mr-2">
                                    <input
                                        checked={todo.status !== "active"}
                                        type="checkbox"
                                        onChange={(e) =>
                                            handleInputChecked(e, todo.id)
                                        }
                                        value={finished}
                                    />
                                </div>
                                <span>
                                    {index + 1}. {todo.title}
                                </span>
                            </div>

                            <Button
                                handleBtnClick={() => handleDelete(todo.id)}
                            >
                                <i className="fas fa-trash"></i>
                            </Button>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="w-100 d-flex justify-content-center">
                    <span>There are no todo to show</span>
                </div>
            )}
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteToDo: (id) => {
            dispatch(deleteTodoThunk(id));
        },
        updateTodoState: (isActive, id) => {
            dispatch(updateTodoThunk(isActive, id));
        },
    };
};

export default connect(null, mapDispatchToProps)(ListItem);
