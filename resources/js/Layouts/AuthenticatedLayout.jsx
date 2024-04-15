import { useState } from 'react';
import { Link } from '@inertiajs/react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Logout from '@mui/icons-material/Logout';
import InventoryIcon from '@mui/icons-material/Inventory';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import { AppBar, IconButton, Menu, MenuItem, Snackbar, Toolbar, Tooltip, Typography} from '@mui/material';
import { Settings } from '@mui/icons-material';
import { useEffect } from 'react';

export default function Authenticated({ user, header, children, flash }) {
    const [open, setOpen] = useState(false);
    const [openSnack, setOpenSnack] = useState(flash ? (flash.message ? true : false) : false);
    const [anchorEl, setAnchorEl] = useState(null)
    const message = flash ? (flash.message ? flash.message : null) : null

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        if(message) {
            setOpenSnack(true)
        }
    }, [message])

    const drawerOptions = [
        { label: 'Productos', href: route('product.index'), icon: <InventoryIcon/> },
        { label: 'Mesas', href: route('table.index'), icon: <TableRestaurantIcon/> }
    ];

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" >
            <List>
                <ListItem>
                    <ListItemText variant="h3" className='uppercase text-gray-400' sx={{'& span': {fontWeight: 600, letterSpacing: '0.3em'}}}>
                        Administracion
                    </ListItemText>
                </ListItem>
            {drawerOptions.map((option, index) => (
                <Link key={index} href={option.href}>
                    <ListItem key={option.label} disablePadding>
                        <ListItemButton >
                            {option.icon && (
                                <ListItemIcon>
                                    {option.icon}
                                </ListItemIcon>
                            )}
                            <ListItemText primary={option.label} />
                        </ListItemButton>
                    </ListItem>
                </Link>
            ))}
            </List>
            <Divider />
            <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
            </List>
        </Box>
    );

    return (
        <div className="min-h-screen bg-gray-100">
            {message && (<Snackbar
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                open={openSnack}
                onClose={() => setOpenSnack(false)}
                message={flash.message}
            />)}
            <AppBar>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" className='flex justify-center flex-1'>
                        <Link href={route('dashboard')} className='flex items-center'>
                            <span className='text-md'>H</span>
                            <span className='text-3xl font-bold'>&</span>
                            <span className='text-md'>M</span>
                        </Link>
                    </Typography>
                    <div>
                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                            <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleMenu}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'menu-appbar' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                            </IconButton>
                            </Tooltip>
                        </Box>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                  overflow: 'visible',
                                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                  mt: 1.5,
                                  '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                  },
                                  '&::before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                  },
                                },
                              }}
                        >
                            <Link href={route('profile.edit')}>
                                <MenuItem onClick={handleClose} style={{alignItems: 'center'}}>
                                    <ListItemIcon>
                                        <Settings fontSize="small" />
                                    </ListItemIcon>
                                    Perfil
                                </MenuItem>
                            </Link>
                            <Link as='button' method='post' href={route('logout')}>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon >
                                        <Logout fontSize="small"/>
                                    </ListItemIcon>
                                    Salir
                                </MenuItem>
                            </Link>
                        </Menu>
                        </div>
                </Toolbar>
            </AppBar>

            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>

            <main className='pt-16'>{children}</main>
        </div>
    );
}
