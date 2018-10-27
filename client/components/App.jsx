import React from 'react';
import List from './List.jsx';

let temp = [];
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      text: '',
      store:[]
    }
    this.handleText = this.handleText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    temp.push(this.state.text)
    this.setState({
      store: temp
    })
  }

  handleText(e){
    this.setState({
      text: e.target.value
    })
  }

  render(){
    return(
      <div>
        <h1>Hello from React!</h1>
        <input type='text' onChange={this.handleText}></input>
        <button onClick={()=>{this.handleSubmit()}}>Submit</button>
        <List text={this.state.store}/>
      </div>
    )
  }
}

export default App;