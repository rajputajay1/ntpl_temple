
import temple9 from "../images/temple9.png"
import temple10 from "../images/temple10.png"
import temple11 from "../images/temple11.png"
import temple12 from "../images/temple12.png"
import temple13 from "../images/temple13.png"
import { FaArrowRight } from "react-icons/fa";

import './HomeSecond.css';

import React from 'react'

const HomeSecond = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 row-cols-md-2 g-4">
                    {/* <div className="">
                        <span className='fs-3 fw-bold' style={{ color: "#6A1110" }}>Our Deals Categories</span>
                        <p className='fs-6'>Lorem Ipsum is simply dummy text</p>
                    </div> */}

                    <div className="col">
                        <div className="card border">
                            <div class=' rounded-5 m-2 text-start' style={{ backgroundColor: "#6A1110", width: "fit-content" }}>
                                <p class="card-title text-white px-3 pt-1">Expires in 26 days </p>
                            </div>
                            <div className="position-relative d-flex justify-content-center align-items-center m-auto" style={{ width: '150px', height: '150px' }}>
                                <img src={temple9} className="text-center img-fluid smaller-image" alt="..." style={{ width: '110px', height: '110px' }} />
                                <img src={temple13} className="position-absolute m-auto img-fluid inner-image" style={{ top: '46%', left: '50%', transform: 'translate(-50%, -50%)' }} alt="" height={75} width={75} />
                            </div>
                            <div className="text-center">
                                <span className="fw-bold fs-3 card-text" style={{ color: "#6A1110", }}>25% OFF</span>
                                <p className=" fw-bold" style={{ color: "#6A1110", }}><small>Daily Puja Samgri</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border">
                            <div class=' rounded-5 m-2 text-start' style={{ backgroundColor: "#6A1110", width: "fit-content" }}>
                                <p class="card-title text-white px-3 pt-1">Expires in 26 days </p>
                            </div>
                            <div className="position-relative d-flex justify-content-center align-items-center m-auto" style={{ width: '150px', height: '150px' }}>
                                <img src={temple9} className="text-center img-fluid smaller-image" alt="..." style={{ width: '110px', height: '110px' }} />
                                <img src={temple13} className="position-absolute m-auto img-fluid inner-image" style={{ top: '46%', left: '50%', transform: 'translate(-50%, -50%)' }} alt="" height={75} width={75} />
                            </div>
                            <div className="text-center">
                                <span className="fw-bold fs-3 card-text" style={{ color: "#6A1110", }}>25% OFF</span>
                                <p className=" fw-bold" style={{ color: "#6A1110", }}><small>Daily Puja Samgri</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border">
                            <div class=' rounded-5 m-2 text-start' style={{ backgroundColor: "#6A1110", width: "fit-content" }}>
                                <p class="card-title text-white px-3 pt-1">Expires in 26 days </p>
                            </div>
                            <div className="position-relative d-flex justify-content-center align-items-center m-auto" style={{ width: '150px', height: '150px' }}>
                                <img src={temple9} className="text-center img-fluid smaller-image" alt="..." style={{ width: '110px', height: '110px' }} />
                                <img src={temple13} className="position-absolute m-auto img-fluid inner-image" style={{ top: '46%', left: '50%', transform: 'translate(-50%, -50%)' }} alt="" height={75} width={75} />
                            </div>
                            <div className="text-center">
                                <span className="fw-bold fs-3 card-text" style={{ color: "#6A1110", }}>25% OFF</span>
                                <p className=" fw-bold" style={{ color: "#6A1110", }}><small>Daily Puja Samgri</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border">
                            <div class=' rounded-5 m-2 text-start' style={{ backgroundColor: "#6A1110", width: "fit-content" }}>
                                <p class="card-title text-white px-3 pt-1">Expires in 26 days </p>
                            </div>
                            <div className="position-relative d-flex justify-content-center align-items-center m-auto" style={{ width: '150px', height: '150px' }}>
                                <img src={temple9} className="text-center img-fluid smaller-image" alt="..." style={{ width: '110px', height: '110px' }} />
                                <img src={temple13} className="position-absolute m-auto img-fluid inner-image" style={{ top: '46%', left: '50%', transform: 'translate(-50%, -50%)' }} alt="" height={75} width={75} />
                            </div>
                            <div className="text-center">
                                <span className="fw-bold fs-3 card-text" style={{ color: "#6A1110", }}>25% OFF</span>
                                <p className=" fw-bold" style={{ color: "#6A1110", }}><small>Daily Puja Samgri</small></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HomeSecond
