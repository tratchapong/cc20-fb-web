import Avatar from './Avatar'

function CommentItem(props) {
	const {comment} = props
	return (
		<div className='flex gap-2'>
			<Avatar className='w-11 h-11 rounded-full' 
				imgSrc={comment.user?.profileImage}
			/>
			<div className="flex flex-col border bg-slate-100 flex-1 rounded-lg p-1 px-2 text-xs leading-5">
				<div className="font-bold">{comment.user?.firstName} {comment.user?.lastName}</div>
				<p>{comment.message}</p>
			</div>
		</div>
	)
}

export default CommentItem