import React ,{Component,PureComponent,memo}from 'react';

import './App.css';

const Foo = memo(function Foo(props) {
 
    console.log('Foo render');
    return null;
  
});



class App extends Component {
   state = {
     count:0,
   }
    render(){
      return (
        <div>
          <button onClick={()=>this.setState({count:this.state.count + 1})}>add</button>
          <Foo name="Mike"></Foo>
        </div>
      )
    }
}

export default App;
