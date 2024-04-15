import HeaderModule from '@/Components/HeaderModule';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, useForm } from '@inertiajs/react';
import TableCell from '@mui/material/TableCell';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Collapse, IconButton, Pagination, Switch, Table, TableBody, TableHead, TableRow, Typography } from '@mui/material';
import { Fragment, useState } from 'react';
import DeleteModal from '@/Components/DeleteModal';
import { useEffect } from 'react';
import axios from 'axios';

const SyledTableCell = ({children, ...props}) => (<TableCell sx={{fontWeight: 700}} {...props}>{children}</TableCell>)
const CustomTableRow = ({product}) => {
    const [open, setOpen] = useState(false);
    let remove = useForm({}).delete;

    const handleDelete = () => {
        remove(route('product.destroy', { product }))
    }

    const detailOptions = [
        {
            label: 'CATEGORIA',
            value: product.category.category_name
        },
        {
            label: 'STOCK',
            value: `${product.stock}${product.um}`
        },
        {
            label: 'MIN. STOCK',
            value: product.min_stock
        },
        {
            label: 'PRECIO/VENTA',
            value: `$${product.sale_price}`
        },
        {
            label: 'PRECIO/COMPRA',
            value: `$${product.purchase_price}`
        },
        {
            label: 'DESCRIPCION',
            value: product.description
        },
        {
            label: 'ESTADO',
            value: (<Switch
                disabled
                checked={Boolean(product.active)}
                inputProps={{ 'aria-label': 'controlled' }}
            />)
        }
    ];

    return (
        <Fragment>
            <TableRow  sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell className='w-10'>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell >{product.name}</TableCell>
                <TableCell className="hidden sm:table-cell">{product.category.category_name}</TableCell>
                <TableCell className="hidden sm:table-cell">{product.stock}</TableCell>
                <TableCell className="hidden sm:table-cell">
                    <Switch
                        disabled
                        checked={Boolean(product.active)}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </TableCell>
                <TableCell align='center' className='w-28'>
                    <Box>
                        <Link href={route('product.edit', product)}>
                        <IconButton size='small'>
                            <EditIcon className='text-orange-400'/>
                        </IconButton>
                        </Link>
                        <DeleteModal
                            body="Seguro desea eliminar este producto?"
                            icon={(<DeleteIcon className='text-red-300'/>)}
                            onAccept={handleDelete}
                        />
                    </Box>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                        <Typography variant='subtitle1' fontWeight={600} align='center' className='uppercase tracking-widest'>
                            Detalles
                        </Typography>
                        <Table size="small" aria-label="purchases">
                            <TableBody>
                                {
                                    (detailOptions).map(({label, value}, index) => (
                                        <TableRow key={index} className='hover:bg-gray-100'>
                                            <SyledTableCell className="border-none" align="center">
                                                {label}
                                            </SyledTableCell>
                                            <TableCell className="border-none" align="center" width="50%">
                                                {value}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </Box>
                </Collapse>
                </TableCell>
            </TableRow>
        </Fragment>
    )
}

export default function ProductList({ auth, pagination, ...props }) {
    const title = "PRODUCTOS";
    const products = Array.from(pagination.data || []);

    const handlePageChange = (e, p) => {
        router.get(pagination.links[p].url)
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            {...props}
        >

            <Head title={title} />

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                <HeaderModule title={title}/>

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
                            { products.map((product) => (<CustomTableRow key={product.id} product={product}/>)) }
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
