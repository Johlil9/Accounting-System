import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/GlobalContext'


function History () {
    const {transactionHistory} = useGlobalContext()
    const [...history] = transactionHistory()

    return(
        <HistoryStyled>
            <h2>Rececnt History</h2>
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    background: red;
`

export default History