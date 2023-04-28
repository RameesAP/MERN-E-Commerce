import { EmailOutlined, Facebook, Instagram, LocationOn, Phone, YouTube } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>NEW STORE.</Logo>

        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequatur neque recusandae voluptatum voluptatem tempore. Pariatur, rerum at ex quam laudantium, possimus dolorum cupiditate reprehenderit facilis inventore iure, officia praesentium?
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="E60023">
            <YouTube />
          </SocialIcon>

        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>

        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
         <LocationOn style={{marginRight:"10px"}}/> Malappuram , Tirur , 676108
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> 91 1234567890
        </ContactItem>
        <ContactItem>
          <EmailOutlined style={{marginRight:"10px"}}/> rameeswork@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
  
`
const Desc = styled.p`
  margin: 20px 0px;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`
const Title = styled.h3`
  margin-bottom: 30px;
`
const List = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff1f1" })}
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Payment=styled.img`
  width: 50%;
`


export default Footer