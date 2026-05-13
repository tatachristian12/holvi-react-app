import fifthImg from '../../../public/static/fifth-img.png'
import Image from './Image';
import Buttons from './Buttons';

function BodySeven() {
  
    return(
        <div className="container-fluid bg-body-tertiary">
    <div className="container pt-5 pb-5 ">
      <div className="row pt-5 pb-5 d-flex justify-content-center align-items-center">
        <div className="col-md-6 order-2 order-md-1 pb-5">
          <div className="container6">
            <h3 className="fw-bold display-5 mb-4 lh-sm finances">International transfers with Holvi</h3>
            <p className="fs-5">Send and receive international transfers with Holvi. Grow your business and go international
              –
              all for a transparent and fixed price.</p>
          </div>
          <Buttons websiteButtons="Explore international
            transfers"/>
        </div>
        <div className="col-md-6 order-1 order-md-2 pt-5 pb-5">
          <Image websiteImg={fifthImg}/>
        </div>
      </div>
    </div>
  </div>
    );
}
export default BodySeven;