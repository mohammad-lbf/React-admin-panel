import React from 'react';
import FirstUserImg from '../../assets/images/41d3c2f6dc30c03828e124d9f0257497.jpg';
import SecondUserImg from '../../assets/images/img5.jpg';
import ThirdUserImg from '../../assets/images/man-300x300.png';
import MyImage from '../../assets/images/7545.png'

const MainSec2 = () => {
    return (
        <div>
                           <div className="container-fluid p-xl-0 d-flex flex-column align-items-center">
                   <div className="row align-items-center w-100">
                       <div className="col-12 px-0 pe-xl-2 px-xl-2 d-flex justify-content-center flex-column">
                        <div className="bg-main-color-1 rounded profile d-flex align-items-center flex-row-reverse p-2">
                            <img src={MyImage} width="80px" height="80px" alt="" />
                            <div className="d-flex flex-column align-items-end ms-2 text-white">
                                <p>محمد لبافی</p>
                                <p style={{fontFamily:"Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}} className="mb-0">@mohammad_lbf</p>
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <div className="bg-main-color-1 mb-3 rounded d-flex flex-column align-items-center text-white p-3 ">
                                <p className="text-start w-100 m-0">:اعضای جدید</p>
                                <div className="d-flex flex-column align-items-end w-100 mt-3">
                                    <div className="profile-1 d-flex mt-3 mb-3 align-items-center flex-row-reverse">
                                        <img src={FirstUserImg} width="60px" alt="" />
                                        <div className="d-flex flex-column text-start ms-3">
                                            <p className="mb-2">لورم ایپسوم</p>
                                            <p className="mb-0">@lorem_ipsom</p>
                                        </div>
                                    </div>
                                    <div className="profile-2 d-flex mt-3 mb-3 align-items-center flex-row-reverse">
                                        <img src={SecondUserImg} width="60px" height="60px" alt="" className="rounded-circle" />
                                        <div className="d-flex flex-column text-start ms-3">
                                            <p className="mb-2">لورم ایپسوم</p>
                                            <p className="mb-0">@lorem_ipsom</p>
                                        </div>
                                    </div>
                                    <div className="profile-3 d-flex mt-3 mb-3 align-items-center flex-row-reverse">
                                        <img src={ThirdUserImg} width="60px" height="60px" alt="" className="rounded-circle" />
                                        <div className="d-flex flex-column text-start ms-3">
                                            <p className="mb-2">لورم ایپسوم</p>
                                            <p className="mb-0">@lorem_ipsom</p>
                                        </div>
                                    </div>
                                    <button className="show-all btn bg-red-100 text-white w-100 mt-2">نمایش همه </button>
                                </div>
                            </div>
                        </div>
                       </div>
                       
                   </div>
               </div>
        </div>
    );
};

export default MainSec2;