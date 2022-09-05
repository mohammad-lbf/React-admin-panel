import React from 'react';
import styled from 'styled-components';
import HambergurMenuOption from '../shared/HambergurMenuContainer';
import profileImage from '../../assets/images/7545.png'

const Aside = ({open}) => {
    const Sidebar = styled.div`
    width: 250px;
    position:fixed !important;
    top:0;
    right:0;
    margin-left: 0;
    padding: 2rem 1rem;
        .desktop-sidebar{
            color: #212529;
            font-size: 16px;
            height: 100vh;
            background-color: #fff;
            transition: all 0.5s ease-out;
        }
        .desktop-sidebar.inactive{
            margin-left: 250px;
        }
        .bi{
            cursor: pointer;
            line-height: 0;
        }
    `
    return (
        <Sidebar open={open} className={` d-none d-lg-block text-center`}>
            <div className="desktop-sidebar">
            <div class="fw-bold fs-5 mb-4 d-flex align-items-center justify-content-center flex-row-reverse">
            <img src={profileImage} alt="" class="icon" />
            <p class="mb-0 ms-1">محمد لبافی</p>
        </div>

                <HambergurMenuOption />
            </div>
        </Sidebar>
    );
};

export default Aside;