const Task = require('./model/task')

const cron = require('node-cron');

cron.schedule('0 0 * * *', async () => {
    // Your code to be executed every day at 12 AM goes here
    const data = await Task.find().sort({ priority: 1 });
    console.log(data);
    data.map((d)=>{
        let gap = Math.ceil((d.due_date - Date.now())/(60*60*1000*24));
        if(gap < 0) {
            console.log("Deadline Exceeds");
            // We can use twillio here ( Paid Service )
            return;
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
        d.priority = prior;
        d.save();
    })
  });
