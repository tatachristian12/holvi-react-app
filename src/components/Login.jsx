import loginLogo from '../../public/static/logo-symbol-green.svg'
import multiPaymentImg from '../../public/static/multi-payment-accounts-en.png'
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

function Login() {
  
    return(
        <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 col-lg-6 container-left">
                <nav class="navbar">
                    <div class="container-fluid">
                        <Link to="/" class="navbar-brand">
                            <img src={loginLogo} alt="Bootstrap" width="50" height="44"/>
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
                    <h3>Log in</h3>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label fw-bold"><small>Email</small></label>
                            <input type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1"
                                class="form-label fw-bold"><small>Password</small></label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                            <div class="form-text"><Link to="" class="text-decoration-none"><small>Forgot
                                        password?</small></Link></div>
                        </div>
                        <div class="row mt-5">
                            <div class="col-md-9 col-12 col-lg-9 form-text2 mb-3">
                                <p class="small-text">Don't have an account? <span class="form-text3"><Link to="/open-account" class="text-decoration-none">Open one here.</Link></span></p>
                            </div>
                            <div class="col-md-3 col-6 col-lg-3 d-flex">
                                <Link to=""
                                        class="text-decoration-none"><button type="submit" class="py-2 px-4 fw-bold login w-100"><small>LOG IN</small></button></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="d-none d-lg-block col-lg-6 container-right">
                <div class="mt-5 justify-content-center">
                    <div class="paragraph mx-auto justify-content-center text-center mt-5">
                        <h3 class="fs-1 fw-bold lh-sm">Your finances, perfectly organised</h3>
                        <p class="fs-5">New: Use more IBANs</p>
                        <Link to=""
                                class="text-decoration-none"><button type="submit" class="px-3 py-2 fw-bold login mb-2 mt-2">LEARN MORE</button></Link>
                    </div>
                    <div class="d-flex justify-content-end">
                        <img src={multiPaymentImg} alt="multi-payment-accounts-en" width="100%"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Login;