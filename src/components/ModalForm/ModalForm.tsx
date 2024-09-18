import React from 'react'
import style from './ModalForm.module.css'
import PaymentForm from '../PaymentForm/PaymentForm'

const ModalForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
	return (
		<div className={style.modalOverlay}>
			<div className={style.modalContent}>
				<button className={style.closeButton} onClick={onClose}>
					Закрыть
				</button>
				<PaymentForm />
			</div>
		</div>
	)
}

export default ModalForm
