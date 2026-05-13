import fourthImg from '../../../public/static/four-img.png'
import { Link } from "react-router-dom";
import Image from './Image';

function BodyFour() {
 
    return(
        <div className="container position-relative">
    <div className="row pt-5 pb-5 d-flex justify-content-center align-items-center">
      <div className="col-md-6 pb-5 paragraph-4">
        <div className="container4">
          <p className="fs-3 ">New: Additional accounts</p>
          <h3 className="fw-bold display-5 mb-4 lh-sm finances">Your finances, organised</h3>
          <p>Create your own IBAN accounts for different projects, sources of income or VAT payments. With the help
            of additional accounts, you keep your finances even better under control.</p>
        </div>
      </div>
      <div className="col-md-6 pt-5 pb-5">
        <Image websiteImg={fourthImg}/>
      </div>
    </div>
  </div>
    );
}
export default BodyFour;