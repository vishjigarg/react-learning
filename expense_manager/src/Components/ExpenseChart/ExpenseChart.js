import react from "react";



const ExpenseChart = ({allYears, onYearChange}) => {

    return (
        <div className="row">  
            <div className="col-md-12">
                    <div className="col-md-4 float-right">
                        <select onChange={(event) => onYearChange(event.target.value)}>
                        <option value="">Select year</option>
                            {allYears.map((data, index)=>{
                                return <option key={index}value={data}>{data}</option>
                            })}
                        </select>
                    </div>
            </div>
            <h1>ExpenseChart</h1>
        </div>
    )
}


export default ExpenseChart