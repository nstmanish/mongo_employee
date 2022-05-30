const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  empName: { type: String, required: true },  
  empdept: { type: String, required: true },
  mobile  :{ type: Number, required: true },
  email   :{ type: String, required: true }, 
  role    :{ type: String, required: true },
  salary  :{ type: Number, required: true },
});

module.exports = mongoose.model('employeeModel', employeeSchema );