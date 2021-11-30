import react from "react";
import { MonthNames } from "../../DataProviders/MonthNames";
import { DayNames } from "../../DataProviders/DayNames";

export const DateDisplay = (props) => {


    return (
    
            
            <div className="card text-white bg-primary mb-3">
                <div className="card-header">Date</div>
                <div className="card-body">
                    <h5 className="card-title">{MonthNames[props.expenseDate.getMonth()]}, {props.expenseDate.getDate()}, {props.expenseDate.getFullYear()}</h5>
                    <p className="card-text">{DayNames[props.expenseDate.getDay()].toUpperCase()}</p>
                </div>
            </div>
    )
}