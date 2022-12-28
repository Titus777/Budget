import React from 'react'
import {MdGraphicEq} from "react-icons/md"
import styled from 'styled-components'

const BillContainer = styled.div`
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


function Bill({title,date,amount,currentMonth}) {
    
  return (
    <BillContainer>
        <BillInfo title>
        {title}
        <MdGraphicEq/>
        </BillInfo>
        <BillInfo>
        {date} {currentMonth}
        </BillInfo>
        <BillInfo price>
        {amount}
        </BillInfo>
    </BillContainer>
  )
}

export default Bill