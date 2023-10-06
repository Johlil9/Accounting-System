import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import Chart from '../components/chart/Chart'
import { useGlobalContext } from '../context/GlobalContext'
function Dashboard() {
    const {totalIncome, totalBalance, totalExpenses, getIncome, getExpenses} = useGlobalContext()

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
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`

`;

export default Dashboard