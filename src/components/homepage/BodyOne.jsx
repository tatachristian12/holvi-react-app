import laptopPic from '../../../public/static/laptop.png'
import { Link } from "react-router-dom";
import Image from './Image';
import Buttons from './Buttons';

function BodyOne() {
    
  return(
    <div class="container-fluid container-one bottom-box">
    <div class="container pt-5 pb-5">
      <div class="row pt-5 pb-5 mb-5">
        <div class="col-md-12 col-lg-6 order-2">
          <div class="container1">
            <h1 class="fw-bold display-4">Home for your business finances</h1>
            <p class="fs-3 mt-5 mb-3 lh-base">Banking, invoicing and bookkeeping – plus smart payment cards. All in one
              place, so you can focus on what matters. That’s work life simplified.</p>
          </div>

          <Buttons websiteButtons="Open Business Account"/>

          <Link to="" class="text-decoration-none"><button class="px-5 py-2 holvi-pricing mt-3">Discover
              Holvi</button></Link>
        </div>
        <div class="col-12 d-lg-none order-1">
        <Image websiteImg={laptopPic}/>
        </div>
      </div>
    </div>
    </div>
        );
}

export default BodyOne;