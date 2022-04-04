import "./JobCard.css";
import { Link } from "react-router-dom";

/**
 * Renders card containing job information
 *
 * Props: title, salary, equity
 *
 * State: None
 *
 */
function JobCard({ title, salary, equity }) {
  console.log("Entering JobCard Component");
// CR: add company name if there is one, (list of jobs page has company name)
  return (

      <div className="JobCard card "><h3>{title}</h3>
      
      <div class="card-body">
      <p className="card-text text-start">Salary: {salary}</p>
      <p className="card-text text-start">Equity: {equity} <Link className="float-end" style={{color:"#2D7345"}}>Apply</Link>  </p>
      </div>
    </div>
    
  );
}

export default JobCard;
