import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

const Main = () => {
    return (
        <div>
            {App()}
        </div>
    );
}

ReactDOM.render(<Main />, document.getElementById("root"));