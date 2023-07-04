import React from "react";
import './SocialButtons.css';
function SocialButtons() {
    return (
        <>
        <div className="container-fluid social-main text-center w-100 vh-100 overflow-hidden">
            <div className="position-relative top-50 start-50 translate-middle">
                <h1 className="text-light fs-1 fw-bolder">Social Button</h1>
                <div className="">
                    <button className="text-light bg-warning rounded-4 m-3 p-2 ps-4 pe-4">Like</button>
                    <button className="text-black bg-light rounded-4 m-3 p-2 ps-4 pe-4"> Comment </button>
                    <button className="text-light bg-primary rounded-4 m-3 p-2 ps-4 pe-4">Share</button>
                </div>
            </div>
        </div>
        </>
    );
}
export default SocialButtons;
