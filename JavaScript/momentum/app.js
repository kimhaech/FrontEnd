const age = parseInt(prompt("How old are you?"))

if(isNaN(age)){
  console.log("숫자를 입력하세요")
}
else{
  if(age>19){
    console.log("성인입니다")
  }
  else{
    console.log("청소년입니다")
  }
}