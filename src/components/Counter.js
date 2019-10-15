import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
        console.log('Im in the CONSTRUCTORRRRR of de Counter.js');
    }

    counter = () => {
        this.setState( (prevState) => {
            return{
                count: prevState.count + 1
            }
        });
    }

    componentDidMount(){
        this.timer = setInterval(this.counter, 100);
        console.log('Component Did Mount');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('Component counter updated from: ', prevState.count);
    }

    componentWillUnmount(){
        console.log("*********** Component Counter is UNMOUNTED!! ***************");
        clearInterval(this.timer);
    }

    render() {
        console.log('I am in the RENDER of the Counter');
        return (
            <h1> {this.state.count}</h1>
        );
    }
}

export default Counter;