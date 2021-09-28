import React, { useEffect } from 'react';
import axios from 'axios';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import NumberFormat from '../../../../../node_modules/react-number-format';

import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography
} from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import Textfield from '../../../controls/Textfield';
import assinaturaAdmJSON from '../../../JSON/assinaturaAdm.json';
import tipoIntegralizacaoJSON from '../../../JSON/tipoIntegralizacao.json';

import { useStepperContext } from '../stepperContext';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  nomeEmpresa: '',
  nomeFantasia: '',
  atividade: '',
  dataIniEmp: '',
  cep: '',
  localidade: '',
  uf: '',
  logradouro: '',
  numero: '',
  bairro: '',
  capitalSocial: '',
  quotas: '',
  vlNominalQuotas: '',
  proLabore: '',
  assEmpContratante: '',
  tipoIntegralizacao: []
};

const FORM_VALIDATION = Yup.object().shape({
  nomeEmpresa: Yup.string().required('Campo obrigatório'),
  nomeFantasia: Yup.string().required('Campo obrigatório')
});

const DadosEmpresa = () => {
  const classes = useStyles();
  const { step2, setStep2 } = useStepperContext();
  // useEffect(() => {
  //   console.log('step2', step2);
  // }, [step2]);

  const onBlurCep = (e) => {
    axios.get(`http://viacep.com.br/ws/${step2.cep}/json/`)
      .then(response => {
        setStep2(response.data);
      });
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <div className={classes.formWrapper}>
          <Formik
            initialValues={{
              ...step2
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={values => {
              setStep2(values);
            }}
          >
            {({ values, errors, touched, handleChange }) => (

              <Form autoComplete="off">
                {console.log('touched', touched)}
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>
                      Dados da empresa:
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Textfield
                      name="nomeEmpresa"
                      label="Empresa"
                      placeholder="Nome Empresa"
                      autoFocus
                      value={step2.nomeEmpresa}
                      onChange={(e) => {
                        handleChange(e)
                        setStep2((state) => {
                          return { ...state, nomeEmpresa: e.target.value }
                        })
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Textfield
                      name="nomeFantasia"
                      label="Nome Fantasia"
                      placeholder="Nome Fantasia"
                      value={step2.nomeFantasia}
                      onChange={(e) => {
                        setStep2((state) => {
                          return { ...state, nomeFantasia: e.target.value }
                        })
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Textfield
                      name="atividade"
                      label="Atividade"
                      placeholder="Atividade"
                      value={step2.atividade}
                      onChange={(e) => {
                        setStep2((state) => {
                          return { ...state, atividade: e.target.value }
                        })
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Textfield
                      name="dataIniEmp"
                      label="Data Abertura Empresa"
                      type="date"
                      value={step2.dataIniEmp}
                      onChange={(e) => {
                        setStep2((state) => {
                          return { ...state, dataIniEmp: e.target.value }
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <Textfield
                      name="cep"
                      label="Cep"
                      placeholder="Cep"
                      value={step2.cep}
                      onChange={(e) => {
                        setStep2((state) => {
                          return { ...state, cep: e.target.value }
                        })
                      }}
                      onBlur={onBlurCep}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Textfield
                      name="localidade"
                      label="Cidade"
                      placeholder="Cidade"
                      value={step2.localidade}
                      onChange={(e) => {
                        setStep2((state) => {
                          return { ...state, localidade: e.target.value }
                        })
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Textfield
                      name="uf"
                      label="UF"
                      value={step2.uf}
                      onChange={(e) => {
                        setStep2((state) => {
                          return { ...state, uf: e.target.value }
                        })
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Textfield
                      name="logradouro"
                      label="Logradouro"
                      placeholder="Rua/Av"
                      value={step2.logradouro}
                      onChange={(e) => {
                        setStep2((state) => {
                          return { ...state, logradouro: e.target.value }
                        })
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Textfield
                      name="numero"
                      label="Número"
                      placeholder="N°"
                      value={step2.numero}
                      onChange={(e) => {
                        setStep2((state) => {
                          return { ...state, numero: e.target.value }
                        })
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Textfield
                      name="bairro"
                      label="Bairro"
                      placeholder="Bairro"
                      value={step2.bairro}
                      onChange={(e) => {
                        setStep2((state) => {
                          return { ...state, bairro: e.target.value }
                        })
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <NumberFormat
                      name="capitalSocial"
                      label="Capital Social"
                      placeholder="0,00"
                      thousandSeparator={'.'}
                      decimalSeparator={','}
                      decimalScale='2'
                      fixedDecimalScale
                      allowNegative={false}
                      customInput={Textfield}
                      value={step2.capitalSocial}
                      onChange={(e) => {
                        setStep2((state) => {
                          return { ...state, capitalSocial: e.target.value }
                        })
                      }}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <NumberFormat
                      name="quotas"
                      label="Quotas"
                      placeholder="Quotas"
                      thousandSeparator={'.'}
                      decimalSeparator={','}
                      allowNegative={false}
                      customInput={Textfield}
                      value={step2.quotas}
                      onChange={(e) => {
                        setStep2((state) => {
                          return { ...state, quotas: e.target.value }
                        })
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <NumberFormat
                      name="vlNominalQuotas"
                      label="Valor Nominal de Quotas"
                      placeholder="0,00"
                      thousandSeparator={'.'}
                      decimalSeparator={','}
                      decimalScale='2'
                      fixedDecimalScale
                      allowNegative={false}
                      customInput={Textfield}
                      disabled
                      value={step2.vlNominalQuotas}
                      onChange={(e) => {
                        setStep2((state) => {
                          return { ...state, vlNominalQuotas: e.target.value }
                        })
                      }}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <NumberFormat
                      name="proLabore"
                      label="Pró-labore"
                      placeholder="Pró-labore"
                      thousandSeparator={'.'}
                      decimalSeparator={','}
                      allowNegative={false}
                      allowLeadingZeros
                      customInput={Textfield}
                      value={step2.proLabore}
                      onChange={(e) => {
                        setStep2((state) => {
                          return { ...state, proLabore: e.target.value }
                        })
                      }}
                      InputProps={{
                        endAdornment: <InputAdornment position="end">Salário(s) Mínimo(s)</InputAdornment>,
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={3} >
                    <Textfield
                      name={`assEmpContratante`}
                      select
                      label="Assinatura Adm."
                      value={step2.assEmpContratante}
                      onChange={(e) => {
                        setStep2((state) => {
                          return { ...state, assEmpContratante: e.target.value }
                        })
                      }}
                      SelectProps={{
                        native: true
                      }}
                    >
                      {
                        assinaturaAdmJSON.map((option) => (
                          <option key={option.id} value={option.assinatura}>
                            {option.assinatura}
                          </option>
                        ))
                      }
                    </Textfield>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} >
                    <Textfield
                      name={`tipoIntegralizacao`}
                      select
                      label="Tipo de Integralização"
                      value={step2.tipoIntegralizacao}
                      onChange={(e) => {
                        setStep2((state) => {
                          return { ...state, tipoIntegralizacao: e.target.value }
                        })
                      }}
                      SelectProps={{
                        renderValue: (selected) => selected.join(', '),
                        multiple: true
                      }}
                    >
                      {tipoIntegralizacaoJSON.map((option) => (
                        <MenuItem key={option.id} value={option.tipo}>
                          <Checkbox checked={step2.tipoIntegralizacao.indexOf(option.tipo) > -1} color="primary" />
                          <ListItemText primary={option.tipo} />
                        </MenuItem>
                      ))}
                    </Textfield>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </div>
      </Grid>
    </Grid >
  );
};

export default DadosEmpresa;