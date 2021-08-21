import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

const Main = () => {
    return App();
}

ReactDOM.render(<Main />, document.getElementById("root"));