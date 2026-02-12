// Author: Anurag R Simha
// This component is where a message combining the details submitted through the form get displayed.
// Data sent from Form is captured and displayed via this component.
import '../App.css'
const DetailsDisplay = ({name, age}) => {
    return (
        <div>
            <hr className="header-line" />
            <p>You are <strong>{name}</strong>, and you are <strong>{age}</strong> years old.</p>
        </div>
    );
};

export default DetailsDisplay