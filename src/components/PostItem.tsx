import React, { FC } from 'react'
import { IPost } from '../models/IPosts'

interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({post}) => {
  return (
    <div className='post'>
        {post.id}. {post.title}
        <button onClick={()=> remove()}>Delete</button>
    </div>
  )
}

export default PostItem