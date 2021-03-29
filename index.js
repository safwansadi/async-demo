//callback replaced by promise
function getUser(id) {
  console.log("Reading a user from database..");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, gitUser: "safwan" });
    }, 2000);
  });
}

function getRepositories(username) {
  console.log("calling GitHub API..");
  console.log(username);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

getUser(1)
  .then((user) => getRepositories(user.gitUser))
  .then((repos) => console.log(repos));
