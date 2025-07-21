import { createBrowserRouter } from 'react-router-dom'
import { AuthLayout } from '../layouts/auth'
import { SignIn } from '../pages/auth/sign-in'
import { Dashboard } from '../pages/dashboard'

export const router = createBrowserRouter([
	{
		path: '/auth',
		element: <AuthLayout />,
		children: [
			{
				path: 'sign-in',
				element: <SignIn />,
			},
		],
	},
	{
		path: '/',
		element: '',
		children: [
			{
				path: '/',
				element: <Dashboard />,
			},
		],
	},
])
