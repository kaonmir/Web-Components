'use strict';
const express = require('express');
const querystring = require('querystring');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const fs = require('fs');
const option = JSON.parse(fs.readFileSync('db_info.json'));
const db = mysql.createConnection(option);
db.connect();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const hidden = req.body.hidden;

    if (hidden != undefined) {
        const created_date = new Date(hidden.created_date);
        const current_date = new Date();

        if (Math.abs(current_date - created_date) < 100 * 60 * 1000) { // 단위: ms, 100분 제한
            db.query(`SELECT * FROM users WHERE username='${hidden.username}' AND hidden=${hidden.hidden}`, (error, results) => {
                if (error) throw (error);
                else if (results.length == 1) {
                    console.log("login successfully");
                    res.json({ result: true });
                }
            })
        }
    }
    else {
        db.query(`SELECT * FROM users WHERE username='${username}' AND password='${password}'`, (error, results) => {
            if (error) throw (error);
            else {
                if (results.length == 1) {
                    let result = results[0];
                    const hidden = parseInt(Math.random() * 2e9);
                    res.json({ result: true, hidden: hidden });
                    db.query(`UPDATE users SET hidden=${hidden} WHERE username='${username}'`);
                }
                else {
                    res.json({ result: false });
                }
            }
        });
    }
})


app.listen(4000, () => {
    console.log("Express server has started on port 4000");
});