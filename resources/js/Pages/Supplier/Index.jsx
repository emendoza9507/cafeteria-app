import HeaderModule from '@/Components/HeaderModule';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, useForm } from '@inertiajs/react';
import TableCell from '@mui/material/TableCell';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Pagination, Table, TableBody, TableHead, TableRow } from '@mui/material';
import CustomTableRow from './partials/CustomTableRow';

const SyledTableCell = ({children, ...props}) => (<TableCell sx={{fontWeight: 700}} {...props}>{children}</TableCell>)

export default function ProveedorList({ auth, pagination, ...props }) {
    const title = "PROVEEDORES";
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
                                <SyledTableCell className="hidden sm:table-cell">EMAIL</SyledTableCell>
                                <SyledTableCell className="hidden sm:table-cell">ESTADO</SyledTableCell>
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
