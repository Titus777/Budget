import React from 'react'
import styled from 'styled-components'
import {BiHome} from 'react-icons/bi'
import {AiFillSetting} from 'react-icons/ai'
import {MdGraphicEq} from "react-icons/md"
import {IconContext} from "react-icons"

const FooterBar = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  width: 100vh;
`

const WelcomeHeader= styled.h4`
  font-weight: bold;
  width: 5.6em;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: double grey;
`

const OptionFeed = styled.div`
  display:flex;
 
  justify-content: center;
  align-items: center;
  justify-self:center;
  align-self:center;
  margin:auto;

`

const Option = styled.div`
  border: solid black;
  margin-right: 5vh;
  
`

const LogButton = styled.input`
  padding: 1.2vh;
  border: double grey;
  background-color: white;
  
`



function Header() {
  return (
    <FooterBar>
      <IconContext.Provider value ={{size:"2.5em"}}>
        <WelcomeHeader>
          Welcome Guest
        </WelcomeHeader>
        <OptionFeed>
          <Option>
            <BiHome/>
          </Option>
          <Option>
            <AiFillSetting/>
          </Option>
          <Option>
            <MdGraphicEq/>
          </Option>
       
        </OptionFeed>
        <LogButton type="button" value="Login"/>
      </IconContext.Provider>
    </FooterBar>
  )
}

export default Header