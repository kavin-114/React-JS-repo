import React from "react";
import heart from './heart.png'
import { Link } from "react-router-dom";
import './feedaback.css'

export function Thankyou() {
    return(
        <>
       <div className='w-100 vh-100 p-5 feedback-main'>
            <div className='feedback-sub container bg-light w-75 rounded-4 row m-auto p-4 text-center d-flex justify-content-center align-items-center'>
            <div className='col-sm-12 col-md-12 col-lg-12'><Link to="/thankyou"><img src={heart} className="w-50 h-75"/></Link></div>
                <div className="col-12"><h1>Thank You</h1></div>
                <div className='col-12 mb-4'><h3>We will use your feedback to imporove our customer support performance</h3></div>
            </div>
        </div>
        </>
    );
}