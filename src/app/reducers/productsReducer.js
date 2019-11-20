// const initialProducts = {
//     originalProduct:[],
//     filteredProduct:[]
// }
 const productsReducer = (state=[], action)=>{
     console.log('payload', action.payload)
    switch(action.type){
        case 'SET_PRODUCTS':{
            return [...action.payload]
        }
        default:{
            return state
        }
    }
}
export default productsReducer