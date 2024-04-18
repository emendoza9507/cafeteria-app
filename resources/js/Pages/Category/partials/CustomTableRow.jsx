import { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { Fragment } from 'react';
import TableCell from '@mui/material/TableCell';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteModal from '@/Components/DeleteModal';
import { Box, Collapse, IconButton, Switch, Table, TableBody, TableRow, Typography } from '@mui/material';

const SyledTableCell = ({children, ...props}) => (<TableCell sx={{fontWeight: 700}} {...props}>{children}</TableCell>)

export default function CustomTableRow({category}) {
    let remove = useForm({}).delete;

    const handleDelete = () => {
        remove(route('category.destroy', { category }))
    }

    const detailOptions = [
        {
            label: 'NOMBRE',
            value: category.category_name
        }
    ];

    return (
        <Fragment>
            <TableRow  sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell >{category.category_name}</TableCell>
                <TableCell align='center' className='w-28'>
                    <Box>
                        <Link href={route('category.edit', category)}>
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
