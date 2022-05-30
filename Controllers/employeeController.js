const employeeModel = require('../models/employee');

 exports.add_employee = async (req, res) => {

    await employeeModel.find({ email : req.body.email })
    .exec(function (err, data){
        if (err) { return next(err); }
        if ( data.length > 0 ){ return res.json({message:"Already exist", data}) }
       
            employeeModel.create({ 
                empName : req.body.empName,  
                empdept : req.body.empdept,
                mobile  : req.body.mobile,
                email   : req.body.email , 
                role    : req.body.role,
                salary  : req.body.salary
            })
            .then(function(data) { 
                res.json({message:"Successfull", data});
            });
        
    });

   
   
}

exports.List_employee = (req, res) => {

    employeeModel.find({})
    .exec(function (err, data){
        if (err) { return next(err); }
        res.json({message:"Successful", data});
    });


}

exports.view_employee = (req, res) => {

    employeeModel.findOne({ _id : req.params.employeeId })
    .exec(function (err, data){
        if (err) { return next(err); }
        res.json({message:"successfull", data});
    });


}

exports.update_employee  = (req, res) => {

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

exports.delete_employee = (req, res) => {

    employeeModel.deleteOne({ _id : req.params.employeeId })
    .exec(function (err, data){
        if (err) { return next(err); }
        res.json({message:"successfull Deleted", data});
    });

}

exports.salary_lt_employee  = (req, res) => {

    employeeModel.find({ salary : { $lt: req.params.lessThan }})
    .exec(function (err, list){
        if (err) { return next(err); }
        res.json({message:"Successfull", data:list});
    });

}