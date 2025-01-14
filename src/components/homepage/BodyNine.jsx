import captureOne from '../../../public/static/capture1.png'
import captureTwo from '../../../public/static/capture2.png'
import captureThree from '../../../public/static/capture3.png'
import { Link } from "react-router-dom";

function BodyNine() {

    return (
        <div class="container">
            <div class="row mt-5 pt-5 mb-5 pb-5">
                <div class="col-md-2">
                    <p class="fw-bold text-center fs-4">Excellent</p>
                    <img src={captureTwo} alt="capture2" width="200" />
                    <p class="text-center"><small>Based on <a href="" class="text-decoration-none text-dark fw-bold">2,063
                        reviews</a></small></p>
                    
                </div>
                <div class="col-md-3 lh-1 ps-5">
                    <img src={captureOne} alt="capture1" width="140" />
                    <p class="fw-bold ps-1">It is nice and easy to use.</p>
                    <p class="ps-1"><small>I am using it when i establish my company 2020, actually it was my
                        accountant's....</small></p>
                    <p class="ps-1"><small><span class="fw-bold">Pinar Pir Söderlund,</span> 27 September</small></p>
                    <p class="ps-1"><small>showing our favourite reviews</small></p>
                </div>
                <div class="col-md-3 ps-5 lh-1">
                    <img src={captureOne} alt="capture1" width="140" />
                    <p class="fw-bold ps-1">great customer service</p>
                    <p class="ps-1"><small>great customer service</small></p>
                    <p class="ps-1"><small><span class="fw-bold"> Marianne Hemminki,</span> 19 September</small></p>
                </div>
                <div class="col-md-3 ps-5 lh-1">
                    <img src={captureOne} alt="capture1" width="140" />
                    <p class="ps-1 fw-bold">It's easy to use.</p>
                    <p class="ps-1"><small>It's easy to use</small></p>
                    <p class="ps-1"><small><span class="fw-bold">Jävad Maleki,</span>29 August</small></p>
                </div>
                <div class="col-md-1 mt-5 pt-5">
                <button class="border border-black rounded-circle bg-white"><i class="bi bi-chevron-right"></i></button>
                </div>
            </div>
        </div>
    );
}
export default BodyNine;