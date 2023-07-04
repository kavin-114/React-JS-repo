import React from "react";
import './Login.css';

function Login(){
    return(
        <>
            <div className="login-main container-fluid w-100 vh-100">
                <div className="login-sub container bg-primary row w-50">
                    <div className="login-img-box col-6">
                        <div className="img-frame ">
                        <img src="" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div><h3>Member Login</h3></div>
                        <div><input type="text" placeholder="Email" className="p-2"></input></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;