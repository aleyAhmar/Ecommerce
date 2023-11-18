import React from "react";
import img1 from "../images/medical-1.jpg";
import img2 from "../images/medical-2.jpg";
import img3 from "../images/medical-3.jpg";
// import img4 from "../images/medical-4.jpg";

const Corousel = () => {

    return (
        <div className="carousel-div">
            <div
                id="myCarousel"
                className="carousel slide mb-6 cssCarousel"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to={0}
                        className=""
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                        className="active"
                        aria-current="true"
                    />
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                        className=""
                    />
                </div>

                {/* Carousel body */}
                <div className="carousel-inner" >
                    <div className="carousel-item">
                        <img src={img1} className="w-100 h-75 carousel-image"  alt="Slide 1" />
                        <div className="container">
                            
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src={img2} className=" w-100 h-75 carousel-image" alt="Slide 2" />
                        <div className="container">
                            
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="w-100 h-100 carousel-image" alt="Slide 3" />
                        <div className="container">
                            
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Corousel;
