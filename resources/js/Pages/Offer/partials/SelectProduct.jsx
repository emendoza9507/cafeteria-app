import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import InventoryIcon from '@mui/icons-material/Inventory';
import Slide from '@mui/material/Slide';
import { Autocomplete, Avatar, Box, Grid, ListItem, ListItemAvatar, TextField } from '@mui/material';
import { Add, Delete, Folder } from '@mui/icons-material';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function SelectPruducts({ products, offer, onChange }) {
    const title = 'PRODUCTOS';
    const [open, setOpen] = React.useState(false);
    const [saved, setSaved] = React.useState(false);

    const [selectedProducts, setSelectedProducts] = React.useState(Array.from(offer.products || []).map(product => {
        return { product, product_count: product.pivot.product_count }
    }));
    const [selectedProduct, setSelectedProduct] = React.useState();
    const [totalSelected, setTotalSelected] = React.useState(0.00);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {

        setOpen(false);
    };

    const handleAdd = (e) => {
        if (selectedProduct != undefined && totalSelected > 0) {
            setSelectedProducts((selectedProducts => {
                const exist = selectedProducts.find(({ product }) => product.id == selectedProduct.id)

                if (exist) {
                    exist.product_count = Number(exist.product_count) + Number(totalSelected);
                    return [...selectedProducts]
                }

                return [...selectedProducts, { product: selectedProduct, product_count: totalSelected }];
            }))
        }
    }


    const handleRemove = (p) => () => {
        setSelectedProducts([...selectedProducts.filter(({ product }) => p.id !== product.id)])
    }

    React.useEffect(() => {
        if (onChange) {
            onChange(selectedProducts);
        }
    }, [selectedProducts])

    return (
        <React.Fragment>
            <Button variant="outlined" color='error' onClick={handleClickOpen} startIcon={<InventoryIcon />}>
                {title}
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'sticky', top: 0 }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography align='center' sx={{ ml: 2, left: '-20px', position: 'relative', flex: 1 }} variant="h6" component="div">
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid className='sticky pt-2 top-14 bg-white z-10' container columns={12} justifyContent="center">
                    <Grid item xs={12} md={6} className='mt-2 px-2' container>
                        <Grid item xs md className='pr-1'>
                            <Autocomplete
                                fullWidth
                                options={products}
                                autoHighlight
                                getOptionLabel={(option) => option.name}
                                getOptionKey={(option) => option.id}
                                onChange={(_, v) => setSelectedProduct(v)}
                                isOptionEqualToValue={(option, value) => option.id == value.id}
                                renderOption={(props, option) => (
                                    <Box key={option.id} component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                        <img
                                            loading="lazy"
                                            width="40"
                                            src={option.image ? `/storage/${option.image?.url}` : ''}
                                            alt=""
                                        />
                                        {option.name}
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        label="Elige un producto"
                                        name='name'
                                        inputProps={{
                                            ...params.inputProps,
                                            autoComplete: 'new-password', // disable autocomplete and autofill
                                        }}
                                        {...params}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={3} md={3}>
                            <TextField
                                fullWidth
                                label="Cantidad"
                                type='number'
                                step="any"
                                variant="outlined"
                                value={totalSelected}
                                onChange={e => setTotalSelected(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={2} md={2} display="flex" justifyContent="center" className='px-3'>
                            <Button onClick={handleAdd} type='button' variant='contained' className='w-full' startIcon={<Add/>}>
                                Add
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container columns={12}>
                    <Grid item xs={0} md={3} />
                    <Grid item xs={12} md={6}>
                        <List>
                            {Array.from(selectedProducts).map((p) => (
                                <ListItem key={p.product.id}
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete" onClick={handleRemove(p.product)}>
                                            <Delete />
                                        </IconButton>
                                    }
                                    className='flex-wrap'
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            {
                                                p.product.image ? (
                                                    <img
                                                        loading="lazy"
                                                        width="40"
                                                        src={`/storage/${p.product.image.url}`}
                                                        alt=""
                                                    />
                                                ) : (<Folder />)
                                            }
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        className='flex-1'
                                        primary={p.product.name}
                                        secondary={String(p.product.stock) + p.product.um}
                                    />
                                    <ListItemText
                                        secondary={String(p.product_count) + p.product.um}
                                        sx={{ '& > p': { color: p.product_count > p.product.stock ? 'red' : 'black' } }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            </Dialog>
        </React.Fragment>
    );
}
