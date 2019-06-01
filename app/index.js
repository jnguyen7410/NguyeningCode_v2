var React = require('react');
var ReactDOM = require('react-dom');
import App from './components/App';


// let shouldHide = "hidden";
// const user = {
//     firstName: 'Jurytan',
//     lastName: 'Nguyen',
//     idNum: 1
// };

// function formatName (user) {
//     return user.firstName + ' ' + user.lastName;
// }

// // const blah = <h2 hidden="hidden">This is a test of the feature. Jurytan's ID = {user.idNum}</h2>;
// const blah = <h2 hidden={shouldHide}>This is a test of the feature. Jurytan's ID = {user.idNum}</h2>;

// // ReactDOM.render( <
// //     App / > ,
// //     document.getElementById('app')
// // );

// const element = React.createElement(
//     'h1',
//     {className: 'greeting'},
//     'Hello World for the second time!'
// );



// // ReactDOM.render(
// //     <body>
// //         <h1>Hello World!</h1>
// //         <p>This is me adding another tag</p>
// //         <ul>
// //             <li>Test 1</li>
// //             <li>Test 2</li>
// //             <li>Test 3</li>
// //             <li>Test 4</li>
// //             <li>Test 5</li> 
// //         </ul>
// //         <h3>This page belongs to {formatName(user)}</h3>
// //         {blah}
// //         {element}
// //         <div id="test"></div>
// //     </body>,
// //     document.getElementById('root')
// // );

ReactDOM.render(
    <App />,
    document.getElementById('root')
);