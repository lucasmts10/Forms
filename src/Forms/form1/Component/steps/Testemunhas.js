import React, { useEffect } from 'react';

import { Formik, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import Textfield from '../../../controls/Textfield';

import { useStepperContext } from '../stepperContext';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  }
}));

const INITIAL_FORM_STATE = {
  nomeTestemunha1: '',
  rgTestemunha1: '',
  orgaoEmissor1: '',
  cpfTestemunha1: '',
  nomeTestemunha2: '',
  rgTestemunha2: '',
  orgaoEmissor2: '',
  cpfTestemunha2: ''
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

const DadosTestemunhas = () => {
  const classes = useStyles();
  const { step5, setStep5 } = useStepperContext();
  useEffect(() => {
    console.log(step5);
  }, [step5]);

  return (
    <Grid container>
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
              setStep5(values);
            }}
          >
            <Form autoComplete="off">
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
                    value={step5.nomeTestemunha1}
                    onChange={(e) => {
                      setStep5((state) => {
                        return { ...state, nomeTestemunha1: e.target.value }
                      })
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Textfield
                    name="rgTestemunha1"
                    label="RG - 1ª Testemunha"
                    placeholder="Informe o RG"
                    value={step5.rgTestemunha1}
                    onChange={(e) => {
                      setStep5((state) => {
                        return { ...state, rgTestemunha1: e.target.value }
                      })
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Textfield
                    required
                    name="orgaoEmissor1"
                    label="Órgão Exp./Emissor do RG"
                    placeholder="Órgão Exp./Emissor do RG"
                    value={step5.orgaoEmissor1}
                    onChange={(e) => {
                      setStep5((state) => {
                        return { ...state, orgaoEmissor1: e.target.value }
                      })
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Textfield
                    required
                    name="cpfTestemunha1"
                    label="CPF - 1ª Testemunha"
                    placeholder="Informe o CPF"
                    value={step5.cpfTestemunha1}
                    onChange={(e) => {
                      setStep5((state) => {
                        return { ...state, cpfTestemunha1: e.target.value }
                      })
                    }}
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
                    value={step5.nomeTestemunha2}
                    onChange={(e) => {
                      setStep5((state) => {
                        return { ...state, nomeTestemunha2: e.target.value }
                      })
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Textfield
                    name="rgTestemunha2"
                    label="RG - 2ª Testemunha"
                    placeholder="Informe o RG"
                    value={step5.rgTestemunha2}
                    onChange={(e) => {
                      setStep5((state) => {
                        return { ...state, rgTestemunha2: e.target.value }
                      })
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Textfield
                    required
                    name="orgaoEmissor2"
                    label="Órgão Exp./Emissor do RG"
                    placeholder="Órgão Exp./Emissor do RG"
                    value={step5.orgaoEmissor2}
                    onChange={(e) => {
                      setStep5((state) => {
                        return { ...state, orgaoEmissor2: e.target.value }
                      })
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Textfield
                    name="cpfTestemunha2"
                    label="CPF - 2ª Testemunha"
                    placeholder="Informe o CPF"
                    value={step5.cpfTestemunha2}
                    onChange={(e) => {
                      setStep5((state) => {
                        return { ...state, cpfTestemunha2: e.target.value }
                      })
                    }}
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

export default DadosTestemunhas;