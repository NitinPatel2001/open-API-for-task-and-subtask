const route = require('express').Router();
const { authenticateToken } = require("../../middleware/auth")

const Task = require('../../model/task')

route.post('/', authenticateToken , async (req, res) => {
    const { due_date, status, task_id } = req.body;
    if(!task_id || !due_date || Date.parse(due_date) == NaN || !(status === "TODO" || status === "DONE")) {
        return res.send("Please Provide a Valid Input");
    }

    try {
        const avail = await Task.findOne({
            _id: task_id,
        })

        if(avail) {
            avail.status = status;
            avail.due_date = Date.parse(due_date);

            await avail.save();
            return res.send("Updated Successfully");
        }
        else {
            return res.send("Task Not Availible");
        }

    }
    catch(err) {
        res.send("err")
    }
})

exports = module.exports = {
    updateTask: route,
};
