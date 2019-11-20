import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import {connect} from 'react-redux'
import {deleteItem} from '../action/cartAction'
function Delete (props){
    return(
        <div>
            {/* <button onClick ={()=>{
                props.dispatch(deleteItem(props.item))
            }}>-</button>
             */}
             <button className = "btn btn-warning " onClick ={()=>props.dispatch(deleteItem(props.item))}>-</button>
        </div>
    )
}
export default connect()(Delete)