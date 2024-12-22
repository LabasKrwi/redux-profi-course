import React from 'react'
import { PostAPI} from '../services/PostService'
import PostItem from './PostItem'

export const PostContainer2 = () => { 
    const{data: posts, error, isLoading} = PostAPI.useFetchAllPostsQuery(5)
    
  return (
    <div>
        <div className="post__list">
            {isLoading && <h1> Идет загрузка...</h1>}
            {error && <h1>Произошла ошибка загрузки постов</h1>}
            {posts && posts.map( post =>
              <PostItem key={post.id} post={post}/>
            )}
        </div>
    </div>
  )
}

export default PostContainer2