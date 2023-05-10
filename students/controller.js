const pool = require('../db');
const queries = require('../students/queries');

const allStudents = (req, res) => {
    pool.query(queries.AllStudentsQuery, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

const oneStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.OneStudentQuery, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const createStudent = (req, res) => {
    const {name, email, age, dob} = req.body;
    // check if email already exists
    pool.query(queries.checkEmailExistsQuery, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists");
        }

        // add student to database
        pool.query(queries.createStudentQuery, [name, email, age, dob], (error, results) => {
            if (error) throw error;
            res.status(200).send('Student Created Successfully');
            console.log("Student created");
        })
    })
} 

const removeStudent = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(queries.OneStudentQuery, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound){
            res.send('Student does not exist in the database');
        }

        pool.query(queries.removeStudentQuery, [id], (error, results) => {
            if(error) throw error;
            res.status(200).send('Student removed successfully');
        })
       
    })
}

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id)
    const {name, email, age, dob} = req.body;

    pool.query(queries.OneStudentQuery, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            res.send('Student does not exist in the database');
        }

        pool.query(queries.updateStudentQuery, [name, email, age, dob, id], (error, results) => {
            if (error) throw error;
            res.status(200).send('Student updated successfully');
        } )
    })
} 

module.exports = { 
    allStudents,
    oneStudentById,
    createStudent, 
    removeStudent,
    updateStudent,
}