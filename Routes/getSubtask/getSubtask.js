const route = require('express').Router();
const { authenticateToken } = require("../../middleware/auth")

const subTask = require('../../model/subtask')

route.get('/', authenticateToken , async (req, res) => {
    try {
        const Allsubtask = await subTask.find({present: true});
        res.send(Allsubtask);
    }
    catch {
        console.log("Error");
    }
})

exports = module.exports = {
    getsubTask: route,
};
