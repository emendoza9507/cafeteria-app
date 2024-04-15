import HeaderModule from '@/Components/HeaderModule';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Button from '@mui/material/Button';
import { Box, Grid, TextField  } from '@mui/material';
import InputError from '@/Components/InputError';
import { useEffect } from 'react';


export default function Create({ auth }) {
    const title = "NUEVA MESA";
    const { data, errors, post, setData } = useForm({
        name: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('table.store'));
    }

    useEffect(() => {
        console.log(errors)
    }, [])

    return (
        <AuthenticatedLayout
            user={auth.user}
        >

            <Head title={title} />

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                <HeaderModule title={title}/>

                <div className="bg-white overflow-hidden shadow-sm">
                    <Grid component='form' onSubmit={handleSubmit} container direction="column" alignContent="center" spacing={2} className='px-4 py-6'>
                        <Grid item>
                            <TextField
                                id="name"
                                name="name"
                                margin='normal'
                                label="Nombre"
                                variant="outlined"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </Grid>
                        <Grid item alignSelf="end">
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
