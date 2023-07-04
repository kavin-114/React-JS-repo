import React from "react";
import './Login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowRightArrowLeft, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import imgframe from'./imgframe.jpg'

function Login() {
    return (
        <>
            <div className="login-main container-fluid w-100 vh-100 bg-secondary pt-5">
                <div className="login-sub container row bg-light h-75 w-50 p-3 m-auto rounded-5">
                    <div className="login-img-box col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center pt-3">
                        <div className="img-frame">
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center pt-5">
                        <div><h3 className="fw-bolder">Member Login</h3></div>
                        <div class="form-floating mt-3 mb-3 col-12 text-secondary ">
                            <input type="email" class="form-control rounded-5" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput"><FontAwesomeIcon icon={faEnvelope} className="me-3" />Email address</label>
                        </div>
                        <div class="form-floating col-12 mb-3 text-secondary">
                            <input type="password" class="form-control rounded-5" id="floatingPassword" placeholder="Password"/>
                                <label for="floatingPassword"><FontAwesomeIcon icon={faLock} className="me-3" />Password</label>
                        </div>
                        <div className="col-12 mb-3">
                        <button type="button" class="btn btn-success w-100 p-3 rounded-5">Login</button>
                        </div>
                        <a>Forgot <span className="text-success">Username / Password?</span></a><br></br>
                        <a className="text-success">Create your account <FontAwesomeIcon icon={faArrowRight}/></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;