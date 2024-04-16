import { Button, IconButton } from "@mui/material";
import { Fragment } from "react";
import { Image } from "@mui/icons-material";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: 2,
        },
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column !important'
    },
    input: {
        display: 'none'
    },

    imgBox: {
        position: 'relative',
        maxWidth: '360px',
        alignSelf: 'center',
    },

    clearImg: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#000000a3',
        top: 0,
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center'
    },

    img: {
        width: '100%'
    }
}))

export default function ImageBox ({file, handleChangeImage, handleRemoveImage}) {
    const classes = useStyles();

    return (
        <Fragment>
            <input
                className={classes.input}
                id='image'
                type='file'
                onChange={handleChangeImage}
            />
            <label htmlFor="image">
                <Button variant='outlined' color='primary' component="span" startIcon={<Image/>}>
                    Image
                </Button>
            </label>
            <div id='imgBox' className={classes.imgBox}>
                <img src={file} className={classes.img}/>
                <div id='clearImg' className={classes.clearImg}>
                    <IconButton onClick={handleRemoveImage}>
                        <CancelPresentationIcon className='text-red-400' fontSize='large'/>
                    </IconButton>
                </div>
            </div>
        </Fragment>
    )
}
