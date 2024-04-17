import HeaderModule from '@/Components/HeaderModule';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import { Autocomplete, Box, FormControlLabel, Grid, IconButton, MenuItem, Switch, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography  } from '@mui/material';
import InputError from '@/Components/InputError';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Add, Delete } from '@mui/icons-material';

const PhoneInput = ({onChange}) => {
    const [phones, setPhones] = useState([]);
    const { data, setData, reset } = useForm({
        label: '',
        number: ''
    });

    useEffect(() => {
        dispatchChange()
    }, [phones])

    const dispatchChange = () => {
        if(!onChange) return

        const phonesObject = {};

        phones.forEach(phone => {
            phonesObject[phone.label] = phone.number
        });

        onChange(phonesObject);
    }

    const handleClickAddPhone = () => {
        if(data.label == '' || data.number == '') return

        const newPhone = {label: data.label, number: data.number}

        const phoneExist = phones.find((phone) => phone.label.toUpperCase() == data.label.toUpperCase() ||
            phone.number.toUpperCase() == data.number.toUpperCase()
        )

        if(!phoneExist) {
            setPhones(phones => {
                return [...phones, newPhone]
            })

            reset()
        }
    }

    const handleDeletePhone = (phone) => {
        return () => {
            setPhones((phones) => {
                return [...phones.filter(p => p != phone)]
            })
        }
    }

    return (
        <Table size='small'>
            <TableHead>
                <TableRow>
                    <TableCell padding='none' colSpan={3}>
                        <Typography variant='subtitle1'>
                            Telefonos
                        </Typography>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell padding='none'>
                        <TextField
                            fullWidth
                            label="Etiqueta"
                            variant='standard'
                            size='small'
                            value={data.label}
                            onChange={e => setData('label', e.target.value)}
                        />
                    </TableCell>
                    <TableCell padding='none'>
                        <TextField
                            fullWidth
                            label="Telefono"
                            variant='standard'
                            size='small'
                            value={data.number}
                            onChange={e => setData('number', e.target.value)}
                        />
                    </TableCell>
                    <TableCell padding='none'>
                        <Button startIcon={<Add/>} onClick={handleClickAddPhone}>
                            Agregar
                        </Button>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
                phones.map(phone => (
                    <TableRow>
                        <TableCell padding='none'>
                            {phone.label}
                        </TableCell>
                        <TableCell padding='none'>
                            {phone.number}
                        </TableCell>
                        <TableCell padding='none'>
                            <IconButton onClick={handleDeletePhone(phone)}>
                                <Delete/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))
            }
            </TableBody>
        </Table>
    )
}

export default function Create({ auth, ...props }) {
    const title = "NUEVO PROVEEDOR";
    const [suppliers, setSuppliers] = useState([]);

    const { data, errors, post, reset, setData } = useForm({
        name: '',
        email: '',
        description: '',
        city: '',
        street: '',
        state: '',
        phone_numbers: '',
        active: true
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('supplier.store'), {
            onSuccess: () => reset()
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
                                    <PhoneInput onChange={phones => setData('phone_numbers', phones)}/>
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
