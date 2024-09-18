import React, { useState } from 'react'
import { useCart } from '../../components/CartContext/CartContext'
import star from '../../assets/svg/star.svg'
import styles from './ListItem.module.css'
import Modal from '../Modal/Modal'

interface ProductItem {
	product: {
		id: number
		img: string
		title: string
		price: number
		rate: number
		sale: number
	}
}

const ListItem: React.FC<ProductItem> = ({ product }) => {
	const { addToCart } = useCart()
	const [isModalOpen, setModalOpen] = useState(false)

	const openModal = () => setModalOpen(true)
	const closeModal = () => setModalOpen(false)

	return (
		<>
			<div key={product.id} className={styles.listItem}>
				<img src={product.img} alt={product.title} className={styles.itemImg} />
				<div className={styles.itemBtnWrap}>
					<button className={styles.itemBtnModal} onClick={openModal}>
						Подробнее
					</button>
				</div>
				<div className={styles.itemWrapper}>
					<div className={styles.upperWrap}>
						<p className={styles.itemTitle} onClick={openModal}>
							{product.title}
						</p>
						{product.sale !== 0 ? (
							<div className={styles.priceWrap}>
								<p className={styles.itemSale}>{product.sale} ₽</p>
								<p className={styles.itemPriceOriginal}>{product.price} ₽</p>
							</div>
						) : (
							<p className={styles.itemPrice}>{product.price} ₽</p>
						)}
					</div>
					<div className={styles.underWrap}>
						<div className={styles.rateWrap}>
							<img src={star} alt='' />
							<p className={styles.itemRate}>{product.rate}</p>
						</div>
						<button
							onClick={() => addToCart(product)}
							className={styles.itemBtn}
						>
							Купить
						</button>
					</div>
				</div>
			</div>
			<Modal isOpen={isModalOpen} onClose={closeModal} product={product} />
		</>
	)
}

export default ListItem
