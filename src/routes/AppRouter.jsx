import { useState, lazy, Suspense  } from 'react'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router'
import useUserStore from '../stores/userStore'
import UserLayout from '../layouts/UserLayout'
// import Login from '../pages/Login'
// import Home from '../pages/Home'
// import Friends from '../pages/Friends'
// import Profile from '../pages/Profile'
// import Advertising from '../pages/Advertising'

const Login = lazy( ()=> import('../pages/Login') )
const Home = lazy( ()=> import('../pages/Home') )
const Friends = lazy( ()=> import('../pages/Friends') )
const Profile = lazy( ()=> import('../pages/Profile') )
const Advertising = lazy( ()=> import('../pages/Advertising') )
const RedirectToHome = lazy( ()=> import('../pages/RedirectToHome'))

const guestRouter = createBrowserRouter([
	{ path: '/', Component: Login  },
	{ path: '/ads', Component: Advertising  },
	{ path: '*', Component: <RedirectToHome /> },
])

const userRouter = createBrowserRouter([
	{
		path: '/', Component: UserLayout,
		children: [
			{ index: true, Component: Home },
			{ path: 'friends', Component: Friends },
			{ path: 'profile', Component: Profile  },
			{ path: '*', Component: <RedirectToHome /> },
		]
	},

])
function AppRouter() {
	const user = useUserStore(state => state.user)
	const finalRouter = user ? userRouter : guestRouter
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<RouterProvider key={user?.id} router={finalRouter} />
		</Suspense>
	)
}

export default AppRouter