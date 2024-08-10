import React, { useState, useEffect } from 'react'
import { Snackbar, Alert } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import InfoIcon from '@mui/icons-material/Info'

const Toast = ({type, message}) => {

    const [ open, setOpen ] = useState()

    useEffect(() => {
        if (message) {
            setOpen(true)
        }
    }, [message])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    }

    const typeMap = {
        success: {
            icon: <CheckIcon fontSize='inherit' />,
            severity: 'success'
        },
        error: {
            icon: <ErrorOutlineIcon fontSize='inherit' />,
            severity: 'error'
        },
        warning: {
            icon: <WarningAmberIcon fontSize='inherit' />,
            severity: 'warning'
        },
        info: {
            icon: <InfoIcon fontSize='inherit' />,
            severity: 'info'
        },
        
    }

    const { icon, severity } = typeMap[type] || typeMap.info


    return (
        <Snackbar 
        open={open}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}
        onClose={handleClose}
        sx={{mb:'16px', ml: '16px'}}
        >
            <Alert variant='filled' icon={icon} severity={severity}>
                {message}
            </Alert>
        </Snackbar>
    );
}

export default Toast
