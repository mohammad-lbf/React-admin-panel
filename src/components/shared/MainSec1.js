import React from 'react';
import Chart1 from '../chart1';
import MainSec1Navbar from './MainSec1Navbar';
import FirstUserImg from '../../assets/images/41d3c2f6dc30c03828e124d9f0257497.jpg';
import SecondUserImg from '../../assets/images/img5.jpg';
import ThirdUserImg from '../../assets/images/man-300x300.png';

const MainSec1 = () => {
    return (
        <div className="container-fluid">
            <MainSec1Navbar />
            <div className="mt-3 bg-white py-3 rounded">
                <p className="text-start mb-3 fs-5 ms-3">:نمودار فعالیت امسال</p>
                <Chart1 />
            </div>
            <div className="row flex-row-reverse mt-4 align-items-center align-items-xl-start ">
                        <div className="col-xl-4">
                            <div className="card bg-main-color-1 text-white">
                                <div className="card-body text-start">
                                    <p className="fs-5 border-bottom border-secondary pb-1">: فرایند ها </p>
                                    <div className="border-bottom border-secondary pb-3">
                                        <p className="mb-2">:فرایند 1</p>
                                        <div className="progress d-flex flex-row-reverse">
                                            <div className="progress-bar bg-purple" dir="rtl" role="progressbar" style={{width: "75%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                                          </div>
                                    </div>
                                    <div className="border-bottom border-secondary pb-3 pt-3">
                                        <p className="mb-2">:فرایند 2</p>
                                        <div className="progress d-flex flex-row-reverse">
                                            <div className="progress-bar bg-blue-100" dir="rtl" role="progressbar" style={{width: "51%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">51%</div>
                                          </div>
                                    </div>
                                    <div className="border-bottom border-secondary pb-3 pt-3">
                                        <p className="mb-2">:فرایند 3</p>
                                        <div className="progress d-flex flex-row-reverse">
                                            <div className="progress-bar bg-green-100" dir="rtl" role="progressbar" style={{width: "67%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">67%</div>
                                          </div>
                                    </div>
                                    <div className="border-bottom border-secondary pb-3 pt-3">
                                        <p className="mb-2">:فرایند 4</p>
                                        <div className="progress d-flex flex-row-reverse">
                                            <div className="progress-bar bg-red-100" dir="rtl" role="progressbar" style={{width: "32%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">32%</div>
                                          </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 ">
                            <div className="bg-main-color-1 rounded pt-3 pb-3 pb-xl-4 mt-5 mt-xl-0 mb-xl-5">
                                <p className="text-start mb-3 pt-1 ps-3 text-white">آخرین کامنت ها</p>
                                <table style={{fontSize: "12px"}} className="table teable-responsive text-white" dir="rtl">
                                    <thead>
                                      <tr>
                                        <th scope="col">نمایه</th>
                                        <th scope="col">نام کاربری</th>
                                        <th scope="col">متن کامنت</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                       
                                        <td>  <img src={ThirdUserImg} width="60px" height="60px" alt="" /></td>
                                        <td>@mdo</td>
                                        <td className="text-white">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</td>
                                      </tr>
                                      <tr>
                                        
                                        <td><img src={SecondUserImg} width="60px" height="60px" alt="" className="rounded-circle" /></td>
                                        <td>@Thornton</td>
                                        <td>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</td>
                                      </tr>
                                      <tr className="border-bottom">
                                       
                                        <td><img className="rounded-circle" src={FirstUserImg} width="60px" height="60px" alt="" /></td>
                                        <td>@labn-56</td>
                                        <td>لورم ایپسوم متن ساختگی</td>
                                      </tr>
                                    </tbody>
                                  </table>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default MainSec1;