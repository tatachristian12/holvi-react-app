import secondImg from "../../../public/static/second-img.webp";
import { Link } from "react-router-dom";
import Image from "./Image";
import Buttons from "./Buttons";

function BodyTwo(props) {
  return (
    <div class="container">
      <div class="row pt-5 pb-5">
        <div class="col-md-6 order-2 order-md-1 pt-5 pb-5 ">
          <div class="container2">
            <p class="fs-3">{props.firstparagraph}</p>
            <h3 class="fw-bold display-5 mb-4 lh-1">
              {props.header}
            </h3>
            <p>
              {props.secondparagraph}
            </p>
            <p>
              <i class="fa-solid fa-check fs-5"></i>
              <span class="fw-bold ps-2">SEPA transfers</span> – 500 free
              transfers per month
            </p>
            <p>
              <i class="fa-solid fa-check fs-5"></i>{" "}
              <span class="fw-bold ps-2">Smart payment cards</span> – debit,
              credit and virtual cards
            </p>
            <p>
              <i class="fa-solid fa-check fs-5"></i>{" "}
              <span class="fw-bold ps-2">Invoicing & E-invoicing</span> – get
              paid, fast
            </p>
            <p>
              <i class="fa-solid fa-check fs-5"></i>{" "}
              <span class="fw-bold ps-2">Scan & save receipts</span> – tidy
              books, ready for tax time
            </p>
            <p>
              <i class="fa-solid fa-check fs-5"></i>{" "}
              <span class="fw-bold ps-2">Integrations</span> – connect your
              accounting software
            </p>
            <p>
              <i class="fa-solid fa-check fs-5"></i>{" "}
              <span class="fw-bold ps-2">VAT calculator</span> – see how much to
              save for tax time.
            </p>
          </div>
         
          <Buttons websiteButtons="Open Business Account"/>
          
        </div>
        <div class="col-md-6 order-1 order-md-2 pt-5 justify-content-start d-flex">
        <Image websiteImg={secondImg}/>
        </div>
      </div>
    </div>
  );
}

export default BodyTwo;
