import { useSelector } from 'react-redux'
import { useActions } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Button from '../../ui/product-item/button/Button';
import Layout from '../../ui/product-item/Layout/Layout';
import ProductItem from '../../ui/product-item/ProductItem';
import styles from './Cart.module.scss'

const Cart = () => {
    const { items } = useTypedSelector(state => state.cart)
    console.log(items)
    const { removeFromCart } = useActions()

    return (
			<Layout title='Cart'>
				{items.length ? (
					<>
						<div className={styles.cart}>
							{items.map((product) => (
								<div key={product.id}>
									<ProductItem product={product}>
										<button
											onClick={() => removeFromCart(product.id)}
											className='mt-4 bg-red-600 p-1 rounded-xl text-white'>
											Remove
										</button>
									</ProductItem>
								</div>
							))}
						</div>
						<Button>Checkout</Button>
					</>
				) : (
					<div> Cart is empty! </div>
				)}
			</Layout>
		)
}

export default Cart;