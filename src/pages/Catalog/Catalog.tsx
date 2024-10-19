import React, { useEffect, useState } from 'react'
import { IProduct } from '../../types/types'
import ProductList from '../../components/ProductList/ProductList'
import Heading from '../../components/Heading/Heading'
import styles from './Catalog.module.css'
import { headphones, wireless } from './../../data/data'

const Catalog: React.FC = () => {
	const [productsWireless, setProductsWireless] = useState<IProduct[]>([])
	const [productsHeadphones, setProductsHeadphones] = useState<IProduct[]>([])

	useEffect(() => {
		setProductsWireless(wireless)
		setProductsHeadphones(headphones)
	})
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
