import React, { useEffect, useState } from 'react'
import styles from './Modal.module.css'
import star from './../../assets/svg/star.svg'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	product: {
		img: string
		title: string
		price: number
		sale: number
		rate: number
	}
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product }) => {
	const [isVisible, setIsVisible] = useState(isOpen)
	const [isAnimating, setIsAnimating] = useState(false)

	useEffect(() => {
		if (isOpen) {
			setIsVisible(true)
			setTimeout(() => setIsAnimating(true), 10)
		} else {
			setIsAnimating(false)
			const timer = setTimeout(() => setIsVisible(false), 300)
			return () => clearTimeout(timer)
		}
	}, [isOpen])

	if (!isVisible) return null

	return (
		<div
			className={`${styles.modalOverlay} ${isAnimating ? styles.open : ''}`}
			onClick={onClose}
		>
			<div className={styles.modalContent} onClick={e => e.stopPropagation()}>
				<img
					src={product.img}
					alt={product.title}
					className={styles.modalImg}
				/>
				<h2 className={styles.modalTitle}>{product.title}</h2>
				<div className={styles.modalPriceRate}>
					<p className={styles.modalPrice}>
						{product.sale !== 0 ? (
							<>
								<span className={styles.modalSale}>{product.sale} ₽</span>
								<span className={styles.modalPriceOriginal}>
									{product.price} ₽
								</span>
							</>
						) : (
							`${product.price} ₽`
						)}
					</p>
					<p className={styles.modalRate}>
						<img src={star} alt='' />
						{product.rate}
					</p>
				</div>
				<button onClick={onClose} className={styles.modalCloseBtn}>
					Закрыть
				</button>
			</div>
		</div>
	)
}

export default Modal
