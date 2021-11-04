import React from 'react'
import TextField from '@mui/material/TextField'
import { SearchWrapper, SearchIcon, SearchField } from './PlayerSearchElements'

function PlayerSearch(){
    return(
        <>
            <SearchWrapper>
                <SearchIcon /><TextField id="standard-basic" label="Player Name" variant="standard"/>
            </SearchWrapper>
        </>
    )
}

export default PlayerSearch