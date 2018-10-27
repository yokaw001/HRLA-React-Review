import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      task: ''
    }
    this.handleText = this.handleText.bind(this);
  }

  handleText(e){
    console.log(e.target.value)
  }

  render(){
    return(
      <div>
        <h1>Hello from React!</h1>
        <input type='text' onChange={this.handleText}></input>
      </div>
    )
  }
}

export default App;