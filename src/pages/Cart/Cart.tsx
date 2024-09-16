import React from 'react'
import { useCart } from '../../components/CartContext/CartContext'

const Cart: React.FC = () => {
	const { cart, removeFromCart, updateQuantity, clearCart } = useCart()

	const getTotalPrice = () => {
		return cart
			.reduce((total, item) => {
				return total + item.product.price * item.quantity
			}, 0)
			.toFixed(2)
	}

	return (
		<div>
			<h2>Your Cart</h2>

			{cart.length === 0 ? (
				<p>Cart is empty</p>
			) : (
				<div>
					{cart.map(item => (
						<div key={item.product.id}>
							<h3>{item.product.title}</h3>
							<img src={item.product.img} alt='' />
							{/* <p>{item.product.description}</p> */}
							<p>Price: ${item.product.price}</p>
							<p>Quantity: {item.quantity}</p>
							<p>
								Total Price: {(item.quantity * item.product.price).toFixed(2)}$
							</p>
							<button onClick={() => removeFromCart(item.product.id)}>
								Remove
							</button>
							<input
								type='number'
								value={item.quantity}
								onChange={e => updateQuantity(item.product.id, +e.target.value)}
								min='1'
							/>
						</div>
					))}
					<div>Total Price of Cart: ${getTotalPrice()}</div>
					<button onClick={clearCart}>Clear Cart</button>
				</div>
			)}
		</div>
	)
}

export default Cart
