import styles from './FooterContacts.module.css'
import VK from './../../assets/svg/VK.svg'
import TG from './../../assets/svg/Telegram.svg'
import WA from './../../assets/svg/Whatsapp.svg'

const FooterContacts = () => {
	return (
		<div className={styles.footerContacts}>
			<a href='https://vk.com/neoflex_ru' target='_blank'>
				<img src={VK} alt='' />
			</a>
			<a href='https://t.me/neoflexcareers' target='_blank'>
				<img src={TG} alt='' />
			</a>
			<a href='tel: + 79991112233' target='_blank'>
				<img src={WA} alt='' />
			</a>
		</div>
	)
}

export default FooterContacts
