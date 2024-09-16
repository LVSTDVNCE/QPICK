import React from 'react'
import { IProduct } from '../../types/types'
import ProductList from '../../components/ProductList/ProductList'

interface Product {
	productsWireless: IProduct[]
	productsHeadphones: IProduct[]
}

const Catalog: React.FC<Product> = ({
	productsWireless,
	productsHeadphones,
}) => {
	return (
		<>
			<ProductList products={productsHeadphones} />
			<ProductList products={productsWireless} />
		</>
	)
}

export default Catalog
