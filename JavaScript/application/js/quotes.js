const quotes = [
  {
    quote:"바보들의 큰 문제는 스스로 똑똑하다고 여기는 것이다.",
    author:"big.K crespe",
  },
  {
    quote:"기회는 사라지지 않는다. 니가 놓친건 딴 놈이 잡는다.",
    author:"big.K crespe",
  },
  {
    quote:"좋은 음식은 좋은 대화로 끝난다.",
    author:"big.K crespe",
  },
  {
    quote:"욕은 무능력자들의 마지막 무기다.",
    author:"big.K crespe",
  },
  {
    quote:"인간은 헛된 희망을 품었을 때 불행해진다.",
    author:"big.K crespe",
  },
  {
    quote:"월요일이 두렵다는 건 충실하지 못한 삶의 반증.",
    author:"big.K crespe",
  },
  {
    quote:"오직 자신만을 등불로 삼으라. 니 알아서 하라고",
    author:"big.K crespe",
  },
  {
    quote:"신은 게으름뱅이에게 빵을 약속하지 않는다.",
    author:"big.K crespe",
  },
  {
    quote:"사람은 눈치가 있어야 한다.",
    author:"big.K crespe",
  },
  {
    quote:"비밀은 셋 중 둘이 죽었을 때에만 지킬 수 있다.",
    author:"big.K crespe",
  },  
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote + "\n"
author.innerText = todaysQuote.author