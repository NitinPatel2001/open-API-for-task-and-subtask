## Task and SubTask API

Plese first enter you mongodb URL into db/connect.js

# API1 - Post Request

http://localhost:4422/addtask

body: {
    title, description, due_date
}

header: {
    token: jwtwebtoken
}

Result: Add the task into Database or Give respected Error

# API2 - Post Request

http://localhost:4422/addsubtask

body: {
    task_id
}

header: {
    token: jwtwebtoken
}

Result: Add SubTask into Database or give respected error

# API3 - Post Request

http://localhost:4422/updatetask

body: {
    task_id, status, due_date
}

header: {
    token: jwtwebtoken
}

Result: update the task into Database or Give respected Error

# API4 - Post Request

http://localhost:4422/updatesubtask

body: {
    subtask_id, status
}

header: {
    token: jwtwebtoken
}

Result: Update the task into Database or Give respected Error


# API5 - Post Request

http://localhost:4422/deletetask

body: {
    task_id
}

header: {
    token: jwtwebtoken
}

Result: Delete the task into Database or Give respected Error

# API6 - Post Request

http://localhost:4422/deletesubtask

body: {
    subtask_id
}

header: {
    token: jwtwebtoken
}

Result: Delete the subtask into Database or Give respected Error

# API7 - Get Request

http://localhost:4422/gettask

header: {
    token: jwtwebtoken
}

Result: Give all task

# API8 - Get Request

http://localhost:4422/getsubtask

header: {
    token: jwtwebtoken
}

Result: Give all subtask

