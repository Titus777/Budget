import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
  display:flex-column;
  width: 50vh;
  height: 100%;
  margin:auto auto auto;
`

const UpcomingBills = styled.div`
`

function Bills() {
  return (
    <Container>
        <UpcomingBills>
            Upcoming Bills
        </UpcomingBills>
    </Container>
  )
}

export default Bills