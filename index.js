console.log("before");

getUser(1, function (user) {
  console.log("user", user);
  getRepositories(user.gitUser, (repos) => {
    console.log("Repositories", repos);
  });
});
function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from database..");
    callback({ id: id, gitUser: "safwan" });
  }, 2000);
}
console.log("after");

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("calling GitHub API..");
    callback(["repo1", "repo2", "repo3"]);
  });
}
