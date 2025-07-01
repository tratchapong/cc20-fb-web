import axios from 'axios'

const postApi = axios.create({
	baseURL : 'http://localhost:8899/api/post'
})

const addToken = (token) => ({
	headers : { Authorization : `Bearer ${token}`}
})

export const createPost = (body,token) => postApi.post('/', body ,addToken(token))

export const getAllPost = (token) => postApi.get('/', addToken(token))