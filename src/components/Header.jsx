import { Link } from 'react-router'
import { FakebookLogo, FriendsIcon, HomeIcon, MenuIcon, MessengerIcon, NotificationIcon, PlayIcon, SearchIcon, ShopIcon } from '../icons'
import useUserStore from '../stores/userStore'
import Avatar from './Avatar'

function Header() {
	const logout = useUserStore(state => state.logout)

	return (
		<div className='flex justify-between px-3 h-14 w-full shadow-lg bg-white fixed top-0 z-10'>
			{/* Search Bar */}
			<div className="flex-1 flex gap-2 items-center pe-2">
				<FakebookLogo className='w-12' />
				<label className="input rounded-full">
					<input  placeholder="Search" />
					<SearchIcon className="w-5 opacity-60" />
				</label>
			</div>
			{/* Navigator */}
			<div className='flex-1 flex gap-2 justify-center'>
				<Link to='/' className='flex justify-center w-20 hover:outline-2 hover:outline-blue-900'
				> <HomeIcon className='w-1/2' /> </Link>
				<Link to='/' className='flex justify-center w-20 hover:outline-2 hover:outline-blue-900'
				> <PlayIcon className='w-1/2' /> </Link>
				<Link to='/' className='flex justify-center w-20 hover:outline-2 hover:outline-blue-900'
				> <ShopIcon className='w-3/5' /> </Link>
				<Link to='/friends' className='flex justify-center w-20 hover:outline-2 hover:outline-blue-900'
				> <FriendsIcon className='w-1/2' /> </Link>
			</div>

			{/* Right + Dropdown Menu */}
			<div className='flex-1 flex gap-3 justify-end'>
				<div className="avatar justify-center items-center">
					<div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
						<MenuIcon className='w-5' />
					</div>
				</div>
				<div className="avatar justify-center items-center">
					<div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
						<MessengerIcon className='w-5' />
					</div>
				</div>
				<div className="avatar justify-center items-center">
					<div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
						<NotificationIcon className='w-5' />
					</div>
				</div>
				<Avatar className='w-11' imgSrc='https://www.svgrepo.com/show/307208/batman-emotions-hero-superhero.svg'/>

			</div>
		</div>
	)
}

export default Header