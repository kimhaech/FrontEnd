import img_rock from './assets/rock.svg'
import img_scissor from './assets/scissor.svg'
import img_paper from './assets/paper.svg'

const rspIcon = {
    rock : img_rock,
    scissor : img_scissor,
    paper : img_paper,
}
function HandIcon({value}) {
    const src = rspIcon[value]
    const alt = value
    return <img src={src} alt={alt} />
}

export default HandIcon