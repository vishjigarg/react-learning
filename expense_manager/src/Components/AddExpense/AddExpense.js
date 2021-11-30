import { useState } from "react";
import DisplayAlert from "../Alerts/Alerts";


const AddExpense = (props) => {
    const [showAddExpenseForm, setShowAddExpenseForm] = useState(false)
    const [expenseTitle, setExpenseTitle] = useState("")
    const [expenseAmount, setExpenseAmount] = useState(0);
    const [formError, setFormError] = useState({
        type:'',
        message:''
    });
    const validateTheExpense = () => {
        if (expenseTitle === '') {
            setFormError({type:'error', 'message':"Expense title cannot be empty"});
            return false;
        }

        if (expenseAmount === '') {
            setFormError({type:'error', 'message':"amount should not be empty"});
            return false;
        }
        props.prependTheExpenses(expenseTitle, expenseAmount);
        setFormError({type:'success', 'message':"expenses added successfully"});
    }

    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="card">
                    <div className="card-body">
                        {showAddExpenseForm ? (
                            
                            <div className="row">
                            <DisplayAlert type={formError.type} message={formError.message}></DisplayAlert>
                                <div>
                                    <div className="mb-3">
                                        <label htmlFor="expenseTitle" className="form-label">Expense Title</label>
                                        <input type="text" className="form-control" id="expenseTitle" placeholder="Expense Title" onChange={(event) => setExpenseTitle(event.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="expenseAmount" className="form-label">Expense Amount</label>
                                        <input type="text" className="form-control" id="expenseAmount" placeholder="Expense Amount" onChange={(event) => setExpenseAmount(event.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                    <button className="btn btn-primary" onClick={validateTheExpense}>Add Expense</button>
                                    &nbsp;
                                    <button className="btn btn-secondary" onClick={() => setShowAddExpenseForm(false)}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <button type="button" className="btn btn-primary" onClick={() => setShowAddExpenseForm(true)}>Add Expenses</button>
                                </div>
                            </div>
                        )}


                    </div>
                </div>
            </div>
        </div>
    )
}


export default AddExpense;