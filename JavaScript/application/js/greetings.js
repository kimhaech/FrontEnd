const loginForm = document.getElementById("login-form")
const loginInput = loginForm.querySelector("input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event){
  event.preventDefault()  // 기본동작 막기 (submit)
  loginForm.classList.add(HIDDEN_CLASSNAME) // form이 사라지도록 classname추가
  const username = loginInput.value // 사용자 이름 저장
  localStorage.setItem(USERNAME_KEY, username) // local storage에 저장
  paintGreetings(username)
}

function paintGreetings(username){
  greeting.innerText = `Hello ${username}`
  greeting.classList.remove(HIDDEN_CLASSNAME)  // greetings를 보여준다
}

loginForm.addEventListener("submit",onLoginSubmit)

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
  // form을 보여준다
  loginForm.classList.remove(HIDDEN_CLASSNAME)  // form을 보여준다
  loginForm.addEventListener("submit",onLoginSubmit)  // 로그인 과정 시작
}else{
  // greetings를 보여준다
  paintGreetings(savedUsername)
}