import React from 'react'
import { PostAPI} from '../services/PostService'
import PostItem from './PostItem'
import { IPost } from '../models/IPosts'

export const PostContainer2 = () => { 
    const{data: posts, error, isLoading} = PostAPI.useFetchAllPostsQuery(100)
    const [updatePost, {}] = PostAPI.useUpdatePostMutation()
    const [deletePost, {}] = PostAPI.useDeletePostMutation()


    const handleRemove = (post: IPost) => {
      deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
      updatePost(post)
    }

  return (
    <div>
        <div className="post__list">
            {isLoading && <h1> Идет загрузка...</h1>}
            {error && <h1>Произошла ошибка загрузки постов</h1>}
            {posts && posts.map( post =>
              <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>
            )}
        </div>
    </div>
  )
}

export default PostContainer2