import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/GlobalContext'


function History () {
    const {transactionHistory} = useGlobalContext
    const [...history] = transactionHistory()

    return(
        <>
        
        </>
    )
}

const HistoryStyled = styled.div`

`

export default History