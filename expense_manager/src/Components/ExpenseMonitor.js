import react, { useState } from "react";
import AddExpense from "./AddExpense/AddExpense";
import ExpenseChart from "./ExpenseChart/ExpenseChart";
import ExpenseItems from "./ExpenseItems/ExpenseItems";


const expensesList = [
    {
        date: new Date('2017-01-03'),
        title: 'Maggi',
        amount: 11
    },
    {
        date: new Date('2017-01-03'),
        title: 'Atta',
        amount: 330
    },
    {
        date: new Date('2017-01-03'),
        title: 'Credit Card',
        amount: 15000
    },
    {
        date: new Date('2017-01-03'),
        title: 'Medical Expenses',
        amount: 5000
    },
    {
        date: new Date('2018-01-03'),
        title: 'Maggi',
        amount: 11
    },
    {
        date: new Date('2018-01-03'),
        title: 'Atta',
        amount: 330
    },
    {
        date: new Date('2018-01-03'),
        title: 'Credit Card',
        amount: 15000
    },
    {
        date: new Date('2018-01-03'),
        title: 'Medical Expenses',
        amount: 5000
    },
    {
        date: new Date('2019-01-03'),
        title: 'Maggi',
        amount: 11
    },
    {
        date: new Date('2019-01-03'),
        title: 'Atta',
        amount: 330
    },
    {
        date: new Date('2019-01-03'),
        title: 'Credit Card',
        amount: 15000
    },
    {
        date: new Date('2019-01-03'),
        title: 'Medical Expenses',
        amount: 5000
    },
    {
        date: new Date('2020-01-03'),
        title: 'Maggi',
        amount: 11
    },
    {
        date: new Date('2020-01-03'),
        title: 'Atta',
        amount: 330
    },
    {
        date: new Date('2020-01-03'),
        title: 'Credit Card',
        amount: 15000
    },
    {
        date: new Date('2020-01-03'),
        title: 'Medical Expenses',
        amount: 5000
    },
    {
        date: new Date('2021-01-03'),
        title: 'Maggi',
        amount: 11
    },
    {
        date: new Date('2021-01-03'),
        title: 'Atta',
        amount: 330
    },
    {
        date: new Date('2021-01-03'),
        title: 'Credit Card',
        amount: 15000
    },
    {
        date: new Date('2021-01-03'),
        title: 'Medical Expenses',
        amount: 5000
    }
]


const ExpenseMonitor = () => {

    console.log("component loaded")

    const [expenses, setExpenses] = useState(expensesList)
    const [selectedYear, setSelectedYear] = useState('')
    const filterDataAsPerYear = (year) => {
        setSelectedYear(year)
    }

    const getYears = () => {
        let years = Array.from(new Set(expensesList.map((data) => {
            return data.date.getFullYear()
        })));
        return years;
    }

    const prependTheExpenses = (title, amount) => {
        let newExpense = [{
            date: new Date(),
            title:title,
            amount:amount,
        },...expenses]

        setExpenses(newExpense)
    }

    return(
        <div className="container">
            <AddExpense prependTheExpenses={prependTheExpenses}></AddExpense>
            <ExpenseChart allYears={getYears()} onYearChange={filterDataAsPerYear}></ExpenseChart>
            <div className="row">
            {expenses.filter((item)=> {
                console.log(selectedYear)
                return selectedYear == item.date.getFullYear() || selectedYear==''
            }).map((data, index) => {
                return <ExpenseItems 
                expenseTitle={data.title} 
                expenseDate={data.date}
                expensAmount={data.amount}
                key={index}
                >
                </ExpenseItems>
            })}
            </div>
        </div>
    )
}


export default ExpenseMonitor;