import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { Button, InputGroup } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'



type SearchProps = {
    setSearchTerm: Dispatch<SetStateAction<string>>
}

function Search(props: SearchProps) {

    let [postTitle, setPostTitle] = useState<string>('')


    function onChangeHendler(e: ChangeEvent<HTMLInputElement>) {
        setPostTitle(e.currentTarget.value)
        props.setSearchTerm(e.currentTarget.value)
    }

    function onClickHendler() {
        props.setSearchTerm('')
        setPostTitle('')
    }


    return (
        <>
            <InputGroup className="p-2">
                <Form.Control
                    value={postTitle}
                    onChange={onChangeHendler}
                    placeholder="Enter post title"
                    aria-describedby="basic-addon1"
                />
                <Button
                    variant="outline-secondary"
                    id="button-addon1"
                    onClick={onClickHendler}>
                    X
                </Button>
            </InputGroup>
            <InputGroup className="p-2">
                <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    label="Switch to sort by title"
                />
            </InputGroup>
        </>
    )
}

export default Search