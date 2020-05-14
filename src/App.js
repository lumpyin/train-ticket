import React ,{Component,useState,useMemo,useRef,useCallback,memo, PureComponent, useEffect}from 'react';



// const Counter = memo(function Counter(props){
//   console.log('counter render');
//   return (
//   <h1 onClick={props.onClick}>{props.count}</h1>
//   )
//  }
// )




function useCount(defaultCount){
  const [count,setCount] = useState(defaultCount);
  let it = useRef();
  
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

  return [count,setCount];

}

function useCounter(count){
  const size = useSize();
  return(
  <h1>{count},{size.width}x{size.height} </h1>
  )
}

function useSize(){
  const [size,setSize] = useState({
    width:document.documentElement.clientWidth,
    height:document.documentElement.clientHeight
  })

  const onResize = useCallback(()=> {
    setSize({
      width:document.documentElement.clientWidth,
      height:document.documentElement.clientHeight
    })
  },[]);

  useEffect(()=> {
    window.addEventListener('resize',onResize,false);
    return ()=> {
      window.removeEventListener('resize',onResize,false);
    }
  },[]);
  return size;
}

function App(props){

  const [count,setCount] = useCount(0);
  const Counter = useCounter(count);
  const size = useSize();

  return (
    <div>
      <button onClick={()=>setCount(count + 1)}>
        Click ({count}), {size.width}x{size.height}
       
        </button>
        {Counter}    
    </div>
  )
}

export default App;
