import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'

const Cart = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopButton>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom></Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

const Container =styled.div`
    
`
const Wrapper =styled.div`
    padding: 20px;
`
const Title =styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top =styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const TopButton =styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
`
const Bottom =styled.div`
    
`
export default Cart