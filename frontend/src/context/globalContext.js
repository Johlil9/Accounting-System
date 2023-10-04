import React, {useState, useContext} from 'react'
import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
    const [income, setIncome] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) => {
                setError(err.response.data.message)
            })
        console.log(response.data)
           
    }

    const getIncome = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncome(response.data)
        console.log(response.data)
    }

    const deleteIncome = async (id) => {
        const response  = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncome()
    }

    const totalIncome = () => {
        // using let because I want to change this variable
        let totalIncome = 0
        income.forEach((income) => {
            totalIncome = totalIncome + income.amount
        })
        return totalIncome
    }

    //console.log("Total income: " + totalIncome())
    
    const getExpenses = async (expenses) => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
        console.log(response.data)
    }

    const addExpense = async (expenses) => {
        const response = await axios.post(`${BASE_URL}add-expense`, expenses)
            .catch((err) => {
                setError(err.response.data.message)
            })
            console.log(response.data)
    }


    return (
        <GlobalContext.Provider value ={{ 
            addIncome, 
            getIncome, 
            income, 
            deleteIncome, 
            totalIncome, 
            addExpense,
            getExpenses,
            expenses, 
            error
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}