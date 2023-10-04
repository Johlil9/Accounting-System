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
import {Line} from 'react-chartjs-2'
import { useGlobalContext } from '../../context/GlobalContext'

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
    const {incomes, expenses} = useGlobalContext()

   

    return (
        <ChartStyled>
         
        </ChartStyled>
    )
}
const ChartStyled = styled.div`
        background: red;
`;

export default Chart