import { useState } from "react";
import { createContext } from "react";
import { ReactReduxContext } from "react-redux";

export const Winecontext = createContext();
export const WinecontextProvider=({children})=>{
    const [list,setList]=useState([]);
    const [cart,setCart]=useState([]);
   
    const data=(n)=>{
        const baseURL = 'https://api.sampleapis.com/wines/reds';
         fetch(baseURL)
        .then(resp => resp.json())
        .then((res) =>  {
                paginate(n , res)      
            }
            )}

    const paginate = (n,res)  => {
     console.log(res);

     let arr = [];

     for(let i=n ; i<n+9 ; i++){
         arr.push(res[i])
     }

     setList(arr);
    }

    const addtocart=(c)=>{
        let g=cart;
        g.push(c);
        setCart(g);
        console.log(g);
        localStorage.setItem('cart',JSON.stringify(g));
    }
     
    return (
    <Winecontext.Provider value={{data,list , paginate ,addtocart}}>{children}</Winecontext.Provider>)
}