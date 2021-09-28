import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Formik, Form, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import {
  Divider,
  Grid,
  Typography
} from '@material-ui/core';

import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

import sexoJSON from '../../../JSON/sexo.json';
import ufList from '../../../JSON/ufList.json';
import Textfield from '../../../controls/Textfield';
import nacionalidadeJSON from '../../../JSON/nacionalidades.json';

import { useStepperContext } from '../stepperContext';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
  buttonAdd: {
    width: '100%',
    padding: 10,
    right: 10,
  },
  buttonDel: {
    padding: 5,
    right: 25,
    position: 'absolute',
    boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
  },
}));

const newSocio = {
  nomeSocio: '',
  sexo: '',
  ufNat: '',
  cidadeNat: '',
  //Tratativas UF e Cidade
  openCidadeNat: false,
  optionsCidadeNat: [],
  //------------------------
  nomePai: '',
  nomeMae: '',
  nacionalidade: '',
  estCivil: '',
  profissao: '',
  dataNasc: '',
  maioridade: '',
  rg: '',
  orgEmissor: '',
  cpf: '',
  cep: '',
  cidade: '',
  uf: '',
  logradouro: '',
  numero: '',
  bairro: '',
  telSocio: '',
  telSocioOpt: '',
  emailSocio: '',
  quotas: '',
  pctQuotas: '',
  funcao: '',
  somenteEspecie: '2',
  detalhesIntegralizacao: ''
}
export const SOCIO_STATE = [{
  nomeSocio: '',
  sexo: '',
  ufNat: '',
  cidadeNat: '',
  //Tratativas UF e Cidade
  openCidadeNat: false,
  optionsCidadeNat: [],
  //------------------------
  nomePai: '',
  nomeMae: '',
  nacionalidade: '',
  estCivil: '',
  profissao: '',
  dataNasc: '',
  maioridade: '',
  rg: '',
  orgEmissor: '',
  cpf: '',
  cep: '',
  cidade: '',
  uf: '',
  logradouro: '',
  numero: '',
  bairro: '',
  telSocio: '',
  telSocioOpt: '',
  emailSocio: '',
  quotas: '',
  pctQuotas: '',
  funcao: '',
  somenteEspecie: '2',
  detalhesIntegralizacao: ''
}, newSocio]

export const SOCIO_VALIDATION = Yup.array().of(Yup.object().shape({
  nomeSocio: Yup.string().required('Nome obrigatório'),
}))

const DadosSocio = () => {
  const classes = useStyles();
  const { step2 } = useStepperContext();
  const { step3, setStep3 } = useStepperContext();


  const [newOpCidNatSocCont, setNewOpCidNatSocCont] = useState(1)
  React.useEffect(() => {
    let active = true;
    step3.forEach((socio) => {
      if (!socio.ufNat) {
        return true
      }
      (async () => {
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${socio.ufNat}/municipios?orderBy=nome`);
        const cidades = await response.json();

        if (active) {
          socio.optionsCidadeNat = Object.keys(cidades).map((key) => cidades[key].nome)
          setStep3([...step3])
        }
        return () => {
          active = false;
        };
      })();
    })
  }, [newOpCidNatSocCont]);

  // ---------------------------------------------
  //   Tratativas para Socio(s) Contratante(s)   |
  // ---------------------------------------------
  const handleNewSocio = (e, start) => {
    e.preventDefault()

    !start && step3.forEach((socio => {
      return (
        socio.porcentagemSocContratante = '',
        socio.porcentagemSocContratanteErro = true,
        socio.quotasSocContratante = '',
        socio.quotasSocContratanteErro = true
      )
    }))

    setStep3([...step3, {
      ...newSocio
    }])
  }

  const handleDelSocio = (index) => {
    setStep3([...step3.filter((_, indexFilter) => indexFilter !== index)])
  }
  const onBlurCep = (e) => {
    const { value } = e.target.value;
    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) {
      return;
    }

    axios.get(`http://viacep.com.br/ws/${step3.cep}/json/`)
      .then(response => {
        setStep3(response.data);
      });
  }

  return (

    <Grid container spacing={1}>
      <Grid item xs={12}>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.formWrapper}>

          <Formik
            initialValues={{
              ...SOCIO_STATE
            }}
            validationSchema={SOCIO_VALIDATION}
            onSubmit={values => {
              setStep3(values);
            }}
          >
            {({ errors, touched }) => (
              <Form autoComplete="off">
                {console.log('errors', errors)}
                {/* <FieldA'rray name="step3">
              {
                (fieldArrayProps) => {
                  const {push, remove} = fieldArrayProps
                  return <div> */}
                {
                  step3.map((socio, index, array) => (
                    <div key={index}>
                      <div style={{ display: "flex" }}>
                        <Typography>
                          Dados do(a) Sócio(a) {array.length !== 1 && `- ${(index + 1)}:`}
                        </Typography>
                        <Button
                          style={
                            array.length === 2 ? { display: 'none' } : { display: 'flex', paddingLeft: 10, paddingRight: 10 }
                          }
                          key={`delSocio${index}`}
                          variant="contained"
                          aria-label="delete"
                          size="medium"
                          className={classes.buttonDel}
                          name="delSocio"
                          id="delSocio"
                          color="secondary"
                          startIcon={<DeleteIcon />}
                          onClick={() => handleDelSocio(index)}
                        >
                          Remover Sócio
                            </Button>
                      </div>
                      <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md={3}>
                          <Textfield
                            required
                            autoFocus
                            name={`nomeSocio${index}`}
                            label="Nome Sócio(a)"
                            placeholder="Nome Sócio(a)"
                            value={step3[index].nomeSocio}
                            onChange={(e) => {
                              step3[index].nomeSocio = e.target.value
                              setStep3([...step3])
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Textfield
                            name={`sexo${index}`}
                            label="Sexo"
                            placeholder="Masculino/Feminino"
                            value={socio.sexo}
                            select
                            onChange={(e) => {
                              socio.sexo = e.target.value
                              setStep3([...step3])
                            }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            inputProps={{
                              style: { height: 17 },
                              autoComplete: 'new-password',
                            }}
                            SelectProps={{
                              native: true
                            }}

                          >
                            {sexoJSON.map((option) => (
                              <option key={option.sexo} value={option.sexo}>
                                {option.sexo}
                              </option>
                            ))}
                          </Textfield>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Autocomplete
                            autoSelect
                            name={`ufNat${index}`}
                            label="UF Naturalidade"
                            placeholder="UF - Naturalidade"
                            noOptionsText='Sem opções'
                            options={ufList}
                            onChange={(e, v) => {
                              if (v) {
                                socio.ufNat = v.sigla
                                socio.cidadeNat = ''
                                socio.cidadeNatErro = true
                                socio.optionsCidadeNat = []
                                setStep3([...step3])
                              } else {
                                socio.ufNat = ''
                                socio.cidadeNat = ''
                                socio.cidadeNatErro = true
                                socio.optionsCidadeNat = []
                                setStep3([...step3])
                              }
                            }}
                            onBlur={(e) => {
                              const valida = ufList.filter((option) => {
                                return option.sigla === e.target.value
                              })
                              if (valida?.length !== 0) {
                                socio.ufNat = e.target.value
                                setStep3([...step3])
                              } else {
                                socio.ufNat = ''
                                setStep3([...step3])
                              }
                            }}
                            inputValue={socio.ufNat}
                            getOptionLabel={(option) => {
                              return `${option.sigla} - ${option.nome}`
                            }}
                            renderOption={(option, { inputValue }) => {
                              const matches = match(`${option.sigla} - ${option.nome}`, inputValue);
                              const parts = parse(`${option.sigla} - ${option.nome}`, matches);
                              return (
                                <div>
                                  {parts.map((part, index) => (
                                    <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                                      {part.text}
                                    </span>
                                  ))}
                                </div>
                              )
                            }}
                            renderInput={(params) =>
                              <Textfield
                                {...params}
                                name={`ufNat${index}`}
                                label="UF Naturalidade"
                                placeholder="UF Naturalidade"
                                value={socio.ufNat}
                                onChange={(e) => {
                                  socio.ufNat = e.target.value
                                  setStep3([...step3])
                                }}
                                onBlur={() => setNewOpCidNatSocCont(newOpCidNatSocCont + 1)}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                inputProps={{
                                  ...params.inputProps,
                                  style: { height: 17 },
                                  autoComplete: 'new-password',
                                }}
                              />}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Autocomplete
                            autoSelect
                            name={`cidadeNat${index}`}
                            label="Cidade Naturalidade"
                            placeholder="Cidade Naturalidade"
                            noOptionsText='Sem opções'
                            options={socio.optionsCidadeNat}
                            getOptionLabel={(option) => option}
                            open={socio.openCidadeNat}
                            onOpen={() => {
                              socio.openCidadeNat = true
                              setStep3([...step3])
                            }}
                            onClose={() => {
                              socio.openCidadeNat = false
                              setStep3([...step3])
                            }}
                            onBlur={(e) => {
                              const valida = socio.optionsCidadeNat?.filter((option) => {
                                return option === e.target.value
                              })
                              if (valida?.length !== 0) {
                                socio.cidadeNat = e.target.value
                                setStep3([...step3])
                              } else {
                                socio.cidadeNat = ''
                                setStep3([...step3])
                              }
                            }}
                            inputValue={socio.cidadeNat}
                            onChange={(e, v) => {
                              if (v) {
                                socio.cidadeNat = v
                                setStep3([...step3])
                              } else {
                                socio.cidadeNat = ''
                                setStep3([...step3])
                              }
                            }}
                            renderOption={(option, { inputValue }) => {
                              const matches = match(`${option}`, inputValue);
                              const parts = parse(`${option}`, matches);
                              return (
                                <div>
                                  {parts.map((part, index) => (
                                    <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                                      {part.text}
                                    </span>
                                  ))}
                                </div>
                              )
                            }}
                            renderInput={(params) =>
                              <Textfield
                                {...params}
                                name={`cidadeNat${index}`}
                                label="Cidade:"
                                placeholder="Cidade"
                                value={socio.cidadeNat}
                                onChange={(e) => {
                                  socio.cidadeNat = e.target.value
                                  setStep3([...step3])
                                }}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                inputProps={{
                                  ...params.inputProps,
                                  style: { height: 17 },
                                  autoComplete: 'new-password',
                                }}
                              />}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Textfield
                            name={`nomePai${index}`}
                            label="Nome do Pai"
                            placeholder="Nome do Pai"
                            value={step3.nomePai}
                            onChange={(e) => {
                              socio.nomePai = e.target.value
                              setStep3([...step3])
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Textfield
                            name={`nomeMae${index}`}
                            label="Nome da Mãe"
                            placeholder="Nome da Mãe"
                            value={step3.nomeMae}
                            onChange={(e) => {
                              socio.nomeMae = e.target.value
                              setStep3([...step3])
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Autocomplete
                            autoSelect
                            noOptionsText='Sem opções'
                            options={socio.sexo === '' ? [{}] : nacionalidadeJSON}
                            getOptionLabel={(option) => {
                              if (socio.sexo === '') {
                                return ''
                              } else if (socio.sexo === 'Feminino') {
                                return option.Feminino
                              } else {
                                return option.Masculino
                              }
                            }}
                            onBlur={(e) => {
                              const valida = nacionalidadeJSON.filter((option) => {
                                if (socio.sexo === 'Masculino') {
                                  return option.Masculino === e.target.value
                                } else if (socio.sexo === 'Feminino') {
                                  return option.Feminino === e.target.value
                                } else {
                                  return false
                                }
                              })
                              if (valida?.length !== 0) {
                                socio.nacionalidadeContratante = e.target.value
                                socio.nacionalidadeContratanteErro = false
                                setStep3([...step3])
                              } else {
                                socio.nacionalidadeContratante = ''
                                socio.nacionalidadeContratanteErro = true
                                setStep3([...step3])
                              }
                            }}
                            inputValue={socio.nacionalidadeContratante}
                            onChange={(e, v) => {
                              if (v) {
                                if (socio.sexo === 'Masculino') {
                                  socio.nacionalidadeContratante = v.Masculino
                                  setStep3([...step3])
                                } else if (socio.sexo === 'Feminino') {
                                  socio.nacionalidadeContratante = v.Feminino
                                  setStep3([...step3])
                                } else {
                                  socio.nacionalidadeContratante = ''
                                  setStep3([...step3])
                                }
                              } else {
                                socio.nacionalidadeContratante = ''
                                setStep3([...step3])
                              }
                            }}
                            renderOption={(option, { inputValue }) => {
                              const matches = match((socio.sexo === 'Masculino' ? option.Masculino : option.Feminino), inputValue);
                              const parts = parse((socio.sexo === 'Masculino' ? option.Masculino : option.Feminino), matches);
                              return (
                                <div>
                                  {parts.map((part, index) => (
                                    <span style={{ fontWeight: part.highlight ? 700 : 400 }}>
                                      {part.text}
                                    </span>
                                  ))}
                                </div>
                              )
                            }}
                            renderInput={(params) =>
                              <Textfield {...params}
                                name={`nacionalidade${index}`}
                                label="Nacionalidade"
                                placeholder="brasileiro(a)"
                                value={socio.nacionalidade}
                                onChange={(e) => {
                                  socio.nacionalidade = e.target.value
                                  setStep3([...step3])
                                }}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                inputProps={{
                                  ...params.inputProps,
                                  style: { height: 17 },
                                  autoComplete: 'new-password',
                                }}
                                variant="outlined"
                                className={classes.paper}
                                error={socio.nacionalidadeContratanteErro}
                                helperText={socio.nacionalidadeContratanteErro ? 'Campo obrigatório' : ''}
                              />}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                          <Textfield
                            name={`estCivil${index}`}
                            label="Estado Civil"
                            placeholder="Estado Civil"
                            value={socio.estCivil}
                            onChange={(e) => {
                              socio.estCivil = e.target.value
                              setStep3([...step3])
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Textfield
                            name={`profissao${index}`}
                            label="Profissão/Cargo Profissional"
                            placeholder="Profissão/Cargo Profissional"
                            value={socio.profissao}
                            onChange={(e) => {
                              socio.profissao = e.target.value
                              setStep3([...step3])
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Textfield
                            name={`dataNasc${index}`}
                            type="date"
                            placeholder="Insira a data de nascimento"
                            value={socio.dataNasc}
                            onChange={(e) => {
                              socio.dataNasc = e.target.value
                              setStep3([...step3])
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Textfield
                            name={`maioridade${index}`}
                            label="Maioridade"
                            placeholder="Maioridade"
                            value={socio.maioridade}
                            onChange={(e) => {
                              socio.maioridade = e.target.value
                              setStep3([...step3])
                            }}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                          <Textfield
                            name={`rg${index}`}
                            label="RG"
                            placeholder="Informe o RG"
                            value={socio.rg}
                            onChange={(e) => {
                              socio.rg = e.target.value
                              setStep3([...step3])
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Textfield
                            name={`orgEmissor${index}`}
                            label="Órgão Exp./Emissor"
                            placeholder="Órgão Exp./Emissor do RG"
                            value={socio.orgEmissor}
                            onChange={(e) => {
                              socio.orgEmissor = e.target.value
                              setStep3([...step3])
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Textfield
                            name={`cpf${index}`}
                            label="CPF"
                            placeholder="Informe o CPF"
                            value={socio.cpf}
                            onChange={(e) => {
                              socio.cpf = e.target.value
                              setStep3([...step3])
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Textfield
                            name={`cep${index}`}
                            label="CEP"
                            placeholder="Informe o CEP"
                            value={socio.cep}
                            onChange={(e) => {
                              socio.cep = e.target.value
                              setStep3([...step3])
                            }}
                            onBlur={onBlurCep}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Textfield
                            name={`cidade${index}`}
                            label="Cidade"
                            placeholder="Cidade"
                            value={socio.cidade}
                            onChange={(e) => {
                              socio.cidade = e.target.value
                              setStep3([...step3])
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Textfield
                            name={`uf${index}`}
                            label="UF"
                            style={{ margin: 8 }}
                            placeholder="UF"
                            value={socio.uf}
                            onChange={(e) => {
                              socio.uf = e.target.value
                              setStep3([...step3])
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Textfield
                            name={`logradouro${index}`}
                            label="Logradouro"
                            placeholder="Rua/Av"
                            value={socio.logradouro}
                            onChange={(e) => {
                              socio.logradouro = e.target.value
                              setStep3([...step3])
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} >
                          <Textfield
                            name={`numero${index}`}
                            label="Número"
                            placeholder="N°"
                            value={socio.numero}
                            onChange={(e) => {
                              socio.numero = e.target.value
                              setStep3([...step3])
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Textfield
                            name={`bairro${index}`}
                            label="Bairro"
                            placeholder="Bairro"
                            value={socio.bairro}
                            onChange={(e) => {
                              socio.bairro = e.target.value
                              setStep3([...step3])
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Textfield
                            name={`telSocio${index}`}
                            label="Telefone/Celular"
                            placeholder="Telefone/Celular"
                            value={socio.telSocio}
                            onChange={(e) => {
                              socio.telSocio = e.target.value
                              setStep3([...step3])
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Textfield
                            name={`telSocioOpt${index}`}
                            label="Telefone/Celular (Opcional)"
                            placeholder="Telefone/Celular (Opcional)"
                            value={step3.telSocioOpt}
                            onChange={(e) => {
                              socio.telSocioOpt = e.target.value
                              setStep3([...step3])
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Textfield
                            name={`emailSocio${index}`}
                            label="E-mail"
                            placeholder="E-mail"
                            value={socio.emailSocio}
                            onChange={(e) => {
                              socio.emailSocio = e.target.value
                              setStep3([...step3])
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Textfield
                            name={`quotas${index}`}
                            label="Quotas"
                            placeholder="Quotas"
                            value={socio.quotas}
                            onChange={(e) => {
                              socio.quotas = e.target.value
                              setStep3([...step3])
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Textfield
                            name={`pctQuotas${index}`}
                            label="% Quotas"
                            placeholder="% Quotas"
                            value={socio.pctQuotas}
                            onChange={(e) => {
                              socio.pctQuotas = e.target.value
                              setStep3([...step3])
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Textfield
                            name={`funcao${index}`}
                            label="Função"
                            placeholder="Administrador/Quotista"
                            value={socio.funcao}
                            onChange={(e) => {
                              socio.funcao = e.target.value
                              setStep3([...step3])
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Textfield
                            name={`somenteEspecie${index}`}
                            select
                            label={`Somente em Espécie?`}
                            rows={4}
                            value={socio.somenteEspecie}
                            onChange={(e) => {
                              socio.somenteEspecie = e.target.value
                              setStep3([...step3])
                            }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            inputProps={{
                              style: { height: 17 },
                              autoComplete: 'new-password',
                            }}
                            SelectProps={{
                              native: true
                            }}
                            variant="outlined"
                            className={classes.paper}
                          >
                            <option key={'option1'} value={'1'}>
                              1 - Sim
                                </option>
                            <option key={'option2'} value={'2'}>
                              2 - Não
                                </option>
                          </Textfield>
                        </Grid>
                      </Grid>
                      <Divider className={classes.divider} key={`Divider${index}`} />
                    </div>
                  ))

                }
                <Button
                  disabled={step3.length > 26}
                  variant="outlined"
                  size="medium"
                  style={{ marginLeft: 15 }}
                  name="newSocio"
                  color="primary"
                  className={classes.buttonAdd}
                  key="newSocio"
                  id="newSocio"
                  startIcon={<AddCircleIcon />}
                  onClick={handleNewSocio}
                >
                  Adicionar Sócio
                      </Button>
                {/* </div> */}
                {/* }
              } */}


                {/* </FieldArray> */}
              </Form>
            )}
          </Formik>
        </div>
      </Grid>
    </Grid >
  );
};

export default DadosSocio;