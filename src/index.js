import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// To get request globally to all file in the project
axios.interceptors.request.use(requestData => {
    console.log(requestData);

    // Edit request config
    return requestData
}, error => {
    // Error wich show when there's no internet access
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(responseData => {
    console.log(responseData);

    // Edit request config
    return responseData
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
