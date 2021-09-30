const express = require('express');
const budget = require('./models/budget.js');

const port = 3000

const app = express();


app.use(express.static('public'))
app.use(express.json()); 


app.get('/budget/', function(req, res) {
    res.render('index.ejs', {
        allBudgets: budget
    })
})

app.get("/budget/new", function(req, res) {
    res.render("new.ejs");
});

app.post("/budget", function(req, res) {
    budget.push(req.body);
    console.log(budget);
    res.redirect('/budget');
});

app.get('/budget/:indexOfBudgetArray', function(req, res) {
    res.render('show.ejs', {
        budget: budget[req.params.indexOfBudgetArray]
    })
});



app.listen(port, function(req, res) {
    console.log(`Express is listening on port:${port}`);
});
