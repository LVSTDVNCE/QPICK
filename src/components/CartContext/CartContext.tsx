import React, { createContext, useContext, useState } from 'react'
import { CartItem, IProduct } from '../../types/types'

interface CartContextType {
	cart: CartItem[]
	addToCart: (product: IProduct) => void
	removeFromCart: (id: number) => void
	clearCart: () => void
	updateQuantity: (id: number, quantity: number) => void
	getCartItemCount: () => number
}

interface IChildren {
	children: any
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
	const context = useContext(CartContext)
	if (!context) {
		throw new Error('useCart must be used within a CartProvider')
	}
	return context
}

export const CartProvider: React.FC<IChildren> = ({ children }) => {
	const [cart, setCart] = useState<CartItem[]>([])

	const addToCart = (product: IProduct) => {
		setCart(prevCart => {
			const existingItem = prevCart.find(item => item.product.id === product.id)
			if (existingItem) {
				return prevCart.map(item =>
					item.product.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			}
			return [...prevCart, { product, quantity: 1 }]
		})
	}

	const removeFromCart = (id: number) => {
		setCart(prevCart => prevCart.filter(item => item.product.id !== id))
	}

	const clearCart = () => {
		setCart([])
	}

	const updateQuantity = (id: number, quantity: number) => {
		setCart(prevCart =>
			prevCart.map(item =>
				item.product.id === id ? { ...item, quantity } : item
			)
		)
	}

	const getCartItemCount = () => {
		return cart.reduce((total, item) => total + item.quantity, 0)
	}

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				clearCart,
				updateQuantity,
				getCartItemCount,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
