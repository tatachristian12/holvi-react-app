import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

function Buttons(props) {
    
    return(
        <div>
        <Link to="/open-account" class="text-decoration-none text-white"><Button
              class="bg-dark text-white px-4 py-2 me-5 open-account">{props.websiteButtons}</Button></Link>
              </div>
    );
}

Buttons.propTypes = {
  websiteButtons: PropTypes.string.isRequired // Validates that websiteButtons is a required string
};
export default Buttons;