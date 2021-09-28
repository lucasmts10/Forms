import React, { useEffect, useState } from 'react';

import { Formik, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
  Divider,
  Container,
  Button,
  Grid,
  Typography
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Textfield from '../../../controls/Textfield';

import { useStepperContext } from '../stepperContext';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export const CL_AD_STATE = {
  clAdiconal: []
};

export const CL_AD_VALIDATION = Yup.object().shape({
});

const ClausulaAdicional = () => {
  const classes = useStyles();

  // -----------------------------------------
  //   Tratativas para Clausulas Adicionais   |
  // -----------------------------------------
  const [clausulasAdicionais, setClausulasAdicionais] = useState([]);

  const maskNoInitialBlank = (value) => {
    return value.replace(/^\s/g, "")
  }

  const handleEmpty = (e) => {
    e.preventDefault()
    const { value } = e.target
    //Valida campo vazio
    return value?.length === 0 ? true : false
  }

  const handleNewClausulaAdicional = (e) => {
    e.preventDefault()
    setClausulasAdicionais([...clausulasAdicionais, {
      clausulaAdicional: "",
      clausulaAdicionalErro: false,
    }])
  }

  const handleChangeClausulaAdicional = (e, index, clausula) => {
    clausula.clausulaAdicional = maskNoInitialBlank(e.target.value)
    setClausulasAdicionais([...clausulasAdicionais])
  }

  const handleBlurClausulaAdicional = (e, index, clausula) => {
    clausula.clausulaAdicionalErro = handleEmpty(e)
    setClausulasAdicionais([...clausulasAdicionais])
  }

  const handleDelClausulaAdicional = (index) => {
    setClausulasAdicionais([...clausulasAdicionais.filter((_, indexFilter) => indexFilter !== index)])
  }

  const handleClausulasAdicionaisHtml = () => {
    let clausulasAdicionaisHtml = ''
    if (clausulasAdicionais.length === 0) {
      return ''
    } else {
      clausulasAdicionais.forEach((clausula, index) => {
        clausulasAdicionaisHtml += `<p><b>CLÁUSULA ${((index + 13).toOrdinal({ maiuscula: true, genero: 'a' }).toUpperCase())}:</b><br />&emsp;${clausula.clausulaAdicional}</p>`
      })
    }
    return clausulasAdicionaisHtml
  }

  return (
    <>
      <Grid container spacing={2}>
        {/* <Grid item xs={12}>
          <Typography>
            Cláusulas Adicionais
          </Typography>
        </Grid> */}
        {
          clausulasAdicionais.map((clausula, index) => (
            <Grid item xs={12} sm={12} md={12} key={`Grid${index}`}>
              <Textfield
                key={`clausulaAdicional${index}`}
                name={`clausulaAdicional${index}`}
                label={`Cláusula ${(index + 14).toOrdinal({ maiuscula: true, genero: 'a' })}`}
                placeholder="Conteúdo da cláusula adicional"
                autoFocus
                multiline
                rows={4}
                value={clausula.clausulaAdicional}
                onChange={(e) => {
                  handleChangeClausulaAdicional(e, index, clausula)
                }}
                variant="outlined"
                className={classes.paper}
                onBlur={(e) => {
                  handleBlurClausulaAdicional(e, index, clausula)
                }}
                error={clausula.clausulaAdicionalErro}
                helperText={clausula.clausulaAdicionalErro ? 'Preencha este campo de texto ou delete-o.' : ''}
              />
              <Button
                key={'delClausulaAdicional' + index}
                variant="contained"
                aria-label="delete"
                color="secondary"
                size="medium"
                className={classes.buttonDelClausula}
                startIcon={<DeleteIcon />}
                name={`delClausulaAdicional${index}`}
                id={`delClausulaAdicional${index}`}
                onClick={() => handleDelClausulaAdicional(index)} >
                Remover
              </Button>
            </Grid>
          ))
        }
      </Grid>
      <Button
        disabled={clausulasAdicionais.length >= 30}
        variant="outlined"
        size="medium"
        name="newClausulaAdicional"
        style={{ marginLeft: 15 }}
        color="primary"
        className={classes.buttonAdd}
        id="newClausulaAdicional"
        startIcon={<AddCircleIcon />}
        onClick={handleNewClausulaAdicional}>
        Adicionar Cláusula
      </Button>
    </>
  );
};

export default ClausulaAdicional;