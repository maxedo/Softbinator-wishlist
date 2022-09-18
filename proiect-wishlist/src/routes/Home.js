import React,{useState,useEffect} from 'react';
import Navbar from '../components/navbar';
import './style.css';
import Wishlisthome from '../components/Wishlisthome';
import axios from 'axios';

const Home=()=>{

const [components,setComponents]=useState({
    loading: false,
    data: null,
    error: false
});




useEffect(()=>{
    setComponents({
        loading: true,
        data: null,
        error: false
    })

    axios.get("http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/wishlists",{
        method:"GET",
        headers:{'Authorization':'Bearer '+localStorage.getItem('user-info'),
        "Content-Type":"application/json"}
    }).then(response=>{
        setComponents({ 
            loading: false,
            data: response.data,
            error: false})
     
    })


},["http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/wishlists"])

let content=null;



if(components.data){
    
    content=components.data.wishlists.map((comp)=>
    <div key={comp.id} className="item_aspect">
        <Wishlisthome comp={comp}/>
    </div>
    
    )
}





    return(
        <>
        <Navbar/>
        <h1 className='header_wishlist'>My wishlists</h1>
       {content}

        </>
    )

}
export default Home;