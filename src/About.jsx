import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/logo3.jpg";
import Comm from './Comm';
const About = () => {
    return (
        <>
          <Comm 
           name='Welcome to about page'
           imgsrc={web}
           visit="/contact"
           btnName='Contact Now'
          />
               
        </>
    )
}

export default About;