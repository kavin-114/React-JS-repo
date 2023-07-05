import React from "react";
import './Login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowRightArrowLeft, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import imgframe from './imgframe.jpg'

function Login() {
    return (
        <>
            <div className="login-main container-fluid w-100 vh-100 bg-secondary pt-5">
                <div className="login-sub container row bg-light h-75 w-75 p-3 m-auto rounded-5">
                    <div className="login-img-box col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center pt-3">
                        <div className="img-frame">
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center pt-5">
                        <div><h3 className="fw-bolder">Member Login</h3></div>
                        <div class="input-group mb-3 mt-3 col-12 text-secondary">
                            <span class="input-group-text rounded-start-5 bg-light" id="inputGroup-sizing-default"><FontAwesomeIcon icon={faEnvelope} className="m-2 text-secondary" /></span>
                            <input type="text" class="form-control p-3 rounded-end-5 bg-light border-start-0" aria-label="Sizing example input" placeholder="Email" aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div class="input-group flex-nowrap mb-3">
                            <span class="input-group-text rounded-start-5" id="addon-wrapping"><FontAwesomeIcon icon={faLock} className="m-2 text-secondary" /></span>
                            <input type="password" class="form-control p-3 rounded-end-5 bg-light border-start-0" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>

                        <div className="col-12 mb-3">
                            <button type="button" class="btn btn-success w-100 p-3 rounded-5 fw-bolder ls-2">Login</button>
                        </div>
                        <a>Forgot <span className="text-success">Username / Password?</span></a><br></br>
                        <a className="text-success">Create your account <FontAwesomeIcon icon={faArrowRight} /></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;