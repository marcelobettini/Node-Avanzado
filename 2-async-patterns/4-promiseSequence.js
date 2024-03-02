function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Login successful!");
      // reject(new Error("Login failed!"));
    }, 1500);
  });
}
function userStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Evaristo Jacinto Robespierre is connected.");
      reject(new Error("Error accessing user info!"));
    }, 1500);
  });
}

login()
  .then((loginInfo) => {
    console.log(loginInfo);
    return userStatus();
  })
  .then((userInfo) => console.log(userInfo))
  .catch((err) => console.log(err.message));
