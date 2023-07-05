import React from "react";
import './TechnologyCard.css'
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'

function TechnologyCard() {
    return (
        <>
            <div className="tech-main p-4 w-100 h-100">
                <div className="tech-content container row gap-2 w-75 h-75 m-auto mb-4 d-flex justify-content-center">
                    <div className="text-center"><h1 className="fw-bolder">Learn 4.0  Technologies</h1></div>
                    <div className="text-center"><p>Get trained by alumni of IITs and top comapanies like Amazon, Microsoft, Intel, Nvidia, Qualcomm, etc. Learn directly proffessionals involved in Product Developement.</p></div>
                    <div class="card border-danger border-5 border-start-0 border-end-0 border-bottom-0 rounded-4 tech-card col-sm-12 col-lg-5 col-md-5 p-3">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Data Scientist</h5>
                            <p class="card-text">Data Scientist gather and analyse large sets of structured and unstructured data</p>
                        </div>
                        <div className="w-100 position-relative">
                            <img src={img1} class="card-img-bottom w-25 float-end m-1" alt="..." />
                        </div>
                    </div>
                    <div class="card border-info border-5 border-start-0 border-end-0 border-bottom-0 rounded-4 tech-card col-sm-12 col-lg-5 col-md-5 p-3">
                        <div class="card-body">
                            <h5 class="card-title">IOT Developer</h5>
                            <p class="card-text">IOT developers are proffesionals who can develop,manage and monitor IoT devices </p>
                        </div>
                        <div className="w-100 position-relative">
                            <img src={img2} class="card-img-bottom w-25 float-end m-1" alt="..." />
                        </div>
                    </div>
                    <div class="card border-success border-5 border-start-0 border-end-0 border-bottom-0 rounded-4 tech-card col-sm-12 col-lg-5 col-md-5 p-3">
                        <div class="card-body">
                            <h5 class="card-title">VR Developer</h5>
                            <p class="card-text">A VR developer creates completely new digital environment that people can see. </p>
                        </div>
                        <div className="w-100 position-relative">
                            <img src={img3} class="card-img-bottom w-25 float-end m-1" alt="..." />
                        </div>
                    </div>
                    <div class="card border-warning border-5 border-start-0 border-end-0 border-bottom-0 rounded-4 tech-card col-sm-12 col-lg-5 col-md-5 p-3">
                        <div class="card-body">
                            <h5 class="card-title">ML Engineer</h5>
                            <p class="card-text">Machine Learning engineers feed data into models that are defined by data scientists.</p>
                        </div>
                        <div className="w-100 position-relative">
                            <img src={img4} class="card-img-bottom w-25 float-end m-1" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TechnologyCard;