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
		<div className={styles.catalog}>
			<Heading heading={'Наушники'} />
			<ProductList products={productsHeadphones} />
			<Heading heading={'Беспроводные наушники'} />
			<ProductList products={productsWireless} />
		</div>
	)
}

export default Catalog
