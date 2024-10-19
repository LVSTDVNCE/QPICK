import Cart from '../pages/Cart/Cart'
import Catalog from '../pages/Catalog/Catalog'
import Contacts from '../pages/Contacts/Contacts'
import Favourites from '../pages/Favourites/Favourites'
import NoMatch from '../pages/NoMatch/NoMatch'
import Conditions from '../pages/Сonditions/Conditions'
import { IRoutes } from './../types/types'

export const routesArray: IRoutes[] = [
	{
		path: '/',
		component: <Catalog />,
	},
	{
		path: 'Cart',
		component: <Cart />,
	},
	{
		path: 'Favourites',
		component: <Favourites />,
	},
	{
		path: 'Conditions',
		component: <Conditions />,
	},
	{
		path: 'Contacts',
		component: <Contacts />,
	},
	{
		path: '*',
		component: <NoMatch />,
	},
]
