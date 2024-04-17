import { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { Fragment } from 'react';
import TableCell from '@mui/material/TableCell';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DeleteModal from '@/Components/DeleteModal';
import { Box, Collapse, IconButton, Switch, Table, TableBody, TableRow, Typography } from '@mui/material';

const SyledTableCell = ({children, ...props}) => (<TableCell sx={{fontWeight: 700}} {...props}>{children}</TableCell>)

export default function CustomTableRow({supplier}) {
    const [open, setOpen] = useState(false);
    let remove = useForm({}).delete;
    const phoneNumbers = JSON.parse(supplier.phone_numbers);

    const handleDelete = () => {
        remove(route('product.destroy', { product }))
    }

    const detailOptions = [
        {
            label: 'NOMBRE',
            value: supplier.name
        },
        {
            label: 'EMAIL',
            value: supplier.email
        },
        {
            label: 'DIRECCION',
            value: `${supplier.state},${supplier.city},${supplier.street}`
        },
        {
            label: 'TELEFONOS',
            value: (
            <Table size='small'>
                <TableBody>
                {Object.entries(phoneNumbers || {}).map(([key, value]) => (
                    <TableRow key={key}>
                        <TableCell className='font-bold' component='th' align='right'>{key}</TableCell>
                        <TableCell align='center'>{value}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            )
        },
        {
            label: 'ESTADO',
            value: (<Switch
                disabled
                checked={Boolean(supplier.active)}
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
                <TableCell >{supplier.name}</TableCell>
                <TableCell className="hidden sm:table-cell">{supplier.email}</TableCell>
                <TableCell className="hidden sm:table-cell">
                    <Switch
                        disabled
                        checked={Boolean(supplier.active)}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </TableCell>
                <TableCell align='center' className='w-28'>
                    <Box>
                        <Link href={route('supplier.edit', supplier)}>
                        <IconButton size='small'>
                            <EditIcon color='action'/>
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
