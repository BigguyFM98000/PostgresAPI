const express = require('express')
const studentRoutes = require('./students/routes');
const app = express()
const port = 4200

app.use(express.json())

app.get('/', (req, res) => {
    res.send( "Welcome to my Postgres API");
})

app.use('/students', studentRoutes);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});