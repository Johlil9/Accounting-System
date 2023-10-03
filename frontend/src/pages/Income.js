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
display: flex;
overflow: auto;
.total-income{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: .5rem;
    span{
        font-size: 2.5rem;
        font-weight: 800;
        color: var(--color-green);
    }
}
.income-content{
    display: flex;
    gap: 2rem;
    .incomes{
        flex: 1;
    }
}
`;

export default Income