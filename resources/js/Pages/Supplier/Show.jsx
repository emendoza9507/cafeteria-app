
import HeaderModule from '@/Components/HeaderModule';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import { Box, Button, CardActions, CardContent, Grid, Typography } from '@mui/material';

export default function Show({ auth, supplier, ...props }) {
    const title = "PROVEEDOR";


    return (
        <AuthenticatedLayout
            user={auth.user}
            {...props}
        >

            <Head title={title} />

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                <HeaderModule title={title}/>

                <Box className="bg-white overflow-hidden overflow-y-auto shadow-sm hideScroll" sx={{maxHeight: 600, overflow: 'scroll'}}>
                    <Grid container display="flex" justifyContent="center">
                        <Grid className={supplier.active ? 'bg-green-100' : 'bg-gray-100'} item xs={12} md={6}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Detalle
                                </Typography>
                                <Typography variant="h6" component="div">
                                    {supplier.name}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {supplier.email}
                                </Typography>
                                <Typography variant="body2">
                                    "{supplier.description}"
                                </Typography>
                                <Typography className='mt-2' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    <PlaceIcon fontSize='small'/> Dirección
                                </Typography>
                                <Typography variant='subtitle1'>
                                    {supplier.city} {supplier.street},{supplier.state}
                                </Typography>
                                <Typography className='mt-2' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    <CallIcon fontSize='small'/> Telefonos
                                </Typography>
                                <table>
                                    <tbody>
                                    {
                                    supplier.phone_numbers && Object.entries(JSON.parse(supplier.phone_numbers)).map(([key, value]) => (
                                        <tr key={key + value}>
                                            <th className='pr-2'>{String(key).toUpperCase()}:</th>
                                            <td>{value}</td>
                                        </tr>
                                    ))
                                    }
                                    </tbody>
                                </table>
                            </CardContent>
                            <CardActions>
                                <Link href={route('supplier.edit', supplier)}>
                                <Button size="small">EDITAR</Button>
                                </Link>
                            </CardActions>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </AuthenticatedLayout>
    );
}
