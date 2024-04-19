import { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { Fragment } from 'react';
import TableCell from '@mui/material/TableCell';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteModal from '@/Components/DeleteModal';
import { Box, Collapse, IconButton, Switch, Table, TableBody, TableRow, Typography } from '@mui/material';

const SyledTableCell = ({children, ...props}) => (<TableCell sx={{fontWeight: 700}} {...props}>{children}</TableCell>)

export default function CustomTableRow({supplier}) {
    const [open, setOpen] = useState(false);
    let remove = useForm({}).delete;
    const phoneNumbers = JSON.parse(supplier.phone_numbers);

    const handleDelete = () => {
        remove(route('supplier.destroy', { supplier }))
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
                        <Link href={route('supplier.show', supplier)}>
                        <IconButton size="small">
                            <VisibilityIcon/>
                        </IconButton>
                        </Link>
                        <Link href={route('supplier.edit', supplier)}>
                        <IconButton size='small'>
                            <EditIcon className='text-orange-400' color='action'/>
                        </IconButton>
                        </Link>
                        <DeleteModal
                            body="Seguro desea eliminar este proveedor?"
                            icon={(<DeleteIcon className='text-red-300'/>)}
                            onAccept={handleDelete}
                        />
                    </Box>
                </TableCell>
            </TableRow>
        </Fragment>
    )
}
