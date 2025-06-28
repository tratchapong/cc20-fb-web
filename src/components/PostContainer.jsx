import React from 'react'
import CreatePost from './CreatePost'

function PostContainer() {
  return (
    <div className='w-[680px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg bg-amber-200'>
      <CreatePost />
      <div>PostItem</div>
      <div>PostItem</div>
      <div>PostItem</div>
    </div>
  )
}

export default PostContainer