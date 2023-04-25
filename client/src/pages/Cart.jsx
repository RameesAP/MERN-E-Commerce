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
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
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
    border: ${props=>props.type === "filled" ? "none":"none"};
    background-color: ${props=>props.type==="filled"?"black":"red"};
    color: ${props=>props.type==="filled"?"white":"yellow"};
`
const TopTexts =styled.div`
    display: flex;
`
const TopText =styled.div`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
    
    
`
const Bottom =styled.div`
    
`

export default Cart