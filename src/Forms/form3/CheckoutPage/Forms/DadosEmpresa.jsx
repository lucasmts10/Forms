import React from 'react';
import axios from 'axios';

import { Grid, Typography } from '@material-ui/core';
import { InputField, DatePickerField } from '../../FormFields';

import Textfield from '../../../controls/Textfield';

export default function DadosEmpresa(props) {
  const {
    formField: {
      nomeEmp,
      nomeFantEmp,
      atividadeEmp,
      dtAberEmp,
      cepEmp,
      cidadeEmp,
      ufEmp,
      lgrEmp, 
      numEmp,
      bairroEmp,
      capSocEmp,
      quotasEmp,
      vlNomQuotEmp,
      proLabore,
      assAdm,
      tpInt,
     }
  } = props;

  // const cepT = useRef(null);
 

  //  const onBlurCep = (e) => {
  //    axios.get(`http://viacep.com.br/ws/${cepEmp}/json/`)
  //      .then(response => {
  //        (response.data);
  //      });
  //  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      Dados da Empresa
      </Typography><br/>

      <Grid container spacing={3}>
       <Grid item xs={12} sm={6} md={3}>
          <Textfield name={nomeEmp.name} label={nomeEmp.label} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={nomeFantEmp.name} label={nomeFantEmp.label} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Textfield name={atividadeEmp.name} label={atividadeEmp.label} />
          </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={dtAberEmp.name} label={dtAberEmp.label} type="date" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={cepEmp.name} label={cepEmp.label}    value={cepEmp} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={cidadeEmp.name}  label={cidadeEmp.label} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Textfield name={ufEmp.name} label={ufEmp.label} />
          </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={lgrEmp.name} label={lgrEmp.label} />
        </Grid> 
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={numEmp.name} label={numEmp.label} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={bairroEmp.name} label={bairroEmp.label} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Textfield name={capSocEmp.name} label={capSocEmp.label} />
          </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={quotasEmp.name} label={quotasEmp.label} />
        </Grid> 
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={vlNomQuotEmp.name} label={vlNomQuotEmp.label} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={proLabore.name} label={proLabore.label} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Textfield name={assAdm.name} label={assAdm.label} />
          </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={tpInt.name} label={tpInt.label} />
        </Grid> 
      </Grid>
    </React.Fragment>
  );
}
