const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAMES = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAMES);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); //사용자 기억
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAMES);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAMES);
  loginForm.addEventListener("submit", onLoginSubmit); 
} else {
  paintGreetings();
}

// username입력하고 새로고침하면 왜 undefined가 나오는지?