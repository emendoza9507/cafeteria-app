import { useState } from 'react';
import HeaderModule from '@/Components/HeaderModule';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, useForm } from '@inertiajs/react';
import TableCell from '@mui/material/TableCell';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Pagination, Table, TableBody, TableHead, TableRow } from '@mui/material';
import CustomTableRow from './partials/CustomTableRow';
import SearchBox from '@/Components/SearchBox';

const SyledTableCell = ({children, ...props}) => (<TableCell sx={{fontWeight: 700}} {...props}>{children}</TableCell>)

export default function ProveedorList({ auth, pagination, ...props }) {
    const title = "PROVEEDORES";
    const suppliers = Array.from(pagination.data || []);
    const [filteredSuppliers, setFilterdSuppliers] = useState(suppliers)

    const handlePageChange = (e, p) => {
        router.get(pagination.links[p].url)
    }

    const handleFilter = (filter) => {
        const filtered = suppliers.filter(s => {
            const query = s.name.toLowerCase().includes(filter.toLocaleLowerCase()) ||
            s.email.toLocaleLowerCase().includes(filter.toLocaleLowerCase())

            return query
        })
        setFilterdSuppliers(filtered)
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
                                <SyledTableCell className="hidden sm:table-cell">EMAIL</SyledTableCell>
                                <SyledTableCell className="hidden sm:table-cell">ESTADO</SyledTableCell>
                                <TableCell align='center'>
                                    <Link href={route('supplier.create')}>
                                    <Button variant='outlined' startIcon={<AddIcon />}>
                                        Nuevo
                                    </Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { filteredSuppliers.map((supplier) => (<CustomTableRow key={supplier.id} supplier={supplier}/>)) }
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
