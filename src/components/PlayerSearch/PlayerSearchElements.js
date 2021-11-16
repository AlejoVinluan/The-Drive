import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'

export const SearchWrapper = styled.div`
    background: #f8f8ff;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 40%;
    padding-top: 1rem;
`

export const SearchIcon = styled(AiOutlineSearch)`
    transform: scale(2,2);
    position: relative;
    right: 1rem;
    top: 0.5rem;
`

export const SearchResults = styled.div`

`