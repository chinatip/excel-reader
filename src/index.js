import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

import data from './wendy-data.xlsx';

const Main = () => {
    window.data = data;
    return (
        <div>
            {App(data)} 
        </div>
    );
}

ReactDOM.render(<Main />, document.getElementById("root"));