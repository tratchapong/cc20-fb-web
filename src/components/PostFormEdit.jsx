import { useState } from "react"
import { PhotoIcon2 } from "../icons"
import useUserStore from "../stores/userStore"
import Avatar from "./Avatar"
import AddPicture from "./AddPicture"
import usePostStore from "../stores/postStore"
import { toast } from "react-toastify"

function PostFormEdit() {
	const user = useUserStore(state => state.user)
	const currentPost = usePostStore(state => state.currentPost)
	const updatePost = usePostStore(state=>state.updatePost)
	const [message, setMessage] = useState(currentPost.message)
	const [loading, setLoading] = useState(false)
	const [addPic, setAddPic] = useState(false)
	const [file, setFile] = useState(null)
	const [removePic, setRemovePic] = useState(false)

	const hdlUpdatePost = async () => {
		try {
			setLoading(true)
			const body = new FormData()
			body.append('message', message)
			if(file) {
				body.append('image', file)
			}
			if(removePic) {
				body.append('removePic', true)
			}
			// api call update
			await updatePost(currentPost.id, body)
			document.getElementById('editform-modal').close()
		} catch (err) {
			const errMsg = err.response?.data.error || err.message
			toast.error(errMsg)
		} finally {
			setLoading(false)
		}
	}
	return (
		<div className="flex flex-col gap-2">
			<h3 className="text-xl text-center">
				{loading && <span className="loading loading-ball loading-sm"></span>}
				Update Post
			</h3>
			<div className="divider mt-1 mb-0"></div>
			<div className="flex gap-2">
				<Avatar className='w-11 rounded-full'
					imgSrc={user.profileImage}
				/>
				<div className="flex flex-col">
					<div className="text-sm">{user.firstName} {user.lastName}</div>
					<select className="select bg-slate-200 select-xs max-w-xs">
						<option disabled>who can see?</option>
						<option>public</option>
						<option>friends</option>
					</select>
				</div>
			</div>
			<textarea className="textarea textarea-ghost w-full"
				placeholder={`what do you think? ${user.firstName}`}
				value={message}
				onChange={e => setMessage(e.target.value)}
				rows={message.split('\n').length}
			></textarea>
			{currentPost.image && !removePic && (
				<div className="flex justify-evenly items-center border">
					<img src={currentPost.image} className="h-[100px] object-contain" />
					<button className="btn btn-sm" onClick={() => setRemovePic(true)}>Remove</button>
				</div>
			)}
			{addPic &&
				<AddPicture file={file} setFile={setFile} />
			}
			<div className="flex justify-between border rounded-lg p-2 items-center cursor-pointer">
				<p>add with your post</p>
				<div className="flex justify-center items-center w-10 h-10 rounded-full bg-slate-100 
				 hover:bg-slate-200 active:scale-110"
					onClick={() => setAddPic(prv => !prv)}
				>
					<PhotoIcon2 className='w-7' />
				</div>
			</div>
			<button className="btn btn-sm btn-primary"
				onClick={hdlUpdatePost}
				disabled={message.trim().length === 0 && !file}
			>Update Post</button>
		</div>
	)
}

export default PostFormEdit