import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Greeting } from './components/Greeting'

class App extends Component {
    constructor(props) {
        super(props),
        this.state = {
            nick: '4rontender'
        }
        console.log(this.state)
    }
    render() {
        return (
            <Greeting nick={this.state.nick} />
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
);
