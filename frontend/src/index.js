import React from 'react';
import reconciler from './reconciler';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const render = (tree, target) => {
    console.log('tree: ', tree);
    console.log('target: ', target);
    const container = reconciler.createContainer(target);
    // container.updateContainer(tree, container);
};

render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
