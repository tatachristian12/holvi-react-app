import { Link } from "react-router-dom";
import Buttons from "./Buttons";

function BodyTen() {
   
    return(
        <div className="container-fluid container-two top-box">
    <div className="container pt-4 pb-5">
      <div className="row d-flex justify-content-center align-items-center mt-5">
        <div className="col-md-6 col-12">
          <div className="container7">
            <h1 className="fw-bold mb-5">Open an account online or in-app</h1>
            <p className="">Get up and running in just three easy steps,</p>
            <ol className="lh-lg m-0">
              <li>Confirm your identity online</li>
              <li>Fill in your company information</li>
              <li>Choose your plan</li>
            </ol>
          </div>
        </div>
        <div className="col-md-6 col-12">
        <Buttons websiteButtons="Open Business Account"/>
          <Link to="" className="text-decoration-none text-dark"><button className="mt-5 px-5 py-2 holvi-pricing">Holvi
              Pricing</button></Link>
        </div>
      </div>
    </div>
  </div>
    );
}
export default BodyTen;