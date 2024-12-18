import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home'

export interface IRoute {
	index?: boolean
	path: string
	component: React.ComponentType
}

export enum RouteNames {
	Home = '/',
}

export const SiteRoutes = createBrowserRouter([
	{ index: true, path: RouteNames.Home, Component: Home },
])
