import React, { useState, useContext } from 'react'
import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/v1/"
// Creating a Context to allow components to have access to the global state.
const Context = React.createContext()

export const GlobalProvider = ({children}) => {
    // State varibales to keep track of incomes, expenses and any error messages.
    const [income, setIncome] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    // POST request that will add a new income.
    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) => {
                setError(err.response.data.message) // sets an error state if errors occur.
            })
        getIncome() // Refresh the income list after adding an income.
    }

    // GET request that retrieve the list of incomes .
    const getIncome = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`, income)
        setIncome(response.data) // Updates the income state.
        // console.log(response.data)
    }

    // DELETE request that deletes incomes by ID.
    const deleteIncome = async (id) => {
        const response  = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncome() // Refresh income list after deleting an income.
        console.log(response.data)
    }

    // Function that calculates the total income from the income array.
    const totalIncome = () => {
        // using let because I want to change this variable.
        let totalIncome = 0
        income.forEach((income) => {
            totalIncome = totalIncome + income.amount
        })
        return totalIncome
    }

    //console.log("Total income: " + totalIncome())
    
    // POST request that adds a new expense. 
    const addExpense = async (income) => {
        const response = await axios.post(`${BASE_URL}add-expense`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getExpenses() // Refresh the expense list after adding a new expense.
    }

    // GET request that retrieve the list of expenses.
    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data) // Update the expense state.
        //console.log(response.data)
    }

    // DELETE request that deletes expense by ID.
    const deleteExpense = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses() // Refresh the expense list after deletion.
    }

    // Function to calculate total expenses.
    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })
        return totalIncome
    }

    // Function to get transaction history by combining incomes and expenses.
    const transactionHistory = () => {
        const history = [...income, ...expenses] // Combine the arrays.
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt) // Sort them by date in descending order.
        })
        return history.slice(0, 3) // Return the last three transactions.
    }

    // Function to calculate the total balance by subtracting total expense from total income.
    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    // The Context Provider that passes down the functions and state variables to child components.
    return (
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

// Custom hook for consuming our context easily
export const useGlobalContext = () => {
    return useContext(Context)
}