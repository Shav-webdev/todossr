const ToDo = require("../model/todo.model");
const { status, messages } = require("../utils/constants");

module.exports = {
    async getAllTodos() {
        try {
            const toDos = await ToDo.find({});

            if (toDos.length > 0) {
                return toDos;
            } else {
                return { message: messages.errorNoTodo };
            }
        } catch (e) {
            console.log(e);
        }
    },

    async addNewTodo({ todo: { title } }) {
        if (title.length) {
            const todo = new ToDo({
                title: title,
            });
            await todo.save((err) => {
                if (err) {
                    throw new Error(err);
                }
            });
            return todo;
        }
    },
    async finishToDo({ id }) {
        try {
            const toDo = await ToDo.findOne({ _id: id });
            if (toDo) {
                if (toDo.status === status.active) {
                    toDo.status = status.finished;
                } else {
                    toDo.status = status.active;
                }
                await toDo.save((err) => {
                    if (err) {
                        throw new Error(err);
                    }
                });
                return toDo;
            } else {
                return { message: messages.errorNoTodo };
            }
        } catch (e) {
            console.log(e);
        }
    },
    async deleteToDo({ id }) {
        try {
            return await ToDo.findOneAndDelete({ _id: id });
        } catch (e) {
            console.log(e);
        }
    },
};
