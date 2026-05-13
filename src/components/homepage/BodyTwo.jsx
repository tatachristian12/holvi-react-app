import secondImg from "../../../public/static/second-img.webp";
import Image from "./Image";
import Buttons from "./Buttons";
import PropTypes from 'prop-types';

function BodyTwo(props) {
  return (
    <div className="container">
      <div className="row pt-5 pb-5">
        <div className="col-md-6 order-2 order-md-1 pt-5 pb-5 ">
          <div className="container2">
            <p className="fs-3">{props.firstparagraph}</p>
            <h3 className="fw-bold display-5 mb-4 lh-1">
              {props.header}
            </h3>
            <p>
              {props.secondparagraph}
            </p>
            <p>
              <i className="fa-solid fa-check fs-5"></i>
              <span className="fw-bold ps-2">SEPA transfers</span> – 500 free
              transfers per month
            </p>
            <p>
              <i className="fa-solid fa-check fs-5"></i>{" "}
              <span className="fw-bold ps-2">Smart payment cards</span> – debit,
              credit and virtual cards
            </p>
            <p>
              <i className="fa-solid fa-check fs-5"></i>{" "}
              <span className="fw-bold ps-2">Invoicing & E-invoicing</span> – get
              paid, fast
            </p>
            <p>
              <i className="fa-solid fa-check fs-5"></i>{" "}
              <span className="fw-bold ps-2">Scan & save receipts</span> – tidy
              books, ready for tax time
            </p>
            <p>
              <i className="fa-solid fa-check fs-5"></i>{" "}
              <span className="fw-bold ps-2">Integrations</span> – connect your
              accounting software
            </p>
            <p>
              <i className="fa-solid fa-check fs-5"></i>{" "}
              <span className="fw-bold ps-2">VAT calculator</span> – see how much to
              save for tax time.
            </p>
          </div>
         
          <Buttons websiteButtons="Open Business Account"/>
          
        </div>
        <div className="col-md-6 order-1 order-md-2 pt-5 justify-content-start d-flex">
        <Image websiteImg={secondImg}/>
        </div>
      </div>
    </div>
  );
}
BodyTwo.propTypes = { // Validates that websiteButtons is a required string
  firstparagraph: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  secondparagraph: PropTypes.string.isRequired
};

export default BodyTwo;
