import React ,{Component,useState,useMemo,useRef,useCallback,memo, PureComponent, useEffect}from 'react';



// const Counter = memo(function Counter(props){
//   console.log('counter render');
//   return (
//   <h1 onClick={props.onClick}>{props.count}</h1>
//   )
//  }
// )

class Counter extends PureComponent{
  render(){
    const {props} = this;
    return (
    <h1 onClick={props.onClick}>{props.count}</h1>
    )
  }
}

function App(props){

  const [count,setCount] = useState(0);
  const counterRef = useRef();
  const double = useMemo(()=>{
    return count * 2;
  },[count === 3]);

  let it = useRef();
  const onClick = useCallback(()=> {
      console.log('Click');
      console.log(counterRef.current);
    },[counterRef]); 

  useEffect(()=> {
    it.current = setInterval(()=> {
       setCount(count => count + 1);
    },1000);
  },[]);

  useEffect(()=> {
    if(count >= 10){
       clearInterval(it.current);
    }
  });


  return (
    <div>
      <button onClick={()=>setCount(count + 1)}>
        Click ({count})
        Double ({double})
        </button>
        <Counter ref={counterRef} count={double} onClick={onClick}></Counter>    
    </div>
  )
}

export default App;
