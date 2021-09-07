import { useState } from 'react'
import Button from './Button'
import Dice from './Dice'

// 1~n까지의 랜덤한 정수 반환
function random(n) {
  return Math.ceil(Math.random() * n)
}

function App() {
  const [num, setNum] = useState(1) // 주사위 눈 값을 위한 state
  const [sum, setSum] = useState(0) // 점수 합산을 위한 state
  const [gameHistory, setGameHistory] = useState([])  // 점수 기록을 위한 배열 state

  const handleRollClick = () => {
    const nextNum = random(6) //1~6까지의 랜덤한 숫자를 가진다.
    setNum(nextNum)
    setSum(sum + nextNum) // 주사위 눈 값 더하기
    setGameHistory([...gameHistory, nextNum]) // 값 설정 
  }

  const handleClearClick = () => {
    setNum(1)
    setSum(0) // 합 0으로 초기화
    setGameHistory([])  // 빈 배열 전달
  }

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <h2>나</h2>
        <Dice color="red" num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <p>기록</p>
        <p>{gameHistory.join(', ')}</p>
      </div>
    </div>
  )
}

export default App
