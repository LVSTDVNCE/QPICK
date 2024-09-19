import React from 'react'
import { IProduct } from '../../types/types'
import ListItem from '../ListItem.tsx/ListItem'
import styles from './ProductList.module.css'

interface Product {
	products: IProduct[]
}

const ProductList: React.FC<Product> = ({ products }) => {
	return (
		<div className={styles.productList}>
			{products.map((product, key) => (
				<ListItem product={product} key={key} />
			))}
		</div>
	)
}

export default ProductList
