const http = require("http");
const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const host = '127.0.0.1';
let port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// create server
const server = app.listen(port, host, function () {
  let port = server.address().port;

  console.log("App listening at http://%s:%s", host, port)

});

/** Dummy data */

let employees = [
    { id: 25654354, name: 'Mike Testy' },
    { id: 15654311, name: 'Jason Lox' },
    { id: 15653335, name: 'Kanako Frivolas' },
    { id: 15654318, name: 'Connor Bailey' },
    { id: 17654352, name: 'Oskar Diego' }
];

let comments = [
    { id: 1, from: 25654354, on: 15653335, content: "This is a comment"},
    { id: 2, from: 15654311, on: 15653335, content: "This is also a comment"},
    { id: 3, from: 15654311, on: 25654354, content: "This is a third comment"},
];

/** API - employees */

// TODO: error checking in all API for user input and unexpected results

// get all
app.get('/employees', function (req, res) {
    res.end(JSON.stringify(employees));
});

// get 1 employee
app.get('/employees/:id', function (req, res) {
    const userID = req.params.id;
    let commentsFrom = [];
    let commentsOn = [];

    // get the user
    const filteredEmployee = employees.filter((e) => Number(e.id) === Number(userID));

    comments.filter(e => {
        if (Number(e.from) === Number(userID)) {
            commentsFrom.push(e);
        } else if (Number(e.on) === Number(userID)) {
            commentsOn.push(e);
        }
    });

    const results = Object.assign(filteredEmployee[0], {
        comments: { from: commentsFrom, on: commentsOn }
    });
    res.end(JSON.stringify(results));
});

// new employee
app.post('/employees', function (req, res) {
    const data  = req.body;
    console.log(data);
    res.end(JSON.stringify(results));
});

// update employee
app.put('/employees', function (req, res) {
    console.log(req.body.id, req.body.name);
    res.end(JSON.stringify(results));
});

// delete
app.delete('/employees', function (req, res) {
    console.log(req.body.id);
    res.end('Record has been deleted!');
});