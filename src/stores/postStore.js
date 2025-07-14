import { create } from 'zustand'
import { createPost, deletePost, getAllPosts, updatePost, createLike, unLike, createComment } from '../api/postApi'
import useUserStore from './userStore'

const usePostStore = create((set, get) => ({
	posts: [],
	currentPost: null, // for edit 
	loading: false,
	createPost: async (body, user) => {
		set({ loading: true })
		const resp = await createPost(body)
		console.log(resp.data.result)
		// get().getAllPosts()
		set(state => ({
			loading: false,
			posts: [{ ...resp.data.result, user, likes: [], comments: [] }, ...state.posts]
		}))
		return resp
	},
	getAllPosts: async () => {
		// await new Promise(rs=>setTimeout(rs,2000) )
		const resp = await getAllPosts()
		set({ posts: resp.data.posts })
		return resp
	},
	deletePost: async (id) => {
		const resp = await deletePost(id)
		get().getAllPosts()
		return resp
	},
	setCurrentPost: (post) => set({ currentPost: post }),
	updatePost: async (id, body) => {
		const resp = await updatePost(id, body)
		get().getAllPosts()
		return resp
	},
	createLike: async (body) => {
		const resp = await createLike(body)
		get().getAllPosts()
		return resp
	},
	unLike: async (id) => {
		const resp = await unLike(id)
		get().getAllPosts()
		return resp
	},
	createComment: async (body) => {
		const resp = await createComment(body)
		get().getAllPosts()
		return resp
	}
}))

export default usePostStore


