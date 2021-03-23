console.log("before");

getUser(1, function (user) {
  console.log("user", user);
});
function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from database..");
    callback({ id: id, gitUser: "safwan" });
  }, 2000);
}
console.log("after");
