import { useEffect, useState } from 'react'
import CreatePost from './CreatePost'
import PostItem from './PostItem'
import usePostStore from '../stores/postStore'
import useUserStore from '../stores/userStore'

function PostContainer() {
  const posts = usePostStore(state => state.posts)
  const getAllPosts = usePostStore(state => state.getAllPosts)
  // const token = useUserStore(state => state.token)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const run = async () => {
      setLoading(true)
      // await getAllPosts(token)
      await getAllPosts()
      setLoading(false)
    }
    run()
  }, [])

  // if(loading) {
  //   return <span className='loading loading-ball loading-xl'></span>
  // }

  return (
    <div className='w-[680px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg bg-amber-200'>
      <CreatePost />
      { loading 
        ? <span className='loading loading-ball loading-xl'></span> 
        : <>
        {posts.map( el=> (
          <PostItem key={el.id} post={el} />
        ) )}
        </>  
      }

    </div>
  )
}

export default PostContainer