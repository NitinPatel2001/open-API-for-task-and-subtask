const route = require('express').Router();
const { authenticateToken } = require("../../middleware/auth");

const Subtask = require('../../model/subtask');
const Task = require('../../model/task');

route.post('/', authenticateToken, async (req, res) => {
    const { task_id } = req.body;

    if (!task_id) {
        return res.send("Please Provide a Valid Input");
    }

    try {
        const taskExists = await Task.findOne({
            _id: task_id,
        });

        if (!taskExists) {
            return res.send("Task is Not Available");
        }

        const subtaskexist = await Subtask.findOne({
            task_id: Object.create(taskExists._id)
        })

        if(subtaskexist) {
            if(subtaskexist.present == false) {
                subtaskexist.present = true;
                subtaskexist.save();
                return res.send("Saved Successfully");
            }
            return res.send("Subtask Exist");
        }

        const subtask = new Subtask({
            task_id: taskExists._id,
            status: 0,
        });

        await subtask.save();
        return res.send("Saved Successfully");
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
    }
});

exports = module.exports = {
    createsubTask: route,
};