import React from 'react'
import SidebarMenu from '../components/SidebarMenu'
import PostContainer from '../components/PostContainer'
import SidebarContact from '../components/SidebarContact'

function Home() {
	return (
		<>
		<SidebarMenu />
		<PostContainer />
		<SidebarContact/>
		</>
	)
}

export default Home