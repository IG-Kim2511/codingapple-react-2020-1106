import logo from './images/logo.svg';
import './App.css';

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
        <p> edit <code>src/app.js</code> and save to load <br></br></p>
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


function App(){

  return(
    <div>
      <App2/>      
      <App3/>      

    </div>
      // <App4/>
  // <App5/>
  // <App6/>
  // <App7/>
  // <App8/>
  // <App9/>      
  // <App10/>      
  // <App11/>      
  // <App12/>      
  // <App13/>      
  // <App14/>      
  )
}

export default App;
