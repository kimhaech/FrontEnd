const clock = document.querySelector("h2#clock")

function getClock(){
  const date = new Date()
  const hours = String(date.getHours()).padStart(2,"0")
  const minutes = String(date.getMinutes()).padStart(2,"0")
  const seconds = String(date.getSeconds()).padStart(2,"0")
  
  clock.innerText = `${hours}:${minutes}:${seconds}`
}
getClock()  // website가 load되자마자 실행되도록 한다
setInterval(getClock, 1000)