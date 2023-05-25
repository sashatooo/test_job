import React, { useState } from 'react'
import { IComment, IPost } from '../../models'
import Comment from '../Comment/Comment'
import axios from 'axios'

interface PostProps {
    post: IPost
}

function Post(props: PostProps) {

    const [showComments, setShowComments] = useState(false)
    const [comments, setComments] = useState<IComment[]>([])
    const [loading, setLoading] = useState(false)

    function onClickHendler(id: number) {
        !showComments && fetchComments(id)
        setShowComments(prev => !prev)
    }

    async function fetchComments(id: number) {
        setLoading(true)
		const response = await axios.get<IComment[]>('https://jsonplaceholder.typicode.com/comments')
		const commentsForPost = response.data.filter(c => c.postId === id)
		setComments(commentsForPost)
        setTimeout(() => {setLoading(false)}, 500)
	}


    return (
        <div>
            <div>{props.post.title}</div>
            <div>{props.post.body}</div>
            <button onClick={() => onClickHendler(props.post.id)}>{showComments? 'Hide comments': 'Show comments'}</button>
            {loading ? <div>Loding..</div> : showComments && <div>{comments.map(c => <Comment key={c.id} comment={c}/>)}</div>}
        </div>
    )
}

export default Post