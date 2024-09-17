import styles from './Footer.module.css'
import Logo from '../Logo/Logo'
import VK from './../../assets/svg/VK.svg'
import TG from './../../assets/svg/Telegram.svg'
import WA from './../../assets/svg/Whatsapp.svg'
import Language from './../../assets/svg/language.svg'

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footerWrapper}>
				<Logo />
				<ul className={styles.footerList}>
					<li className={styles.listItem}>
						<a href=''>Избранное</a>
					</li>
					<li className={styles.listItem}>
						<a href=''>Корзина</a>
					</li>
					<li className={styles.listItem}>
						<a href=''>Контакты</a>
					</li>
				</ul>
				<div className={styles.footerColumn}>
					<a href=''>Условия сервиса</a>
					<div className={styles.footerLanguage}>
						<img src={Language} alt='' />
						<p className={styles.footerLang} style={{ color: '#FFA542' }}>
							Рус
						</p>
						<p className={styles.footerLang}>Eng</p>
					</div>
				</div>
				<div className={styles.footerContacts}>
					<a href=''>
						<img src={VK} alt='' />
					</a>
					<a href=''>
						<img src={TG} alt='' />
					</a>
					<a href=''>
						<img src={WA} alt='' />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Footer
