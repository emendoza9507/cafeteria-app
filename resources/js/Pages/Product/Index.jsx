import HeaderModule from '@/Components/HeaderModule';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, useForm } from '@inertiajs/react';
import TableCell from '@mui/material/TableCell';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Grid, Pagination, Table, TableBody, TableHead, TableRow, TextField } from '@mui/material';
import CustomTableRow from './partials/CustomTableRow';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const SyledTableCell = ({children, ...props}) => (<TableCell sx={{fontWeight: 700}} {...props}>{children}</TableCell>)


const SearchBox = ({onChange, ...props}) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
        onChange(e.target.value)
    }

    return (
        <Grid container columns={12} justifyContent="center" {...props}>
            <Grid item xs={12} sm={6} paddingX={2}>
                <TextField
                    fullWidth
                    variant='outlined'
                    size='small'
                    value={value}
                    onChange={handleChange}
                    InputProps={{
                        startAdornment: <SearchIcon/>
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default function ProductList({ auth, pagination, ...props }) {
    const title = "PRODUCTOS";
    const products = Array.from(pagination.data || []);
    const [filteredProducts, setFilterdProducts] = useState(products)

    const handlePageChange = (e, p) => {
        router.get(pagination.links[p].url)
    }

    const handleFilter = (filter) => {
        const filtered = products.filter(p => {
            const query = p.name.toLowerCase().includes(filter.toLocaleLowerCase()) ||
            p.category.category_name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())

            return query
        })
        setFilterdProducts(filtered)
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            {...props}
        >

            <Head title={title} />

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                <HeaderModule title={title}/>

                <SearchBox className="mb-2" onChange={handleFilter}/>

                <Box className="bg-white overflow-hidden overflow-y-auto shadow-sm hideScroll" sx={{maxHeight: 600, overflow: 'scroll'}}>
                    <Table>
                        <TableHead className='sticky top-0 bg-gray-300 z-10'>
                            <TableRow >
                                <SyledTableCell></SyledTableCell>
                                <SyledTableCell>NOMBRE</SyledTableCell>
                                <SyledTableCell className="hidden sm:table-cell">CATEGORIA</SyledTableCell>
                                <SyledTableCell className="hidden sm:table-cell">STOCK</SyledTableCell>
                                <SyledTableCell className="hidden sm:table-cell">ACTIVE</SyledTableCell>
                                <TableCell align='center'>
                                    <Link href={route('product.create')}>
                                    <Button variant='outlined' startIcon={<AddIcon />}>
                                        Nuevo
                                    </Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { filteredProducts.map((product) => (<CustomTableRow key={product.id} product={product}/>)) }
                        </TableBody>
                    </Table>
                </Box>
                <Box className="flex justify-center">
                    { pagination.last_page > 1 &&
                        <Pagination
                            page={pagination.current_page}
                            onChange={handlePageChange}
                            className='mt-2'
                            count={pagination.last_page}
                            variant="outlined"
                            color="primary"
                        />
                    }
                </Box>
            </div>
        </AuthenticatedLayout>
    );
}
