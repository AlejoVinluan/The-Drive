import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'
import TextField from '@mui/material/TextField'

export const SearchWrapper = styled.div`
    background: #f8f8ff;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 40%;
    margin-top 1rem;
`

export const SearchIcon = styled(AiOutlineSearch)`
    transform: scale(2,2);
    position: relative;
    right: 1rem;
    top: 1.6rem;
`

export const SearchField = styled(TextField)`
`

export const SearchResults = styled.div`
    
`