import {React,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceLaughBeam, faFaceSadTear, faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import sad from './sad.png'
import smile from './smile.png'
import happy from './happy.png'
import { Link } from 'react-router-dom';
import './feedaback.css'

export function Feedback(){
    
    return(
        <>
            <div className='w-100 vh-100 p-5 feedback-main'>
                <div className='feedback-sub container bg-light w-75 text-center rounded-4 row m-auto p-5'>
                    <div className='col-12 mb-4'><h1>How satisfied are you with our customer support performance?</h1></div>
                    <div className='col-sm-4 col-md-4 col-lg-4'><Link to="/thankyou"><img src={sad} className="w-75 h-100"/></Link></div>
                    <div className='col-sm-4 col-md-4 col-lg-4'><Link to="/thankyou"><img src={smile} className="w-75 h-100"/></Link></div>
                    <div className='col-sm-4 col-md-4 col-lg-4'><Link to="/thankyou"><img src={happy} className="w-75 h-100"/></Link></div>
                </div>
            </div>
        </>
    );
}