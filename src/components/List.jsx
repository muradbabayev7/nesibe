import React, { useEffect } from 'react'
import { useState } from 'react'
import  axios  from "axios";
import Item from './Item';

const List = () => {
    const[data,setdata]=useState([])
    useEffect(()=>{
        axios.get("https://northwind.vercel.app/api/products").then(res=>{
            console.log(data)
            setdata(res.data)
        })
    }, [])
  return (
    
      <div>
        {
           data && data.map((item,index)=>{
                return(
                  
                    <ul>
                    <li>
                        <Item item={item} key={index}/>
                    </li>
                    </ul>
                )
            })
        }
      </div>
    
  )
}

export default List
