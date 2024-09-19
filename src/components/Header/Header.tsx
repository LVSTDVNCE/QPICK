import styles from './Header.module.css'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo'
import cart from '../../assets/svg/cart.svg'
import heart from '../../assets/svg/heart.svg'
import Back from '../../assets/svg/goBack.png'
import CartSum from '../CartSum/CartSum'
import FavSum from '../FavSum/FavSum'

const Header = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const goBack = () => navigate(-1)

	// Определяем, находится ли пользователь на странице "Избранное" или "Корзина"
	const isFavouritesPage = location.pathname === '/Favourites'
	const isCartPage = location.pathname === '/Cart'

	return (
		<div className={styles.header}>
			<Link to='/' className={styles.link}>
				<Logo />
			</Link>
			<div className={styles.headerWrapper}>
				{location.pathname !== '/' && (
					<button onClick={goBack} className={styles.headerBtn}>
						<img src={Back} alt='Go back' />
					</button>
				)}
				<Link
					to='/Favourites'
					className={`${styles.cartLink} ${
						isFavouritesPage ? styles.active : ''
					}`}
				>
					<img src={heart} alt='Fav' />
					<FavSum />
				</Link>
				<Link
					to='/Cart'
					className={`${styles.cartLink} ${isCartPage ? styles.active : ''}`}
				>
					<img src={cart} alt='Cart' />
					<CartSum />
				</Link>
			</div>
		</div>
	)
}

export default Header
