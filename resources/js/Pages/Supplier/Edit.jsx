import HeaderModule from '@/Components/HeaderModule';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, useForm } from '@inertiajs/react';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import { Autocomplete, Box, CircularProgress, Grid, MenuItem, Snackbar, TextField  } from '@mui/material';
import InputError from '@/Components/InputError';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { green } from '@mui/material/colors';

export default function Edit({ auth, product, categories,flash, ...props }) {
    const title = "EDITAR PRODUCTO";
    const [openSnack, setOpenSnack] = useState(flash ? (flash.message ? true : false) : false);
    const message = flash ? (flash.message ? flash.message : null) : null
    const [products, setProducts] = useState(Array.from([]));

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const { data, errors, put, reset, setData } = useForm({
        id: product.id,
        name: product.name,
        product_category_id:  product.product_category_id,
        stock: product.stock,
        min_stock: product.min_stock,
        description:  product.description ? product.description : '',
        sale_price:  product.sale_price,
        purchase_price:  product.purchase_price,
        um: product.um
    })

    const buttonSx = {
        ...(success && {
          bgcolor: green[500],
          '&:hover': {
            bgcolor: green[700],
          },
        }),
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        put(route('product.update', { product }), {
            onError: () => {
                setSuccess(false)
                setLoading(false)
            },
            onSuccess: () => {
                setSuccess(true)
                setOpenSnack(true)
                setTimeout(() => {
                    setOpenSnack(false)
                    setSuccess(false)
                    setLoading(false)
                }, 2000)
            }
        });
    }

    useEffect(() => {
        axios.get(route('product.resource.list'))
        .then(({data}) => {
            setProducts(data.data.map((option) => {
                const firstLetter = option.name[0].toUpperCase();
                return {
                  firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
                  ...option,
                };
            }))
        })
    }, [])

    return (
        <AuthenticatedLayout
            user={auth.user}
            {...props}
        >
            {message && (<Snackbar
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                open={openSnack}
                onClose={() => setOpenSnack(false)}
                message={flash.message}
            />)}

            <Head title={title} />

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                <HeaderModule title={title}/>

                <div className="bg-white overflow-hidden shadow-sm">
                    <Grid component='form' columns={12} onSubmit={handleSubmit} container  spacing={2} className='px-4 py-6'>
                        <Grid item xs={12}>
                            <Autocomplete
                                id="grouped-demo"
                                freeSolo
                                options={products.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                                groupBy={(option) => option.firstLetter}
                                getOptionLabel={(option) => option.name}
                                getOptionKey={(option) => option.name}
                                onChange={(_, e) => setData('name', e.name)}
                                inputValue={data.name}
                                renderInput={(params) => <TextField
                                    fullWidth
                                    id="name"
                                    name="name"
                                    margin='normal'
                                    label="Nombre de Producto"
                                    variant="outlined"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    {...params}
                                />}

                            />
                            <InputError message={errors.name} className="mt-2" />
                        </Grid>
                        <Grid item xs={12} container display="flex" justifyContent="space-around">
                            <Grid item xs container direction="row" spacing={2}>
                                <Grid item xs={6} md={3}>
                                    <TextField
                                        fullWidth
                                        id="purche_price"
                                        name="sale_price"
                                        margin='normal'
                                        label="Precio de Venta"
                                        type='number'
                                        step="any"
                                        variant="outlined"
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'>$</InputAdornment>
                                        }}
                                        value={data.sale_price}
                                        onChange={(e) => setData('sale_price', e.target.value)}
                                    />
                                    <InputError message={errors.sale_price} className="mt-2" />
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <TextField
                                        fullWidth
                                        id="purche_price"
                                        name="purchase_price"
                                        margin='normal'
                                        label="Precio de Compra"
                                        variant="outlined"
                                        type='number'
                                        InputProps={{
                                            startAdornment: <InputAdornment position='start'>$</InputAdornment>
                                        }}
                                        value={data.purchase_price}
                                        onChange={(e) => setData('purchase_price', e.target.value)}
                                    />
                                    <InputError message={errors.purchase_price} className="mt-2" />
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <TextField
                                        fullWidth
                                        id="product_category_id"
                                        name="product_category_id"
                                        margin='normal'
                                        label="Categoria"
                                        select
                                        variant="outlined"
                                        value={data.product_category_id}
                                        onChange={(e) => setData('product_category_id', e.target.value)}
                                    >
                                        {
                                            Array.from(categories).map(({id, category_name}) => (
                                                <MenuItem key={id} value={id}>
                                                    {category_name}
                                                </MenuItem>
                                            ))
                                        }
                                    </TextField>
                                    <InputError message={errors.product_category_id} className="mt-2" />
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <TextField
                                        fullWidth
                                        id="um"
                                        name="um"
                                        margin='normal'
                                        label="Unidad de Medida"
                                        variant="outlined"
                                        value={data.um}
                                        onChange={(e) => setData('um', e.target.value)}
                                    />
                                    <InputError message={errors.um} className="mt-2" />
                                </Grid >
                            </Grid>
                        </Grid>
                        <Grid item xs={12} container display="flex" justifyContent="space-around">
                            <Grid item xs container direction="row" spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        id="stock"
                                        name="stock"
                                        margin='normal'
                                        label="Stock"
                                        disabled
                                        type='number'
                                        variant="outlined"
                                        value={data.stock}
                                        InputProps={{
                                            endAdornment: <InputAdornment position='end'>{data.um}</InputAdornment>
                                        }}
                                    />
                                    <InputError message={errors.stock} className="mt-2" />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        id="min_stock"
                                        name="min_stock"
                                        margin='normal'
                                        type='number'
                                        label="Min. Stock"
                                        variant="outlined"
                                        InputProps={{
                                            endAdornment: <InputAdornment position='end'>{data.um}</InputAdornment>
                                        }}
                                        value={data.min_stock}
                                        onChange={(e) => setData('min_stock', e.target.value)}
                                    />
                                    <InputError message={errors.min_stock} className="mt-2" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                multiline
                                id="description"
                                name="description"
                                margin='normal'
                                label="Descripcion del Producto"
                                variant="outlined"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                            />
                            <InputError message={errors.description} className="mt-2" />
                        </Grid>
                        <Grid item xs={12} sx={{ m: 1,position: 'relative'}} display="flex" justifyContent="end" >
                            <Box sx={{ m: 1,position: 'relative'}}>
                                <Button disabled={loading} sx={buttonSx} type='submit' variant='contained'>
                                    GUARDAR
                                </Button>
                                {loading && (
                                    <CircularProgress
                                        size={24}
                                        sx={{
                                        color: green[500],
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        marginTop: '-12px',
                                        marginLeft: '-12px',
                                        }}
                                    />
                                )}
                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
