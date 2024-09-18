import { useCart } from '../CartContext/CartContext'
import styles from './CartTotalPrice.module.css'

const CartTotalPrice = () => {
	const { cart, clearCart } = useCart()

	const getTotalPrice = () => {
		return cart.reduce((total, item) => {
			const price =
				item.product.sale !== 0 ? item.product.sale : item.product.price
			return total + price * item.quantity
		}, 0)
	}

	const handleClearCart = () => {
		const confirmed = window.confirm('Вы уверены, что хотите очистить корзину?')
		if (confirmed) {
			clearCart()
		}
	}

	return (
		<div className={styles.total}>
			<div className={styles.totalPrice}>Итого</div>
			<div className={styles.totalPrice}>₽ {getTotalPrice()}</div>
			<button className={styles.totalBtnForm}>Перейти к оформлению</button>
			{cart.length > 0 && (
				<button className={styles.totalBtnClear} onClick={handleClearCart}>
					Очистить корзину
				</button>
			)}
		</div>
	)
}

export default CartTotalPrice
