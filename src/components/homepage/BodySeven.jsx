import fifthImg from '../../../public/static/fifth-img.png'
import { Link } from "react-router-dom";
import Image from './Image';
import Buttons from './Buttons';

function BodySeven() {
  
    return(
        <div class="container-fluid bg-body-tertiary">
    <div class="container pt-5 pb-5 ">
      <div class="row pt-5 pb-5 d-flex justify-content-center align-items-center">
        <div class="col-md-6 order-2 order-md-1 pb-5">
          <div class="container6">
            <h3 class="fw-bold display-5 mb-4 lh-sm finances">International transfers with Holvi</h3>
            <p class="fs-5">Send and receive international transfers with Holvi. Grow your business and go international
              –
              all for a transparent and fixed price.</p>
          </div>
          <Buttons websiteButtons="Explore international
            transfers"/>
        </div>
        <div class="col-md-6 order-1 order-md-2 pt-5 pb-5">
          <Image websiteImg={fifthImg}/>
        </div>
      </div>
    </div>
  </div>
    );
}
export default BodySeven;