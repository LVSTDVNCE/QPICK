import styles from './Contacts.module.css'
import FooterContacts from '../../components/FooterContacts/FooterContacts'

const Contacts = () => {
	return (
		<div className={styles.contacts}>
			<h2 className={styles.contactsHeading}>Contacts</h2>
			<FooterContacts />
		</div>
	)
}

export default Contacts
