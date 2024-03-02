function getMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Messages retrieved.");
    }, 1500);
  });
}
function getPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Posts retrieved.");
    }, 3000);
  });
}
function getPhotos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Photos retrieved.");
    }, 5000);
  });
}
//this will return messages, posts and photos after 5000 ms
Promise.all([getMessages(), getPosts(), getPhotos()]).then((data) =>
  console.log(data)
);
//this will return messages after 1500 ms
Promise.race([getMessages(), getPosts(), getPhotos()]).then((data) =>
  console.log(data)
);
