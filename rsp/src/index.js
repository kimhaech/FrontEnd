import ReactDOM from 'react-dom';

let count = 0;
let me = '';
let other = '';
let result = '';

const w_case = {
  r : 's',
  s : 'p',
  p : 'r',
};

function getResult(me,other){
  if(count !== 0 && count%2 === 0){
    if(w_case[me] === other) 
      result = '승리';
    else if(w_case[other]=== me) 
      result =  '패배';
    else 
      result = '무승부';
    console.log(result)
  }
}

function handleClick(hand){
  console.log("가위바위보!");
  if(count%2 === 0){ // count가 2의 배수->me
    me = hand
  }
  else{
    other = hand
  }
  count++;
  getResult(me,other)
}


ReactDOM.render(
    <>
        <h1 id="title">가위바위보</h1>
        <h2>{result}</h2>
        <button onClick={handleClick('s')}>가위</button>
        <button onClick={handleClick('r')}>바위</button>
        <button onClick={handleClick('p')}>보</button>
    </>,
    document.getElementById('root')
);
