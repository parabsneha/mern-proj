// const bcrypt = require('bcryptjs/dist/bcrypt');   
const mongoose = require('mongoose');

const employeetaskSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Employee'
    },
    task: [{//type (assignment, session)
        task_id: {
            type: mongoose.Schema.Types.ObjectId, ref: 'generaltask'
        },
        date: {
            type: Date
        },
        topic: {
            type: String
        },//destype markdown || text 
        objective: {
            type: String
        },//
        category: {
            type: String //hr or admin or IT .
        },
        personResponsible: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Employee'
        },
        status: {
            type: String
        },
        sessionRating: { //employee 
            type: Number,
        },
        sessionFeedbackComments: { //employee
            type: String,
        },
        supervisorFeedbackComments: { //not for sessions 
            type: String
        },
        estimatedTime: { 
            type: String
        }

    }]
},
    {
        timestamps: true,
    });

employeetaskSchema.methods.addToTasksList = function (task) {
    // console.log("sent in function",task);
    // console.log("old task",this.task);
    // const taskIndex = this.task.findIndex(at => {  //checking if the task already exists
    //     console.log(at.taskid.toString());
    //     console.log(task._id.toString());

    //     return at.taskid.toString() === task._id.toString();
    // });
    // console.log(taskIndex);
    const defaultStatus = "assigned";
    const updatedTasklist = this.task; //new array with all the tasks stored in task array
    // if (taskIndex < 0) { //doesnt exist, do insert 
     console.log("-- ",updatedTasklist);
        updatedTasklist.push({
            task_id:task._id,
            date: task.date,
            topic: task.topic,
            objective: task.objective,
            category: task.category,
            personResponsible:task.personResponsible,
            status: defaultStatus,
            feedbackComments: null,
            feedbackRating:null,
            estimatedTime: task.estimatedTime,
            summaryComments: null
        });
        this.task = updatedTasklist;
        // return this.save();
        return this;
    // // }
    // else {
    //     return 0; //task exist - do nothing
    // }
}


const employeetask = mongoose.model('employeetask', employeetaskSchema);

module.exports = employeetask;  
