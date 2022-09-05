import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const HambergurMenuOption = () => {
    const [openList , setOpenList] = useState("");
const clickHandler = (id)=>{
    openList == id ? setOpenList("") : setOpenList(id)
};
const Div = styled.div`
.aside-menu-option{
color: #25396f;
border-radius: 8px;
padding: 0.8rem 0.6rem;
}
.aside-menu-option-dashbord{
    background-color: #25396f;
    border: none;
    width: 200px;
    border-radius: 8px;
    padding: 0.8rem 0.6rem;
}
.list a{
    &:hover{
        transform:translateX(-5px)
    }
}
.list a{
    transition: all 0.3s;
}

.aside-menu-option{
    &:hover{
        background-color: #f2f7ff;
        color: #25396f;
    }
}

`
    return (
            <Div className="aside-menu w-100 d-flex align-items-center flex-column">
                    <Link to="/" className="w-100 text-decoration-none">
                    <div className="d-flex align-items-center btn aside-menu-option-dashbord w-100 justify-content-end">
                    <p className="text-white m-0">داشبورد</p>
                    <i className="bi bi-grid-fill text-white me-2"></i>
                    </div>
                </Link>
            <div className="w-100">
                <div style={{zIndex:"200"}} onClick={(e)=>{clickHandler(e.target.id)  ; console.log(e.target)}} id="mall-link" className="d-flex w-100 align-items-center flex-row-reverse btn aside-menu-option border-0 justify-content-between mb-1 mt-2">
                    <div className="d-flex align-items-center" id="mall-link">
                        <p className="link-text-1 m-0" id="mall-link">فروشگاه</p>
                        <i className="bi bi-shop me-2" id="mall-link"></i>
                    </div>   
                    <i className="bi bi-chevron-down" id="mall-link"></i>
                </div>
                <div className={`${openList == "mall-link" ? "d-flex" : "d-none"} flex-column align-items-end ps-5 list`} id="mall-list" open={openList}>
                    <Link className="d-block text-start text-main-1 text-decoration-none fs-15 my-1" to="/">لیست فروشگاه ها</Link>
                    <Link className="d-block text-start text-main-1 text-decoration-none fs-15 my-1" to="/">ایجاد فروشگاه</Link>
                    <Link className="d-block text-start text-main-1 text-decoration-none fs-15 my-1" to="/">ویرایش فروشگاه</Link>
                </div>
            </div>        
                <div className="w-100">
                    <div onClick={(e)=>{clickHandler(e.target.id)}} className="d-flex w-100 align-items-center flex-row-reverse btn aside-menu-option border-0 justify-content-between mb-1" id="products-link">
                           <div className="d-flex align-items-center" id="products-link">
                              <p className="link-text-1 m-0" id="products-link">محصولات</p>
                              <i className="bi bi-box-seam me-2" id="products-link"></i>
                           </div>   
                           <i className="bi bi-chevron-down" id="products-link"></i>
                    </div>
                    <div className={`${openList == "products-link" ? "d-flex" : "d-none"} flex-column align-items-end ps-5 list`} id="products-list">
                           <Link className="d-block text-start text-main-1 text-decoration-none fs-15 my-1" to="/">لیست محصولات</Link>
                           <Link className="d-block text-start text-main-1 text-decoration-none fs-15 my-1" to="/">ایجاد محصول</Link>
                           <Link className="d-block text-start text-main-1 text-decoration-none fs-15 my-1" to="/">ویرایش محصول</Link>
                    </div>
                </div>
                <div className="w-100">
                    <div onClick={(e)=>{clickHandler(e.target.id)}} className="d-flex align-items-center flex-row-reverse btn aside-menu-option border-0  justify-content-between mb-1" id="orders-link">
                        <div className="d-flex align-items-center" id="orders-link">
                           <p className="link-text-1 m-0" id="orders-link">سفارشات</p>
                           <i className="bi bi-basket-fill me-2" id="orders-link"></i>
                        </div>   
                        <i className="bi bi-chevron-down" id="orders-link"></i>
                       </div>
                       <div className={`${openList == "orders-link" ? "d-flex" : "d-none"} flex-column align-items-end ps-5 list`} id="orders-list">
                        <Link className="d-block text-start text-main-1 text-decoration-none fs-15 my-1" to="/">لیست سفارشات</Link>
                        <Link className="d-block text-start text-main-1 text-decoration-none fs-15 my-1" to="/">سفارشات تایید شده</Link>
                        <Link className="d-block text-start text-main-1 text-decoration-none fs-15 my-1" to="/">سفارشات تایید نشده</Link>
                    </div>
                </div>
                <Link to="/" className="w-100 text-decoration-none">
                    <div className="d-flex align-items-center btn aside-menu-option border-0 justify-content-end mb-1">
                    <p className=" m-0">تخفیف ها</p>
                    <i className="bi bi-percent me-2"></i>
                    </div>
                </Link>
                <Link to="/" className="w-100 text-decoration-none border-0">
                    <div className="d-flex align-items-center btn aside-menu-option border-0 justify-content-end mb-1">
                    <p className=" m-0">تیکت</p>
                    <i className="bi bi-chat-right-dots-fill me-2"></i>
                    </div>
                </Link>
                <div className="w-100">
                <div onClick={(e)=>{clickHandler(e.target.id)}} className="d-flex align-items-center flex-row-reverse btn aside-menu-option border-0 border-0 justify-content-between mb-1" id="comments-link">
                    <div className="d-flex align-items-center" id="comments-link">
                       <p className="link-text-1 m-0" id="comments-link">نظرات</p>
                       <i className="bi bi-chat-dots-fill me-2" id="comments-link"></i>
                    </div>   
                    <i className="bi bi-chevron-down" id="comments-link"></i>
                   </div>
               <div className={`${openList == "comments-link" ? "d-flex" : "d-none"} flex-column align-items-end ps-5 list`} id="comments-list">
                   <Link className="d-block text-start text-main-1 text-decoration-none fs-15 my-1" to="/">لیست کامنت ها</Link>
                   <Link className="d-block text-start text-main-1 text-decoration-none fs-15 my-1" to="/">کامنت های تایید شده</Link>
                   <Link className="d-block text-start text-main-1 text-decoration-none fs-15 my-1" to="/">کامنت های تایید نشده</Link>
               </div>
                </div>
                
            </Div>
    );
};

export default HambergurMenuOption;