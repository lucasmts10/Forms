import React, { useEffect } from 'react';

import * as Yup from 'yup';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { Grid, Typography } from '@material-ui/core';


import Textfield from '../../../controls/Textfield';
import Select from '../../../controls/Select';

import ufList from '../../../JSON/ufList.json';

import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';



export const COMARCA_STATE = {
    ufComarca: '',
    cidadeComarca: ''
};

export const COMARCA_VALIDATION = Yup.object().shape({
    ufComarca: Yup.string().required('Campo obrigatório'),
    cidadeComarca: Yup.string().required('Campo obrigatório'),
});

const DadosComarca = () => {

    return (
        <Grid container spacing={2}>
            {/* <Grid item xs={12}>
                <Typography>
                    Dados da Comarca:
                </Typography>
            </Grid> */}

            <Grid item xs={12} sm={6} md={3}>
                {/* <Autocomplete
                    autoSelect
                    name="ufComarca"
                    label="UF"
                    placeholder="UF"
                    autoFocus
                    noOptionsText='Sem opções'
                    options={ufList}
                    renderInput={(params) => */}
                <Textfield
                    // {...params}
                    autoFocus
                    name="ufComarca"
                    label="UF"
                    placeholder="UF"
                // />}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                {/* <Autocomplete
                    autoSelect
                    name="cidadeComarca"
                    label="Cidade"
                    placeholder="Cidade"
                    noOptionsText='Sem opções'
                    getOptionLabel={(option) => option}
                    renderOption={(option, { inputValue }) => {
                        const matches = match(`${option}`, inputValue);
                        const parts = parse(`${option}`, matches);
                        return (
                            <div>
                                {parts.map((part, index) => (
                                    <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                                        {part.text}
                                    </span>
                                ))}
                            </div>
                        )
                    }}
                    renderInput={(params) => */}
                <Textfield
                    // {...params}
                    name="cidadeComarca"
                    label="Cidade:"
                    placeholder="Cidade"
                    inputProps={{
                        // ...params.inputProps,
                        style: { height: 17 },
                    }}
                // />}
                />
            </Grid>
        </Grid>
    );
};

export default DadosComarca;