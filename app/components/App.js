import React, { Component } from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), counter: 0};
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
        this.setState((state, props) => ({
            // counter: state.counter + props.increment
            counter: state.counter + 1
        }));
    }

    render() {
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <h3>Psst...you wasted {this.state.counter} seconds on this page. Silly you :)</h3>
            </div>
        );
    }
}


function Welcome(props) {
    return <h2>Hello {props.name}</h2>;
}

class App extends Component {
    render() {
        return (
            <div>
                <h1>NguyeningCode</h1>
                <Welcome name="Jurytan" />
                <Clock/>
            </div>
        );
    }
}

export default App;