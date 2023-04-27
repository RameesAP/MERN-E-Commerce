import React from 'react'
import styled from 'styled-components'
import CategoriesItems from './CategoriesItems'
import { CatgoriesTempData } from '../data'
import { mobile } from '../responsive'


const Categories = () => {
    return (
        <Container>
            {CatgoriesTempData.map(item => (
                <CategoriesItems item={item} key={item.id} />
            ))}
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection: "column" })}
`
export default Categories