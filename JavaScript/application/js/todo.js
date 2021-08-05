const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"

const toDos = []

function saveToDos(){ // local storage에 저장하는 함수
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDO(event){ // todo 삭제 함수
  const li = event.target.parentElement
  li.remove()
}

function paintToDo(newTodo){
  const li = document.createElement("li")
  const span = document.createElement("span")
  span.innerText = newTodo
  const button = document.createElement("button")
  button.innerText = "❌"
  button.addEventListener("click",deleteToDO)
  li.appendChild(span)
  li.appendChild(button)
  toDoList.appendChild(li)
}



function handleToDoSubmit(event){
  event.preventDefault()
  console.log(toDoInput.value)
  const newTodo = toDoInput.value // 값을 복사
  toDoInput.value = ""  // 엔터를 치고 값을 비운다.
  toDos.push(newTodo) // toDos에 push
  paintToDo(newTodo)  // todo를 화면에 보여주는 함수
  saveToDos() // todo 저장하는 함수 호출
}

toDoForm.addEventListener("submit", handleToDoSubmit)

function sayHello(item){
  console.log("this is the turn of", item)
}
const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos!==null){
  const parsedToDos = JSON.parse(savedToDos)
  parsedToDos.forEach(sayHello);
}