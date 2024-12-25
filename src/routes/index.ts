import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import Lab from '../components/Lab'

export interface IRoute {
	index?: boolean
	path: string
	component: React.ComponentType
}

export enum RouteNames {
	Home = '/',
	Lab = '/lab',
}

export const SiteRoutes = createBrowserRouter([
	{ index: true, path: RouteNames.Home, Component: Home },
	{ index: false, path: RouteNames.Lab, Component: Lab },
])
