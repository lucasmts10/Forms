import React from 'react';
import { TextField } from '@material-ui/core';
import { useField } from 'formik';

const TextfieldWrapper = ({
    name,
    ...otherProps
}) => {
    const [field, mata] = useField(name);

    const configTextfield = {
        ...field,
        ...otherProps,
        fullWidth: true,
        margin: "normal",
        style: {
            margin: 8,
        },
        variant: 'outlined',
        InputLabelProps: {
            shrink: true
        }
    };

    if (mata && mata.touched && mata.error) {
        configTextfield.error = true;
        configTextfield.helperText = mata.error;
    }


    return (
        <TextField {...configTextfield} />
    );
};

export default TextfieldWrapper;