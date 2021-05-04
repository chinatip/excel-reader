import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

import data from './TE-data.xlsx';

const Main = () => {
    return (
        <div>
            {App(data)} 
        </div>
    );
}

ReactDOM.render(<Main />, document.getElementById("root"));