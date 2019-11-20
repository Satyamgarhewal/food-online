import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import productsReducer from  '../reducers/productsReducer'
import cartReducer from '../reducers/cartReducer'
const configureStore=()=>
{
    const store = createStore(combineReducers({
        products : productsReducer,
        cart: cartReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore