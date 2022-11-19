import axios from "axios"
import { IProduct, IProductResponse } from "../types/ProductInterface"

axios.defaults.baseURL = "https://dummyjson.com"

export const ProductService = {
    async getProducts (){
        const response = await axios.get<IProductResponse>('/products', {
            params: {
                limit: 100
            }
        })
        return response.data
    },


    async getProductById (id: string){
        const response = await axios.get<IProduct>(`/products/${id}`)
        return response.data
    },


}