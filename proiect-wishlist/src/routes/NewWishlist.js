import './style.css';
import React,{useState} from 'react';
import Navbar from '../components/navbar';
import Newitem from '../components/Newitem';
import {useNavigate} from 'react-router-dom';




const NewWishlist=() =>{

    const [components,setComponents]=useState([]);
    const [name,setName]=useState("");
    const [details,setDetails]=useState("");
    const [quantity,setQuantity]=useState("");
    const [link,setLink]=useState("");
    const [titlu,setTitlu]=useState("");
    const [detailsW,setDetailsW]=useState("");
    const navigate=useNavigate();


    const [lista,setLista]=useState([]);



    const [Inamen,setNamen]=useState([]);
    const [detailsn,setDetailsn]=useState([]);
    const [quantityn,setQuantityn]=useState([]);
    const [linkn,setLinkn]=useState([]);


    const items={name,details,quantity,link}


    
   const itemN={
       id:Math.floor(Math.random()*1000),
       nameV:name,
       detailsV:details,
       quantityV:quantity,
       linkV:link
   };


   
    function addComponent(e){
        /* setComponents([...components,""]) */
        e.preventDefault();
        const newItem={
            id:Math.floor(Math.random()*1000),
            Inamen:name,
            detailsn:details,
            quantityn:quantity,
            linkn:link
        };
        components.unshift(newItem)



       /*  setNamen(oldList=>[...oldList,itemN.nameV])
        setName("");
        setDetailsn(oldListD=>[...oldListD,itemN.detailsV])
        setDetails("");
        setQuantityn(oldListQ=>[...oldListQ,itemN.quantityV])
        setQuantity("");
        setLinkn(oldListL=>[...oldListL,itemN.linkV])
        setLink(""); */
    }

    const itemI={Inamen,detailsn,quantityn,linkn}
    


let result;

    async function Save(){
        let item={name,details,quantity,link}
        
        
         result=await fetch("http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/items",{
            method:"POST",
            headers:{'Authorization':'Bearer '+localStorage.getItem('user-info'),"Content-Type":"application/json"},
            body:JSON.stringify(item)
        })
      
        if(result.status===200){
            console.log("merge");
            result=await result.json();
            console.log(result.id);
            setLista(arr=>[...arr,result.id])
            console.log(lista)
        }
    }

    async function WishlistSave(){
        let itemz={
         wishlist:{
            name:titlu,
            details:detailsW
        } ,
        itemIds:lista.length>0?[...lista] :[0]
    }





    console.log(JSON.stringify(itemz),localStorage.getItem('user-info'))
    console.log("merge")
    await fetch("http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/wishlists",{
        method:"POST",
        headers:{'Authorization':'Bearer '+localStorage.getItem('user-info'),
        "Content-Type":"application/json"},
        body:JSON.stringify(itemz)




    }).then(response=>{
        console.log(response)
        if(response.status===200){
            navigate("/home");
            
        }
    }).catch(error=>{
        console.log(error)
    })
    
        
    }

    

 




    return (
        <>
        <Navbar/>
        <div className="acasa">
            <h1 className='header_wishlist'>Create a wishlist</h1>
            <div className='Wishlist_finalizat'>
                <input type="text" placeholder='Title' onChange={(e)=>setTitlu(e.target.value)}/>
                <input type="text" placeholder='Description' onChange={(e)=>setDetailsW(e.target.value)}/>
                <button className='button_wishlist' onClick={() => { WishlistSave()}}>Save</button>


            </div>
            <div className='Wishlist_iteme'>
                <h1>Name</h1>
                <input type="text"  placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
                <h1>Details</h1>
                <input type="text" placeholder='Details' onChange={(e)=>setDetails(e.target.value)} />
                <h1>Quantity</h1>
                <input type="number" onChange={(e)=>setQuantity(e.target.value)}/>
                <h1>Link</h1>
                <input type="text" placeholder='Link' onChange={(e)=>setLink(e.target.value)}/>
                <button className='button_wishlist' onClick={(e) => { addComponent(e); Save();}}>New item</button>
            </div>
            <div className='items_space'>
            {components.map((item)=>(
              
             <Newitem  item={item}/>
              
            ))}
            </div>
        </div>
        </>  
    );
};
export default NewWishlist;