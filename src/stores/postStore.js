import { create } from 'zustand'
import { createComment, createLike, createPost, deletePost, getAllPosts, updatePost } from '../api/postApi'

const usePostStore = create((set, get) => ({
	posts: [],
	currentPost: null,
	loading: false,
	createPost: async (body, token, user) => {
		const rs = await createPost(body, token)
		console.log(rs.data)
		set(state => ({
			posts: [{ ...rs.data.result, user, likes: [], comments: [] }, ...state.posts]
		}))
	},
	getAllPosts: async (token) => {
		set({ loading: true })
		const rs = await getAllPosts(token)
		set({ posts: rs.data.posts, loading: false })
	},

}))

export default usePostStore