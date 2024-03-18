// import React from 'react';
// import temple16 from "../images/temple16.png";
// import temple17 from "../images/temple17.png";
// import temple18 from "../images/temple18.png";
// import temple19 from "../images/temple19.png";
// import { MdArrowBackIosNew } from "react-icons/md";
// import { MdOutlineArrowForwardIos } from "react-icons/md";
// import "./Home4.css"; // Make sure to import the CSS file

// export const Home4 = () => {
//     return (
//         <>
//             <div className='bg-primary' style={{ height: "500px" }}>

//                 <div className='d-flex justify-content-evenl gap-5'>
//                     <span className='text-secondary fs-4 m-auto'><MdArrowBackIosNew /></span>

//                     <div class="card" style={{}}>
//                         <div class='d-flex justify-content-between' style={{ margin: "0 20px" }}>
//                             <div>
//                                 <img src={temple19} class="img-fluid" alt="..." style={{ width: "35px", height: "35px" }} />
//                             </div>
//                             <div class=''>
//                                 <img src={temple18} class="img-fluid" alt="..." style={{ width: "35px", height: "35px" }} />
//                             </div>
//                         </div>

//                         <div class='d-flex justify-content-around mt-2 gap-5 ' style={{ margin: "0 40px" }}>
//                             <div>
//                                 {/* Add margin to the left and right sides */}
//                                 <img src={temple17} class="img-fluid rounded-start temple-ima" alt="..." style={{ maxWidth: "100px", height: "100px", }} />
//                             </div>
//                             <div class=''>
//                                 <p >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
//                                 <p>Kaneka Taylor</p>
//                                 <p>Lorem ipsum dolor sit.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="card" style={{}}>
//                         <div class='d-flex justify-content-between' style={{ margin: "0 20px" }}>
//                             <div>
//                                 <img src={temple19} class="img-fluid" alt="..." style={{ width: "35px", height: "35px" }} />
//                             </div>
//                             <div class=''>
//                                 <img src={temple18} class="img-fluid" alt="..." style={{ width: "35px", height: "35px" }} />
//                             </div>
//                         </div>

//                         <div class='d-flex justify-content-around mt-2 gap-5 ' style={{ margin: "0 40px" }}>
//                             <div>
//                                 {/* Add margin to the left and right sides */}
//                                 <img src={temple17} class="img-fluid rounded-start temple-ima" alt="..." style={{ maxWidth: "100px", height: "100px", }} />
//                             </div>
//                             <div class=''>
//                                 <p >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
//                                 <p>Kaneka Taylor</p>
//                                 <p>Lorem ipsum dolor sit.</p>
//                             </div>
//                         </div>
//                     </div>


//                     <span className='text-secondary fs-4 m-auto'><MdOutlineArrowForwardIos /></span>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Home4;





import React, { useState } from 'react';
import temple16 from "../images/temple16.png";
import temple17 from "../images/temple17.png";
import temple18 from "../images/temple18.png";
import temple19 from "../images/temple19.png";
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import "./Home4.css"; // Make sure to import the CSS file

export const Home4 = () => {
    const [showSlider, setShowSlider] = useState(false);

    // Function to handle click event to toggle slider
    const handleToggleSlider = () => {
        setShowSlider(!showSlider);
    }

    return (
        <>
            <div className='mt-4' style={{ height: "250px", backgroundColor:"#f9fbff" }} >
                <div className='d-flex justify-content-evenly gap-5'>
                    <span className='text-secondary fs-4 m-auto' onClick={handleToggleSlider}><MdArrowBackIosNew /></span>

                    {/* Render two cards in a row on screens larger than medium */}
                    <div className='card shadows'>
                        {/* Card content */}
                        <div className='d-flex justify-content-between' style={{ margin: "0 20px" }}>
                            <div>
                                <img src={temple19} className="img-fluid" alt="..." style={{ width: "35px", height: "35px" }} />
                            </div>
                            <div>
                                <img src={temple18} className="img-fluid" alt="..." style={{ width: "35px", height: "35px" }} />
                            </div>
                        </div>
                        <div className='d-flex justify-content-around mt-2 gap-5 ' style={{ margin: "0 40px" }}>
                            <div>
                                {/* Add margin to the left and right sides */}
                                <img src={temple17} className="img-fluid rounded-start temple-ima" alt="..." style={{ maxWidth: "100px", height: "100px", }} />
                            </div>
                            <div>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                <p>Kaneka Taylor</p>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className={`card shadows flex-sm-none d-flex`} style={{}}>
                        <div className='d-flex justify-content-between' style={{ margin: "0 20px" }}>
                            <div>
                                <img src={temple19} className="img-fluid" alt="..." style={{ width: "35px", height: "35px" }} />
                            </div>
                            <div>
                                <img src={temple18} className="img-fluid" alt="..." style={{ width: "35px", height: "35px" }} />
                            </div>
                        </div>
                        <div className='d-flex justify-content-around mt-2 gap-5 ' style={{ margin: "0 40px" }}>
                            <div>
                                <img src={temple17} className="img-fluid rounded-start temple-ima" alt="..." style={{ maxWidth: "100px", height: "100px", }} />
                            </div>
                            <div>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                <p>Kaneka Taylor</p>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                    </div> */}

               

                    <span className='text-secondary fs-4 m-auto' onClick={handleToggleSlider}><MdOutlineArrowForwardIos /></span>
                </div>
            </div>
        </>
    )
}

export default Home4;
