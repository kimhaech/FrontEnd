const h1 = document.querySelector("div.hello h1")

function handleh1Click(){
  const clickedClass = "active"
  h1.classList.toggle(clickedClass)
}

h1.addEventListener("click",handleh1Click)
