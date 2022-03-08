import {useContext} from 'react'; 
import {Winecontext} from '../context/Data';
import {useEffect} from 'react';
import { useState } from 'react';
export const Cartpage=()=>{
   
const cart=JSON.parse(localStorage.getItem('cart'));
    
if(!cart){
    return (
        <>
        <h1>Cart page</h1>
    <p>No items added to the cart</p>
        </>
        )
}

    return (
          <>
        
          <div class='showing'>
          {cart.map((e)=>{
              return (
                  <>
                  <div class='show'>
                  <p class='name'>{e.wine}</p>
                  <img src={e.image}></img>
                  
                  </div>
                  
                  </>
              )
          })}
          </div>
        
          

          </>
    );
}