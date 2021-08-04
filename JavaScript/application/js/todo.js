const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

function deleteToDO(event){
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
  paintToDo(newTodo)
}

toDoForm.addEventListener("submit", handleToDoSubmit)
