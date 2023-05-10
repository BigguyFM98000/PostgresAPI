const AllStudentsQuery = "SELECT * FROM students";
const OneStudentQuery = "SELECT * FROM students WHERE id = $1";
const checkEmailExistsQuery = "SELECT s FROM students s WHERE s.email = $1";
const createStudentQuery = "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const removeStudentQuery = "DELETE FROM students WHERE id = $1";
const updateStudentQuery = "UPDATE students SET name = $1, email = $2, age = $3, dob = $4 WHERE id = $5";

module.exports = {
    AllStudentsQuery,
    OneStudentQuery,
    checkEmailExistsQuery,
    createStudentQuery,
    removeStudentQuery,
    updateStudentQuery
}