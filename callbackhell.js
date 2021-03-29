getUser(1, function (user) {
  console.log("user", user);
  getRepositories(user.gitUser, (repos) => {
    console.log("Repositories", repos);
  });
});
function getUser(id, callback) {
  console.log("Reading a user from database..");
  setTimeout(() => {
    callback({ id: id, gitUser: "safwan" });
  }, 2000);
}

function getRepositories(username, callback) {
  console.log("calling GitHub API..");
  setTimeout(() => {
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
