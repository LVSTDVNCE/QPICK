import React from 'react'
import { CartProvider } from '../src/components/CartContext/CartContext'
import Catalog from './pages/Catalog/Catalog'
import Cart from '../src/pages/Cart/Cart'
import { IProduct } from './types/types'
import { useState } from 'react'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import NoMatch from './pages/NoMatch/NoMatch'
import { wireless } from './data/data'
import { headphones } from './data/data'
import Layout from './components/Layout/Layout'
import Conditions from './pages/Сonditions/Conditions'
import Contacts from './pages/Contacts/Contacts'

const App: React.FC = () => {
	const [productsWireless, setProductsWireless] = useState<IProduct[]>([])
	const [productsHeadphones, setProductsHeadphones] = useState<IProduct[]>([])

	useEffect(() => {
		setProductsWireless(wireless)
		setProductsHeadphones(headphones)
	})

	return (
		<CartProvider>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route
						index
						element={
							<Catalog
								productsWireless={productsWireless}
								productsHeadphones={productsHeadphones}
							/>
						}
					/>
					<Route path='Cart' element={<Cart />} />
					<Route path='Conditions' element={<Conditions />} />
					<Route path='Contacts' element={<Contacts />} />
					<Route path='*' element={<NoMatch />} />
				</Route>
			</Routes>
		</CartProvider>
	)
}

export default App
