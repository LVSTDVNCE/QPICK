import styles from './FavouritesList.module.css'
import FavListItem from '../FavListItem/FavListItem'
import { useFav } from '../FavContext/FavContext'

const FavouritesList = () => {
	const { fav } = useFav()
	return (
		<div className={styles.favList}>
			{fav.map(item => (
				<FavListItem item={item} key={item.prod.id} />
			))}
		</div>
	)
}

export default FavouritesList
