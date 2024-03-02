const mongoose = require("mongoose")

const MONGOURL = /* Please add your mongodb url*/ ""

mongoose.connect(MONGOURL)
.then(() => {
    console.log("Connected");
})
.catch((err)=> {
    console.error(err);
})
