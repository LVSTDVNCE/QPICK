import styles from './Favourites.module.css'
import Heading from '../../components/Heading/Heading'
import FavouritesList from '../../components/FavouritesList/FavouritesList'

const Favourites = () => {
	return (
		<main className={styles.favourites}>
			<Heading heading={'Избранное'} color={{ color: '#1C1C27' }} />
			<FavouritesList />
		</main>
	)
}

export default Favourites
