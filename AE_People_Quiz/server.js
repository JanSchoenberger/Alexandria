const express = require('express');
const sql = require('mysql');

const app = express();

const cors = require('cors');
app.use(cors());

const config = sql.createConnection({
    user: 'root',
    password: '',
    server: 'localhost', 
    database: 'alexandria',
    port: 3306
});

config.connect(error => { 
    if (error){
        console.log(error);
    }
    else{
        console.log("Connected to the MySQL server.");}
});


app.get('/data', async (req, res) => {
    try {
        await sql.connect(config);
        const result = await sql.query('SELECT * FROM person');
        res.json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});