import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import { useGlobalContext } from '../context/GlobalContext'
import Form from '../components/form/Form'

function Income() {
    const { addIncome } = useGlobalContext()
    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <div className = "income-content">
                    <div className = "container">
                        <div classaName = "income">
                            <Form />
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`

`;

export default Income