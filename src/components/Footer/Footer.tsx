import styles from './Footer.module.css'
import Logo from '../Logo/Logo'
import Language from './../../assets/svg/language.svg'
import { Link } from 'react-router-dom'
import FooterContacts from '../FooterContacts/FooterContacts'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerWrapper}>
				<Link to='/' className={styles.link}>
					<Logo />
				</Link>
				<ul className={styles.footerList}>
					<li className={styles.listItem}>
						<Link to='/Favourites'>Избранное</Link>
					</li>
					<li className={styles.listItem}>
						<Link to='/Cart'>Корзина</Link>
					</li>
					<li className={styles.listItem}>
						<Link to='/Contacts'>Контакты</Link>
					</li>
				</ul>
				<div className={styles.footerColumn}>
					<Link to='Conditions'>Условия сервиса</Link>
					<div className={styles.footerLanguage}>
						<img src={Language} alt='' />
						<p className={styles.footerLang} style={{ color: '#FFA542' }}>
							Рус
						</p>
						<p className={styles.footerLang}>Eng</p>
					</div>
				</div>
				<FooterContacts />
			</div>
		</footer>
	)
}

export default Footer
