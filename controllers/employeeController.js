const employeeModel = require('../models/employee');

exports.addEmployee = async (req, res) => {

    const userExist = await employeeModel.findOne({ email : req.body.email })

    if (userExist) {
        return res.status(409).json({message:"user Already Exist", data:userExist });
    }

    try {
        const employee = await employeeModel.create({ 
            empName : req.body.empName,  
            empdept : req.body.empdept,
            mobile  : req.body.mobile,
            email   : req.body.email , 
            role    : req.body.role,
            salary  : req.body.salary
        });
        res.status(200).json({message:"Successfull", data:employee });
    }catch (err) {
        console.log(err);
    }

}

exports.ListEmployee = (req, res) => {
    employeeModel.find({})
    .exec(function (err, data){
        if (err) { return next(err); }
        res.json({message:"Successful", data});
    });
}

exports.viewEmployee = (req, res) => {
    employeeModel.findOne({ _id : req.params.employeeId })
    .exec(function (err, data){
        if (err) { return next(err); }
        res.json({message:"successfull", data});
    });
}

exports.updateEmployee  = (req, res) => {
    employeeModel.updateOne({ _id : req.params.employeeId },
        {
            empName : req.body.empName,  
            empdept : req.body.empdept,
            mobile  : req.body.mobile,
            email   : req.body.email, 
            role    : req.body.role,
            salary  : req.body.Salary
        }
    )
    .exec(function (err, data){
        if (err) { return next(err); }
        res.json({message:"successfull", data});
    });
}

exports.deleteEmployee = (req, res) => {
    employeeModel.deleteOne({ _id : req.params.employeeId })
    .exec(function (err, data){
        if (err) { return next(err); }
        res.json({message:"successfull Deleted", data});
    });
}

exports.salaryItEmployee  = (req, res) => {
    employeeModel.find({ salary : { $lt: req.params.lessThan }})
    .exec(function (err, list){
        if (err) { return next(err); }
        res.json({message:"Successfull", data:list});
    });
}