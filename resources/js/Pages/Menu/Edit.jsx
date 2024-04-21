import HeaderModule from '@/Components/HeaderModule';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Button from '@mui/material/Button';
import { Box, Grid, InputAdornment, TextField  } from '@mui/material';
import InputError from '@/Components/InputError';
import { useEffect } from 'react';


export default function Edit({ auth, offer, products}) {
    const title = "EDITAR OFERTA";
    const { data, errors, put, setData } = useForm({
        id: offer.id,
        name: offer.name,
        sale_price: offer.sale_price,
        products: []
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('offer.update', offer), {
            onSuccess(d) {
                console.log(d)
            },

            onError(e) {
                console.log(e)
            }
        })
    };

    const handleProductChange = (options) => {
        setData('products', options.map(({product, product_count}) => {
            return { id: product.id, product_count };
        }))
    }

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
                        <Grid item xs={12}>
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
