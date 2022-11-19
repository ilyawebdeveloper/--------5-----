import { FC } from "react";
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { ProductService } from "../../../services/ProductService";
import Layout from "../../ui/product-item/Layout/Layout";
import Button from "../../ui/product-item/button/Button";
import Gallery from "./gallery/Gallery";
import { useActions } from "../../../hooks/useAction";
import { useTypedSelector } from "../../../hooks/useTypedSelector";


const Product: FC = () => {

    const params = useParams()

    const productId = params.id;

    const { data: product, isLoading } = useQuery(
        ['product', productId ],
        () => ProductService.getProductById(productId || ''), 
    )

    const { items } = useTypedSelector(state => state.cart)
    const {removeFromCart, addToCart} = useActions()

    const isInCard = items.some(item => item.id === Number(productId))

    if(!product){
        return <Layout><div>Product not found...</div></Layout>
    }

    return ( 
        <Layout>
            {isLoading && <div>Loading...</div>}
            <Gallery images={product.images}/>
            <h1 className='text-3xl font-semibold mb-2 mt-4'>{product.title}</h1>
            <div className='text-lg'>{new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0
                }).format(product.price)}
            </div>
            <Button onClick = {() => 
                isInCard 
                    ? removeFromCart(Number(productId)) 
                    : addToCart(product)}
            >
                {isInCard
                    ? 'This product is already in cart' 
                    : 'Add to cart'
                }
            </Button>
        </Layout> 
    );
}

export default Product;