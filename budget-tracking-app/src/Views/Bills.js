import React from 'react'
import {MdGraphicEq} from "react-icons/md"
import styled from 'styled-components'

const Container = styled.div`
  display:flex-column;
  width: 50vh;
  height: 30em;
  margin:auto auto auto;
  overflow: scroll;
  scrollbar-width: none;
`
const Header = styled.h3`
  font-weight: bold;
  font-style: oblique;
  text-shadow: 2px 2px 5px grey;
`

const UpcomingBills = styled.div`
 margin: auto;
 padding: 0;
`
const Bill = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  height: 4em;
  border: solid grey;
  margin: 2em;
  flex: 33;
`

const BillInfo = styled.div`
  display: flex;
  flex: 33%;
  flex-direction: ${props => props.title ? "column": "row"};
  align-items: center;
  justify-content: center;
`

function Bills(props) {
  return (
    <Container>
        <UpcomingBills>
            <Header>Your upcoming bills: </Header>
            <Bill>
              <BillInfo title>
                Gas
                <MdGraphicEq/>
              </BillInfo>
              <BillInfo>
                29th April
              </BillInfo>
              <BillInfo price>
                £20,99
              </BillInfo>
            </Bill>
            <Bill>
              <BillInfo title>
                Gas
                <MdGraphicEq/>
              </BillInfo>
              <BillInfo>
                29th April
              </BillInfo>
              <BillInfo price>
               £20,99
              </BillInfo>
            </Bill>
            
        </UpcomingBills>
        <Header> Balance </Header>
        <Bill>
          £2000.42
        </Bill>
    </Container>
  )
}

export default Bills