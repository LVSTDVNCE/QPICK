import styles from './FooterContacts.module.css'
import VK from './../../assets/svg/VK.svg'
import TG from './../../assets/svg/Telegram.svg'
import WA from './../../assets/svg/Whatsapp.svg'

const FooterContacts = () => {
	return (
		<div className={styles.footerContacts}>
			<a href='https://vk.com/neoflex_ru'>
				<img src={VK} alt='' />
			</a>
			<a href='https://t.me/neoflexcareers'>
				<img src={TG} alt='' />
			</a>
			<a href='tel: + 79991112233'>
				<img src={WA} alt='' />
			</a>
		</div>
	)
}

export default FooterContacts
