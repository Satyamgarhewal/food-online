import React from 'react'
import {connect} from 'react-redux'
import Add from '../components/add'
import Delete from '../components/delete'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import{Link} from 'react-router-dom'
function Cart(props){
    return(
    <div >
           
    <nav className="navbar navbar-dark bg-warning">
 <Link to= '/'>   <button className="btn btn-outline-light ml-5 mr-5" type="button">Home</button></Link>
 <form className="form-inline">
<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
<button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
</form>
 <Link to= '/cart'>   <button className="btn btn-outline-light ml-5 mr-5" type="button">Cart</button></Link>
</nav>  

<div className ="container col-md-4 mt-5 offset-md-4">
    {(props.cart.length)?(
    
    <table className = "table">
     <thead>
         <tr>
             <th>Item</th>
             <th>Quantity</th>
             <th>Price</th>
             <th>Add</th>
             <th>Delete</th>
         </tr>
     </thead>
     <tbody>
         {props.cart.map(item=>{
             return(
             <tr >
                 <td>{item.itemname}</td>
                 <td>{item.quantity}</td>
                 <td>{item.newPrice}</td>
                 <td><Add item = {item} /></td>
                 <td><Delete item = {item} /></td>
             </tr>
             )
         })}
     </tbody>
 </table>
 
 ):(<div clasname = "col-md-6 ml-5 offset-md-6">
         No items in your cart
        
     </div>)}
         {(props.cart.length)?( <h5 className ="mt-5 offset-md-3">Total - {props.total}</h5>
           
         ):(<div> </div>)}
         
         {(props.cart.length)?( <button className = "btn btn-warning mt-3 offset-md-3">Checkout</button>):(<div> </div>)}
    
    </div>
    </div>

    )
}

const mapStateToProps=(state)=>{
  
    return{
        cart:state.cart.items,
        total:state.cart.total
    }
}
export default connect(mapStateToProps) (Cart)