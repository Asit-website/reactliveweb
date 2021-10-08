import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/img.jpg";
import Comm from './Comm';
// agar mai ek single component create kr lu to us component ko import krke kahi vi use kr sakta hu 
const Home = () => {
    return (
        <>
            <Comm
               name='Grow your business'
                imgsrc={web}
                visit="/search"
                 btnName='search image'
            />
        </>
    )
}

export default Home;