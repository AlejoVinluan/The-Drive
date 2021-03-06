import React, { useState, useEffect } from 'react'
import { SearchWrapper, SearchIcon, SearchResults, SearchField } from './PlayerSearchElements'

function PlayerSearch(){

    const [loading,setLoading] = useState(false)
    const [data,setData] = useState(null)
    const [searchValue,setSearchValue] = useState('')

    const handleChange = (e) => {
        setSearchValue(e.target.value)
        console.log(searchValue)
    }

    const handleSubmit = (e) => {
        setLoading(true)
        setData(e.target.value)
        e.preventDefault()
        console.log("Submitted")
    }

    return(
        <>
            <SearchWrapper>
                <form onSubmit={handleSubmit}>
                    <SearchIcon /><SearchField id="standard-basic" label="Player Name" variant="standard" onChange={handleChange} value={searchValue}/>
                </form>
            </SearchWrapper>
            <SearchResults>
            </SearchResults>
        </>
    )
}

export default PlayerSearch