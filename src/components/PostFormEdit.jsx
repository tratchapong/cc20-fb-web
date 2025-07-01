import React from 'react'
import usePostStore from '../stores/postStore'

function PostFormEdit() {
	const currentPost = usePostStore(state=>state.currentPost)
	return (
		<div>
			<pre>{JSON.stringify(currentPost,null,2)}</pre>
		</div>
	)
}

export default PostFormEdit