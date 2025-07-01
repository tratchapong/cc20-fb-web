import {create} from 'zustand'
import { createPost, deletePost, getAllPosts, updatePost } from '../api/postApi'
import useUserStore from './userStore'

// let token = useUserStore.getState().token

const usePostStore = create( (set,get) => ({
	posts: [],
	currentPost: null, // for edit 
	loading: false,
	createPost : async (body, token, user) => {
		set({ loading : true})
		const resp = await createPost(body, token)
		console.log(resp.data.result)
				// get().getAllPosts()
		set( state => ({
			loading: false,
			posts: [ { ...resp.data.result, user, likes: [], comments:[] },...state.posts]
		}))
		return resp
	},
	getAllPosts : async () => {
		// await new Promise(rs=>setTimeout(rs,2000) )
		const token = useUserStore.getState().token
		const resp = await getAllPosts(token)
		set({posts: resp.data.posts})
		return resp
	},
	deletePost : async (id) => {
		const token = useUserStore.getState().token
		const resp = await deletePost(id,token)
		get().getAllPosts()
		return resp
	},
	setCurrentPost : (post) => set({ currentPost: post}),
	updatePost : async (id, body) => {
		const token = useUserStore.getState().token
		const resp = await updatePost(id, body, token)
		get().getAllPosts()
		return resp
	}
}))

export default usePostStore


