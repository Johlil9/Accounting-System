import React from 'react'
import styled from 'styled-components'
import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    return (
        <ChartStyled>
            Chart Test 
        </ChartStyled>
    )
}
const ChartStyled = styled.div`
        background: red;
`;

export default Chart