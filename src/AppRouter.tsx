import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import { routesArray } from './routes/Routes'

const AppRouter = () => {
	const routeComponents = routesArray.map(({ path, component }) => (
		<Route path={path} element={component} key={path} />
	))

	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				{routeComponents}
			</Route>
		</Routes>
	)
}

export default AppRouter
