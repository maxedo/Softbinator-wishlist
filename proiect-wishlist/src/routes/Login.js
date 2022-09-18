import './style.css';
import React,{useState} from 'react';
import {Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const Login=() =>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    async function login(){
        let item={email,password};
        let result=await fetch("http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/login",{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(item)
        });
       
        if(result.status===200){
        result=await result.json();
        localStorage.setItem("user-info",result.token);
        if(localStorage.getItem('user-info') && result.token!==undefined){
        navigate("/home");
    }
    }
}






    return (
        <>
        <h1 className='logo'>Wishlist.soft</h1>
        <div className='login'>
            <h1>Log in</h1><br/>
            <form className="chestionar">
                <input type="text" id="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} /><br/>
                <input type="password" id="password" name="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} /><br/>
                

            </form>
            <button className='login-button' onClick={login}>Sign in</button>
            <Link to="/register" className='butonz'>Sign up</Link>
            

        </div>
        </>  
    );
};
export default Login;