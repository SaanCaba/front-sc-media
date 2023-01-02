import axios from 'axios'
type Product ={
        name: string
        img: string
        category: string
}

export async function publishProduct(product: Product){
    try {
   let data = await axios.post('http://localhost:3001/newproduct', product)
    return data
    } catch (error) {
    console.log(error)
    return error
    }
}