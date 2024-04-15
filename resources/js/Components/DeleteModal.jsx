import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, IconButton } from '@mui/material';
import { Fragment } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DeleteModal({icon, title, body, onAccept}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Fragment>
        <IconButton size='small' onClick={handleOpen}>
            {icon}
        </IconButton>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {title && <Typography id="transition-modal-title" variant="h6" component="h2">
              {title}
            </Typography>}
            <Typography id="transition-modal-description" sx={{ mt: title ? 2 : 0 }}>
              {body}
            </Typography>
            <Button className='float-end' onClick={() => {
                handleClose()
                if(onAccept) {
                    onAccept()
                }
            }}>
                Aceptar
            </Button>
          </Box>
        </Fade>
      </Modal>
    </Fragment>
  );
}
