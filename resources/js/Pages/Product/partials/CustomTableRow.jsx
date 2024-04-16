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
import { makeStyles } from '@mui/styles';

const SyledTableCell = ({children, ...props}) => (<TableCell sx={{fontWeight: 700}} {...props}>{children}</TableCell>)

const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: '160px',
        margin: '0 auto'
    },
    image: {
        width: '100%'
    }
}));

export default function CustomTableRow ({product}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    let remove = useForm({}).delete;

    const handleDelete = () => {
        remove(route('product.destroy', { product }))
    }

    const detailOptions = [
        {
            label: 'NOMBRE',
            value: product.name
        },
        {
            label: 'CATEGORIA',
            value: product.category.category_name
        },
        {
            label: 'STOCK',
            value: `${product.stock} ${product.um}`
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
            label: 'IMAGEN',
            value: (<Box className={classes.container}>{product.image && <img className={classes.image} src={`/storage/${product.image?.url}`}/>}</Box>)
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
