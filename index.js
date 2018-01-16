const app = "I don't do much.";

const token = '321f0cb60040cb1589d1d6df82bed23a37ced049'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));

// function getRepositories() {
//   const req = new XMLHttpRequest()
//   req.addEventListener("load", showRepositories);
//   req.open("GET", 'https://api.github.com/users/octocat/repos')
//   req.send()
// }
//
// function showRepositories(event, data) {
//   let repos = JSON.parse(this.responseText)
//   console.log(repos)
//   const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`
//   document.getElementById("repositories").innerHTML = repoList
// }
//
// function getCommits(el) {
//   const name = el.dataset.repo
//   const req = new XMLHttpRequest()
//   req.addEventListener("load", showCommits)
//   req.open("GET", 'https://api.github.com/repos/octocat/' + name + '/commits')
//   req.send()
// }
//
// function showCommits() {
//   const commits = JSON.parse(this.responseText)
//   const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.login + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`
//   document.getElementById("commits").innerHTML = commitsList
// }
//
//

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/repos/jquery/jquery/commits');
// xhr.responseType = 'json';
//
// xhr.onload = function() {
//   console.log(xhr.response);
// };
//
// xhr.onerror = function() {
//   console.log('Booo');
// };
//
// xhr.send();

// fetch('https://api.github.com/repos/jquery/jquery/commits')
//   .then(res => res.json())
//   .then(json => console.log(json));
