import React from 'react';

const Header = () => {
    return (
        <header>
                <header className="main-header mb-4 shadow d-flex flex-row-reverse justify-content-between p-3 align-items-center">
                <i className="bi bi-justify fs-3 lh-0 d-none d-lg-inline-block" id="sidebar-desktop-activer"></i>
                <i className="bi bi-list fs-3 lh-0 d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"></i>
                <div className="offcanvas offcanvas-start mobile-sidebar" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header border-bottom d-flex align-items-center flex-row-reverse">
                      <h5 id="offcanvasRightLabel" className="mb-0">محمد لبافی</h5>
                      <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body d-flex flex-column align-items-center">
                        <div className="aside-menu d-flex align-items-center flex-column">
                            <a href="#">
                                <div className="d-flex align-items-center btn aside-menu-option-dashbord justify-content-end">
                                <p className="text-white m-0">داشبورد</p>
                                <i className="bi bi-grid-fill text-white me-2"></i>
                                </div>
                            </a>
                                <div className="d-flex align-items-center flex-row-reverse btn aside-menu-option justify-content-between mb-1 mt-2" id="mobile-aside-menu-mall-link">
                                 <div className="d-flex align-items-center">
                                    <p className="link-text-1 m-0">فروشگاه</p>
                                    <i className="bi bi-shop me-2"></i>
                                 </div>   
                                 <i className="bi bi-chevron-down"></i>
                                </div>
                            <div className="flex-column align-items-end" id="mobile-aside-menu-mall-list">
                                <a href="#">لیست فروشگاه ها</a>
                                <a href="#">ایجاد فروشگاه</a>
                                <a href="#">ویرایش فروشگاه</a>
                            </div>
                            <div className="d-flex align-items-center flex-row-reverse btn aside-menu-option justify-content-between mb-1" id="mobile-aside-menu-products-link">
                                <div className="d-flex align-items-center">
                                   <p className="link-text-1 m-0">محصولات</p>
                                   <i className="bi bi-box-seam me-2"></i>
                                </div>   
                                <i className="bi bi-chevron-down"></i>
                               </div>
                               <div className="flex-column align-items-end" id="mobile-aside-menu-products-list">
                                <a href="./products.html">لیست محصولات</a>
                                <a href="#">ایجاد محصول</a>
                                <a href="#">ویرایش محصول</a>
                            </div>
                            <div className="d-flex align-items-center flex-row-reverse btn aside-menu-option justify-content-between mb-1" id="mobile-aside-menu-orders-link">
                                <div className="d-flex align-items-center">
                                   <p className="link-text-1 m-0">سفارشات</p>
                                   <i className="bi bi-basket-fill me-2"></i>
                                </div>   
                                <i className="bi bi-chevron-down"></i>
                               </div>
                               <div className="flex-column align-items-end" id="mobile-aside-menu-orders-list">
                                <a href="#">لیست سفارشات</a>
                                <a href="#">سفارشات تایید شده</a>
                                <a href="#">سفارشات تایید نشده</a>
                            </div>
                            <a href="#">
                                <div className="d-flex align-items-center btn aside-menu-option justify-content-end mb-1">
                                <p className=" m-0">تخفیف ها</p>
                                <i className="bi bi-percent me-2"></i>
                                </div>
                            </a>
                            <a href="#">
                                <div className="d-flex align-items-center btn aside-menu-option justify-content-end mb-1">
                                <p className=" m-0">تیکت</p>
                                <i className="bi bi-chat-right-dots-fill me-2"></i>
                                </div>
                            </a>
                            <div className="d-flex align-items-center flex-row-reverse btn aside-menu-option justify-content-between mb-1" id="mobile-aside-menu-users-link">
                                <div className="d-flex align-items-center">
                                   <p className="link-text-1 m-0">کاربران</p>
                                   <i className="bi bi-people-fill me-2"></i>
                                </div>   
                                <i className="bi bi-chevron-down"></i>
                               </div>
                               <div className="flex-column align-items-end" id="mobile-aside-menu-users-list">
                                <a href="#">لیست کاربران</a>
                                <a href="#">ایجاد کاربر</a>
                                <a href="#">ویرایش کاربران</a>
                            </div>
                            <div className="d-flex align-items-center flex-row-reverse btn aside-menu-option justify-content-between mb-1" id="mobile-aside-menu-comments-link">
                                <div className="d-flex align-items-center">
                                   <p className="link-text-1 m-0">نظرات</p>
                                   <i className="bi bi-chat-dots-fill me-2"></i>
                                </div>   
                                <i className="bi bi-chevron-down"></i>
                               </div>
                           <div className="flex-column align-items-end" id="mobile-aside-menu-comments-list">
                               <a href="#">لیست کامنت ها</a>
                               <a href="#">کامنت های تایید شده</a>
                               <a href="#">کامنت های تایید نشده</a>
                           </div>
                        </div>
                    </div>
                  </div>
                  <div className="header-left-section d-flex flex-row-reverse align-items-center">
                    <div className="dropdown">
                        <div className="dropdown-toggle" data-bs-toggle="dropdown" dir="rtl">
                            <span className="position-absolute top-0 end-50 translate-middle badge rounded-pill bg-danger">
                                3
                              </span>
                            <i className="bi bi-envelope fs-4"></i>
                        </div>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><a className="dropdown-item fs-7 fw-bold" href="#">پیام 1</a></li>
                          <li><a className="dropdown-item fs-7 fw-bold" href="#">پیام 2</a></li>
                          <li><a className="dropdown-item fs-7 fw-bold" href="#">پیام 3</a></li>
                        </ul>
                      </div>
                      <div className="dropdown mx-3">
                        <div className="dropdown-toggle" data-bs-toggle="dropdown" dir="rtl">
                              <i className="bi bi-bell fs-4"></i>
                        </div>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><a className="dropdown-item fs-7 fw-bold" href="#">پیام 1</a></li>
                          <li><a className="dropdown-item fs-7 fw-bold" href="#">پیام 2</a></li>
                          <li><a className="dropdown-item fs-7 fw-bold" href="#">پیام 3</a></li>
                        </ul>
                      </div>
                      <div className="d-flex flex-row-reverse align-items-center">
                        <img src="./assets/7545.png" alt="" className="icon rounded-circle" />
                        <div className="d-flex flex-column text-start ms-1">
                            <span className="fs-7 fw-bold">محمد لبافی</span>
                            <span className="fs-7">مدیر سایت</span>
                        </div>
                      </div>
                  </div>
            </header>
        </header>
    );
};

export default Header;