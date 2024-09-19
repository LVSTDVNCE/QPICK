import React from 'react'
import styles from './Cart.module.css'
import Heading from '../../components/Heading/Heading'
import CartTotalPrice from '../../components/CartTotalPrice/CartTotalPrice'
import CartList from '../../components/CartList/CartList'

const Cart: React.FC = () => {
	return (
		<div className={styles.cart}>
			<Heading heading={'Корзина'} color={{ color: '#1C1C27' }} />
			<div className={styles.cartWrapper}>
				<CartList />
				<CartTotalPrice />
			</div>
		</div>
	)
}

export default Cart
