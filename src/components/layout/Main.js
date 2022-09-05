import React , {useState} from 'react';
import Header from './Header';
import styled from 'styled-components';
import MainContainer from '../shared/MainContainer';
import Footer from './Footer';


const Main = () => {
    const Main = styled.main`
    background-color: #f2f7ff;
    width:100vw;
    transition: all 0.3s linear;
    min-height:150vh;
    z-index: 5;
    @media(min-width:992px){
        width: ${props => props.open ? "calc(100vw - 265px)" : "100vw"};
    }
    .fs-7{
        font-size: 13px;
        color: #25396f;
    }
    .bg-purple{
        background-color: #9694ff;
    }
    .bg-blue-100{
        background-color: #57caeb;
    }
    .bg-green-100{
        background-color: #5ddab4;
    }
    .bg-red-100{
        background-color: #ff2521;
    }
    #chartdiv {
        width: 100%;
        height: 500px;
    }
    .show-all:hover{
    background-color: #20315e;
    border: #ff2521 1px solid;
    }
    .bg-main-color-1{
        background-color: #20315e;
    }
    .footer-author::after{
    content: '';
    width: 5rem;
    height: 0.3rem;
    border-radius: 5px;
    background-color: #ff2824;
    display: block;
    margin: 5px auto;
    }
    `
    const [asideOpen , setAsideOpen] = useState(false);
    return (
        <Main open={asideOpen}>
            <Header open={asideOpen} setAsideOpen={setAsideOpen} />
            <MainContainer />
            <Footer />
        </Main>
    );
};

export default Main;