import { FC, useState, useEffect } from "react";
import { ProductService } from "../../../services/ProductService";
import { useQuery } from "@tanstack/react-query";
import styles from "./Home.module.scss"
import ProductItem from "../../ui/product-item/ProductItem";
import Layout from "../../ui/product-item/Layout/Layout";

const Home: FC = () => {

    const {data: products, error, isLoading} = useQuery(["products"], () => ProductService.getProducts(), {
        select: ({products}) => products
    })

    // const [products, setProducts] = useState<IProduct[]>([])
    // const [error, setError] = useState('')
    // const [isLoading, setLoading] = useState(true)

    // useEffect(() => {
    //     const fetch = async() => {
    //         try {
    //             const {products} = await ProductService.getProducts()
    //             setProducts(products)
    //         }
    //         catch(error: any) {
    //             setError(error)
    //         } 
    //         finally {
    //             setLoading(false)
    //         }
    //     }

    //     fetch();
    // }, [])
    

    return (
        <Layout title="Shop the collection">
            {isLoading ? (
                <div className="text-blue-400 text-2xl">Loading...</div> 
            ) :   products?.length ? (
                    <div className={styles.wrapper}>
                        {products.map(product => (
                        <ProductItem product={product} key={product.id} />
                        ))}
                    </div>
            ) : (<div> Products not found! </div>
            )}
        </Layout>
    )
}

export default Home;