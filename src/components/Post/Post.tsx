import React, { useState } from 'react'
import { IComment, IPost } from '../../models'
import Comment from '../Comment/Comment'
import axios from 'axios'
import Loader from '../Loader/Loader'
import { getComments } from '../../api'

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
        const response = await getComments(id)
        setComments(response.data)
        setTimeout(() => { setLoading(false) }, 500)
    }




    return (
        <>  
            <div>{props.post.id}</div>
            <div>{props.post.title}</div>
            <div>{props.post.body}</div>
            <button onClick={() => onClickHendler(props.post.id)}>{showComments? 'Hide comments': 'Show comments'}</button>
            <div>
                {loading ? <Loader /> : showComments && <div>{comments.map(c => <Comment key={c.id} comment={c}/>)}</div>}
            </div>
        </>
    )
}

export default Post