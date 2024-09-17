import { useCart } from '../CartContext/CartContext'
import styles from './CartTotalPrice.module.css'

const CartTotalPrice = () => {
	const { cart, clearCart } = useCart()

	const getTotalPrice = () => {
		return cart.reduce((total, item) => {
			return total + item.product.price * item.quantity
		}, 0)
	}

	return (
		<div className={styles.total}>
			<div className={styles.totalPrice}>Итого</div>
			<div className={styles.totalPrice}>₽ {getTotalPrice()}</div>
			<button className={styles.totalBtnForm}>Перейти к оформлению</button>
			{cart.length > 0 && (
				<button className={styles.totalBtnClear} onClick={clearCart}>
					Очистить корзину
				</button>
			)}
		</div>
	)
}

export default CartTotalPrice
