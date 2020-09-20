import React, { Component } from 'react';

class Counter extends Component {
    state= {
        count = 0
    }
    render() { 
        return <div><h1>button is next</h1><button>click me</button></div>;
    }
}


export default Counter;