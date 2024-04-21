import { Fragment, useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import TableCell from '@mui/material/TableCell';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import DeleteModal from '@/Components/DeleteModal';
import { Box, Collapse, IconButton, Switch, Table, TableBody, TableRow, TextField, Typography } from '@mui/material';

const SyledTableCell = ({children, ...props}) => (<TableCell sx={{fontWeight: 700}} {...props}>{children}</TableCell>)

const useStyles = (theme) => ({
    container: {
        maxWidth: '160px',
        margin: '0 auto'
    },
    image: {
        width: '100%'
    }
});

export default function CustomTableRow ({product}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    let remove = useForm({}).delete;

    const handleDelete = () => {
        remove(route('product.destroy', { product }))
    }

    return (
        <Fragment>
            <TableRow  sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell >{product.name}</TableCell>
                <TableCell className='pr-0'>
                    {
                        product.image &&
                        <Box className="max-w-14">{<img className='w-full' src={`/storage/${product.image?.url}`}/>}</Box>
                    }
                </TableCell>
                <TableCell className="hidden sm:table-cell">{product.category.category_name}</TableCell>
                <TableCell className="hidden sm:table-cell">
                    { product.stock }{ product.um }
                    { product.stock < product.min_stock && <NotificationsActiveIcon color={"warning"}/> }
                </TableCell>
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
        </Fragment>
    )
}
