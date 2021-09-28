import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, DatePickerField } from '../../FormFields';

import Textfield from '../../../controls/Textfield';

export default function DadosEmpresa(props) {
  const {
    formField: {
      nomeSoc,
      sexoSoc,
      ufNatSoc,
      cidadeNatSoc,
      nomePai,
      nomeMae,
      nacSoc,
      estCivilSoc, 
      profSoc,
      dtNascSoc,
      maioridadeSoc,
      rgSoc,
      orgExpSoc,
      cpfSoc,
      cepSoc,
      cidadeSoc,
      ufSoc,
      lgrSoc,
      numSoc,
      bairroSoc,
      telSoc,
      telOpSoc,
      emailSoc,
      quotasSoc,
      pctQuotasSoc,
      funcaoSoc,
      especieSoc,
     }
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dados do(a) Sócio(a)
      </Typography><br/>

      <Grid container spacing={3}>
       <Grid item xs={12} sm={6} md={3}>
          <Textfield name={nomeSoc.name} label={nomeSoc.label} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={sexoSoc.name} label={sexoSoc.label} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Textfield name={ufNatSoc.name} label={ufNatSoc.label} />
          </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={cidadeNatSoc.name} label={cidadeNatSoc.label} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={nomePai.name} label={nomePai.label} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={nomeMae.name} label={nomeMae.label} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Textfield name={nacSoc.name} label={nacSoc.label} />
          </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={estCivilSoc.name} label={estCivilSoc.label} />
        </Grid> 
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={profSoc.name} label={profSoc.label} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={dtNascSoc.name} label={dtNascSoc.label} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Textfield name={maioridadeSoc.name} label={maioridadeSoc.label} />
          </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={rgSoc.name} label={rgSoc.label} />
        </Grid> 
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={orgExpSoc.name} label={orgExpSoc.label} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={cpfSoc.name} label={cpfSoc.label} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Textfield name={cepSoc.name} label={cepSoc.label} />
          </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={cidadeSoc.name} label={cidadeSoc.label} />
        </Grid> 
        <Grid item xs={12} sm={6} md={3}>
          <Textfield name={ufSoc.name} label={ufSoc.label} />
        </Grid> 
       <Grid item xs={12} sm={6} md={3}>
          <Textfield name={lgrSoc.name} label={lgrSoc.label} />
        </Grid> 
       <Grid item xs={12} sm={6} md={3}>
          <Textfield name={numSoc.name} label={numSoc.label} />
        </Grid> 
       <Grid item xs={12} sm={6} md={3}>
          <Textfield name={bairroSoc.name} label={bairroSoc.label} />
        </Grid> 
       <Grid item xs={12} sm={6} md={3}>
          <Textfield name={telSoc.name} label={telSoc.label} />
        </Grid> 
       <Grid item xs={12} sm={6} md={3}>
          <Textfield name={telOpSoc.name} label={telOpSoc.label} />
        </Grid> 
       <Grid item xs={12} sm={6} md={3}>
          <Textfield name={emailSoc.name} label={emailSoc.label} />
        </Grid> 
       <Grid item xs={12} sm={6} md={3}>
          <Textfield name={quotasSoc.name} label={quotasSoc.label} />
        </Grid> 
       <Grid item xs={12} sm={6} md={3}>
          <Textfield name={pctQuotasSoc.name} label={pctQuotasSoc.label} />
        </Grid> 
       <Grid item xs={12} sm={6} md={3}>
          <Textfield name={funcaoSoc.name} label={funcaoSoc.label} />
        </Grid> 
         <Grid item xs={12} sm={6} md={3}>
          <Textfield name={especieSoc.name} label={especieSoc.label} />
        </Grid> 
        {/* <Grid item xs={12} md={6} sm={3}>
          <InputField
            name={nameOnCard.name}
            label={nameOnCard.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6} sm={3}>
          <InputField
            name={cardNumber.name}
            label={cardNumber.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6} sm={3}>
          <DatePickerField
            name={expiryDate.name}
            label={expiryDate.label}
            format="MM/yy"
            views={['year', 'month']}
            minDate={new Date()}
            maxDate={new Date('2050/12/31')}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6} sm={3}>
          <InputField name={cvv.name} label={cvv.label} fullWidth />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}
