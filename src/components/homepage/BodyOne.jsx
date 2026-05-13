import laptopPic from '../../../public/static/laptop.png'
import { Link } from "react-router-dom";
import Buttons from './Buttons';

function BodyOne() {
    
  return(
    <div className="container-fluid container-one bottom-box">
    <div className="container pt-5 pb-5">
      <div className="row pt-5 pb-5 mb-5">
        <div className="col-md-12 col-lg-6 order-2">
          <div className="container1">
            <h1 className="fw-bold display-4">Home for your business finances</h1>
            <p className="fs-3 mt-5 mb-3 lh-base">Banking, invoicing and bookkeeping – plus smart payment cards. All in one
              place, so you can focus on what matters. That’s work life simplified.</p>
          </div>

          <Buttons websiteButtons="Open Business Account"/>

          <Link to="" className="text-decoration-none"><button className="px-5 py-2 holvi-pricing mt-3">Discover
              Holvi</button></Link>
        </div>
        <div className="col-12 d-lg-none order-1">
        <img src={laptopPic} alt="Laptop" className="img-fluid"/>
        </div>
      </div>
    </div>
    </div>
        );
}

export default BodyOne;