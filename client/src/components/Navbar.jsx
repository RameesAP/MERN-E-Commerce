import React from 'react'
import styled from 'styled-components'
import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import { Badge } from '@material-ui/core'
import { mobile } from '../responsive'


const Navbar = () => {
  return (
    <ContainerStyle>
      <WrapperStyle>
        <LeftStyle>
          <LanguageStyle>EN</LanguageStyle>
          <SearchContainerStyle>
            <InputStyle placeholder='Search' />
            <SearchOutlined style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainerStyle>
        </LeftStyle>
        <CenterStyle><Logo>NEW STORE.</Logo></CenterStyle>
        <RightStyle>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItem>
        </RightStyle>
      </WrapperStyle>
    </ContainerStyle>
  )
}

const ContainerStyle = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`
const WrapperStyle = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`
const LeftStyle = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const CenterStyle = styled.div`
  flex: 1;
  text-align: center;
`
const RightStyle = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`
const LanguageStyle = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`
const SearchContainerStyle = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const InputStyle = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "10px" })}
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

export default Navbar