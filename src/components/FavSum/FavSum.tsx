import { useFav } from '../FavContext/FavContext'
import styles from './FavSum.module.css'

const FavSum: React.FC = () => {
	const { getFavItemCount } = useFav()
	const itemCountFav = getFavItemCount()

	return itemCountFav > 0 ? (
		<div className={styles.favSum}>{itemCountFav}</div>
	) : null
}

export default FavSum
