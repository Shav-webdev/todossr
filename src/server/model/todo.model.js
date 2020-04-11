const { Schema, model } = require("mongoose");
const { validation } = require("../utils/constants");
const { status } = require("../utils/constants");

const { toDoMaxLength, toDoMinLength, toDoRequired } = validation;

const toDoSchema = new Schema({
    title: {
        type: String,
        minlength: [2, toDoMinLength],
        maxlength: [64, toDoMaxLength],
        required: [true, toDoRequired],
    },
    status: {
        type: String,
        default: status.active,
    },
    createdAt: {
        type: Number,
        default: () => Number(Date.now()),
    },
});

module.exports = model("Todo", toDoSchema);
