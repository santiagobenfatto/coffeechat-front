import { TextField, InputAdornment, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const SearchField = () => {
    
    return (
        <TextField
        size='small'
        placeholder='Busca a tus amigos...'
        sx={{
            backgroundColor: 'primary.light',
            opacity: '0.8',
            width: '85%',
            border: 'none',
            borderRadius: 2,
            paddingLeft: '0px',
            '& .MuiInputBase-root': {
              paddingLeft:'0px'
            },
            '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: 'none',
                    },
                    '&:hover fieldset': {
                      border: 'none',
                    },
                    '&.Mui-focused fieldset': {
                      border: 'none',
                    }
                }
        }}
        InputProps={{
            startAdornment:
            <InputAdornment position='start'>
                <IconButton sx={{
                color: 'secondary.dark',
                mx: '4px',
                ':hover': {
                    backgroundColor: 'primary.dark',
                }
            }}>
                <SearchIcon />
                </IconButton>
        </InputAdornment>
        }}
        />
    )
}

export default SearchField