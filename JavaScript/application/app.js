const loginForm = document.getElementById("login-form")
const loginInput = loginForm.querySelector("input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"

function onLoginSubmit(event){
  event.preventDefault()  // 기본동작 막기 (submit)
  loginForm.classList.add(HIDDEN_CLASSNAME) // form이 사라지도록 classname추가
  const username = loginInput.value // 사용자 이름 저장
  greeting.innerText = `Hello ${username}`  // greeting에 string 저장
  greeting.classList.remove(HIDDEN_CLASSNAME) // hidden class 삭제
}

loginForm.addEventListener("submit",onLoginSubmit)