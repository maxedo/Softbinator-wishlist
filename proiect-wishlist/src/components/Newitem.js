import React from 'react';
import "../routes/style.css";


const Newitem=(props)=>{


   /*  async function Save(){
        let item={name,link}
        
        
        let result=await fetch("http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/items",{
            method:"POST",
            headers:{'Authorization':'Bearer '+localStorage.getItem('user-info'),"Content-Type":"application/json"},
            body:JSON.stringify(item)
        })
        console.log(result.status)
        if(result.status===200){
            console.log("merge");
            
        }
    } */


    return(
        <> 
        <div className='item_aspect'>
        <h1>Name:{props.item.Inamen}</h1>
        <h1>Details:{props.item.detailsn}</h1>
        <h1>Quantity:{props.item.quantityn}</h1>
        <h1>Link:{props.item.linkn}</h1>
   </div>
   </>
    )



}
export default Newitem;