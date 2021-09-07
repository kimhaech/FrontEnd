import { useState } from 'react'
import Button from './Button'
import HandButton from './HandButton'
import HandIcon from './HandIcon'
import utils from './utils'

const rsp = ['rock', 'scissor', 'paper']

const getResult = (player, pc) => {
  if (utils[player] === pc) return '승리'
  if (utils[pc] === player) return '패배'
  return '무승부'
}
function random(n) {
  return rsp[Math.ceil(Math.random() * n)]
}

function App() {
  const [Hand, setHand] = useState('rock')
  const [OtherHand, setOtherHand] = useState('rock')
  const [gameHistory, setGameHistory] = useState([])  // 게임 승부 결과 기록

  const handleClick = (value) => {
    setHand(value)
    const nextOtherHand = random(2)
    const nextHistoryItem = getResult(value,nextOtherHand)
    setOtherHand(nextOtherHand)
    setGameHistory([...gameHistory, nextHistoryItem])
  }
  const handleClearClick = () => {
    setHand('rock')
    setOtherHand('rock')
    setGameHistory([])  // 빈 배열로 초기화
  }

  return (
    <>
      <Button onClick={handleClearClick}>{'처음부터'}</Button>
      <div>
        <HandIcon value={Hand} />
        vs
        <HandIcon value={OtherHand} />
      </div>
      <div>
        <p>
          승부 기록 : {gameHistory.join(', ')}
        </p>
      </div>
      <HandButton value="rock" onClick={handleClick} />
      <HandButton value="scissor" onClick={handleClick} />
      <HandButton value="paper" onClick={handleClick} />
    </>
  )
}

export default App
