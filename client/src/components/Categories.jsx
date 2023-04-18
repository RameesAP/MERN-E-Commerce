import React from 'react'
import styled from 'styled-components'
import CategoriesItems from './CategoriesItems'
import { CatgoriesTempData } from '../data'


const Categories = () => {
    return (
        <Container>
            {CatgoriesTempData.map(item => (
                <CategoriesItems item={item} />
            ))}
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`
export default Categories