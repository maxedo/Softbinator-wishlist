import './style.css';
import React, { useState,useEffect } from 'react';
import Navbar from '../components/navbar';


const Profile=()=>{
var moment=require('moment');
const [name,setName]=useState("");
const [dob,setDob]=useState("");
const [countrym,setCountry]=useState("");
const [citym,setCity]=useState("");
const [isToggled, setIsToggled]=useState(false);

useEffect(()=>{
    fetch("http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/me",{
        method:'GET',
        headers:{'Authorization':'Bearer '+localStorage.getItem('user-info'),
        "Content-Type":"application/json"},
    }).then((resp)=>resp.json())
    .then((apiData)=>{ 
        console.log(apiData)
        apiData.dob=moment(apiData.dob).format("YYYY-MM-DD");
        setName(apiData.name);
        setDob(apiData.dob);
        setCountry(apiData.address.country);
        setCity(apiData.address.city);
        
    })    
},[]);



async function save(){
   
    let item;
    const address={country:countrym,city:citym}
    if(countrym!=="" && citym!==""){
         item={address};
    }

    if(name!==""){
        item["name"]=name;
    }
    

    let result=await fetch("http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/me",{
        method:"PUT",
        headers:{'Authorization':'Bearer '+localStorage.getItem('user-info'),
        "Content-Type":"application/json"},
        body:JSON.stringify(item)
    })
    if(result.status===200){
    result=await result.json();
    window.location.reload(false);
    }
}






let changeinfo;
if(isToggled!==false){
    changeinfo=<div className='chestionar_2'>
    <h1>Introduce Name:</h1>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    <h1>Introduce Country:</h1>
    <input type="text" value={countrym} onChange={(e)=>setCountry(e.target.value)}/>
    <h1>Introduce City:</h1>
    <input type="text"  onChange={(e)=>setCity(e.target.value)}/>
    <button onClick={save}>Save</button>
</div>
}




let me;
if(countrym!==""){
    me=<div className='right_2'>
    <h1>Country</h1>
    <h1>{countrym}</h1>
  
</div>
}
let me2;
if(citym!==""){
    me2=<div className='right_2'>
    <h1>City</h1>
    <h1>{citym}</h1>
    </div>
}


    return(
    <>
    <Navbar/>
    <div className='profil'>
        <div className='left'>
              <img src={require('../profile.jpg')} alt="profile_pic" className='photo_profile'/>
        </div>
        <div className='right'>
            <h1 className='textprof'>Name</h1>
            <h1 className='textprof'>{name}</h1>
            <h1 className='textprof'>Date of birth</h1>
            <h1 className='textprof'>{dob}</h1> 
        </div>
        {me}
        {me2}
        <button className='right_2' onClick={()=>setIsToggled(!isToggled)}>Change info</button>
        {changeinfo}
    </div>
    
    </>
    )
}

export default Profile;