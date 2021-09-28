import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, DatePickerField } from '../../FormFields';

import Textfield from '../../../controls/Textfield';

export default function DadosTestemunha(props) {
  const {
    formField: {
      nomeTest1,
      rgTest1,
      orgExpTest1,
      cpfTest1,
      nomeTest2,
      rgTest2,
      orgExpTest2,
      cpfTest2,
     }
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      Dados das Testemunhas:
      </Typography><br/>

      
      <Typography variant="h7">
        <b><i> 1° Testemunha:</i></b>
      </Typography><br/>
      <Grid container spacing={3}>
       <Grid item xs={12} sm={6} md={3}>
          <Textfield name={nomeTest1.name} label={nomeTest1.label} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={rgTest1.name} label={rgTest1.label} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Textfield name={orgExpTest1.name} label={orgExpTest1.label} />
          </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={cpfTest1.name} label={cpfTest1.label} />
        </Grid>
        </Grid>
       
        <Typography variant="h7" >
        <b><i> 2° Testemunha:</i></b>
      </Typography><br/>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={nomeTest2.name} label={nomeTest2.label} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={rgTest2.name} label={rgTest2.label} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Textfield name={orgExpTest2.name} label={orgExpTest2.label} />
          </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={cpfTest2.name} label={cpfTest2.label} />
        </Grid> 
      </Grid>
    </React.Fragment>
  );
}
