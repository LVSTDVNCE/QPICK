import style from './Conditions.module.css'
import Heading from '../../components/Heading/Heading'

const Conditions = () => {
	return (
		<main className={style.conditions}>
			<Heading heading={'Условия сервиса'} color={{ color: '#1C1C27' }} />
			<ul className={style.conditionsList}>
				<li>1. ОСНОВНЫЕ ОПРЕДЕЛЕНИЯ...</li>
				<li>2. ОБЩИЕ ПОЛОЖЕНИЯ...</li>
				<li>3. РЕГИСТРАЦИЯ В ИНТЕРНЕТ-МАГАЗИНЕ...</li>
				<li>4. ОФОРМЛЕНИЕ И ВЫПОЛНЕНИЕ ЗАКАЗА...</li>
				<li>5. ОПЛАТА ТОВАРА...</li>
				<li>6. ДОСТАВКА...</li>
				<li>7. ВОЗВРАТ ТОВАРА...</li>
				<li>8. ГАРАНТИИ И ОТВЕТСТВЕННОСТЬ...</li>
				<li>9. КОНФИДЕНЦИАЛЬНОСТЬ И ЗАЩИТА ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ...</li>
				<li>10. ПРОЧИЕ УСЛОВИЯ...</li>
			</ul>
		</main>
	)
}

export default Conditions
