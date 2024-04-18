import HeaderModule from '@/Components/HeaderModule';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Button from '@mui/material/Button';
import {  Grid, TextField  } from '@mui/material';
import InputError from '@/Components/InputError';
import { useEffect } from 'react';
import axios from 'axios';


export default function Create({ auth, ...props }) {
    const title = "NUEVA CATEGORIA";
    const { data, errors, post, reset, setData } = useForm({
        category_name: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('category.store'), {
            onSuccess: () => reset()
        });
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            {...props}
        >

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
                                CREAR
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
