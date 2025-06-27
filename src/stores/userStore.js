import {create} from 'zustand'
import { authApi } from '../api/authApi'
import { persist, createJSONStorage } from 'zustand/middleware'

const useUserStore = create( persist((set,get)=>({
	user: null,
	token: '',
	login: async (input) => {
		const rs = await authApi.post('/login', input)
		set({token: rs.data.token, user: rs.data.user})
		return rs
	},
	logout: () => set({token: '', user: null})
}),{
	name: 'userState',
	storage: createJSONStorage( ()=> localStorage )
}))

export default useUserStore



