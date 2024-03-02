const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const task_schema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    due_date: {
        type: Date,
        require: true,
    },
    present: {
        type: Boolean,
        default: true,
    },
    status: {
        type: String,
        enum: ["TODO", "DONE"],
        default: "TODO",
    },
    deleted_at: {
        type: Date,
        default: null,
    },
    priority: {
        type: Number,
        enum: [0, 1, 2, 3],
        default: 3,
    }
}, { timestamps: true });

const Task = mongoose.model('Task', task_schema);

module.exports = Task;

