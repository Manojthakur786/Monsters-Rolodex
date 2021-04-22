import React from 'react';
import './search-style.css';
export const SearchBox=({placeholder,handlechange})=>(
    <input className='search'
     type='search' 
     placeholder={placeholder} 
     onChange={handlechange}/>
);