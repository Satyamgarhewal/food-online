import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../src/app/store/configureStore'
import App from './App';
import {Provider} from 'react-redux'
import {startSetProducts} from '../src/app/action/productsAction'

const store  = configureStore()

// console.log(store.getState())
store.dispatch(startSetProducts())
// store.subscribe(()=>{
//     console.log(store.getState())
// })

const ele = (<Provider store = {store}>
                    <App />
</Provider> )
ReactDOM.render(ele, document.getElementById('root'));
