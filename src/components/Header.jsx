import useUserStore from '../stores/userStore'

function Header() {
	const logout = useUserStore(state => state.logout)
	
	return (
		<div className='text-4xl py-4 border'>Header
			<button className='btn btn-primary' onClick={logout}>Logout</button>
		</div>
	)
}

export default Header