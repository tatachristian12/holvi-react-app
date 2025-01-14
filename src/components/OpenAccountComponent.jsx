import loginLogo from '../../public/static/logo-symbol-green.svg'
import multiPaymentImg from '../../public/static/multi-payment-accounts-en.png'
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

function OpenAccountComponent() {

    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 col-lg-6 container-left">
                    <nav class="navbar">
                        <div class="container-fluid">
                            <Link to="/" class="navbar-brand" >
                                <img src={loginLogo} alt="Bootstrap" width="50" height="44" />
                            </Link>
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    EN
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>
                    </nav>
                    <div class="mt-5 form-input mx-auto">
                        <h3>Open a Holvi account</h3>
                        <form>
                            <div class="row mt-4">
                                <div class="col-12 col-md-6">
                                    <label for="exampleInputEmail1" class="form-label fw-bold"><small>Business registered in
                                        <i class="bi bi-question-circle ms-1"></i></small></label>
                                    <select class="form-select" id="floatingSelect"
                                        aria-label="Floating label select example">
                                        <option selected>Choose your country</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label for="exampleInputPassword1" class="form-label fw-bold"><small>Business
                                        type</small></label>
                                    <select class="form-select bg-body-tertiary" id="floatingSelect"
                                        aria-label="Floating label select example">
                                        <option selected>Choose your type</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="mt-4">
                                <label for="exampleInputEmail1" class="form-label fw-bold"><small>Business
                                    name</small></label>
                                <input type="email" class="form-control" id="exampleInputBusinessName"
                                    placeholder="Enter the official name of your business" />
                            </div>
                            <div class="row mt-5">
                                <div class="col-md-7 col-6 col-lg-8 d-flex">
                                    <Link to="" class="text-decoration-none"><button type="submit"
                                        class="py-2 px-4 fw-bold login w-100"><small>NEXT</small></button></Link>
                                </div>
                                <div class="col-md-5 col-12 col-lg-4 form-text2 mt-4">
                                    <p class="small-text">Already have an account? <span class="form-text3">
                                        <Link to="/login" class="text-decoration-none">Log in.</Link></span></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-6 d-none d-lg-block col-lg-6 container-right">
                    <div class="mt-5 justify-content-center">
                        <div class="paragraph mx-auto justify-content-center text-center mt-5 pt-5">
                            <h3 class="fs-1 fw-bold lh-sm">Your finances, perfectly organised</h3>
                        </div>
                        <div class="d-flex justify-content-center mt-5">
                            <img src={multiPaymentImg} alt="multi-payment-accounts-en" width="800vh" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OpenAccountComponent;