var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
var name = 'Jurytan';
let maow = 1 + 2 - 3 + 4;
const blah = <h2>This is a test of the feature. Maow = {maow}</h2>;

// ReactDOM.render( <
//     App / > ,
//     document.getElementById('app')
// );

ReactDOM.render(
    <body>
        <h1>Hello World!</h1>
        <p>This is me adding another tag</p>
        <ul>
            <li>Test 1</li>
            <li>Test 2</li>
            <li>Test 3</li>
            <li>Test 4</li>
            <li>Test 5</li> 
        </ul>
        <h3>This page belongs to {name}</h3>
        {blah}
    </body>,
    document.getElementById('app')
);