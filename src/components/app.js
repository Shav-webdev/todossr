import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createTodoThunk, fetchTodosThunk } from "../redux/thunks";
import Input from "./input";
import Button from "./button";
import ListItem from "./listItem";
import AppSpinner from "./spinner";

const App = (props) => {
    const { getTodos, createNewToDo, isFetching, todos } = props;
    const [todo, setTodo] = useState("");

    useEffect(() => {
        getTodos();
    }, []);

    const handleInputChange = (value) => {
        setTodo(value);
    };

    const handleClick = () => {
        if (todo) {
            createNewToDo(todo);
            setTodo("");
        }
    };

    if (isFetching) {
        return <AppSpinner />;
    }

    return (
        <>
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 offset-sm-2 d-flex flex-column">
                            <div className="d-flex flex-row mt-3">
                                <Input
                                    type="text"
                                    value={todo}
                                    handleInputChange={handleInputChange}
                                />
                                <Button
                                    handleBtnClick={handleClick}
                                    children="Add"
                                />
                            </div>
                            <div className="d-flex mt-3">
                                <ListItem todos={todos} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
const mapStateToProps = (state) => {
    const { isFetching, todos } = state;
    return {
        isFetching,
        todos,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTodos: () => {
            dispatch(fetchTodosThunk());
        },
        createNewToDo: (todo) => {
            dispatch(createTodoThunk(todo));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
