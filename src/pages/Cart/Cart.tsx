import React from 'react'
import { useCart } from '../../components/CartContext/CartContext'
import styles from './Cart.module.css'
import Heading from '../../components/Heading/Heading'
import Basket from '../../assets/svg/basket.svg'
import CartTotalPrice from '../../components/CartTotalPrice/CartTotalPrice'

const Cart: React.FC = () => {
	const { cart, removeFromCart, updateQuantity } = useCart()

	return (
		<div className={styles.cart}>
			<Heading heading={'Корзина'} color={{ color: '#1C1C27' }} />
			<div>
				{cart.map(item => (
					<div key={item.product.id}>
						<img src={item.product.img} alt='' />
						<h3>{item.product.title}</h3>
						<p>{item.product.price} ₽</p>
						<p>{item.quantity}</p>
						<p>{item.quantity * item.product.price} ₽</p>
						<button onClick={() => removeFromCart(item.product.id)}>
							<img src={Basket} alt='' />
						</button>
						<input
							type='number'
							value={item.quantity}
							onChange={e => updateQuantity(item.product.id, +e.target.value)}
							min='1'
						/>
					</div>
				))}
				<CartTotalPrice />
			</div>
		</div>
	)
}

export default Cart
