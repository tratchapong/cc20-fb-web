import { useState, lazy, Suspense  } from 'react'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router'
import useUserStore from '../stores/userStore'
import UserLayout from '../layouts/UserLayout'
// import Login from '../pages/Login'
// import Home from '../pages/Home'
// import Friends from '../pages/Friends'
// import Profile from '../pages/Profile'

const Login = lazy( ()=> import('../pages/Login') )
const Home = lazy( ()=> import('../pages/Home') )
const Friends = lazy( ()=> import('../pages/Friends') )
const Profile = lazy( ()=> import('../pages/Profile') )

const guestRouter = createBrowserRouter([
	{ path: '/', element: <Login /> },
	{ path: '/ads', element: <p>Advertising</p> },
	{ path: '*', element: <Navigate to='/' /> },
])

const userRouter = createBrowserRouter([
	{
		path: '/', element: <UserLayout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'friends', element: <Friends /> },
			{ path: 'profile', element: <Profile /> },
			{ path: '*', element: <Navigate to='/' /> },
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