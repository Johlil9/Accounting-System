import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import Chart from '../components/chart/Chart'
import { useGlobalContext } from '../context/Context'
import History from '../components/history/History'

function Dashboard() {
    const {income, expenses, totalIncome, totalBalance, totalExpenses, getIncome, getExpenses} = useGlobalContext()

    useEffect(() => {
        getIncome()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>Dashboard</h1>
                <div className="amount-con">
                    <div className="income">
                        <h2>Total Income</h2>
                        <p>
                            {totalIncome()}
                        </p>
                    </div>
                    <div className="expense">
                        <h2>Total Expense</h2>
                        <p>
                            {totalExpenses()}
                        </p>
                    </div>
                    <div className="balance">
                        <h2>Total Balance</h2>
                        <p>
                            {totalBalance()}
                        </p>
                    </div>
                </div>                        
                <div className="stats-con">
                    <div className="chart-con">
                        <h1 className="chart-title">Overview</h1>
                        <div className="chart-con">
                            <Chart />
                        </div>
                    </div>
                    <div className="history-con">
                        <History/>
                        <h2 className="salary-title">Min <span>Salary</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...income.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...income.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`

.amount-con{
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 2rem; 
    margin-bottom: 2rem;
    .income, .expense, .balance{ 
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        display: flex;
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
        p{
            font-size: 3.5rem;
            font-weight: 700;
        }
    }
    
    .balance{
        p{
            color: var(--color-green);
            opacity: 0.6;
            font-size: 4.5rem;
        }
    }
}

.stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1 / 4; 
            height: 400px;
            
        }
        .history-con{
            grid-column: 4 / 6;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .salary-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
    }
    @media (max-width: 1000px) {
    .amount-con {
        grid-template-columns: 1fr;
        margin-bottom: 1rem;
        
        .income, .expense, .balance {
            margin-bottom: 1rem; 
            padding: 0.5rem; 
            
            p {
                font-size: 2rem; 
                font-weight: 600; 
            }
        }

        .balance p {
            font-size: 2.5rem; 
        }
    }
}

.stats-con {
    @media (max-width: 768px) {
        grid-template-columns: 1fr; 
        
        .chart-con, .history-con {
            grid-column: 1 / -1; 
        }
    }
}
`;

export default Dashboard