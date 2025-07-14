import axios from 'axios'

const postApi = axios.create({
	baseURL : 'http://localhost:8899/api/post'
})
const likeApi = axios.create({
	baseURL : 'http://localhost:8899/api/like'
})
const commentApi = axios.create({
	baseURL : 'http://localhost:8899/api/comment'
})


const addToken = (token) => ({
	headers : { Authorization : `Bearer ${token}`}
})

export const createPost = (body,token) => postApi.post('/', body ,addToken(token))

export const getAllPosts = (token) => postApi.get('/', addToken(token))

export const deletePost = (id, token) => postApi.delete(`/${id}`, addToken(token))

export const updatePost = (id, body, token) => postApi.put(`${id}`,body, addToken(token))

export const createLike = (body, token)=>likeApi.post('/', body, addToken(token))

export const unLike = (id, token)=> likeApi.delete(`/${id}`, addToken(token))

export const createComment = (body, token) => commentApi.post('/', body, addToken(token))