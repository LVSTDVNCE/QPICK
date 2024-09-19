import React from 'react'
import Basket from '../../assets/svg/basket.svg'
import { FavItem } from '../../types/types'
import styles from './FavListItem.module.css'
import { useFav } from '../FavContext/FavContext'

interface Item {
	item: FavItem
}

const FavListItem: React.FC<Item> = ({ item }) => {
	const { removeFromFav } = useFav()

	return (
		<div key={item.prod.id} className={styles.cartItem}>
			<img
				src={item.prod.img}
				alt={item.prod.title}
				className={styles.cartItemImg}
			/>
			<p className={styles.cartItemTitle}>{item.prod.title}</p>
			<div className={styles.priceWrapper}>
				{item.prod.sale !== 0 ? (
					<div className={styles.ItemPrices}>
						<p>{item.prod.sale} ₽</p>
						<p className={styles.ItemOriginalPrice}>{item.prod.price} ₽</p>
					</div>
				) : (
					<p className={styles.cartItemPrice}>{item.prod.price} ₽</p>
				)}
			</div>
			<button
				className={styles.cartItemBtnClear}
				onClick={() => removeFromFav(item.prod.id)}
			>
				<img src={Basket} alt='Remove' />
			</button>
		</div>
	)
}

export default FavListItem
