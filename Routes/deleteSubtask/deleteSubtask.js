const route = require('express').Router();
const { authenticateToken } = require("../../middleware/auth");

const Subtask = require('../../model/subtask');

route.post('/', authenticateToken, async (req, res) => {
    const { subtask_id } = req.body;

    if (!subtask_id) {
        return res.send("Please Provide a Valid Input");
    }

    try {
        const subtaskExists = await Subtask.findOne({
            _id: subtask_id,
        });

        if (!subtaskExists) {
            return res.send("SubTask is Not Available");
        }

        subtaskExists.present = false;
        subtaskExists.deleted_at = Date.now();

        await subtaskExists.save();
        return res.send("Deleted Successfully");
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
    }
});

exports = module.exports = {
    deletesubTask: route,
};