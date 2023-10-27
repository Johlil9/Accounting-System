import React, { useState, useContext } from 'react'
import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/v1/";
const Context = React.createContext()

export const GlobalProvider = ({children}) => {
    // State for storing incomes, expenses and any errors
    const [income, setIncome] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    /* 
     * Utility function to make API requests using axios.
     * Handles errors and updates the error state if any occur. 
     */
    const fetchData = async (url, method = 'GET', data = null) => {
        try {
            // Send the API request with the given parameters
            const response = await axios({ url: BASE_URL + url, method, data })
            return response.data
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred')
            throw err
        }
    }
    
    // Function to add a new income to the backend
    const addIncome = async (incomeData) => {
        const response = await fetchData('add-income', 'POST', incomeData)
        getIncome()
        console.log("addIncome: " + response)
    }
    
    // Function to fetch all incomes from the backend
    const getIncome = async () => {
        const incomes = await fetchData('get-incomes')
        setIncome(incomes) // Refresh incomes after deletion
        console.log("getIncome: " + incomes)
    }
    
    // Function to delete a specific income from the backend
    const deleteIncome = async (id) => {
        const response = await fetchData(`delete-income/${id}`, 'DELETE')
        getIncome() // Refresh incomes after deletion
        console.log("deleteIncome: " + response)
    }
    
    // Function to compute the total income
    const totalIncome = () => {
        return income.reduce((total, inc) => total + inc.amount, 0)
    }
    
    // Function to add a new expense to the backend
    const addExpense = async (expense) => {
        const response = await fetchData('add-expense', 'POST', expense)
        getExpenses() // Refresh expenses after addition
    }
    
    // Function to fetch all expenses from the backend
    const getExpenses = async () => {
        const fetchedExpenses = await fetchData('get-expenses')
        setExpenses(fetchedExpenses)
    }
    
    // Function to delete a specific expense from the backend
    const deleteExpense = async (id) => {
        const response = await fetchData(`delete-expense/${id}`, 'DELETE')
        getExpenses() // Refresh expenses after deletion
    }
    
    // Function to compute the total expenses
    const totalExpenses = () => {
        return expenses.reduce((total, exp) => total + exp.amount, 0)
    }

    // Function to fetch the last 3 transactions (either income or expense)
    const transactionHistory = () => {
        const history = [...income, ...expenses]
        history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        // Return the latest 3 transactions with slice
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