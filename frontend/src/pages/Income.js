import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import { useGlobalContext } from '../context/GlobalContext'
import Form from '../components/form/Form'
import IncomeItem from '../components/items/IncomeItem'

function Income() {
    const { addIncome, getIncome, income } = useGlobalContext()

    useEffect(() => {
        getIncome()
    }, [])

    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <div className = "income-content">
                    <div className = "container">
                        <Form />
                    </div>
                    <div className = "income">
                        {income.map((income) => {
                            const {_id, title, amount, date, category, description } = income
                            return <IncomeItem 
                            key={_id}
                            id={_id} 
                            title={title} 
                            description={description} 
                            amount={amount} 
                            date={date} 
                            
                            category={category} 
                            indicatorColor="var(--color-green)"
                            
                            />
                        })}        
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`

`;

export default Income