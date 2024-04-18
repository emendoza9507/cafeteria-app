import HeaderModule from '@/Components/HeaderModule';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, useForm } from '@inertiajs/react';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import { Autocomplete, Box, CircularProgress, FormControlLabel, Grid, MenuItem, Snackbar, Switch, TextField  } from '@mui/material';
import InputError from '@/Components/InputError';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { green } from '@mui/material/colors';
import PhoneInput from './partials/PhoneInput';

export default function Edit({ auth, category, flash, ...props }) {
    const title = "EDITAR PROVEEDOR";
    const [openSnack, setOpenSnack] = useState(flash ? (flash.message ? true : false) : false);
    const message = flash ? (flash.message ? flash.message : null) : null

    const [suppliers, setSuppliers] = useState([]);

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const { data, errors, put, reset, setData } = useForm({
        id: supplier.id,
        category_name: category.category_name,
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
        put(route('supplier.update', { supplier }), {
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
        axios.get(route('supplier.resource.list'))
        .then(({data}) => {
            setSuppliers(data.data.map((option) => {
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
                                options={suppliers.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
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
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                margin='normal'
                                label="Correo Electronico"
                                variant="outlined"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </Grid>
                        <Grid item xs={12} container display="flex" justifyContent="space-around">
                            <Grid item xs container direction="row" spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <TextField
                                        fullWidth
                                        margin='normal'
                                        label="Estado"
                                        variant="outlined"
                                        value={data.state}
                                        onChange={(e) => setData('state', e.target.value)}
                                    />
                                    <InputError message={errors.state} className="mt-2" />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField
                                        fullWidth
                                        margin='normal'
                                        label="Ciudad"
                                        variant="outlined"
                                        value={data.city}
                                        onChange={(e) => setData('city', e.target.value)}
                                    />
                                    <InputError message={errors.city} className="mt-2" />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField
                                        fullWidth
                                        margin='normal'
                                        label="Calle"
                                        variant="outlined"
                                        value={data.street}
                                        onChange={(e) => setData('street', e.target.value)}
                                    />
                                    <InputError message={errors.street} className="mt-2" />
                                </Grid >
                            </Grid>
                        </Grid>
                        <Grid item xs={12} container display="flex" justifyContent="space-around">
                            <Grid item xs container direction="row" spacing={2}>
                                <Grid item xs={6}>
                                    <PhoneInput value={data.phone_numbers} onChange={phones => setData('phone_numbers', phones)}/>
                                    <InputError message={errors.stock} className="mt-2" />
                                </Grid>
                                <Grid item xs={6} display="flex" alignItems="center">
                                    <Box>
                                        <FormControlLabel control={<Switch defaultChecked onChange={e => setData('active', !data.active)} />} label="Activo" />
                                        <InputError message={errors.min_stock} className="mt-2" />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                multiline
                                margin='normal'
                                label="Descripcion del Producto"
                                variant="outlined"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                            />
                            <InputError message={errors.description} className="mt-2" />
                        </Grid>
                        <Grid item xs={12} display="flex" justifyContent="end" >
                            <Button disabled={loading} type='submit' variant='contained'>
                                GUARDAR
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
