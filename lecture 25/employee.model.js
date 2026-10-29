const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    empId: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    contact:{
        type: Number,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    location:{
        type: String,
        required: true
    }
})

module.exports=mongoose.model("employee", employeeSchema);