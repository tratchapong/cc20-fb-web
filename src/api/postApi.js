import axios from 'axios'

const postApi = axios.create({
  baseURL : 'http://localhost:8899'
})

const addToken = (token) => ({
  headers : {
    Authorization: `Bearer ${token}`
  }
})

export const createPost = (body, token) => postApi.post('/post', body, addToken(token))

export const getAllPosts = (token) => postApi.get('/post', addToken(token))

export const deletePost = (postId, token)=> postApi.delete(`/post/${postId}`,addToken(token))

export const updatePost = (postId, token, body)=> postApi.put(`post/${postId}`, body, addToken(token))

export const createComment = (body, token) => postApi.post('/comment', body, addToken(token))

export const createLike = (body, token)=>postApi.post('/like', body, addToken(token))

export const unLike = (token, id)=> postApi.delete(`/like/${id}`, addToken(token))