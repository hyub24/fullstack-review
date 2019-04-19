const express = require('express');
let app = express();
var getRepos = require('../helpers/github.js');
var db = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.post('/repos', function (req, res) {
  console.log('post')
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  getRepos.getReposByUsername(req.body.username, (err, response, body) => {
    if (err) {
      res.status(500).send(err.message);
    } else{
      var repoArr = JSON.parse(body);
      db.save(repoArr, (err) => {
        if (err) {
          res.status(500).send(err.message);
        } else {
          res.send();
        }
      });
    }
  });
});

app.get('/repos', function (req, res) {
  console.log('get')
  // This route should send back the top 25 repos
  db.getTop25((err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.send(results)
    }
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

