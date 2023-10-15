import React from "react";
import img1 from "../images/medical-1.jpg";
import img2 from "../images/medical-2.jpg";
import img3 from "../images/medical-3.jpg";
// import img4 from "../images/medical-4.jpg";

const Corousel = () => {
    return (
        <>
            <div
                id="myCarousel"
                className="carousel slide mb-6"
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
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img src={img1} className="w-100 h-75" alt="Slide 1" />
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Example headline.</h1>
                                <p className="opacity-75">
                                    Some representative placeholder content for the first slide of
                                    the carousel.
                                </p>
                                <p>
                                    <button className="btn btn-lg btn-primary" href="#">
                                        Sign up today
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src={img2} className=" w-100 h-75" alt="Slide 2" />
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>
                                    Some representative placeholder content for the second slide
                                    of the carousel.
                                </p>
                                <p>
                                    <button className="btn btn-lg btn-primary">Learn more</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="w-100 h-75" alt="Slide 3" />
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>One more for good measure.</h1>
                                <p>
                                    Some representative placeholder content for the third slide of
                                    this carousel.
                                </p>
                                <p>
                                    <button className="btn btn-lg btn-">
                                        Browse gallery
                                    </button>
                                </p>
                            </div>
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
        </>
    );
};

export default Corousel;
