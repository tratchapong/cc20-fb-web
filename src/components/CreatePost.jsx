import React from 'react'
import useUserStore from '../stores/userStore'
import Avatar from './Avatar'

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
				
			</div>
		</div>
	)
}

export default CreatePost