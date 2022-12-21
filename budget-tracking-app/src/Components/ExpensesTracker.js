import React from 'react'
import styled from 'styled-components'

const Table = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding:2vh;
`

const Items = styled.div`
  display:flex-column;
  border: 1px solid rgba(0,0,0,0.8);
  padding: 10px;
  margin: 0px;
  text-align:center;
  items-algin:center;
  justify-content:center;

`
const Text = styled.div`
  font-style: italic;
  text-size:10px;
  margin:5px;
`
const Price = styled(Text)`

`

function ExpensesTracker() {
  return (
    <div>
        <Table>
            <Items>
                
            </Items>
        </Table>
    </div>
  )
}

export default ExpensesTracker