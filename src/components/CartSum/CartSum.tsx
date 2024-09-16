import { useCart } from '../CartContext/CartContext'
import styles from './CartSum.module.css'

const CartSum: React.FC = () => {
	const { getCartItemCount } = useCart()
	const itemCount = getCartItemCount()

	return itemCount > 0 ? (
		<div className={styles.cartSum}>{itemCount}</div>
	) : null
}

export default CartSum
