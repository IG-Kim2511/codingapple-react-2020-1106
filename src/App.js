import logo from './images/logo.svg';
import './App.css';

import React,{useState}from 'react';

function App2() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt = "logo"></img>
        <p>
          Edit <code>src/App.js</code> and save to reload.
          IG Kim

        </p>
        <p> edit <code>src/app.js</code> aoad <br></br></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a className="app-link">learn</a>
      </header>
    </div>
  );
}

// 03 jsx html making
// htmlnono .  jsx html 과 같음. 다만 react.jsx도 js. 보토오 {} className App.css {} function image, classNme  
// style  css
// object{}  {''}
//  fontSize
// style {} 변수화sdf

function App3(){
  var posts = 'aaa bbb ccc'
   
  function func(){
    return 100

  }

  var post2 = {color:'blue', fontSize:  "30px"}
  return(
    <div>
    <div className = 'black-nav'> 03 jsx</div>
    // 1
    <h3>{posts}</h3>

    <h4> {func}</h4>
    3
    <img src={logo} className="img1"></img>
    4
    <h4 className="{posts}">roqkf blog</h4>

    </div>
  )
}
// 04 state
// data variable or this.state.es5 destructureing stage
// a=10, b=100===

// usestate('mancoat');
// useState es6 destructuring 
// let[state, setState] = useStae

// 3. array text number array Object

function App4(params) {
  
  var[a,b] = [10,100];

  let [state,setState]=useState('mancoat');
  let [state2,setState2]=useState('mancoat','manwlq');

let posts = 'variable'

  return(
    <div>  
      <div className=''>
        <h3>{posts}</h3>
        <p></p>
      </div>
      <div className=''>
        <h3>{state}</h3>
        <p></p>
      </div>
      <div className=''>
        <h3>{state2[1]}</h3>
        <p></p>
      </div>
      <div>fin</div>
    </div>    
     )
}

// 5 버튼개발 state set



function App5() {

  // (2)-1
  let [state, state변경] = useState(0); 

  return (
    <div className="App">
    <div className="black-nav">05(좋아요버튼 만들기) 버튼에 기능개발을 해보자 & state변경하는 법</div>
      <div className="list">
        <h3>
        // (1)
         <button onClick={() => { console.log(1); }}> console.log </button>
        //  (2)-2
         <button onClick={() => { state변경(state + 1); }}> +1 </button>
        <p> 숫자표시: {state}</p>
       </h3>
      </div>
     </div>
  );
}

function App6(){
let [글state,set글state]=useState([11,22,33]);

function 제목바꾸기(){
  set글state([111,222,333]);
}
// ()3

function 제목바꾸기2(){
  let newArray = [...글state]
  newArray[0]='girl coat'
  set글state(newArray);
}
  return(
    <div>
      <p className="black-nav">6</p>
      <button onClick={제목바꾸기}>change</button>

      <h3>changed: {글state}</h3>

      <button onClick={제목바꾸기2}>change2</button>
   

      <h3>changed: {글state}</h3>




    </div>
  )
}



function App7(){
  return(
    <div>
      <p className="black-nav">7</p>

      <Modal></Modal>

    </div>
  )
}

function Modal(){
  return(
    <div>
    <p>
    'modal'</p>
    </div>
  )
}

// Conditional rendering
function App8(){
  let [modal,setModal]=useState(false);

  return(
    <div>
      <p className="black-nav">new</p>
      <Modal></Modal>

      // 1.2.3.abs
      {
        modal===true
        ?<Modal8></Modal8>
        : null
      }

// 4
<button onClick={()=>{setModal(true)}}>button</button>
<button onClick={()=>{setModal(!modal)}}>button</button>


    </div>
  )
}
function Modal8(){
  return(
    <div>
    <p>
    'modal8'</p>
    </div>
  )
}

// map();
function App9(){
  var array  = [2,3,4]
var newArray = array.map(function(a){return a*2})
console.log(newArray)
// 2
let[state,setstate]=useState([1,2,3]);

// 5
let [state5,setstate5] = useState(0);

// 6. for loop
function forloop(){
  var array=[];
  for(let i = 0; i<3; i++){
    array.push( <div>for loop</div>); }
    return array
}


  return(
    <div>
    <p className="black-nav"> 09 .map( ): 많은 div들을 반복문으로 줄이고 싶은 충동이 들 때</p>
    // 2.abs
    {
      state.map(function(){
        return <div>return1</div>
      })
    }
    // 
    {
      //  { }  
      // ; 안쓰게 조심

      state.map(()=>{
        return <div>map</div>
      })
    }
    
    // 2-3
    {
      [1,2].map(function(){
        return <div>2times</div>
      })
    }

    // 3
    {
      state.map(function(){
        return(
          <div>
          <h3>{state[1]}</h3>
          </div>
        )
      })
    }

    // 5. 
    {
      state.map(function(a){

        return(
    <div>
    <h3> {a} </h3>
    <button onClick={()=>{ setstate5(state5+1)}}>{state5}</button>
    </div>

        )
      })
    }
    // 1.4.abs
    {

      state.map(function(a){
        return(
          <div>
          <h3>{a}</h3>
          </div>
      )

      })
    }
    // 6
    {forloop()}
    </div>
  )
 
}


// 
function App10(){
let[state,setState]=useState(['man',2,3]);

  return(
    <div>
      <p className="black-nav">10</p>

      <Modal10 statep={state}></Modal10>
    </div>
  )
}

function Modal10(props){
  return(
    <div>
    <p>    'modal'</p>

    <p>title{props.statep[1]}</p>
    </div>
  )
}

// 11
function App11(){
// 1-2
let[clicked제목,clicked제목변경]=  useState(0);
  // 1-3
  let [글제목, 글제목변경] = useState(["남자", "강남", "파이썬"]);

  return(
    <div>
      <p className="black-nav">11</p>
      
<button onClick={()=>{clicked제목변경(0)}}> button1</button>
<button onClick={()=>{clicked제목변경(1)}}> button1</button>
<button onClick={()=>{clicked제목변경(2)}}> button1</button>

<Modal11 props글제목={글제목} propsclicked제목={clicked제목}></Modal11>

// 2
{
  글제목.map(function (글,i) {
    return(
      <div className="list">
      <button onClick={ ()=>{ clicked제목변경(i) } } >{글}  </button>
      </div>
    ) })
 }

//  
{
  글제목.map((a,i)=>{
    return(
      <div>
      <button onClick={()=>{clicked제목변경(i)}}> {a}</button>
      </div>
    )

  })
}
 


    </div>


  )

}


function Modal11(props){
  return(
    <div>
    <p>    'modal'</p>
    <h2>title: {props.props글제목[props.propsclicked제목]}</h2>
    </div>
  )
}


// 
function App55(){
  return(
    <div>
      <p className="black-nav">new</p>
      <Modal55></Modal55>
    </div>
  )
}

function Modal55(){
  return(
    <div>
    <p>
    'modal'</p>
    </div>
  )
}


function App(){

  return(
    <div>
      <App2/>      
      <App3/>      
      <App4/>
       <App5/>
       <App6/>
       <App7/>
       <App8/>
       <App9/>
       <App10/>      
       <App11/>      
    </div>
   
  // <App12/>      
  // <App13/>      
  // <App14/>      
  )
}

export default App;
