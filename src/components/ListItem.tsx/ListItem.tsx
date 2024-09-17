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
			<img src={product.img} alt={product.title} className={styles.itemImg} />
			<div className={styles.itemWrapper}>
				<div className={styles.upperWrap}>
					<p className={styles.itemTitle}>{product.title}</p>
					<p className={styles.itemPrice}>{product.price} ₽</p>
				</div>
				<div className={styles.underWrap}>
					<div className={styles.rateWrap}>
						<img src={star} alt='' />
						<p className={styles.itemRate}>{product.rate}</p>
					</div>
					<button onClick={() => addToCart(product)} className={styles.itemBtn}>
						Купить
					</button>
				</div>
			</div>
		</div>
	)
}

export default ListItem
