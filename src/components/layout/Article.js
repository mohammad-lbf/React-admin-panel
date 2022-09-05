import React , {useState} from 'react';
import Aside from './Aside';
import Main from './Main';

const Article = () => {
    
    return (
        <div className="d-flex justify-content-between">
            <Main/>
            <Aside/>
        </div>
    );
};

export default Article;