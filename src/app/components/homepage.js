import React from 'react'
import {connect} from 'react-redux'
import Add from './add'
import Delete from './delete'
import {Link} from 'react-router-dom'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import Search from '../components/search'
function Homepage(props){
    return(
        <div>
           
            <nav className="navbar navbar-dark bg-warning">
         <Link to= '/'>   <button className="btn btn-outline-light ml-5 mr-5" type="button">Home</button></Link>
         {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
         <form class="form-inline">
        <Search />
   
  </form>
         <Link to= '/cart'>   <button className="btn btn-outline-light ml-5 mr-5" type="button">Cart</button></Link>

        </nav>
    
        <div className = "container">
          
            <div className = "row">
               
           {props.products.map((product, index)=>{
          
            return (

                <div className = "col-md-3 mt-5 ml-5 mr-3 ">
                <div className="card mb-5" key = {index} >
                        <div className="card-body">
                            <h5 className="card-title offset-md-4">{product.itemname.toUpperCase()}</h5>
                            <h6 className="card-subtitle mb-2 text-muted mt-2 offset-md-4">Rs {product.price}</h6>
                            <div className = "row offset-md-3">
                          <Delete item ={product}/> &nbsp; &nbsp; <h5>  {(product.quantity)?(product.quantity):(0)}</h5>  &nbsp; &nbsp;    <Add item = {product} />
                            </div>
                          
                        </div>
                        </div>
                        </div>
            )
            })} 
           
           {/* <Link to='/cart' ><button>My cart</button></Link> */}


          
           </div>
        </div>
        </div>
    )
}

const mapStateToProps =(state)=>{
    console.log('state Homepage',state)
    return {
        products:state.products,
        cart: state.cart.items,
        total:state.cart.total
    }
}
export default connect(mapStateToProps) (Homepage)