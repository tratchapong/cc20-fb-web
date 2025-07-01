import React, { useState } from 'react'
import Avatar from './Avatar'
import useUserStore from '../stores/userStore'
import { SendMessageIcon } from '../icons'
import usePostStore from '../stores/postStore'
import { toast } from 'react-toastify'

function CommentForm({ postId }) {
	const user = useUserStore(state => state.user)
	const createComment = usePostStore(state => state.createComment)
	const [message, setMessage] = useState('')
	const hdlSendComment = async () => {
		try {
			const body = { message, postId }
			const resp = await createComment(body)
			setMessage('')
		} catch (err) {
			const errMsg = err.response?.data?.error || err.message
			toast.error(errMsg)
		}

	}

return (
	<div className='relative'>
		<div className="flex gap-3 items-start">
			<Avatar className='w-11 h-11 rounded-full'
				imgSrc={user.profileImage}
			/>
			<textarea
				className='textarea w-full p-1 leading-5'
				rows={message.split('\n').length}
				placeholder={`comment by ${user.firstName} ${user.lastName} `}
				value={message}
				onChange={e => setMessage(e.target.value)}
			></textarea>
		</div>
		<button className='btn btn-circle btn-sm absolute bottom-1 right-2'
			onClick={hdlSendComment}
		>
			<SendMessageIcon className='w-6 ms-1' />
		</button>
	</div>
)
}

export default CommentForm