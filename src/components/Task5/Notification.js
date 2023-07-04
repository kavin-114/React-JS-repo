import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

function Notification() {
    return (
        <>
            <div className="notify-main text-center">
                <h1 className="mt-5 fs-1 fw-bolder">Notifications</h1>
                <div className="container d-flex flex-column justify-content-center align-items-center text-white">
                    <div className="mt-5 bg-primary w-50 p-3 m-2 rounded-2"><FontAwesomeIcon icon={faCircleCheck} className="me-2" />Information Message</div>
                    <div className="bg-success w-50 p-3 m-2 rounded-2"><FontAwesomeIcon icon={faCircleCheck} className="me-2" />Success Message</div>
                    <div className="bg-warning w-50 p-3 m-2 rounded-2"><FontAwesomeIcon icon={faBell} className="me-2" />Warning Message</div>
                    <div className="bg-danger w-50 p-3 m-2 rounded-2"><FontAwesomeIcon icon={faTriangleExclamation} className="me-2" />Error Message</div>
                </div>
            </div>
        </>
    );
}

export default Notification;