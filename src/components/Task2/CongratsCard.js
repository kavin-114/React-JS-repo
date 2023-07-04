import React from "react";
import bgimg from "./congrats-card-bg.png"
import watch from "./congrats-card-watch-img.png"
import profile from "./congrats-card-profile-img.png"
import "./CongratsCard.css"


function CongratsCard(){
    return(
        <>
        <div className="congrats-main vh-100 w-100">
        <div className="head"><h1 className="text-center">Congratualtions</h1></div>
            <div className="card-box d-flex flex-column align-items-center">
                <div>
                    <img src={profile}></img>
                </div>
                <div><h1>Kiran V</h1></div>
                <div className="text-center">
                    <p>Vishnu Institute of Computer Education and Technology, Brindhavan</p>
                </div>
                <div>
                <img src={watch}></img>
                </div>
            </div>
        </div>
        </>
    );
}
export default CongratsCard;