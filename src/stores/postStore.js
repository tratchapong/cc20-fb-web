import { create } from 'zustand'
import { createComment, createLike, createPost, deletePost, getAllPosts, updatePost } from '../api/postApi'
import useUserStore from './userStore'

const usePostStore = create((set, get) => ({
	posts: [],
	currentPost: null,
	loading: false,
	createPost: async (body) => {
		set({loading: true})
		const rs = await createPost(body, useUserStore.getState().token)
		set(state => ({
			loading: false,
			posts: [{ ...rs.data.result, user:useUserStore.getState().user , likes: [], comments: [] }, ...state.posts]
		}))
		return rs
	},
	getAllPosts: async (token) => {
		set({ loading: true })
		const rs = await getAllPosts(token)
		set({ posts: rs.data.posts, loading: false })
	},

}))

export default usePostStore