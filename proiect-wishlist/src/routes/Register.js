import './style.css';
import React,{useState} from 'react';
import {Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const Register=() =>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [dob,setDob]=useState("");
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const navigate=useNavigate();
    async function register(){
        let item={email,password,dob,name,phone};
        let result=await fetch("http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/register",{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(item)
        });
        if(result.status===200){
            navigate("/")
        }

    }

    
    return (
        <>
        <Link to="/" className='logor'>Wishlist.soft</Link>   
        <div className='loginr'>
            <h1>Sign up</h1><br/>
            <form className="chestionar">
                <input type="text" id="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} /><br/>
                <input type="password" id="password" name="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} /><br/>
                <input type="text" id="dob" name="dob" placeholder="Date of birth" onChange={(e)=>setDob(e.target.value)} /><br/>
                <input type="text" id="name" name="name" placeholder="Name" onChange={(e)=>setName(e.target.value)} /><br/>
                <input type="text" id="phone" name="phone" placeholder="Phone number" onChange={(e)=>setPhone(e.target.value)} /><br/>                
                

            </form>
            <button className='login-button' onClick={register}>Sign in</button>

        </div>
        </>  
    );
};
export default Register;