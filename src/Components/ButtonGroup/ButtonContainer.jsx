import { Box } from '@mui/material'
import ButtonSelect from './ButtonSelect.jsx'

const ButtonContainer = () => {

    return (
        <Box 
        sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            gap: '16px',
            my: '8px'
        }}
        >
            <ButtonSelect type='convers' />
            <ButtonSelect type='contacts' />
        </Box>
    )
}

export default ButtonContainer
