import React from 'react';
import Homepage from '../src/app/components/homepage'
import {Route,BrowserRouter} from 'react-router-dom'
import Cart from '../src/app/components/cart'
function App() {
  return (
<BrowserRouter>
  <div>
    <Route path ='/' component = {Homepage} exact = {true} />
    <Route path = '/cart' component = {Cart} />
  </div>
  </BrowserRouter>
  );
}

export default App;
