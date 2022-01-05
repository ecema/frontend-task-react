import React from 'react'
import './Search.css'

function Search({ setSearchKey,searchKey }) {

    const handleInputChange = (e) => {
        setSearchKey(e.target.value)
    }

    return (
        <div className="search">
            <div className="search-title">
                Type Category for Search
            </div>
            <input className="search-input" type="text" placeholder="Home ex." value={searchKey} onChange={(e) => handleInputChange(e)} />
        </div>
    )
}

export default Search;
