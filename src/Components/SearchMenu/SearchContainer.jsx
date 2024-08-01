import { FormControl } from '@mui/material'
import SearchField from './SearchField.jsx'
import ButtonContainer from '../ButtonGroup/ButtonContainer.jsx'

const SearchContainer = () => {
    
    return (
        <FormControl sx={{
            boxSizing: 'border-box',
            alignItems:'center',
            justifyContent:'center',
            width:'100%',
            height: 'auto'
        }}>
            <ButtonContainer />
            <SearchField />
        </FormControl>
    )
}

export default SearchContainer