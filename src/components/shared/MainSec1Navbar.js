import React from 'react';

const MainSec1Navbar = () => {
    return (
        <div>
                <div className="row flex-row-reverse justify-content-center g-1 ">
                    <div className="col-6 col-xl-3">
                        <div className="bg-main-color-1 px-3 py-2 align-items-end align-items-md-center flex-column flex-md-row-reverse rounded d-flex justify-content-start">
                            <div className="bg-purple text-white rounded p-2 mb-3 mb-md-0">
                                <i className="bi bi-eye-fill fs-4 lh-0"></i>
                            </div>
                            <div className="text-start ms-0 ms-md-3 text-white d-flex flex-column align-items-end">
                                <p className=" mb-2">بازدید کنندگان</p>
                                <p className="mb-0">12</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-xl-3">
                        <div className="bg-main-color-1 py-2 px-3 align-items-end align-items-md-center flex-column flex-md-row-reverse rounded d-flex justify-content-start">
                            <div className="bg-blue-100 text-white rounded p-2 mb-3 mb-md-0">
                                <i className="bi bi-person-fill fs-4 lh-0"></i>
                            </div>
                            <div className="text-start ms-0 ms-md-3 text-white d-flex flex-column align-items-end">
                                <p className=" mb-2">تعداد کاربران</p>
                                <p className="mb-0">426</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-xl-3">
                        <div className="bg-main-color-1 py-2 px-3 align-items-end align-items-md-center flex-column flex-md-row-reverse rounded d-flex justify-content-start">
                            <div className="bg-green-100 text-white rounded p-2 mb-3 mb-md-0">
                                <i className="bi bi-person-plus-fill fs-4 lh-0"></i>
                            </div>
                            <div className="text-start  ms-0 ms-md-3 text-white d-flex flex-column align-items-end">
                                <p className=" mb-2">اعضای جدید</p>
                                <p className="mb-0">16</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-xl-3">
                        <div className="bg-main-color-1 px-3 py-2 align-items-end align-items-md-center flex-column flex-md-row-reverse rounded d-flex justify-content-start">
                            <div className="bg-red-100 text-white rounded p-2 mb-3 mb-md-0">
                                <i className="bi bi-bookmark-dash-fill fs-4 lh-0"></i>
                            </div>
                            <div className="text-start  ms-0 ms-md-3 text-white d-flex flex-column align-items-end">
                                <p className=" mb-2">ذخیره مطالب</p>
                                <p className="mb-0 purecounter">589</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default MainSec1Navbar;