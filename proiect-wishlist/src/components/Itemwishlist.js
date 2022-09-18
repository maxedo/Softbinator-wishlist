import React,{useState} from 'react';


const Itemwishlist=(props)=>{
    const [button,setButton]=useState("Change");
    const [stare,setStare]=useState(true)

    const[name,setNumeItem]=useState(props.item.item.name);
    const[details,setDetailItem]=useState(props.item.item.details);
    const[quantity,setQuantityItem]=useState(props.item.item.quantity);
    const[link,setLinkItem]=useState(props.item.item.link);



    async function UpdateItem(itemsid){
        if(button==="Change"){
            setButton("Save");
            setStare(false);
        }
        if(button==="Save"){
            setButton("Change");
            setStare(true);
            const schimbare={name,details,quantity,link};
            await fetch(`http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/items/${itemsid}`,{
            method:"PUT",
            headers:{'Authorization':'Bearer '+localStorage.getItem('user-info'),
            "Content-Type":"application/json"},
            body: JSON.stringify(schimbare)
        })

    }
     }






    return(
    <>
     <div>
        {/* <h1>Name:{props.item.item.name}</h1>
        <h1>Details:{props.item.item.details}</h1>
        <h1>Quantity:{props.item.item.quantity}</h1>
        <h1>Link:{props.item.item.link}</h1> */}



        <button onClick={()=>UpdateItem(props.item.item.id)}>{button} </button>
        <h1>Name:</h1>
        <input type="text" defaultValue={props.item.item.name} readOnly={stare}  className='itemcreat' onChange={(e)=>setNumeItem(e.target.value)}/>
        <h1>Details:</h1>
        <input type="text" defaultValue={props.item.item.details} readOnly={stare} className='itemcreat' onChange={(e)=>setDetailItem(e.target.value)}/>
        <h1>Quantity:</h1>
        <input type="number" defaultValue={props.item.item.quantity} readOnly={stare} className='itemcreat' onChange={(e)=>setQuantityItem(e.target.value)}/>
        <h1>Link:</h1>
        <input type="text" defaultValue={props.item.item.link} readOnly={stare} className='itemcreat' onChange={(e)=>setLinkItem(e.target.value)}/>


        
     </div>
    </>
    )
}
export default Itemwishlist;