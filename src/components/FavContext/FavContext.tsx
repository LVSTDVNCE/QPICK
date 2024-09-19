import React, { createContext, useContext, useState } from 'react'
import { FavItem, IProduct } from '../../types/types'

interface FavContextType {
	fav: FavItem[]
	addToFav: (product: IProduct) => void
	removeFromFav: (id: number) => void
	clearFav: () => void
	isInFav: (id: number) => boolean
	getFavItemCount: () => number
}

interface IChildren {
	children: React.ReactNode
}

const FavContext = createContext<FavContextType | undefined>(undefined)

export const useFav = () => {
	const context = useContext(FavContext)
	if (!context) {
		throw new Error('useFav must be used within a FavProvider')
	}
	return context
}

export const FavProvider: React.FC<IChildren> = ({ children }) => {
	const [fav, setFav] = useState<FavItem[]>([])

	const addToFav = (product: IProduct) => {
		setFav(prevFav => {
			const existingItem = prevFav.find(item => item.prod.id === product.id)
			if (!existingItem) {
				return [...prevFav, { prod: product, quantity: 1 }]
			}
			return prevFav
		})
	}

	const removeFromFav = (id: number) => {
		setFav(prevFav => prevFav.filter(item => item.prod.id !== id))
	}

	const clearFav = () => {
		setFav([])
	}

	const isInFav = (id: number) => {
		return fav.some(item => item.prod.id === id)
	}

	const getFavItemCount = () => {
		return fav.length
	}

	return (
		<FavContext.Provider
			value={{
				fav,
				addToFav,
				removeFromFav,
				clearFav,
				isInFav,
				getFavItemCount,
			}}
		>
			{children}
		</FavContext.Provider>
	)
}
