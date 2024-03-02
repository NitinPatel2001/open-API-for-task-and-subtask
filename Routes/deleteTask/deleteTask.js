const route = require('express').Router();
const { authenticateToken } = require("../../middleware/auth")

const Task = require('../../model/task')

route.post('/', authenticateToken , async (req, res) => {
    const { task_id } = req.body;

    if(!task_id) {
        return res.send("Please Provide a Valid Input");
    }

    try {
        const avail = await Task.findOne({
            _id: task_id,
        })

        if(avail) {
            avail.present = false;
            avail.deleted_at = Date.now();
            await avail.save();
            return res.send("Deleted Successfully");
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
    deleteTask: route,
};
