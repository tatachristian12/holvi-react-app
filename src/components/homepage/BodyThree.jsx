import thirdImg from '../../../public/static/third-img.png'
import Image from './Image';
import Buttons from './Buttons';

function BodyThree() {

    return (
        <div className="container-fluid bg-body-tertiary">
            <div className="container pt-5 pb-5">
                <div className="row pb-5">
                    <div className="col-md-6 pt-5 justify-content-start d-flex">
                        <Image websiteImg={thirdImg}/>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className="container3">
                            <p className="fs-3">For Teams</p>
                            <h3 className="fw-bold display-5 mb-4">Wherever your business, Holvi is a fit</h3>
                            <p>Simplify expense claims, manage team spending and track KPIs – all in Holvi’s connected business
                                account. Less admin, more time to focus.</p>
                            <p><i className="fa-solid fa-check fs-5"></i> <span className="fw-bold ps-2">Team debit cards</span> – powered by
                                Mastercard®</p>
                            <p><i className="fa-solid fa-check fs-5"></i> <span className="fw-bold ps-2">Manage card usage</span> – activate
                                and deactivate ATM withdrawals or online payments for individual cards</p>
                            <p><i className="fa-solid fa-check fs-5"></i> <span className="fw-bold ps-2">Instant notifications</span> – see
                                every
                                time a team member uses their card</p>
                            <p><i className="fa-solid fa-check fs-5"></i> <span className="fw-bold ps-2">No expense claims</span> – all team
                                expenses are paid from your business account in real time</p>
                            <p><i className="fa-solid fa-check fs-5"></i> <span className="fw-bold ps-2">Financial insights</span> – track
                                spending and keep an eye on KPIs in your Holvi dashboard</p>
                        </div>
                        <Buttons websiteButtons="Open Business Account"/>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default BodyThree;