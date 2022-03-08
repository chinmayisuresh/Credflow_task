import {useContext} from 'react'; 
import {Winecontext} from '../context/Data';
import {useEffect} from 'react';
import { useState } from 'react';
export const Product=()=>{
   
const {data , list ,addtocart}=useContext(Winecontext);
const  [page , setPage] = useState(0)

useEffect(()=>{
    data(page);
},[page]);

    
if(list.length===0){
    return <div>LOADING...........</div>
}

    return (
          <>
          <h1>Product page</h1>
          <div class='showing'>
          {list.map((e)=>{
              return (
                  <>
                  <div class='show'>
                  <p class='name'>{e.wine}</p>
                  <img src={e.image}></img>
                  <button onClick={()=>{addtocart(e)}}>Add to cart</button>
                  </div>
                  </>
              )
          })}
          </div>
          <button id='btn1' disabled={page===0} onClick={()=> setPage(page-10)}>Prev</button>
          <button disabled={page===150} onClick={()=>setPage(page+10)}>Next</button>
          

          </>
    );
}