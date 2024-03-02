const route = require('express').Router();
const uuid = require('uuid')
const { authenticateToken } = require("../../middleware/auth")

const Task = require('../../model/task')

route.post('/', authenticateToken , async (req, res) => {
    const { title, description, due_date } = req.body;

    let Date_var = new Date(due_date);

    if(!title || !description || !due_date || Date_var == NaN) {
        return res.send("Please Provide a Valid Input");
    }

    let gap = Math.ceil((Date_var - Date.now())/(60*60*1000*24));
    if(gap < 0) {
        return res.send("Due date is note valid");
    }
    let prior
    if(gap == 0) {
        prior = 0;
    }
    else if(gap == 1 || gap == 2) {
        prior = 1;
    }
    else if(gap == 3 || gap == 4){
        prior = 2;
    }
    else {
        prior = 3;
    }

    try {
        const avail = await Task.findOne({
            title: title,
            description: description,
        })

        if(!avail) {
            const task = new Task({
                title: title,
                description: description,
                due_date: Date_var,
                priority: prior,
            })

            await task.save();
            return res.send("Saved Successfully");
        }
        else {
            if(avail.present == false) {
                avail.due_date = due_date;
                avail.present = true;
                avail.save();
                return res.send("Saved Successfully");
            }
            return res.send("Already Availible Task");
        }

    }
    catch(err) {
        res.send("err")
    }
})

exports = module.exports = {
    createTask: route,
};
