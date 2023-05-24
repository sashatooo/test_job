import React, { useState } from 'react'
import { IComment } from '../../models'

interface CommentProps {
    comment: IComment
}

function Comment(props: CommentProps) {



    return (
        <div>
            { props.comment.email }
        </div>
    )
}

export default Comment