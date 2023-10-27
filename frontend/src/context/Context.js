import React, { useState, useContext } from 'react'
import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/v1/";
const Context = React.createContext()

export const GlobalProvider = ({children}) => {
    // State for storing incomes, expenses and any errors
    const [income, setIncome] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    // Function to add a new income to the backend
    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) => {
                setError(err.response.data.message)
            })
        console.log(response.data)
    }

    // Function to fetch all incomes from the backend
    const getIncome = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`, income)
        setIncome(response.data)
        console.log(response.data)
    }

    // Function to delete a specific income from the backend
    const deleteIncome = async (id) => {
        const response  = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncome() // Refresh incomes after deletion
        console.log(response.data)
    }

    // Function to compute the total income
    const totalIncome = () => {
        // using let because I want to change this variable
        let totalIncome = 0
        income.forEach((income) => {
            totalIncome = totalIncome + income.amount
        })
        return totalIncome
    }
    //console.log("Total income: " + totalIncome())
    
    // Function to add a new expense to the backend
    const addExpense = async (income) => {
        const response = await axios.post(`${BASE_URL}add-expense`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getExpenses() // Refresh expenses after addition
    }

    // Function to fetch all expenses from the backend
    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
        //console.log(response.data)
    }

    // Function to delete a specific expense from the backend
    const deleteExpense = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses() // Refresh expenses after deletion
    }

    // Function to compute the total expenses
    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })
        return totalIncome
    }

    // Function to fetch the last 3 transactions (either income or expense)
    const transactionHistory = () => {
        const history = [...income, ...expenses]
        // Sorting transactions based on their creation date
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        // Return the latest 3 transactions with slice method
        return history.slice(0, 3)
    }

    // Function to compute the net balance (totalIncome - totalExpenses)
    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }
    return (
        // Using the Context.Provider component to pass down values (state and functions) to child components
        <Context.Provider value ={{ 
            addIncome, 
            getIncome, 
            income, 
            deleteIncome, 
            totalIncome, 
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            expenses, 
            error,
            setError,
            transactionHistory,
        }}>
            {children}
        </Context.Provider>
    )
}

// Custom hook to access the context
export const useGlobalContext = () => {
    return useContext(Context)
}