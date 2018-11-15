// Your code here!
import React from 'react';
import ReactDOM from 'react-dom';


/*
The onClick listener invokes our bound "increment" function
Our "increment" function asks the Counter component to update its state by invoking this.setState
The Counter component generates a new state object by merging the requested change into the previous state
, and reassigns this.state to be that new state object
The Counter component executes its "render" method with the new state
*/
//Note that state is always a JavaScript object. 
class Counter extends React.Component {
    constructor() {
        super()
        // we gave our state some default value
        this.state = {
            count: 0
        }
        //Bind the this context of "increment" to be the context of the component in the constructor,
        //A better strategy is to bind the method on the constructor of the component. This way, we only ever create one bound version of the method.
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.add5 = this.add5.bind(this)
        this.decrement5 = this.decrement5.bind(this)
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }
    add5() {
        this.setState({
            count: this.state.count + 5
        })
    }
    decrement5() {
        this.setState({
            count: this.state.count - 5
        })
    }
    render() {
        return (
            <div id="container">
                <div id ="navbar">Counter.js</div>
                <div id="counter">
                    <h1>{this.state.count}</h1>
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                    <button onClick={this.add5}>Add 5</button>
                    <button onClick={this.decrement5}>Decrement 5</button>
                </div>
            </div>
        )
    }
}



ReactDOM.render(<Counter />, document.getElementById('app'));