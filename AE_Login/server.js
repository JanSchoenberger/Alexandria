const express = require('express');
const sql = require('mssql');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const config = {
    user: 'username',
    password: 'password',
    server: 'localhost', 
    database: 'mydatabase' 
};

sql.connect(config).catch(err => console.error(err));

app.post('/register', async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const request = new sql.Request();
        await request.query(`INSERT INTO Users (Username, Password, Email) VALUES ('${username}', '${password}', '${email}')`);
        res.send({ message: 'User registered successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'An error occurred' });
    }
});

app.listen(3000, () => console.log('Server started on port 3000'));