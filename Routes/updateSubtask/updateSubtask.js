const route = require('express').Router();
const { authenticateToken } = require("../../middleware/auth");

const Subtask = require('../../model/subtask');
const Task = require('../../model/task');

route.post('/', authenticateToken, async (req, res) => {
    const { subtask_id, status } = req.body;

    if (!subtask_id || !(parseInt(status) == 0 || parseInt(status) == 1)) {
        return res.send("Please Provide a Valid Input");
    }

    try {
        const subtaskExists = await Subtask.findOne({
            _id: subtask_id,
        });

        if (!subtaskExists) {
            return res.send("SubTask is Not Available");
        }

        subtaskExists.status = parseInt(status),

        await subtaskExists.save();
        return res.send("Updated Successfully");
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
    }
});

exports = module.exports = {
    updatesubTask: route,
};