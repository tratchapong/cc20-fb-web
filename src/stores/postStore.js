import {create} from 'zustand'
import { createPost, getAllPosts } from '../api/postApi'
import useUserStore from './userStore'

const usePostStore = create( (set,get) => ({
	posts: [],
	currentPost: null, // for edit 
	loading: false,
	createPost : async (body, token, user) => {
		set({ loading : true})
		const resp = await createPost(body, token)
		set({ loading : false})
		return resp
	},
	getAllPosts : async (token) => {
		await new Promise(rs=>setTimeout(rs,2000) )
		let tk = useUserStore.getState().token
		const resp = await getAllPosts(tk)
		set({posts: resp.data.posts})
		return resp
	}
}))

export default usePostStore


