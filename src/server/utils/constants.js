module.exports = {
    types: {
        todo: "todo",
        validationError: "ValidationError",
    },
    status: {
        pending: "pending",
        done: "done",
        active: "active",
        finished: "finished",
    },
    validation: {
        toDoMinLength: "Todo must be at least 2 characters.",
        toDoMaxLength: "Todo must be less than 64 characters.",
        toDoRequired: "Todo field is required!",
    },
    messages: {
        errorMessage: "Something went wrong, try later",
        errorNoTodo: "There is no to do",

        successTodoCreated: "Todo successfully created",
        successTodoUpdated: "Todo successfully updated",
        successTodoDeleted: "Todo successfully deleted",
    },
    selectTypes: {
        toDoGetAll: "title status createdTime",
        toDoGetById: "title status createdTime",
    },
};
