const express = require("express");
const App = express();
require('./db/connect')
require('./CronTask')

const { createTask } = require('./Routes/createTask/createTask')
const { createsubTask } = require('./Routes/createSubtask/createSubtask');
const { updateTask } = require("./Routes/updateTask/updateTask");
const { updatesubTask } = require("./Routes/updateSubtask/updateSubtask");
const { deleteTask } = require("./Routes/deleteTask/deleteTask");
const { deletesubTask } = require("./Routes/deleteSubtask/deleteSubtask");
const { getTask } = require("./Routes/getTask/getTask");
const { getsubTask } = require("./Routes/getSubtask/getSubtask");

App.use(express.json());
App.use(express.urlencoded({extended: true}));

App.use("/addtask", createTask)
App.use("/addsubtask", createsubTask);
App.use("/updatetask", updateTask);
App.use("/updatesubtask", updatesubTask);
App.use("/deletetask", deleteTask);
App.use("/deletesubtask", deletesubTask);
App.use("/gettask", getTask);
App.use("/getsubtask", getsubTask);

App.listen("4422", ()=> {
    console.log("Server is running: http://localhost:4422");
})


// ufN9dnWjebs2Q0bW