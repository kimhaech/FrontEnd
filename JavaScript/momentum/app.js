const h1 = document.querySelector("div.hello h1")

function handleh1Click(){
  h1.style.color = "blue"
}

function handleMouseEnter(){
  h1.innerText = "Mouse is here"
}

function handleMouseLeave(){
  h1.innerText = "Mouse is gone"
}

function handleWindowResize(){
  document.body.style.backgroundColor = "green"
}

function handleCopy(){
  alert("copier!!!")
}

function handleOffline(){
  alert("NO WIFI...")
}

function handleOnline(){
  alert("WIFI YES!")
}

h1.addEventListener("click",handleh1Click)
h1.addEventListener("mouseenter",handleMouseEnter)
h1.addEventListener("mouseleave",handleMouseLeave)

window.addEventListener("resize",handleWindowResize)
window.addEventListener("copy",handleCopy)
window.addEventListener("offline",handleOffline)
window.addEventListener("online",handleOnline)