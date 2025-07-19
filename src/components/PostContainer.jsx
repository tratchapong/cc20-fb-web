import { useEffect, useState } from 'react'
import CreatePost from './CreatePost'
import PostItem from './PostItem'
import usePostStore from '../stores/postStore'
import PostFormEdit from './PostFormEdit'

function PostContainer() {
  const posts = usePostStore(state => state.posts)
  const getAllPosts = usePostStore(state => state.getAllPosts)
  const setCurrentPost = usePostStore(state=>state.setCurrentPost)
  const currentPost = usePostStore(state=>state.currentPost)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const run = async () => {
      setLoading(true)
      await getAllPosts()
      setLoading(false)
    }
    run()
  }, [])

  return (
    <>
      <div className='w-[680px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg bg-amber-200'>
        <CreatePost />
        {loading
          ? <span className='loading loading-ball loading-xl'></span>
          : <>
            {posts.map(el => (
              <PostItem key={el.id} post={el} />
            ))}
          </>
        }
      </div>
      <dialog className='modal' id='editform-modal' onClose={()=>setCurrentPost(null)}>
        <div className="modal-box">
          { currentPost &&  <PostFormEdit /> }
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default PostContainer