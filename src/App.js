import {useState} from 'react'; 

function App() {
  const [count, setCount]=useState(1);

function getData(val){
  val= Number(prompt("Enter a number (max 1000):"));
  val>1000? setCount(1000) : setCount(val);
}

  return (
    <div className="App">
      <div className="counter_components">
        <div className="button_main">
          <button onClick={()=>setCount(count === 0? count:count-1)} className="button1">-</button>
          <span style={{position:"relative", top:"14px"}} onClick={getData}>{count}</span>
          <button onClick={()=>setCount(count === 1000? count:count+1)} className="button2">+</button>
       </div>
      </div>
    </div>
  );
}

export default App;
