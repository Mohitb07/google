import React, {useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core'

import './Search.css';

function Search(){
    const [input, setInput] = useState('');

    const search = e => {
        e.preventDefault();
        console.log(input)
    }
  
    return (
        <form className="search">
            <div className="search-input">
                <SearchIcon className="search-inputIcon"/>
                <input value = {input} onChange={e => setInput(e.target.value)}/>
                <MicIcon/>
            </div>

            <div className="search-btns">
                <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
        </form>
    )
}

export default Search;