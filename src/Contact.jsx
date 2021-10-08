import React, { useState } from 'react';
const Contact = () => {
    const [data,setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        messege:''
    });

    const onEvent = (event) =>{
        const{value,name} = event.target;
       
        setData((PreValue) =>{
            console.log(PreValue)
            return{
              ...PreValue,
              [name]: value,
            }
        })

    }

    const formSubmit = (e) =>{
      e.preventDefault();
      alert(`My fullname is ${data.fullname}. my mobile number is ${data.phone}. my email is ${data.email} and my messege is ${data.messege}`);

      
  
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact us</h1>
            </div>

            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">

                        <form onSubmit={formSubmit}>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input
                                 type="text" 
                                 class="form-control" 
                                 id="exampleFormControlInput1"
                                 name="fullname"
                                 value={data.fullname}
                                 onChange={onEvent}
                                 placeholder="Enter Your Name" />
                            </div>
                            
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <input 
                                type="number" 
                                class="form-control" 
                                id="exampleFormControlInput1" 
                                name= "phone"
                                value={data.phone}
                                onChange={onEvent}
                                placeholder="Enter Your Phone" />
                            </div>
                            
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input 
                                type="email" 
                                class="form-control" 
                                id="exampleFormControlInput1"
                                name="email"
                                value={data.email}
                                onChange={onEvent} 
                                placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Messege</label>
                                <textarea 
                                class="form-control" 
                                id="exampleFormControlTextarea1"
                                name="messege"
                                value={data.messege}
                                onChange={onEvent} 
                                rows="3">

                                </textarea>
                            </div>
                            <button type="submit" class="btn btn-outline-primary">Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;