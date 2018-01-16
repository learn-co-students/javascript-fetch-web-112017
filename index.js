const app = "I don't do much.";

const token = '714505ee77925fe9adef8006f22c9809fb983056'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
