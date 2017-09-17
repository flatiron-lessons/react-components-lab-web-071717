import React from 'react';
import ReactDOM from 'react-dom';

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const p1 = React.createElement('p', {}, 'Two grannies having the time of their life!'); 
const p2 = React.createElement('p', {}, 'Passengers:');
const ul = React.createElement('ul', {}, [
  React.createElement('li', {}, 'Agnes'),
  React.createElement('li', {}, 'Muriel')
  ]
);

// Define these exported classes
export class OlderCoaster extends React.Component {render() {
    return React.createElement('div', {className: 'oldercoaster'}, [p1, p2, ul])
  }
};
export class InFrontOfYou extends React.Component {
  render() {
    return React.createElement('div', {}, [
      React.createElement('p', {}, 'You shouldn\'t look too far.'),
      React.createElement('p', {}, 'Sometimes, the solution is right in front of you.')
      ]
    )
  }
};
export class ButcherShop extends React.Component {  
  render() {
    return React.createElement('div', {className: 'butcher-shop'}, [
      React.createElement('p', {}, "Hello! We have the following products for sale today:"),
      React.createElement('ul', {}, [
        React.createElement('li', {}, 'Tenderloin'),
        React.createElement('li', {}, 'Short ribs'),
        React.createElement('li', {}, 'Beef shin'),
        React.createElement('li', {}, 'Ribeye')
        ]
      )]
    )
  }};



// BUTCHER_PRODUCTS.forEach((product) => { React.createElement('li', {}, product }

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('root')
);