import { Button, IconButton } from "@mui/material";
import { Fragment } from "react";
import { Image } from "@mui/icons-material";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';


export default function ImageBox ({file, handleChangeImage, handleRemoveImage}) {
    const classes = useStyles();

    return (
        <Fragment>
            <input
                className="w-full"
                id='image'
                type='file'
                onChange={handleChangeImage}
            />
            <label htmlFor="image">
                <Button variant='outlined' color='primary' component="span" startIcon={<Image/>}>
                    Image
                </Button>
            </label>
            <div id='imgBox' className="relative self-center" style={{maxWidth: '360px'}}>
                <img src={file} className="w-full"/>
                <div id='clearImg' className="absolute w-full h-full top-0 hidden justify-center items-center" style={{backgroundColor: '#000000a3'}}>
                    <IconButton onClick={handleRemoveImage}>
                        <CancelPresentationIcon className='text-red-400' fontSize='large'/>
                    </IconButton>
                </div>
            </div>
        </Fragment>
    )
}
