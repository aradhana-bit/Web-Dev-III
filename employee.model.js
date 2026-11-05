const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    empId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    }
})

module.exports=mongoose.model("employee", employeeSchema);