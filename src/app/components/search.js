import React from 'react'
import {connect} from 'react-redux'
function Search (props){
    return(
        <div>
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
             {/* <button class="btn btn-outline-light my-2 my-sm-0" onClick={()=>{
                 
             }}>Search</button> */}
        </div>
    )
}


const mapStateToProps = (state)=>{
  return{
      products:state.products
  }
}
export default connect()(Search)