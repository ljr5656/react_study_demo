import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ClickCounter from './ClickCounter';

ReactDOM.render(
    <ClickCounter />,
    document.getElementById('root')
)

serviceWorker.unregister();
