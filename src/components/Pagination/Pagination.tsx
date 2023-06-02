import React, { useEffect, useState } from 'react'
import Pagination from 'react-bootstrap/Pagination'
import { IPost } from '../../models'


type PaginationProps = {
    currentPage: number
    filteredPosts: IPost[]
    pageSize: number
    setCurrentPage: (currentPage: number) => void
    porsionSize: number
    portionNumber: number
    setPortionNumber: (portionNumber: number) => void
}

function PaginationC(props: PaginationProps) {


    const [pages, setPages] = useState<number[]>([])

    let pagesCount = Math.ceil(props.filteredPosts.length / props.pageSize)
    let portionCount = Math.ceil(pagesCount/props.porsionSize)

    useEffect(() => {
        let tempPages = []
            
        let leftBoundary = (props.portionNumber-1) * props.porsionSize + 1
        let rightBoundary= props.portionNumber * props.porsionSize
    
        for (let i = 1; i <= pagesCount; i++) {
            if(i >= leftBoundary && i <= rightBoundary) {
                tempPages.push(i)
            }
        }
            
        setPages(tempPages)

    }, [props.filteredPosts,props.portionNumber])
    



    return (
        <Pagination className='justify-content-center'>
            <Pagination.First disabled={props.portionNumber == 1} onClick={() => props.setPortionNumber(props.portionNumber - 1)} />
            <Pagination.Prev disabled={props.currentPage===1} onClick={() => props.setCurrentPage(props.currentPage-1)} />
                {pages.map(p => {
                    return <Pagination.Item key={p} onClick={() => props.setCurrentPage(p)} active={p===props.currentPage}>{p}</Pagination.Item>
                })}
            <Pagination.Next disabled={props.currentPage===pagesCount} onClick={() => props.setCurrentPage(props.currentPage+1)} />
            <Pagination.Last disabled={portionCount == props.portionNumber } onClick={() => props.setPortionNumber(props.portionNumber + 1)}/>
        </Pagination>
    )
}

export default PaginationC