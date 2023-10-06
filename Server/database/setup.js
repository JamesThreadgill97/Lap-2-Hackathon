// SENDS SQL TO THE DATABASE ON ELEPHANT SQL
require('dotenv').config();

const fs = require('fs');
const db = require('./connect');

// retrieves sql in a string format:
const sql = fs.readFileSync(__dirname + "/diary.sql").toString();

// run the query to send the sql to the db:
db.query(sql)
    .then(data => {
        db.end();
        console.log("setup complete")
    })
    .catch(error => { console.log(error)});

    