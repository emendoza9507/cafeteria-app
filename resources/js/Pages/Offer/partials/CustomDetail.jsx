import { Folder } from "@mui/icons-material";
import { Avatar, Box, Divider, Grid, IconButton, List, ListItemAvatar, ListSubheader, Typography } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InventoryIcon from '@mui/icons-material/Inventory';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { FixedSizeList } from 'react-window';
import { Link } from "@inertiajs/react";

const renderRow = (props) => {
    const { index, data, style } = props;
    const product = data[index];

    return (
        <ListItem key={product.id} style={style} disablePadding={true}
            secondaryAction={
                <Link href={route('product.show', product)}>
                <IconButton edge="end" aria-label="delete">
                    <VisibilityIcon />
                </IconButton>
                </Link>
            }
        >
            <ListItemAvatar>
                <Avatar>
                    {product.image ? <img src={`/storage/${product.image.url}`}/> : <InventoryIcon/>}
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={product.name}
                secondary={String(product.pivot.product_count) + product.um}
            />
        </ListItem>
    )
}
export default function CustomDetail ({offer, ...props}) {
    const inLost = offer.product_cost > offer.sale_price;

    return (
        <Box {...props} className="bg-gray-100 p-2">
            <Typography textTransform="uppercase" variant="h6" gutterBottom component="div">
                {offer.name}
            </Typography>
            <Divider/>
            <Grid container columns={12} rowSpacing={2} marginTop={1}>
                <Grid item xs={12} md={6} container columns={12} direction="column" spacing={1} >
                    <Grid item>
                        <ListItemText sx={{'& > span': { textTransform: 'uppercase' }}} secondary={offer.description} primary="descripcion"/>
                    </Grid>
                    <Grid item>
                        <ListItemText
                            sx={{'& > span': { textTransform: 'uppercase' }}}
                            secondary={offer.product_cost + '$'}
                            primary="Precio por productos"/>
                        <ListItemText
                            sx={{'& > span': { textTransform: 'uppercase' }, '& > p': { color: inLost ? 'red':'green' }}}
                            secondary={offer.sale_price + '$'}
                            primary="Precio"/>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography textTransform="uppercase" variant="subtitle1" gutterBottom component="div">
                        PRODUCTOS
                    </Typography>
                    <Divider className="mb-2"/>
                    <FixedSizeList
                        height={300}
                        width={'100%'}
                        itemSize={46}
                        itemCount={offer.products.length}
                        itemData={offer.products}
                        overscanCount={5}
                        style={{marginBottom: '5px'}}
                        className="hideScroll"
                    >
                        {renderRow}
                    </FixedSizeList>
                </Grid>
            </Grid>
        </Box>
    )
}
