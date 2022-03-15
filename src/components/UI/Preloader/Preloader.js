import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';

const Preloader = ({loading}) => {
    if (!loading) {
        return null;
    }

    return (
        <Backdrop open={loading}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default Preloader;