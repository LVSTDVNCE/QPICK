import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import style from './PaymentForm.module.css'

const paymentSchema = yup.object().shape({
	name: yup.string().required('Введите ваше имя'),
	cardNumber: yup
		.string()
		.matches(/^[0-9]{16}$/, 'Номер карты должен содержать 16 цифр')
		.required('Введите номер карты'),
	expiryDate: yup
		.string()
		.matches(
			/^(0[1-9]|1[0-2])\/([0-9]{2})$/,
			'Введите дату истечения в формате MM/YY'
		)
		.required('Введите дату истечения'),
	cvv: yup
		.string()
		.matches(/^[0-9]{3,4}$/, 'CVV должен содержать 3 или 4 цифры')
		.required('Введите CVV'),
})

interface PaymentFormValues {
	name: string
	cardNumber: string
	expiryDate: string
	cvv: string
}

const PaymentForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<PaymentFormValues>({
		resolver: yupResolver(paymentSchema),
	})

	const onSubmit = (data: PaymentFormValues) => {
		console.log(data)
		alert('Оплата прошла успешно!')
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.formStyle}>
			<div className={style.inputContainer}>
				<label>Имя на карте</label>
				<input
					{...register('name')}
					className={style.inputStyle}
					placeholder='Введите ваше имя'
				/>
				{errors.name && (
					<p className={style.errorStyle}>{errors.name.message}</p>
				)}
			</div>

			<div className={style.inputContainer}>
				<label>Номер карты</label>
				<input
					{...register('cardNumber')}
					className={style.inputStyle}
					placeholder='1234 5678 9123 4567'
				/>
				{errors.cardNumber && (
					<p className={style.errorStyle}>{errors.cardNumber.message}</p>
				)}
			</div>

			<div className={style.inputContainer}>
				<label>Дата истечения (MM/YY)</label>
				<input
					{...register('expiryDate')}
					className={style.inputStyle}
					placeholder='MM/YY'
				/>
				{errors.expiryDate && (
					<p className={style.errorStyle}>{errors.expiryDate.message}</p>
				)}
			</div>

			<div className={style.inputContainer}>
				<label>CVV</label>
				<input
					{...register('cvv')}
					className={style.inputStyle}
					type='password'
					placeholder='CVV'
				/>
				{errors.cvv && <p className={style.errorStyle}>{errors.cvv.message}</p>}
			</div>

			<button type='submit' className={style.buttonStyle}>
				Оплатить
			</button>
		</form>
	)
}

export default PaymentForm
