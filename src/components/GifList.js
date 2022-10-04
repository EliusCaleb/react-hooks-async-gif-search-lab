import React from 'react'

function GifList({gifs}) {
    return (
        <ul>
            {gifs.map(gif => (
            <li 
                key={gif.images.original.url}
                style={{
                    'listStyle':'none'
                }}
                >
    
                    <img src={gif.images.original.url} alt="gif"/>
                    
            </li>))}
        </ul>
      )
}

export default GifList