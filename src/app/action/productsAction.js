import axios from 'axios'


export const setProducts=(products)=>{
    console.log('inside products', products)
    return {
        type:'SET_PRODUCTS',
        payload:products  
    }
}
export const startSetProducts = ()=>{
    return(dispatch)=>{
        console.log('inside dispatch')
        axios.get('https://cors-anywhere.herokuapp.com/https://s3-ap-southeast-1.amazonaws.com/he-public-data/smartQFood8bef5a2.json') 
        .then(response=>{
            console.log(response.data)
            const products = response.data
            dispatch(setProducts(products))
        })
        .catch(err=>{
            console.log(err)
        })
    }
  
}

