import React from 'react'
import styled from 'styled-components'
import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import { Badge } from '@material-ui/core'


const Navbar = () => {
  return (
    <ContainerStyle>
      <WrapperStyle>
        <LeftStyle>
          <LanguageStyle>EN</LanguageStyle>
          <SearchContainerStyle>
            <InputStyle />
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
`
const WrapperStyle = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`
const LanguageStyle = styled.div`
  font-size: 14px;
  cursor: pointer;
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
`
const Logo = styled.h1`
  font-weight: bold;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

export default Navbar