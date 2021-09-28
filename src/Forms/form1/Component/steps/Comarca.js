import React, { useEffect } from 'react';

import { Formik, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';

import {
    Grid,
    Typography
} from '@material-ui/core';

import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

import Textfield from '../../../controls/Textfield';
import ufList from '../../../JSON/ufList.json';


import { useStepperContext } from '../stepperContext';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },
    modal: {
        '@media (min-width: 1119px)': {
            width: '260mm',
            padding: '30px',
            color: '#000',
            '& h1': {
                fontSize: '13pt',
                textAlign: 'center',
            },
            '& h2': {
                fontSize: '12pt',
                textAlign: 'center',
            },
            '& p': {
                fontSize: '11pt',
                textAlign: 'justify',
            },
            '& table': {
                margin: 'auto',
                textAlign: 'center',
                width: '100%'
            },
            '& table, tr, td': {
                fontSize: '11pt',
                border: '1px solid black',
                borderCollapse: 'collapse',
                padding: '0 1em',
                margin: 'auto'

            },
            '& .negrito': {
                fontWeight: 'bold'
            },
            '& .center': {
                textAlign: 'center'
            },
        },
        '@media (min-width: 1029px) and (max-width: 1118px)': {
            width: '240mm',
            padding: '30px',
            color: '#000',
            '& h1': {
                fontSize: '12pt',
                textAlign: 'center',
            },
            '& h2': {
                fontSize: '11pt',
                textAlign: 'center',
            },
            '& p': {
                fontSize: '10pt',
                textAlign: 'justify',
            },
            '& table': {
                margin: 'auto',
                textAlign: 'center',
                width: '100%'
            },
            '& table, tr, td': {
                fontSize: '10pt',
                border: '1px solid black',
                borderCollapse: 'collapse',
                padding: 'auto'

            },
            '& .negrito': {
                fontWeight: 'bold'
            },
            '& .center': {
                textAlign: 'center'
            },
        },
        '@media (min-width: 515px) and (max-width: 1028px)': {
            padding: '10px',
            color: '#000',
            '& h1': {
                fontSize: '13pt',
                textAlign: 'center',
            },
            '& h2': {
                fontSize: '12pt',
                textAlign: 'center',
            },
            '& p': {
                fontSize: '11pt',
                textAlign: 'justify',
            },
            '& table': {
                margin: '20px auto',
                textAlign: 'center',
                width: '100%'
            },
            '& table, tr, td': {
                fontSize: '11pt',
                border: '1px solid black',
                borderCollapse: 'collapse',
                padding: '0px 12px'

            },
            '& .negrito': {
                fontWeight: 'bold'
            },
            '& .center': {
                textAlign: 'center'
            },
        },
        '@media (max-width: 515px)': {
            padding: '0px',
            color: '#000',
            '& h1': {
                fontSize: '9pt',
                textAlign: 'center',
            },
            '& h2': {
                fontSize: '8pt',
                textAlign: 'center',
            },
            '& p': {
                fontSize: '7pt',
                textAlign: 'justify',
            },
            '& table': {
                margin: '20px auto',
                textAlign: 'center',
            },
            '& table, tr, td': {
                fontSize: '5pt',
                border: '1px solid black',
                borderCollapse: 'collapse',
                padding: '0px 1px',
                width: '100%'

            },
            '& .negrito': {
                fontWeight: 'bold'
            },
            '& .center': {
                textAlign: 'center'
            },
        },
    },
    buttonCenter: {
        alignItems: 'center',
    },
    paper: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
        "& .MuiInputBase-root.Mui-disabled": {
            color: 'black',
            background: '#dfdfdf73'
        }
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
    titulos: {
        padding: theme.spacing(1),
        color: theme.palette.text.primary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
    },
    buttonAdd: {
        width: '100%',
        padding: 10,
        right: 10,
    },
    buttonDel: {
        padding: 5,
        right: 25,
        position: 'absolute',
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
    },
    buttonDelClausula: {
        marginLeft: 15,
        marginBottom: 55,
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
    },
}));

const INITIAL_FORM_STATE = {
    ufComarca: '',
    cidadeComarca: ''
};

const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string()
        .required('Required'),
    lastName: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Invalid email.')
        .required('Required'),
    phone: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),
    addressLine1: Yup.string()
        .required('Required'),
    addressLine2: Yup.string(),
    city: Yup.string()
        .required('Required'),
    state: Yup.string()
        .required('Required'),
    country: Yup.string()
        .required('Required'),
    arrivealDate: Yup.date()
        .required('Required'),
    departureDate: Yup.date()
        .required('Required'),
    message: Yup.string(),
    termsOfService: Yup.boolean()
        .oneOf([true], 'The terms and conditions must be accepted.')
        .required('The terms and conditions must be accepted.'),
});

const DadosComarca = () => {
    const classes = useStyles();
    const { step4, setStep4 } = useStepperContext();
    useEffect(() => {
        console.log(step4);
    }, [step4]);

    useEffect(() => {
        let active = true;

        if (!step4.ufComarca) {
            return
        }
        (async () => {
            const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${step4.ufComarca}/municipios?orderBy=nome`);
            const cidades = await response.json();

            if (active) {
                step4.optionsCidadeComarca = Object.keys(cidades).map((key) => cidades[key].nome)
                setStep4({
                    ...step4
                })
            }
        })();
        return () => {
            active = false;
        };
    }, [step4.ufComarca]);

    // -----------------------------
    //   Tratativas para Dados de Contrato   |
    // -----------------------------
    const handleChangeContrato = (e) => {
        const { name, value } = e.target
        if (name === `ufComarca`) {
            setStep4({
                ...step4, ufComarca: value.toUpperCase(),
                cidadeComarca: '',
                cidadeComarcaErro: true,
                optionsCidadeComarca: []
            })
        }
        if (name === `cidadeComarca`) {
            setStep4({ ...step4, cidadeComarca: value })
        }
        if (name === `dataContrato`) {
            const data = value.split("-")
            let dataFormatada = (data[2] + "/" + data[1] + "/" + data[0])
            setStep4({ ...step4, dataIniContrato: dataFormatada })
        }
    }
    const handleEmpty = (e) => {
        e.preventDefault()
        const { value } = e.target
        //Valida campo vazio
        return value?.length === 0 ? true : false
    }
    const handleDataPorExtenso = (data, year = false) => {
        const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
        const dia = data.split("/")[0]
        const mes = data.split("/")[1]
        const ano = data.split("/")[2]

        return year ? `${dia} de ${meses[mes - 1]} de ${ano}` : `${dia} de ${meses[mes - 1]}`
    }

    const handleBlurContrato = (e) => {
        const { name } = e.target
        if (name === `cidadeComarca`) {
            setStep4({ ...step4, cidadeComarcaErro: handleEmpty(e) })
        }
        if (name === `dataContrato`) {
            setStep4({ ...step4, dataContratoErro: handleEmpty(e) })
        }
    }

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
                <div className={classes.formWrapper}>
                    <Formik
                        initialValues={{
                            ...INITIAL_FORM_STATE
                        }}
                        validationSchema={FORM_VALIDATION}
                        onSubmit={values => {
                            setStep4(values);
                        }}
                    >
                        <Form autoComplete="off">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography>
                                        Dados do comarca:
                                        </Typography>
                                </Grid>

                                <Grid item xs={12} sm={6} md={3}>
                                    <Autocomplete
                                        autoSelect
                                        name="ufComarca"
                                        label="UF"
                                        placeholder="UF"
                                        autoFocus
                                        autoSelect
                                        noOptionsText='Sem opções'
                                        options={ufList}
                                        onChange={(e, v) => {
                                            if (v) {
                                                step4.ufComarca = v.sigla
                                                step4.cidadeComarca = ''
                                                step4.cidadeComarcaErro = true
                                                step4.optionsCidadeComarca = []
                                                setStep4({ ...step4 })
                                            } else {
                                                step4.ufComarca = ''
                                                step4.cidadeComarca = ''
                                                step4.cidadeComarcaErro = true
                                                step4.optionsCidadeComarca = []
                                                setStep4({ ...step4 })
                                            }
                                        }}
                                        onBlur={(e) => {
                                            const valida = ufList.filter((option) => {
                                                return option.sigla === e.target.value
                                            })
                                            if (valida?.length !== 0) {
                                                setStep4({
                                                    ...step4,
                                                    ufComarca: e.target.value
                                                })
                                            } else {
                                                setStep4({
                                                    ...step4,
                                                    ufComarca: ''
                                                })
                                            }
                                        }}
                                        inputValue={step4.ufComarca}
                                        getOptionLabel={(option) => {
                                            return `${option.sigla} - ${option.nome}`
                                        }}
                                        renderOption={(option, { inputValue }) => {
                                            const matches = match(`${option.sigla} - ${option.nome}`, inputValue);
                                            const parts = parse(`${option.sigla} - ${option.nome}`, matches);
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
                                        renderInput={(params) =>
                                            <Textfield
                                                {...params}
                                                autoFocus
                                                name="ufComarca"
                                                label="UF"
                                                placeholder="UF"
                                                value={step4.ufComarca}
                                                onChange={(e) => {
                                                    setStep4((state) => {
                                                        return { ...state, ufComarca: e.target.value }
                                                    })
                                                }}
                                                inputProps={{
                                                    ...params.inputProps,
                                                    style: { height: 17 },
                                                    autoComplete: 'new-password',
                                                }}
                                            />}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Autocomplete
                                        autoSelect
                                        name="cidadeComarca"
                                        label="Cidade"
                                        placeholder="Cidade"
                                        noOptionsText='Sem opções'
                                        options={step4.optionsCidadeComarca}
                                        getOptionLabel={(option) => option}
                                        open={step4.opencidadeComarca}
                                        onOpen={() => {
                                            step4.opencidadeComarca = true
                                            setStep4({ ...step4 })
                                        }}
                                        onClose={() => {
                                            step4.opencidadeComarca = false
                                            setStep4({ ...step4 })
                                        }}
                                        onBlur={(e) => {
                                            const valida = step4.optionsCidadeComarca?.filter((option) => {
                                                return option === e.target.value
                                            })
                                            if (valida?.length !== 0) {
                                                setStep4({
                                                    ...step4,
                                                    cidadeComarca: e.target.value
                                                })
                                            } else {
                                                setStep4({
                                                    ...step4,
                                                    cidadeComarca: ''
                                                })
                                            }
                                        }}
                                        inputValue={step4.cidadeComarca}
                                        onChange={(e, v) => {
                                            if (v) {
                                                step4.cidadeComarca = v
                                                setStep4({ ...step4 })
                                            } else {
                                                step4.cidadeComarca = ''
                                                setStep4({ ...step4 })
                                            }
                                        }}
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
                                        renderInput={(params) =>
                                            <Textfield
                                                {...params}
                                                name="cidadeComarca"
                                                label="Cidade:"
                                                placeholder="Cidade"
                                                value={step4.cidadeComarca}
                                                onChange={(e) => {
                                                    setStep4((state) => {
                                                        return { ...state, cidadeComarca: e.target.value }
                                                    })
                                                }}

                                                inputProps={{
                                                    ...params.inputProps,
                                                    style: { height: 17 },
                                                    autoComplete: 'new-password',
                                                }}
                                            />}
                                    />
                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>
                </div>
            </Grid>
        </Grid>
    );
};

export default DadosComarca;