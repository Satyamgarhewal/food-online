

let cart = {
    items:[],
    total:0
}
const cartReducer= (state=cart, action)=>{
  
   switch (action.type){
       case 'ADD_ITEM':{
      
        const item = state.items.find(item=>item.itemname === action.payload.itemname)

        if(item){
           
            item.quantity += 1
            item.newPrice = item.price * item.quantity
        } else  {
           
            action.payload.quantity = 1
            action.payload.newPrice = action.payload.price * action.payload.quantity
            state.items.push(action.payload)
        }
        state.total += action.payload.price
        return {...state}
          
       }
     case 'DELETE_ITEM':{
         
        const item = state.items.find(item=>item.itemname === action.payload.itemname)
        if(item){
            item.quantity -=1
            item.newPrice  = item.price * item.quantity
            if(item.quantity <= 0){
               state.items = state.items.filter(item=>item.itemname !== action.payload.itemname)
            }
        }
        state.total -=action.payload.price
        return {...state}
     }  
       default:{
        return state
       }
   }
} 

export default cartReducer