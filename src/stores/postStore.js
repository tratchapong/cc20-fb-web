import {create} from 'zustand'
import { createPost } from '../api/postApi'

const usePostStore = create( (set,get) => ({
	posts: [],
	currentPost: null, // for edit 
	loading: false,
	createPost : async (body, token, user) => {
		set({ loading : true})
		const resp = await createPost(body, token)
		set({ loading : false})
		return resp
	}
}))

export default usePostStore


