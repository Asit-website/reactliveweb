import React from 'react';

const Sresult = (props) =>{
    const imga = `https://source.unsplash.com/1600x1600?${props.name}`
    return(
        <div  className="d-flex align-items-center justify-content-center">
            <img  className="ds" src={imga} alt="asit"/>
        </div>
    )
}

export default Sresult;