import React from 'react';
import MainSec1 from './MainSec1';
import MainSec2 from './MainSec2';

const MainContainer = () => {
    
    return (
        <section className="container-fluid d-flex justify-content-center p-0">
            <div className="row w-100 flex-row-reverse justify-content-center">
                <div className="col-xl-9 p-0">
                    <MainSec1 />
                </div>
                <div className="col-xl-3 mt-5 mt-xl-0 ps-xl-0 px-0">
                    <MainSec2 />
                </div>
            </div>
        </section>
    );
};

export default MainContainer;