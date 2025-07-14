import axios from 'axios'


const postApi = axios.create({
	baseURL : 'http://localhost:8899/api'
})


postApi.interceptors.request.use( config => {
	const userState = JSON.parse(localStorage.getItem('userState'))
	const token = userState.state.token
	if(token) config.headers.Authorization =  `Bearer ${token}`
	return config
})


export const createPost = (body) => postApi.post('/post', body )

export const getAllPosts = () => postApi.get('/post')

export const deletePost = (id) => postApi.delete(`/post/${id}`)

export const updatePost = (id, body) => postApi.put(`/post/${id}`,body)

export const createLike = (body)=>postApi.post('/like', body)

export const unLike = (id)=> postApi.delete(`/like/${id}`)

export const createComment = (body) => postApi.post('/comment', body)