
import React from 'react';
import temple21 from "../images/temple21.png";
import temple22 from "../images/temple22.png";
import "./Home5.css"; // Make sure to import the CSS file

const Home5 = () => {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-5 row-cols-md-3 g-4 mt-4">
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="col">
                        <div className="card">
                            <div className="position-relative d-flex justify-content-center align-items-center m-auto" style={{ width: '150px', height: '150px' }}>
                                <img src={temple22} className="text-center img-fluid smaller-image" alt="..." style={{ width: '150px', height: '150px' }} />
                                <img src={temple21} className="position-absolute m-auto img-fluid inner-image" style={{ top: '46%', left: '50%', transform: 'translate(-50%, -50%)' }} alt="" height={75} width={75} />
                            </div>
                            <div className="text-center">
                                <p className="fw-bold  card-text" style={{ color: "#6A1110",   }}>Speedy and Free Shipping</p>
                                <p className=" fw-bold"><small>Fast & Free Shipping Above Rs 99</small></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home5;
