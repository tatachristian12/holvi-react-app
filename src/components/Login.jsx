import loginLogo from '../../public/static/logo-symbol-green.svg'
import multiPaymentImg from '../../public/static/multi-payment-accounts-en.png'
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

function Login() {
  
    return(
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-12 col-lg-6 container-left">
                <nav className="navbar">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">
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
                <div className="mt-5 form-input mx-auto">
                    <h3>Log in</h3>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label fw-bold"><small>Email</small></label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1"
                                className="form-label fw-bold"><small>Password</small></label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                            <div className="form-text"><Link to="" className="text-decoration-none"><small>Forgot
                                        password?</small></Link></div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-9 col-12 col-lg-9 form-text2 mb-3">
                                <p className="small-text">Don't have an account? <span className="form-text3"><Link to="/open-account" className="text-decoration-none">Open one here.</Link></span></p>
                            </div>
                            <div className="col-md-3 col-6 col-lg-3 d-flex">
                                <Link to=""
                                        className="text-decoration-none"><button type="submit" className="py-2 px-4 fw-bold login w-100"><small>LOG IN</small></button></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="d-none d-lg-block col-lg-6 container-right">
                <div className="mt-5 justify-content-center">
                    <div className="paragraph mx-auto justify-content-center text-center mt-5">
                        <h3 className="fs-1 fw-bold lh-sm">Your finances, perfectly organised</h3>
                        <p className="fs-5">New: Use more IBANs</p>
                        <Link to=""
                                className="text-decoration-none"><button type="submit" className="px-3 py-2 fw-bold login mb-2 mt-2">LEARN MORE</button></Link>
                    </div>
                    <div className="d-flex justify-content-end">
                        <img src={multiPaymentImg} alt="multi-payment-accounts-en" width="100%"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Login;