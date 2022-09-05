import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HambergurMenuOption from './HambergurMenuContainer';

const HambergurMenu = () => {




    return (
        <div style={{width:"300px"}} className="offcanvas offcanvas-start mobile-sidebar" tabIndex="-1" id="MobileHambergurMenu" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header border-bottom d-flex align-items-center flex-row-reverse">
          <h5 id="offcanvasRightLabel" className="mb-0">محمد لبافی</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex flex-column align-items-center">
            <HambergurMenuOption />

        </div>
      </div>
    );
};

export default HambergurMenu;