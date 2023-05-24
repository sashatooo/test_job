import React, { useState } from 'react'
import { IComment, IPost } from '../../models'
import Comment from '../Comment/Comment'

interface PostProps {
    post: IPost
    comments: IComment[]
}

function Post(props: PostProps) {

    const [showComments, setShowComments] = useState(false)


    return (
        <div>
            <img />
            <div>{props.post.title}</div>
            <div>{props.post.body}</div>
            <button onClick={() => setShowComments(prev => !prev)}>Show comments</button>
            {showComments && <div>{props.comments.map(c => <Comment key={c.id} comment={c}/>)}</div>}
        </div>
    )
}

export default Post