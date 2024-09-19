import styles from './Favourites.module.css'
import Heading from '../../components/Heading/Heading'
import FavouritesList from '../../components/FavouritesList/FavouritesList'

const Favourites = () => {
	return (
		<div className={styles.favourites}>
			<Heading heading={'Вам понравились'} color={{ color: '#1C1C27' }} />
			<FavouritesList />
		</div>
	)
}

export default Favourites
