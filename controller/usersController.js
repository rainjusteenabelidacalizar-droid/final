
// //SQL (query) — mySQL
const connection = require('../config/db');


//POST — Create
exports.createUser=(req,res)=>{
    const {id,name,course,units,tuition}=req.body;  
    connection.query('INSERT INTO enrollment_bills (student_id,student_name,course_program,units_enrolled,tuition_total,) VALUES (?,?,?,?,?)',[id,name,course,units,tuition],(err,result)=>{
        if(err) throw err;
        res.json({message:'User created successfully',id:result.insertId});
    });
};

//PUT (update/edit)
exports.updateUser=(req,res)=>{
    const {id,name,course,units,tuition}=req.body; 
    connection.query(
        "UPDATE enrollment_bills SET student_id=?, student_name=?, course_program=?, unit_enrolled=?, tuition_total=?, department=? WHERE id=?",[id,name,course,units,tuition], (err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0)
            res.json({message:'User updated successfully'});
        else
            res.status(404).json({message: 'User not found'});
    });
};