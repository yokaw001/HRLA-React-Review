import React from 'react';
import List from './List.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            store: []
        }
        this.handleText = this.handleText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    render() {
        return (
            <div>
                <h1>Hello from App</h1>
                <input onChange={this.handleText} type="text"></input>
                <button onClick={this.handleSubmit} type="submit">Submit</button>
                <List store={this.state.store} delete={this.handleDelete} edit={this.handleEdit} />
            </div>
        )
    }
    handleText(event) {
        console.log(event.target.value);
        this.setState({
            text: event.target.value
        })
    }
    handleSubmit() {
        let copy = this.state.store.slice();
        let updated = copy.concat([this.state.text]);
        this.setState({
            store: updated
        })
    }
    handleDelete(index) {
        let copy = this.state.store.slice();
        copy.splice(index, 1);
        this.setState({
            store: copy
        })
    }
    handleEdit(index) {
        let copy = this.state.store.slice();
        let updatedMsg = window.prompt('');
        copy.splice(index, 1, updatedMsg);
        this.setState({
            store: copy
        })
    }

}

export default App;