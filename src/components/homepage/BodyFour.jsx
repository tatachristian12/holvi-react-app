import fourthImg from '../../../public/static/four-img.png'
import { Link } from "react-router-dom";

function BodyFour() {
 
    return(
        <div class="container position-relative">
    <div class="row pt-5 pb-5 d-flex justify-content-center align-items-center">
      <div class="col-md-6 pb-5 paragraph-4">
        <div class="container4">
          <p class="fs-3 ">New: Additional accounts</p>
          <h3 class="fw-bold display-5 mb-4 lh-sm finances">Your finances, organised</h3>
          <p>Create your own IBAN accounts for different projects, sources of income or VAT payments. With the help
            of additional accounts, you keep your finances even better under control.</p>
        </div>
      </div>
      <div class="col-md-6 pt-5 pb-5">
        <img src={fourthImg} alt="second-img" width="80%" height="80%"/>
      </div>
    </div>
  </div>
    );
}
export default BodyFour;