import React from 'react';
import HeaderDrop1 from '../dropdowns/HeaderDrop1';
import HeaderDrop2 from '../dropdowns/HeaderDrop2';
import ProfileImg from '../../assets/images/7545.png';

const Header = ({setAsideOpen , open}) => {
    return (
                <header className=" bg-main-2 main-header mb-4 shadow d-flex flex-row-reverse justify-content-between p-3 align-items-center">
                <i style={{cursor:"pointer"}} onClick={()=>setAsideOpen(!open)} className="bi bi-justify fs-3 lh-0 d-none d-lg-inline-block" id="sidebar-desktop-activer"></i>
                <i style={{cursor:"pointer"}} className="bi bi-list fs-3 lh-0 d-lg-none text-main-1" data-bs-toggle="offcanvas" data-bs-target="#MobileHambergurMenu"></i>
                  <div className="header-left-section d-flex flex-row-reverse align-items-center">
                        <HeaderDrop1 />
                        <HeaderDrop2 />
                      <div className="d-flex flex-row-reverse align-items-center">
                        <img width="40px" src={ProfileImg} alt="" className="rounded-circle" />
                        <div className="d-flex flex-column align-items-center ms-1">
                            <span className="text-main-1 fs-13 fw-bold">محمد لبافی</span>
                            <span className="fs-13 text-main-1 fw-200">مدیر سایت</span>
                        </div>
                      </div>
                  </div>
            </header>
    );
};

export default Header;