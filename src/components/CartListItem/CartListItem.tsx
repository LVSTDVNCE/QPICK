import React from 'react'
import { useCart } from '../../components/CartContext/CartContext'
import Basket from '../../assets/svg/basket.svg'
import { CartItem } from '../../types/types'
import styles from './CartListItem.module.css'

interface Item {
	item: CartItem
}

const CartListItem: React.FC<Item> = ({ item }) => {
	const { removeFromCart, updateQuantity } = useCart()

	const handleDecrease = () => {
		if (item.quantity > 1) {
			updateQuantity(item.product.id, item.quantity - 1)
		}
	}

	const handleIncrease = () => {
		updateQuantity(item.product.id, item.quantity + 1)
	}

	return (
		<div key={item.product.id} className={styles.cartItem}>
			<img src={item.product.img} alt='' className={styles.cartItemImg} />
			<p className={styles.cartItemTitle}>{item.product.title}</p>
			<p className={styles.cartItemPrice}>{item.product.price} ₽</p>
			<p className={styles.cartItemTotal}>
				{item.quantity * item.product.price} ₽
			</p>
			<button
				onClick={() => removeFromCart(item.product.id)}
				className={styles.cartItemBtnClear}
			>
				<img src={Basket} alt='' />
			</button>
			<div className={styles.quantityControls}>
				<button
					onClick={handleDecrease}
					className={styles.cartItemBtn}
					disabled={item.quantity === 1}
					style={{ paddingBottom: '5px' }}
				>
					–
				</button>
				<span className={styles.quantity}>{item.quantity}</span>
				<button
					onClick={handleIncrease}
					className={styles.cartItemBtn}
					style={{ paddingTop: '2px' }}
				>
					+
				</button>
			</div>
		</div>
	)
}

export default CartListItem
