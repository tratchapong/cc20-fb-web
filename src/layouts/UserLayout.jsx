import React from 'react'
import { Outlet } from 'react-router'

import Header from '../components/Header'

function UserLayout() {

	return (
		<div className='min-h-screen'>
			<Header />
			<div className="relative flex gap-2 bg-gray-100 border pt-14">
				<Outlet />
			</div>
		</div>
	)
}

export default UserLayout