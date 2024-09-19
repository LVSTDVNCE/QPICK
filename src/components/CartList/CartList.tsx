import { useCart } from '../../components/CartContext/CartContext'
import CartListItem from '../CartListItem/CartListItem'
import styles from './CartList.module.css'

const CartList = () => {
	const { cart } = useCart()

	return (
		<div className={styles.cartList}>
			{cart.map((item, key) => (
				<CartListItem item={item} key={key} />
			))}
		</div>
	)
}

export default CartList
