import React, { useEffect, useState } from 'react';
import axios from 'axios';

import * as Yup from 'yup';
import NumberFormat from 'react-number-format';

import { Grid } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import assinaturaAdmJSON from '../../../JSON/assinaturaAdm.json';
import tipoIntegralizacaoJSON from '../../../JSON/tipoIntegralizacao.json';
import Textfield from '../../../controls/Textfield';

import { useStepperContext } from '../stepperContext';
import { Formik } from 'formik';

export const EMP_STATE = {
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


export const EMP_VALIDATION = Yup.object().shape({
  nomeEmpresa: Yup.string().required('Campo obrigatório'),
  nomeFantasia: Yup.string(),
  atividade: Yup.string().required('Campo obrigatório'),
  dataIniEmp: Yup.date().required('Campo obrigatório'),
  cep: Yup.string().required('Campo obrigatório'),
  localidade: Yup.string().required('Campo obrigatório'),
  uf: Yup.string().required('Campo obrigatório'),
  logradouro: Yup.string().required('Campo obrigatório'),
  numero: Yup.string().required('Campo obrigatório'),
  bairro: Yup.string().required('Campo obrigatório'),
  capitalSocial: Yup.number().required('Campo obrigatório'),
  quotas: Yup.number().required('Campo obrigatório'),
  vlNominalQuotas: Yup.number().required('Campo obrigatório'),
  proLabore: Yup.number().required('Campo obrigatório'),
  assEmpContratante: Yup.string().required('Campo obrigatório'),
  tipoIntegralizacao: Yup.array().required('Campo obrigatório'),
});

const DadosEmpresa = () => {
  const { step2, setStep2 } = useStepperContext();
  const onBlurCep = (e) => {
    axios.get(`http://viacep.com.br/ws/${step2.cep}/json/`)
      .then(response => {
        setStep2(response.data);
      });
  }
  return (
    <Grid container spacing={2}>
      {console.log('step2', step2)}
      <Grid item xs={12} sm={6} md={3}>
        <Textfield
          name="nomeEmpresa"
          label="Empresa"
          placeholder="Nome Empresa"
          autoFocus
          value={step2.nomeEmpresa}
          onChange={(e) => {
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
        // value={step2.atividade}
        // onChange={(e) => {
        //   setStep2((state) => {
        //     return { ...state, atividade: e.target.value }
        //   })
        // }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Textfield
          name="dataIniEmp"
          label="Data Abertura Empresa"
          type="date"
        // value={step2.dataIniEmp}
        // onChange={(e) => {
        //   setStep2((state) => {
        //     return { ...state, dataIniEmp: e.target.value }
        //   })
        // }}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Textfield
          name="cep"
          label="Cep"
          placeholder="Cep"
        // value={step2.cep}
        // onChange={(e) => {
        //   setStep2((state) => {
        //     return { ...state, cep: e.target.value }
        //   })
        // }}
        // onBlur={onBlurCep}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Textfield
          name="localidade"
          label="Cidade"
          placeholder="Cidade"
        // value={step2.localidade}
        // onChange={(e) => {
        //   setStep2((state) => {
        //     return { ...state, localidade: e.target.value }
        //   })
        // }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Textfield
          name="uf"
          label="UF"
        // value={step2.uf}
        // onChange={(e) => {
        //   setStep2((state) => {
        //     return { ...state, uf: e.target.value }
        //   })
        // }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Textfield
          name="logradouro"
          label="Logradouro"
          placeholder="Rua/Av"
        // value={step2.logradouro}
        // onChange={(e) => {
        //   setStep2((state) => {
        //     return { ...state, logradouro: e.target.value }
        //   })
        // }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Textfield
          name="numero"
          label="Número"
          placeholder="N°"
        // value={step2.numero}
        // onChange={(e) => {
        //   setStep2((state) => {
        //     return { ...state, numero: e.target.value }
        //   })
        // }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Textfield
          name="bairro"
          label="Bairro"
          placeholder="Bairro"
        // value={step2.bairro}
        // onChange={(e) => {
        //   setStep2((state) => {
        //     return { ...state, bairro: e.target.value }
        //   })
        // }}
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
          // value={step2.capitalSocial}
          // onChange={(e) => {
          //   setStep2((state) => {
          //     return { ...state, capitalSocial: e.target.value }
          //   })
          // }}
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
        // value={step2.quotas}
        // onChange={(e) => {
        //   setStep2((state) => {
        //     return { ...state, quotas: e.target.value }
        //   })
        // }}
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
          // value={step2.vlNominalQuotas}
          // onChange={(e) => {
          //   setStep2((state) => {
          //     return { ...state, vlNominalQuotas: e.target.value }
          //   })
          // }}
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
          // value={step2.proLabore}
          // onChange={(e) => {
          //   setStep2((state) => {
          //     return { ...state, proLabore: e.target.value }
          //   })
          // }}
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
          // value={step2.assEmpContratante}
          // onChange={(e) => {
          //   setStep2((state) => {
          //     return { ...state, assEmpContratante: e.target.value }
          //   })
          // }}
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
          // value={step2.tipoIntegralizacao}
          // onChange={(e) => {
          //   setStep2((state) => {
          //     return { ...state, tipoIntegralizacao: e.target.value }
          //   })
          // }}
          SelectProps={{
            renderValue: (selected) => selected.join(', '),
            multiple: true
          }}
        >
          {tipoIntegralizacaoJSON.map((option) => (
            <MenuItem key={option.id} value={option.tipo}>
              {/* <Checkbox checked={step2.tipoIntegralizacao.indexOf(option.tipo) > -1} color="primary" /> */}
              <ListItemText primary={option.tipo} />
            </MenuItem>
          ))}
        </Textfield>
      </Grid>
    </Grid>
  )
}

export default DadosEmpresa;