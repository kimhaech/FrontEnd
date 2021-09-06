import { useState } from 'react'
import Button from './Button'
import Dice from './Dice'

// 1~n까지의 랜덤한 정수 반환
function random(n) {
  return Math.ceil(Math.random() * n)
}

function App() {
  const [num, setNum] = useState(1)

  const handleRollClick = () => {
    const nextNum = random(6) //1~6까지의 랜덤한 숫자를 가진다.
    setNum(nextNum)
  }

  const handleClearClick = () => {
    setNum(1)
  }

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <Dice color="red" num={num} />
    </div>
  )
}

export default App
