import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            counter: 0,
            exploded: false
        };
        this.handler = this.handler.bind(this);
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

    handler(e) {
        alert('BOOM!');
        this.setState((state, props) => ({
            exploded: true
        }));
        e.preventDefault();
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
        var button_bomb = this.state.exploded ? null : <ExplodingButton handler={this.handler}/>;
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <h3>Psst...you wasted {this.state.counter} seconds on this page. Silly you :)</h3>
                {button_bomb}
            </div>
        );
    }
}



class ExplodingButton extends React.Component {
    render() {
        return (
            <button id="exploding_button" onClick={this.props.handler}>
                Don't press me...
            </button>
        )
    };
    
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