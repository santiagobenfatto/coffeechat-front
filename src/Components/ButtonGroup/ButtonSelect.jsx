import { Button } from '@mui/material';
import { useConver } from '../../Context/ConverContext.jsx';

const ButtonSelect = ({type}) => {
    
    const { handleSearcher } = useConver()
    /*
    handleSearcher en el Context useConver es:
    const handleSearcher = (prop) => {
        setSearcher(prop)
        }
    */

    return (
        <Button 
        onClick={() => {handleSearcher(type)}}
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
            {type}
        </Button>
    );
}

export default ButtonSelect;
