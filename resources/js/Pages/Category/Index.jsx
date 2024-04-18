import { useState } from 'react';
import HeaderModule from '@/Components/HeaderModule';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, useForm } from '@inertiajs/react';
import TableCell from '@mui/material/TableCell';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Pagination, Table, TableBody, TableHead, TableRow } from '@mui/material';
import CustomTableRow from './partials/CustomTableRow';
import SearchBox from '@/Components/SearchBox';
import { useEffect } from 'react';

const SyledTableCell = ({children, ...props}) => (<TableCell sx={{fontWeight: 700}} {...props}>{children}</TableCell>)

export default function CategoryList({ auth, pagination, ...props }) {
    const title = "CATEGORIAS";
    const [categories, setCategories] = useState(pagination.data);
    const [filteredCategories, setFilterdCategories] = useState(categories)

    useEffect(() => {
        setCategories(pagination.data)
        setFilterdCategories(pagination.data)
    } , [pagination])

    const handlePageChange = (e, p) => {
        router.get(pagination.links[p].url)
    }

    const handleFilter = (filter) => {
        const filtered = categories.filter(c => {
            const query = c.name.toLowerCase().includes(filter.toLocaleLowerCase())

            return query
        })
        setFilterdCategories(filtered)
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
                                <SyledTableCell>NOMBRE</SyledTableCell>
                                <TableCell align='center'>
                                    <Link href={route('category.create')}>
                                    <Button variant='outlined' startIcon={<AddIcon />}>
                                        Nuevo
                                    </Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { filteredCategories.map((category) => (<CustomTableRow key={category.id} category={category}/>)) }
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
