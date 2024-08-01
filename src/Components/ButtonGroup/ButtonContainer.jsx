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
            <ButtonSelect type={{name: 'convers'}} />
            <ButtonSelect type={{name: 'requests'}} />
        </Box>
    );
}

export default ButtonContainer;
