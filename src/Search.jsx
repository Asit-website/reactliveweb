import React, { useState } from 'react';
import Sresult from './Sresult';
const Search = () =>{
    const [img,setImg] = useState("");

    const inpEvent = (event) =>{
        setImg(event.target.value)
    }
    return(
       <>
         <div className="searchbar">
           <h2 className="py-3"><span style={{color:'rosybrown'}}>Search result for</span> {img} </h2>
           <input 
           type="text"
           placeholder="Search images 👍"
           onChange={inpEvent} 
           value={img}  
           />
           {img==="" ? null : <Sresult name={img} />}
         </div>
       </>
    );
}

export default Search;