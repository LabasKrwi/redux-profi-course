import React, { useEffect, useState } from 'react'
import { PostAPI} from '../services/PostService'
import PostItem from './PostItem'
import { IPost } from '../models/IPosts';

export const PostContainer = () => { 
    const [limit, setLimit] = useState(100);
    const{data: posts, error, isLoading, refetch} = PostAPI.useFetchAllPostsQuery(limit)
    const [createPost, {}] = PostAPI.useCreatePostMutation()

    useEffect(()=>{
      // setTimeout(()=>{
      //   setLimit(20)
      // },2000)

    }, [])

    const handleCreate = async () => {
      const title = prompt()
      await createPost({title, body: title} as IPost)
    }

  return (
    <div>
        <div className="post__list">
          <button onClick={handleCreate}>Add new post</button>
            {isLoading && <h1> Идет загрузка...</h1>}
            {error && <h1>Произошла ошибка загрузки постов</h1>}
            {/* {posts && posts.map( post =>
              <PostItem key={post.id} post={post}/>
            )} */}
        </div>
    </div>
  )
}

export default PostContainer