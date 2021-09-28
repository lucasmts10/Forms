import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../FormFields';

import Textfield from '../../../controls/Textfield';


export default function DadosComarca(props) {
  const {
    formField: {
      ufComarca,
      cidadeComarca
    }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      Dados do contrato:
      </Typography><br/>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
          <Textfield name={ufComarca.name} label={ufComarca.label} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={cidadeComarca.name} label={cidadeComarca.label} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
