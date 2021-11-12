import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // because app is a js file, no need to mention the extension

// This file will be executed when we run "npm start"
ReactDOM.render(
  <App />,
  document.getElementById('root')
); // insert html (1st argument) to the div with id "root" in ../public/index.html

