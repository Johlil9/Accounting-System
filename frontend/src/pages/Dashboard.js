import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import Chart from '../components/chart/Chart'
function Dashboard() {
    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>Dashboard</h1>
                <Chart />
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`

`;

export default Dashboard