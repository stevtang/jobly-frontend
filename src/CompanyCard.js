import { Link } from "react-router-dom";
import "./CompanyCard.css"

/**
 *  Renders a Link component containing company details
 * 
 *  Props: handle, name, description, numEmployees, logoUrl 
 * 
 *  State: None
 */
function CompanyCard({ handle, name, description, numEmployees, logoUrl }) {

    // Ternary to use placeholder since we are destructuring the prop above
    let logo = logoUrl ? logoUrl : "/logos/default_image.png";

    console.log("Entering CompanyCard, data:", logoUrl);
    // CR: wrap link with div and give classname to div not Link
    return (
        <div className="CompanyCardLink">
            <Link class="CompanyCard card text-black bg-secondary mb-3" style={{ 'max-width': "40rem"}} to={`/companies/${handle}`}>
            <div class="card-header text-start">{name}      <img className="CompanyCardImage float-end" src={logo} alt="logo" /></div>
            

            <div class="card-body">
                <p class="card-text text-start">About: {description}</p>
                <p class="card-text text-start">Total Employees: {numEmployees}</p>
            </div>
            </Link>
        </div>
    );
}

export default CompanyCard;

