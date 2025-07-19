import CommentForm from './CommentForm'
import CommentItem from './CommentItem'

function CommentContainer(props) {
	const { postId, comments } = props
	// console.log(comments)
	return (
		<div className='flex flex-col gap-3'>
			<div className="text-xs">see all comments</div>
			{ comments.map(el => (
				<CommentItem key={el.id} comment={el} />
			))}
			<CommentForm postId={postId} />
		</div>
	)
}

export default CommentContainer