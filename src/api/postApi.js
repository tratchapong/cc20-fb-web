import axios from 'axios'

const postApi = axios.create({
	baseURL : 'http://localhost:8899/api/post'
})

const addToken = (token) => ({
	headers : { Authorization : `Bearer ${token}`}
})

export const createPost = (body,token) => postApi.post('/', body ,addToken(token))

export const getAllPosts = (token) => postApi.get('/', addToken(token))

export const deletePost = (id, token) => postApi.delete(`/${id}`, addToken(token))

export const updatePost = (id, body, token) => postApi.put(`${id}`,body, addToken(token))