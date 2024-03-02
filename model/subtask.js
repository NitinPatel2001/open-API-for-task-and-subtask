const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subtaskSchema = new Schema({
    task_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Task',
    },
    present: {
        type: Boolean,
        default: true,
    },
    status: {
        type: Number,
        enum: [0, 1],
        required: true,
    },
    deleted_at: {
        type: Date,
        default: null,
    },
}, { timestamps: true });

const Subtask = mongoose.model('Subtask', subtaskSchema);

module.exports = Subtask;