import HeaderModule from '@/Components/HeaderModule';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, useForm } from '@inertiajs/react';
import TableCell from '@mui/material/TableCell';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Collapse, IconButton, Pagination, Table, TableBody, TableHead, TableRow, Typography } from '@mui/material';
import { Fragment, useState } from 'react';
import DeleteModal from '@/Components/DeleteModal';
import CustomDetail from './partials/CustomDetail';

const SyledTableCell = ({children, ...props}) => (<TableCell sx={{fontWeight: 700}} {...props}>{children}</TableCell>)
const CustomTableRow = ({offer}) => {
    const [open, setOpen] = useState(false);
    let remove = useForm({}).delete;

    const handleDelete = () => {
        remove(route('offer.destroy', { offer }))
    }

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
                <TableCell >{offer.name}</TableCell>
                <TableCell align='center' className='w-28'>
                    <Box>
                        <Link href={route('offer.edit', offer)}>
                        <IconButton size='small'>
                            <EditIcon className='text-orange-400'/>
                        </IconButton>
                        </Link>
                        <DeleteModal
                            body="Seguro desea eliminar esta oferta?"
                            icon={(<DeleteIcon className='text-red-300'/>)}
                            onAccept={handleDelete}
                        />
                    </Box>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <CustomDetail offer={offer} marginY={2}/>
                </Collapse>
                </TableCell>
            </TableRow>
        </Fragment>
    )
}

export default function List({ auth, pagination, ...props }) {
    const title = "OFERTAS";
    const offers = Array.from(pagination.data || []);

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
                                <SyledTableCell>OFERTA</SyledTableCell>
                                <TableCell align='center'>
                                    <Link href={route('offer.create')}>
                                    <Button variant='outlined' startIcon={<AddIcon />}>
                                        Nueva
                                    </Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { offers.map((offer) => (<CustomTableRow key={offer.id} offer={offer}/>)) }
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
