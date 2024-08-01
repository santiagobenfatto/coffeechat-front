//import { useState } from 'react';
import { Button } from '@mui/material';

const ButtonSelect = ({type}) => {
    

    return (
        <Button 
        sx={{
            fontSize: '0.850rem',
            textTransform: 'capitalize',
            borderRadius: '30px',
            bgcolor: 'primary.main',
            color: 'secondary.main',
            py: '6px',
            px: '12px',
            ':hover': {
                bgcolor: 'primary.light'
            }
        }}>
            {type.name}
        </Button>
    );
}

export default ButtonSelect;
