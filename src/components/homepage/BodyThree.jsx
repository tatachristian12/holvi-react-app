import thirdImg from '../../../public/static/third-img.png'
import { Link } from "react-router-dom";

function BodyThree() {

    return (
        <div class="container-fluid bg-body-tertiary">
            <div class="container pt-5 pb-5">
                <div class="row pb-5">
                    <div class="col-md-6 pt-5 justify-content-start d-flex">
                        <img src={thirdImg} alt="third-img" width="90%" />
                    </div>
                    <div class="col-md-6 mt-3">
                        <div class="container3">
                            <p class="fs-3">For Teams</p>
                            <h3 class="fw-bold display-5 mb-4">Wherever your business, Holvi is a fit</h3>
                            <p>Simplify expense claims, manage team spending and track KPIs – all in Holvi’s connected business
                                account. Less admin, more time to focus.</p>
                            <p><i class="fa-solid fa-check fs-5"></i> <span class="fw-bold ps-2">Team debit cards</span> – powered by
                                Mastercard®</p>
                            <p><i class="fa-solid fa-check fs-5"></i> <span class="fw-bold ps-2">Manage card usage</span> – activate
                                and deactivate ATM withdrawals or online payments for individual cards</p>
                            <p><i class="fa-solid fa-check fs-5"></i> <span class="fw-bold ps-2">Instant notifications</span> – see
                                every
                                time a team member uses their card</p>
                            <p><i class="fa-solid fa-check fs-5"></i> <span class="fw-bold ps-2">No expense claims</span> – all team
                                expenses are paid from your business account in real time</p>
                            <p><i class="fa-solid fa-check fs-5"></i> <span class="fw-bold ps-2">Financial insights</span> – track
                                spending and keep an eye on KPIs in your Holvi dashboard</p>
                        </div>
                        <Link to="/open-account" class="text-decoration-none text-white"><button class="btn rounded-0 bg-dark text-white border-dark px-4 py-2 mt-4">Open business account</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default BodyThree;