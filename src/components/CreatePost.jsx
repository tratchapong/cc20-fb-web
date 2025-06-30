import React from 'react'
import useUserStore from '../stores/userStore'
import Avatar from './Avatar'
import { ActivityIcon, PhotoIcon, VideoIcon2 } from '../icons'

function CreatePost() {
	const user = useUserStore(state => state.user)
	return (
		<div className='card bg-base-100 shadow-xl'>
			<div className='card-body p-6'>
				<div className="flex gap-2">
					<Avatar className='w-11 rounded-full'
						imgSrc={user.profileImage}
					/>
					<button className='btn flex-1 rounded-full justify-start'>
						what do you think?
					</button>
				</div>
				<div className="divider mt-1 mb-0"></div>
				<div className="flex gap-3">
					<div className="flex-1 flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg py-2">
						<VideoIcon2 className='w-6' />
						Live / Stream
					</div>
					<div className="flex-1 flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg py-2">
						<PhotoIcon className='w-6' />
						Live / Stream
					</div>
					<div className="flex-1 flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg py-2">
						<ActivityIcon className='w-6' />
						Live / Stream
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreatePost