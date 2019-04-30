import React, { Component } from 'react';

export class Greeting extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1 className="greet text-center">Hello! I am { this.props.nick }!</h1>
            </div>
        )
    }
}
