const route = require('express').Router();
const { authenticateToken } = require("../../middleware/auth")

const Task = require('../../model/task')

route.get('/', authenticateToken , async (req, res) => {
    try {
        const Alltask = await Task.find({present: true});
        res.send(Alltask);
    }
    catch {
        console.log("Error");
    }
})

exports = module.exports = {
    getTask: route,
};
