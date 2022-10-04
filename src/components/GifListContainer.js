import React,{useState,useEffect} from 'react';
import GifSearch from './GifSearch';
import GifList from './GifList';

function GifListContainer() {

    const [gifs, setGifs] = useState([])
    const [search, setSearch] = useState("dolphins")

    const apiKey = "gz1pYC3m8thJdWiBR0NY5229N1IaE18l"

    useEffect(() => {

        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}&rating=g`)
        .then (r => r.json())
        .then (data => {
            setGifs(data.data.slice(0,3))
        })

    },[search])

    
    return (
        <div style={{
            'display': 'flex',
            'margin':'20px'}}>
            <GifSearch 
            search={search}
            setSearch = {setSearch} />
            <GifList gifs={gifs}/>
            
          
        </div>
      )
}

export default GifListContainer;