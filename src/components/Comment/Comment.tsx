import React, { useState } from 'react'
import { IComment } from '../../models'
import Card from 'react-bootstrap/Card'


interface CommentProps {
    comment: IComment
}

function Comment(props: CommentProps) {



    return (
        <Card className='m-2'>
            <Card.Body>
                <Card.Title>{props.comment.email}</Card.Title>
                <Card.Text>{props.comment.body}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Comment