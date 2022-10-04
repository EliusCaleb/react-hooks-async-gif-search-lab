import React, { useState } from 'react';

function GifSearch({setSearch}) {

    const [query , setQuery] = useState('')

    function handleChange(e){
        setQuery(e.target.value)
    }

    function handleClick(e){
        e.preventDefault()
        setSearch(query)
        setQuery('')   
    }
  return  (
    <div>
    <label htmlFor='search'>Enter a Search Term:</label>
    <input 
        className="form-control mr-sm-2" 
        type="search" 
        name='search'
        placeholder="Search" 
        aria-label="Search" 
        value={query}
        onChange={handleChange}/>
    <button 
    className="btn btn-outline-success my-2 my-sm-0" 
    type="submit"
    onClick={handleClick}
    >Find Gifs</button>
    </div>
  

  )
}

export default GifSearch