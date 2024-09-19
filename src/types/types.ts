export interface CartItem {
	product: IProduct
	quantity: number
}

export interface FavItem {
	prod: IProduct
	quantity: number
}

export interface IProduct {
	id: number
	img: string
	title: string
	price: number
	rate: number
	sale: number
}
