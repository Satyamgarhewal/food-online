import React from 'react'
import {addItem} from '../action/cartAction'
import {connect} from 'react-redux'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'


function Add (props){
    console.log('inside add', props)
    return(
        <div>
            <button className ="btn btn-warning" onClick ={()=>{
                props.dispatch(addItem(props.item))
            }}>+</button>
        </div>
    )
}
export default connect() (Add)