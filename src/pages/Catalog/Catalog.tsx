import React from 'react'
import { IProduct } from '../../types/types'
import ProductList from '../../components/ProductList/ProductList'
import Heading from '../../components/Heading/Heading'
import styles from './Catalog.module.css'

interface Product {
	productsWireless: IProduct[]
	productsHeadphones: IProduct[]
}

const Catalog: React.FC<Product> = ({
	productsWireless,
	productsHeadphones,
}) => {
	return (
		<main className={styles.catalog}>
			<Heading heading={'Наушники'} color={{ color: '#838383' }} />
			<ProductList products={productsHeadphones} />
			<Heading heading={'Беспроводные наушники'} color={{ color: '#838383' }} />
			<ProductList products={productsWireless} />
		</main>
	)
}

export default Catalog
