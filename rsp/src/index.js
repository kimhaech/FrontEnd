import ReactDOM from 'react-dom';

let count = 0;
let me = '';
let other = '';
let result = 'ql ';

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

function handleClick1(){
  console.log("가위바위보!");
  if(count%2 === 0){ // count가 2의 배수->me
    me = 's'
  }
  else{
    other = 's'
  }
  count++;
  getResult(me,other)
}
function handleClick2(){
  console.log("가위바위보!");
  if(count%2 === 0){ // count가 2의 배수->me
    me = 'r'
  }
  else{
    other = 'r'
  }
  count++;
  getResult(me,other)
}
function handleClick3(){
  console.log("가위바위보!");
  if(count%2 === 0){ // count가 2의 배수->me
    me = 'p'
  }
  else{
    other = 'p'
  }
  count++;
  getResult(me,other)
}


ReactDOM.render(
    <>
        <h1 id="title">가위바위보</h1>
        <h2>{result}</h2>
        <button onClick={handleClick1}>가위</button>
        <button onClick={handleClick2}>바위</button>
        <button onClick={handleClick3}>보</button>
    </>,
    document.getElementById('root')
);
