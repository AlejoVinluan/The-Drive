import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import TextField from '@mui/material/TextField'
import { SearchWrapper } from './PlayerSearchElements'

function PlayerSearch(){
    return(
        <>
            <SearchWrapper>
                <AiOutlineSearch /><TextField id="standard-basic" label="Player Name" variant="standard"/>
            </SearchWrapper>
        </>
    )
}

export default PlayerSearch