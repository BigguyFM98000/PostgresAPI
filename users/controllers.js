const pool = require("../../Config/database");

exports.getAll = (request, response) => {

    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
    
  }

  exports.getById = (request, response) => {
    const id = parseInt(request.params.id)

  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  exports.updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { username, password } = request.body
  
    pool.query(
      'UPDATE users SET username = $1, password = $2 WHERE id = $3',
      [username, password, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send({message:`User modified with ID: ${id}`})
      }
    )
  }

  exports.deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
    console.log({id});
    
    pool.query('DELETE FROM users WHERE id = $1', [id], (error) => {
      if (error) {
      throw error
      }
      response.status(200).send({message:`User deleted with ID: ${id}`})
    })
  }
