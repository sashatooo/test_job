import React from 'react'


type PaginationProps = {
    currentPage: number
    totalPostsCount: number
    pageSize: number
    setCurrentPage: (currentPage: number) => void
}

function Pagination(props: PaginationProps) {



    function onClickHendler(currentPage: number) {
        props.setCurrentPage(currentPage)
    }

    let pagesCount = Math.ceil(props.totalPostsCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            { pages.map(p => {
                return <span onClick={() => {onClickHendler(p)}}>{p}</span>
            })}
        </div>
    )
}

export default Pagination