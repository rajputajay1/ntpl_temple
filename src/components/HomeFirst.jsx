import React from 'react'
import temple_back from "../images/temple_back.png"
import temple1 from "../images/temple1.png"
import temple2 from "../images/temple2.png"
import temple4 from "../images/temple4.png"
import temple5 from "../images/temple5.png"
import temple6 from "../images/temple6.png"
import temple10 from "../images/temple10.png"
import temple9 from "../images/temple9.png"
import t22 from "../images/t22.png"
import { FaArrowRight } from "react-icons/fa";

const HomeFirst = () => {
    return (<>
        {/* <div className='' style={{position:"relative"}}></div> */}
        <div style={{ backgroundImage: `url(${temple_back})` }}>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 d-flex flex-column justify-content-center align-items-center text-start">
                        <div className='text-center text-md-start'>
                            <span class="fs-3  text-start">
                                Get Purohita &
                                <br />
                                Pooja Samagri At
                                <br />

                                <span className='fw-bold fs-3 text-start'>Your Doorstep Through WhatsApp</span>
                            </span>

                        </div>
                    </div>
                    <div class="col-md-6">
                        <img src={temple1} alt="Image" class="img-fluid" />
                    </div>
                </div>
            </div>

        </div>
            <div className='container' >
            <div className='row'>
                <div className='col-md-6 d-flex gap-2 ' style={{ height: 112 }}>
                    <img src={t22} alt="" class="img-fluid gap-2" />
                </div>
                <div class="col-md-6  ">
                    <img src={t22} alt="Image" class="img-fluid" style={{ height: 112 }} />
                </div>
            </div>
        </div>

    </>
    )
}

export default HomeFirst


// import React from 'react';
// import temple_back from "../images/temple_back.png";
// import temple1 from "../images/temple1.png";
// import t22 from "../images/t22.png";
// import { FaArrowRight } from "react-icons/fa";

// const HomeFirst = () => {
//     return (
//         <>
//             <div style={{ position: 'relative' }}>
//                 <div style={{ backgroundImage: `url(${temple_back})` }}>
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-start">
//                                 <div className='text-center text-md-start'>
//                                     <span className="fs-3  text-start">
//                                         Get Purohita &
//                                         <br />
//                                         Pooja Samagri At
//                                         <br />
//                                         <span className='fw-bold fs-3 text-start'>Your Doorstep Through WhatsApp</span>
//                                     </span>
//                                 </div>
//                             </div>
//                             <div className="col-md-6">
//                                 <img src={temple1} alt="Image" className="img-fluid" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='container' style={{ position: 'absolute', top: '100%', left: 0, right: 0, transform: 'translateY(-50%)' }}>
//                     <div className='row'>
//                         <div className='col-md-6 d-flex justify-content-evenly' style={{ height: 112 }}>
//                             <img src={t22} alt="" className="img-fluid" />
//                         </div>
//                         <div className="col-md-6">
//                             <img src={t22} alt="Image" className="img-fluid" style={{ height: 112 }} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default HomeFirst;
