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
  const handleClick = (value) => {
    setHand(value)
    setOtherHand(random(2))
  }
  const handleClearClick = () => {
    setHand('rock')
    setOtherHand('rock')
  }

  return (
    <>
      <Button onClick={handleClearClick}>{'처음부터'}</Button>
      <p>{getResult(Hand, OtherHand)}</p>
      <div>
        <HandIcon value={Hand} />
        vs
        <HandIcon value={OtherHand} />
      </div>
      <HandButton value="rock" onClick={handleClick} />
      <HandButton value="scissor" onClick={handleClick} />
      <HandButton value="paper" onClick={handleClick} />
    </>
  )
}

export default App
