import React from 'react';
import List from './List.jsx';

let temp =[];
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      text:'',
      store:[]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

//push into array to store messages, this should only be done because its not doing a request from a database
  handleSubmit(){
    temp.push(this.state.text)
    this.setState({
      store: temp
    })
    // console.log(this.state.store)
  }//utilizes built in react function onchange to account for every letter type
  handleText(e){
    this.setState({
      text: e.target.value
    })
  }
  //delete the task at hand, pass this down to entry to be ran on click
  handleDelete(index){
    //delete based on selected index, set the state of text back to string to rerender every time the delete button is clicked
    this.state.store.splice(index, 1);
    //reset the state to render instantly
    this.setState({
      text: ''
    })
  }

  handleEdit(index){
    //add window.prompt as variable to store anything the user types in prompt
    let newTask = window.prompt('')
    //replace the original value in the array with the new value that the user created in prompt
    this.state.store.splice(index, 1, newTask)
    //reset the state to render instantly
    this.setState({
      text: ''
    })
  }


  render(){
    return (
      <div>
        <h1>
          Hello from React!
        </h1>
        <input type='text' onChange={this.handleText}></input>
        <button onClick={()=>{this.handleSubmit()}}>Submit</button>
        <List text={this.state.store} delete={this.handleDelete} edit={this.handleEdit}/>
      </div>
    )
  }
}
export default App;