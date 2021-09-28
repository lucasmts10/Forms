import React, { useEffect } from 'react';

import * as Yup from 'yup';
import { Grid, Typography } from '@material-ui/core';
import Textfield from '../../../controls/Textfield';


export const TESTEMUNHA_STATE = {
  nomeTestemunha1: '',
  rgTestemunha1: '',
  orgaoEmissor1: '',
  cpfTestemunha1: '',
  nomeTestemunha2: '',
  rgTestemunha2: '',
  orgaoEmissor2: '',
  cpfTestemunha2: ''
};

export const TESTEMUNHA_VALIDATION = Yup.object().shape({
  nomeTestemunha1: Yup.string().required('Campo obrigatório'),
  rgTestemunha1: Yup.string().required('Campo obrigatório'),
  orgaoEmissor1: Yup.string().required('Campo obrigatório'),
  cpfTestemunha1: Yup.string().required('Campo obrigatório'),
  nomeTestemunha2: Yup.string().required('Campo obrigatório'),
  rgTestemunha2: Yup.string().required('Campo obrigatório'),
  orgaoEmissor2: Yup.string().required('Campo obrigatório'),
  cpfTestemunha2: Yup.string().required('Campo obrigatório'),
});

const DadosTestemunhas = () => {

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>
            <b><i>1ª Testemunha:</i></b>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield
            name="nomeTestemunha1"
            label="Nome da 1ª Testemunha"
            placeholder="Nome da 1ª Testemunha"
            autoFocus
          />-
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield
            name="rgTestemunha1"
            label="RG - 1ª Testemunha"
            placeholder="Informe o RG"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield
            required
            name="orgaoEmissor1"
            label="Órgão Exp./Emissor do RG"
            placeholder="Órgão Exp./Emissor do RG"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield
            required
            name="cpfTestemunha1"
            label="CPF - 1ª Testemunha"
            placeholder="Informe o CPF"
          />
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography>
            <b><i>2ª Testemunha:</i></b>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield
            name="nomeTestemunha2"
            label="Nome da 2ª Testemunha"
            placeholder="Nome da 2ª Testemunha"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield
            name="rgTestemunha2"
            label="RG - 2ª Testemunha"
            placeholder="Informe o RG"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield
            required
            name="orgaoEmissor2"
            label="Órgão Exp./Emissor do RG"
            placeholder="Órgão Exp./Emissor do RG"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield
            name="cpfTestemunha2"
            label="CPF - 2ª Testemunha"
            placeholder="Informe o CPF"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default DadosTestemunhas;