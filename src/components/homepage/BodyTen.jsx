import { Link } from "react-router-dom";

function BodyTen() {
   
    return(
        <div class="container-fluid container-two top-box">
    <div class="container pt-4 pb-5">
      <div class="row d-flex justify-content-center align-items-center mt-5">
        <div class="col-md-6 col-12">
          <div class="container7">
            <h1 class="fw-bold mb-5">Open an account online or in-app</h1>
            <p class="">Get up and running in just three easy steps,</p>
            <ol class="lh-lg m-0">
              <li>Confirm your identity online</li>
              <li>Fill in your company information</li>
              <li>Choose your plan</li>
            </ol>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <Link to="/open-account" class="text-decoration-none text-white"><button
              class="bg-dark text-white border-dark px-4 py-2 mt-5 me-5 open-account">Open business account</button></Link>
          <Link to="" class="text-decoration-none text-dark"><button class="mt-5 px-5 py-2 holvi-pricing">Holvi
              Pricing</button></Link>
        </div>
      </div>
    </div>
  </div>
    );
}
export default BodyTen;