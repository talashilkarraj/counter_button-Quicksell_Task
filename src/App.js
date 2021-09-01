import {useState} from 'react'; 

function App() {
  const [count, setCount]=useState(1);
  // const [data, setData]=useState(null);

function getData(val){
  val= Number(prompt());
  val>1000? setCount(1000) : setCount(val);
  // if (count>1000)
  // {
  //   setCount(1000);
  // }
}

  return (
    <div className="App">
      <div className="counter_components">
        {/* <button onClick={()=>setCount(count === 0? count+1-1:count-1)} className="button1">-</button>
        <div className="count" onClick={()=>{document.getElementsByClassName("count").innerHTML=prompt("number",)}}>{count}</div>
        <button onClick={()=>setCount(count === 6? count+1-1:count+1)} className="button2">+</button> */}
        <div className="button_main">
          <button onClick={()=>setCount(count === 0? count:count-1)} className="button1">-</button>
          <span style={{position:"relative", top:"20px"}} onClick={getData}>{count}</span>
          <button onClick={()=>setCount(count === 1000? count:count+1)} className="button2">+</button>
       </div>
      </div>
    </div>
  );
}



export default App;
