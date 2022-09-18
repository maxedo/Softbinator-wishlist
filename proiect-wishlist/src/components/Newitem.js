import React from 'react';
import "../routes/style.css";


const Newitem=(props)=>{



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