import react from "react";
import { DateDisplay } from "../DateDisplay/DateDisplay";



const ExpenseItems = (props) => {

    return (
        <div className="col-md-4 text-center">
            <div className="card">
                <div className="card-body">
                    <div className="card text-white bg-secondary mb-3">
                        <div className="card-header"><DateDisplay expenseDate={props.expenseDate}></DateDisplay></div>
                        <div className="card-body">
                            <h5 className="card-title">Rs. {props.expensAmount}</h5>
                            <p className="card-text">{props.expenseTitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ExpenseItems