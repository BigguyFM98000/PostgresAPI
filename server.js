const express = require('express')
const studentRoutes = require('./students/routes');
const app = express()
require('dotenv').config()
const port = 4200
const pg = require('pg');
const ClientClass = pg.Client;
const pgUrl = process.env.PG_URL;
const client = new ClientClass(pgUrl);

app.use(express.json())

app.get('/', (req, res) => {
    res.send( "Welcome to my Postgres API");
})

async function connect(client) {
    try {
        await client.connect();
        console.log('Client connected.');

        const {rows} = await client.query('SELECT * FROM EMPLOYEES');
        console.table(rows);
        await client.end();
    } catch (error) {
        console.log(error);
    } finally {
        await client.end();
    }
}

connect(client);

app.use('/students', studentRoutes);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});