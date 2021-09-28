import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../FormFields';
import Tooltip from '@material-ui/core/Tooltip';

import Textfield from '../../../controls/Textfield';

export default function DadosContrato(props) {
  const {
    formField: {
      ufContrato,
      cidadeContrato,
      dtIniContrato,
    }
  } = props;
  
    return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      Dados do contrato:
      </Typography><br/>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Tooltip title="Informe a uf do contrato" placement="bottom" arrow>
            <Textfield name={ufContrato.name} label={ufContrato.label} />
          </Tooltip>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Tooltip title="Informe a cidade do contrato" placement="bottom" arrow>
            <Textfield name={cidadeContrato.name} label={cidadeContrato.label} />
          </Tooltip>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Tooltip title="Informe a data de início do cghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhontrato" placement="bottom" arrow>
            <Textfield name={dtIniContrato.name} label={dtIniContrato.label} type="date" />
          </Tooltip>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Tooltip title="Informe a data de início do contrato" placement="bottom" arrow>
            <Textfield name={dtIniContrato.name} label={dtIniContrato.label} type="date" />
          </Tooltip>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Tooltip title="Informe a data de início do contrato" placement="bottom" arrow>
            <Textfield name={dtIniContrato.name} label={dtIniContrato.label} type="date" />
          </Tooltip>
        </Grid>
         <Grid item xs={12} sm={6} md={3}>
          <Tooltip title="Informe a data de início do contrato" placement="bottom" arrow>
            <Textfield name={dtIniContrato.name} label={dtIniContrato.label} type="date" />
          </Tooltip>
        </Grid>
         <Grid item xs={12} sm={6} md={3}>
          <Tooltip title="Informe a data de início do contrato" placement="bottom" arrow>
            <Textfield name={dtIniContrato.name} label={dtIniContrato.label} type="date" />
          </Tooltip>
        </Grid>
         <Grid item xs={12} sm={6} md={3}>
          <Tooltip title="Informe a data de início do conthhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhrato" placement="bottom" arrow>
            <Textfield name={dtIniContrato.name} label={dtIniContrato.label} type="date" />
          </Tooltip>
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}
