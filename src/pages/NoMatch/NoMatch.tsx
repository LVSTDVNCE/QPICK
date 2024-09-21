import { Link } from 'react-router-dom'
import styles from './NoMatch.module.css'
import Heading from '../../components/Heading/Heading'

function NoMatch() {
	return (
		<main className={styles.noMatch}>
			<Heading
				heading={'Такой страницы не существует'}
				color={{ color: '#1C1C27' }}
			/>
			<Link to='/' className={styles.noMatchLink}>
				Вернуться в каталог
			</Link>
		</main>
	)
}

export default NoMatch
