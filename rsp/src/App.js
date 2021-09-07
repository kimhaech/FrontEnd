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
  const [score, setScore] = useState(0) // 플레이어 점수
  const [otherScore, setOtherScore] = useState(0) // pc점수
  const [bet, setBet] = useState(1) // 베팅 점수

  const handleClick = (value) => {
    setHand(value)
    const nextOtherHand = random(2)
    const nextHistoryItem = getResult(value,nextOtherHand)
    setOtherHand(nextOtherHand)
    setGameHistory([...gameHistory, nextHistoryItem])
    if(nextHistoryItem === '승리') setScore(score + bet) 
    if(nextHistoryItem === '패배') setOtherScore(otherScore + bet) 
  }
  const handleClearClick = () => {
    setHand('rock')
    setOtherHand('rock')
    setGameHistory([])  // 빈 배열로 초기화
    setScore(0)
    setOtherScore(0)
    setBet(1)
  }

  const handleBetChange = (e) => {  // 베팅 변경
    if(parseInt(e.target.value) >= 1 && parseInt(e.target.value) <= 9){
      setBet(parseInt(e.target.value))
    } 
  }

  return (
    <>
      <Button onClick={handleClearClick}>{'처음부터'}</Button>
      <div>
        {score} : {otherScore}
      </div>
      <div>
        <HandIcon value={Hand} />
        vs
        <HandIcon value={OtherHand} />
      </div>
      <div>
          <input type="number" value={bet} min={1} max={9} onChange={handleBetChange}></input>
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
