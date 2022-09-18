import React,{useState} from 'react';
import axios from 'axios';
import Itemwishlist from './Itemwishlist';
const Wishlisthome=(props)=>{





function Delete(){
    axios.delete(`http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/wishlists/${props.comp.id}`,{
        method:"DELETE",
        headers:{'Authorization':'Bearer '+localStorage.getItem('user-info'),
        "Content-Type":"application/json"}
    }).then(response=>{
        if(response.status===200){
        window.location.reload(false);}
    }).catch()
    
}

console.log(props.comp)

async function DeleteItem(itemid){
    console.log(itemid)
    await fetch(`http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/items/${itemid}`,{
        method:"DELETE",
        headers:{'Authorization':'Bearer '+localStorage.getItem('user-info'),
        "Content-Type":"application/json"}

    }).then(response=>{
        if(response.status===200){
        window.location.reload(false);
    }
    })

 }














return (
    <>
        <button onClick={Delete}>X</button>
   <div>
    <div className='Titlu_descriere'>
        <h1>{props.comp.name}</h1>
    </div>
    <div className='Titlu_descriere'>
        <h1>{props.comp.details}</h1>
    </div>
    {props.comp.items.map((items)=>(
              <>
                <div key={items.item.id} className='itemedinlista'>
                    <button onClick={() => DeleteItem(items.item.id)}>X</button>
                    
                    <Itemwishlist item={items} />
                </div>

              </>
              
               
             ))}
    
   </div>
    
    </>
)


}
export default Wishlisthome;