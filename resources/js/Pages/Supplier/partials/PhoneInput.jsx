import { useForm } from "@inertiajs/react";
import { Add, Delete } from "@mui/icons-material";
import { Button, IconButton, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

export default function PhoneInput({value, onChange}) {
    const [phones, setPhones] = useState([]);
    const { data, setData, reset } = useForm({
        label: '',
        number: ''
    });

    useEffect(() => {
        if(value) {
            const tempPhones = []
            Object.entries(value).forEach(([key, value]) => {
                tempPhones.push({label: key, number: value});
            })
            setPhones(tempPhones)
        }
    }, [])

    useEffect(() => {
        dispatchChange()
    }, [phones])

    const dispatchChange = () => {
        if(!onChange) return

        const phonesObject = {};

        phones.forEach(phone => {
            phonesObject[phone.label] = phone.number
        });

        onChange(phonesObject);
    }

    const handleClickAddPhone = () => {
        if(data.label == '' || data.number == '') return

        const newPhone = {label: data.label, number: data.number}

        const phoneExist = phones.find((phone) => phone.label.toUpperCase() == data.label.toUpperCase() ||
            phone.number.toUpperCase() == data.number.toUpperCase()
        )

        if(!phoneExist) {
            setPhones(phones => {
                return [...phones, newPhone]
            })

            reset()
        }
    }

    const handleDeletePhone = (phone) => {
        return () => {
            setPhones((phones) => {
                return [...phones.filter(p => p != phone)]
            })
        }
    }

    return (
        <Table size='small'>
            <TableHead>
                <TableRow>
                    <TableCell padding='none' colSpan={3}>
                        <Typography variant='subtitle1'>
                            Telefonos
                        </Typography>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell padding='none'>
                        <TextField
                            fullWidth
                            label="Etiqueta"
                            variant='standard'
                            size='small'
                            value={data.label}
                            onChange={e => setData('label', e.target.value)}
                        />
                    </TableCell>
                    <TableCell padding='none'>
                        <TextField
                            fullWidth
                            label="Telefono"
                            variant='standard'
                            size='small'
                            value={data.number}
                            onChange={e => setData('number', e.target.value)}
                        />
                    </TableCell>
                    <TableCell padding='none'>
                        <Button startIcon={<Add/>} onClick={handleClickAddPhone}>
                            Agregar
                        </Button>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
                phones.map((phone, index) => (
                    <TableRow key={index}>
                        <TableCell padding='none'>
                            {phone.label}
                        </TableCell>
                        <TableCell padding='none'>
                            {phone.number}
                        </TableCell>
                        <TableCell padding='none'>
                            <IconButton onClick={handleDeletePhone(phone)}>
                                <Delete/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))
            }
            </TableBody>
        </Table>
    )
}
