import { Typography } from "@mui/material";

export default function HeaderModule({title, ...props}) {
    return (
        <Typography className="py-6 text-gray-900 text-center" letterSpacing="5px" variant="h5" {...props}>
            {title}
        </Typography>
    )
}
