import React from 'react'
import { CartProvider } from '../src/components/CartContext/CartContext'
import { FavProvider } from './components/FavContext/FavContext'
import AppRouter from './AppRouter'

const App: React.FC = () => {
	return (
		<CartProvider>
			<FavProvider>
				<AppRouter />
			</FavProvider>
		</CartProvider>
	)
}

export default App
