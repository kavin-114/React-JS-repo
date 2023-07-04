import React from "react";
import imgcsk from "./csk-img.png"
import imgrcb from "./rcb-img.png"
import "./SuperOver.css"

function SuperOver(){
    return(
        <>
        <div className="bg-dark super-main pt-5">
            <div className="box d-flex flex-column align-items-center container">
                <div>
                    <h1 className="text-light m-4">Super Over League</h1>
                </div>
                <div className="d-flex img-box flex-sm-column flex-lg-row">
                    <div><img src={imgrcb}/></div>
                    <div><img src={imgcsk}/></div>
                </div>
            </div>
        </div>  
        </>
    );
}

export default SuperOver;