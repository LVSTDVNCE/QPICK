import React from 'react'
import { useCart } from '../../components/CartContext/CartContext'
import star from '../../assets/svg/star.svg'
import styles from './ListItem.module.css'

interface ProductItem {
	product: {
		id: number
		img: string
		title: string
		price: number
		rate: number
	}
}

const ListItem: React.FC<ProductItem> = ({ product }) => {
	const { addToCart } = useCart()
	return (
		<div key={product.id} className={styles.listItem}>
			<img src={product.img} alt={product.title} />
			<div className={styles.itemWrapper}>
				<h3>{product.title}</h3>
				<p>{product.price} ₽</p>
				<img src={star} alt='' />
				<button onClick={() => addToCart(product)}>Купить</button>
			</div>
		</div>
	)
}

export default ListItem
