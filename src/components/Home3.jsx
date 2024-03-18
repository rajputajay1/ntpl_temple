import React from 'react'
import temple14 from "../images/temple14.png"
import temple15 from "../images/temple15.png"
import "./Home3.css";
const Home3 = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${temple14})` }} className='mt-4'>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center text-md-start">
                            <div className=''>
                                <span className='fw-semibold fs-4 fst-italic'>Book Your Samgri</span>
                                <div className='fs-4 fw-semibold  px-2 mb-2' style={{  backgroundColor: "#6A1110",  }}>
                                    <p className="text-white m-0">Delivery in 5-7 Days Guaranteed</p>
                                </div>
                                <span className='fs-4'>Next Day delivery Available only in India!</span>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <img src={temple15} alt="Image" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default Home3