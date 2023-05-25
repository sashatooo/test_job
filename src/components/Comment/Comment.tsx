import React, { useState } from 'react'
import { IComment } from '../../models'

interface CommentProps {
    comment: IComment
}

function Comment(props: CommentProps) {



    return (
        <div>
            <div>
                {props.comment.email}
            </div>
            <div>
                {props.comment.body}
            </div>
        </div>
    )
}

export default Comment