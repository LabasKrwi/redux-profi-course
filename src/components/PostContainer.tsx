import React from 'react'
import { PostAPI } from '../services/PostService'
import PostItem from './PostItem'


export const PostContainer = () => {
    const{data: posts} = PostAPI.useFetchAllPostsQuery(5)
  return (
    <div>
        <div className="post__list">
            {posts && posts.map( post =>
                <PostItem key={post.id} post={post}/>
            )}
        </div>
    </div>
  )
}

export default PostContainer