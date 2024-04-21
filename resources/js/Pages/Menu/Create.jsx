import HeaderModule from '@/Components/HeaderModule';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Button from '@mui/material/Button';
import { Box, Grid, InputAdornment, TextField  } from '@mui/material';
import InputError from '@/Components/InputError';
import { useEffect } from 'react';
import TodayIcon from '@mui/icons-material/Today';


export default function Create({ auth }) {
    const title = "NUEVO MENU";
    const { data, errors, post, setData } = useForm({
        name: '',
        date: '',
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('menu.store'));
    };

    useEffect(() => {

    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
        >

            <Head title={title} />

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                <HeaderModule title={title}/>

                <div className="bg-white overflow-hidden shadow-sm">
                    <Grid component='form' columns={12} onSubmit={handleSubmit} container  spacing={2} className='px-4 py-6'>
                        <Grid item xs={12} >
                            <TextField
                                fullWidth
                                margin='normal'
                                label="Nombre"
                                variant="outlined"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                fullWidth
                                margin='normal'
                                label="Precio de Venta"
                                type='date'
                                variant="outlined"
                                InputProps={{
                                    startAdornment:
                                    (
                                        <InputAdornment  position='start'>
                                            <TodayIcon/>
                                        </InputAdornment>
                                    )
                                }}
                                value={data.sale_price}
                                onChange={(e) => setData('sale_price', e.target.value)}
                            />
                            <InputError message={errors.sale_price} className="mt-2" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                multiline
                                margin='normal'
                                label="Descripcion"
                                variant="outlined"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                            />
                            <InputError message={errors.description} className="mt-2" />
                        </Grid>
                        <Grid item xs={12} display="flex" justifyContent="end" >
                            <Button type='submit' variant='contained'>
                                CREAR
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
