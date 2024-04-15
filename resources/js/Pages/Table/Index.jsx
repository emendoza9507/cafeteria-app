import HeaderModule from '@/Components/HeaderModule';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import TableCell from '@mui/material/TableCell';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Collapse, IconButton, Table, TableBody, TableHead, TableRow, Typography } from '@mui/material';
import { Fragment, useState } from 'react';
import DeleteModal from '@/Components/DeleteModal';
import { useEffect } from 'react';
import axios from 'axios';

const QrCode = ({table}) => {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get(route('table.qr_gen', {table}))
        .then(({data}) => setData(data))
    }, [])

    return (
        <img  src={data}/>
    )
}
const SyledTableCell = ({children, ...props}) => (<TableCell sx={{fontWeight: 700}} {...props}>{children}</TableCell>)
const CustomTableRow = ({table}) => {
    const [open, setOpen] = useState(false);
    let remove = useForm({}).delete;

    const handleDelete = () => {
        remove(route('table.destroy', { table }))
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
                <TableCell >{table.name}</TableCell>
                <TableCell align='center' className='w-28'>
                    <Box>
                        <Link href={route('table.edit', table)}>
                        <IconButton size='small'>
                            <EditIcon className='text-orange-400'/>
                        </IconButton>
                        </Link>
                        <DeleteModal
                            body="Seguro desea eliminar esta mesa?"
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
                        <Typography variant="h6" gutterBottom component="div">
                            QR CODE
                        </Typography>
                        <Table size="small" aria-label="purchases">
                            <TableHead>
                            <TableRow>
                                <SyledTableCell>QR</SyledTableCell>
                                <SyledTableCell>QR_PATH</SyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <QrCode table={table}/>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {table.qr_path}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                </Collapse>
                </TableCell>
            </TableRow>
        </Fragment>
    )
}

export default function List({ auth, pagination, ...props }) {
    const title = "MESAS";
    const tables = Array.from(pagination.data || []);
    return (
        <AuthenticatedLayout
            user={auth.user}
            {...props}
        >

            <Head title={title} />

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                <HeaderModule title={title}/>

                <div className="bg-white overflow-hidden shadow-sm">
                    <Table>
                        <TableHead>
                            <TableRow >
                                <SyledTableCell></SyledTableCell>
                                <SyledTableCell>NOMBRE</SyledTableCell>
                                <TableCell align='center'>
                                    <Link href={route('table.create')}>
                                    <Button variant='outlined' startIcon={<AddIcon />}>
                                        Nueva
                                    </Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { tables.map((table) => (<CustomTableRow key={table.id} table={table}/>)) }
                        </TableBody>
                    </Table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
