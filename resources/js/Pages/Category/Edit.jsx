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
        id: category.id,
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
                             <TextField
                                    fullWidth
                                    id="name"
                                    name="name"
                                    margin='normal'
                                    label="Nombre de la Categoria"
                                    variant="outlined"
                                    value={data.category_name}
                                    onChange={(e) => setData('category_name', e.target.value)}
                                />
                            <InputError message={errors.category_name} className="mt-2" />
                        </Grid>
                        <Grid item xs={12} display="flex" justifyContent="end" >
                            <Button type='submit' variant='contained'>
                                GUARDAR
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
