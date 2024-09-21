import styles from './Contacts.module.css'
import FooterContacts from '../../components/FooterContacts/FooterContacts'
import Heading from '../../components/Heading/Heading'

const Contacts = () => {
	return (
		<main className={styles.contacts}>
			<Heading heading={'Контакты'} color={{ color: '#1C1C27' }} />
			<FooterContacts />
		</main>
	)
}

export default Contacts
