import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import Chart from '../components/chart/Chart'
import { useGlobalContext } from '../context/GlobalContext'
function Dashboard() {
    const {income, expenses, totalIncome, totalBalance, totalExpenses, getIncome, getExpenses} = useGlobalContext()

    useEffect(() => {
        getIncome()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
            <h1>All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
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
                    </div>
                    <div className="history-con">
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

`;

export default Dashboard