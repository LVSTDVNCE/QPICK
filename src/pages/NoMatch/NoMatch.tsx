import { Link } from 'react-router-dom'
import styles from './NoMatch.module.css'

function NoMatch() {
	return (
		<div className={styles.noMatch}>
			<h2 className={styles.noMatchHeading}>Такой страницы не существует</h2>
			<Link to='/' className={styles.noMatchLink}>
				Вернуться в каталог
			</Link>
		</div>
	)
}

export default NoMatch
