import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// WAY 1
// select a location in our index.html where we have an id or root <div id="root"></div>
// const container = document.getElementById('root');

// // inside that div location <div id="root"> {create our react dom inside} </div>
// const root = ReactDOM.createRoot(container);

// //now that our react dom has been created sent inside the root id located inside the html.. we can start rendering react componenets inside the dom to display on the page
// root.render(React.createElement(App));

// we render the app component insode the react dom and it shows inside the html Document inside the <divid="root">{rendered components}</div>

//ALTERNATIVE WAY 2
// the same thing hapening above is the same thing hapening here.. it is just shorted compared to the one above
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
