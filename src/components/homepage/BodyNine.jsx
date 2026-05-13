import captureOne from '../../../public/static/capture1.png'
import captureTwo from '../../../public/static/capture2.png'

function BodyNine() {

    return (
        <div className="container">
            <div className="row mt-5 pt-5 mb-5 pb-5">
                <div className="col-md-2">
                    <p className="fw-bold text-center fs-4">Excellent</p>
                    <img src={captureTwo} alt="capture2" width="200" />
                    <p className="text-center"><small>Based on <a href="" className="text-decoration-none text-dark fw-bold">2,063
                        reviews</a></small></p>
                    
                </div>
                <div className="col-md-3 lh-1 ps-5">
                    <img src={captureOne} alt="capture1" width="140" />
                    <p className="fw-bold ps-1">It is nice and easy to use.</p>
                    <p className="ps-1"><small>I am using it when i establish my company 2020, actually it was my
                        accountant's....</small></p>
                    <p className="ps-1"><small><span className="fw-bold">Pinar Pir Söderlund,</span> 27 September</small></p>
                    <p className="ps-1"><small>showing our favourite reviews</small></p>
                </div>
                <div className="col-md-3 ps-5 lh-1">
                    <img src={captureOne} alt="capture1" width="140" />
                    <p className="fw-bold ps-1">great customer service</p>
                    <p className="ps-1"><small>great customer service</small></p>
                    <p className="ps-1"><small><span className="fw-bold"> Marianne Hemminki,</span> 19 September</small></p>
                </div>
                <div className="col-md-3 ps-5 lh-1">
                    <img src={captureOne} alt="capture1" width="140" />
                    <p className="ps-1 fw-bold">It's easy to use.</p>
                    <p className="ps-1"><small>It's easy to use</small></p>
                    <p className="ps-1"><small><span className="fw-bold">Jävad Maleki,</span>29 August</small></p>
                </div>
                <div className="col-md-1 mt-5 pt-5">
                <button className="border border-black rounded-circle bg-white"><i className="bi bi-chevron-right"></i></button>
                </div>
            </div>
        </div>
    );
}
export default BodyNine;