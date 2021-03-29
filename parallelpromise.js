function getUser(id) {
  console.log("Reading a user from database..");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, gitUser: "safwan" });
    }, 2000);
  });
}

function getRepositories() {
  console.log("calling GitHub API..");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

Promise.all([getUser(1), getRepositories()])
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));
