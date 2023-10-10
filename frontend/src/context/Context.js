import React, { useState, useContext } from 'react'
import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/v1/";

const Context = React.createContext()

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
        const response = await axios.get(`${BASE_URL}get-incomes`, income)
        setIncome(response.data)
        console.log(response.data)
    }

    const deleteIncome = async (id) => {
        const response  = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncome()
        console.log(response.data)
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
    
    const addExpense = async (income) => {
        const response = await axios.post(`${BASE_URL}add-expense`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getExpenses()
    }

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
        //console.log(response.data)
    }

    const deleteExpense = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses()
    }

    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome
    }

    const transactionHistory = () => {
        const history = [...income, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }

    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

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

export const useGlobalContext = () => {
    return useContext(Context)
}