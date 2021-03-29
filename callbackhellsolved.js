console.log("calback hell can be solved by named function..");
getUser(1, userDetail);

function userDetail(user) {
  console.log("user", user);
  getRepositories(user.gitUser, printRepos); //passing referance of printRepos function
}

function printRepos(repos) { 
  console.log("Repositories", repos);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from database..");
    callback({ id: id, gitUser: "safwan" });
  }, 2000);
}
function getRepositories(username, callback) {
  setTimeout(() => {
    console.log(`loading git repositories of ${username}..`);
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
