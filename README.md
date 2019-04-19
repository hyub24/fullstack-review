# github-repo-fetcher

This app renders a page that accepts github handles as input.
The app will take the github handle and make a request to the github api, getting all the repos of that github handle.
It will then save the repos into the Mongo Database.
Once a github handle has been posted, the app will show the top 25 repos in the database.
The top 25 repos will be sorted by the number of star gazers for each repo.

**How to use**

* Clone down the repo
* `npm install`
* Use the config.example.js file to make a correct config.js file with your github token
* `npm run build` 
* To build the bundle
* `npm run start`
* To start the server
* Go to local host port 1128 to use the app
