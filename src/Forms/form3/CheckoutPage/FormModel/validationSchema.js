import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    /*Contrato*/
    ufContrato,
    cidadeContrato,
    dtIniContrato,

    /* Empresa */
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

    /* Socio */
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

    /* Comarca */
    ufComarca,
    cidadeComarca,

    /* Testemunha */
    nomeTest1,
    rgTest1,
    orgExpTest1,
    cpfTest1,
    nomeTest2,
    rgTest2,
    orgExpTest2,
    cpfTest2,
  }
} = checkoutFormModel;

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default [
  /* Contrato */
  Yup.object().shape({
    [ufContrato.name]: Yup.string().required(`${ufContrato.requiredErrorMsg}`),
    [cidadeContrato.name]: Yup.string().required(`${cidadeContrato.requiredErrorMsg}`),
    [dtIniContrato.name]: Yup.string().required(`${dtIniContrato.requiredErrorMsg}`),
  }),

  /* Empresa */
  Yup.object().shape({
    [nomeEmp.name]: Yup.string().required(`${nomeEmp.requiredErrorMsg}`),
    [nomeFantEmp.name]: Yup.string().required(`${nomeFantEmp.requiredErrorMsg}`),
    [atividadeEmp.name]: Yup.string().required(`${atividadeEmp.requiredErrorMsg}`),
    [dtAberEmp.name]: Yup.string().required(`${dtAberEmp.requiredErrorMsg}`),
    [cepEmp.name]: Yup.string().required(`${cepEmp.requiredErrorMsg}`),
    [cidadeEmp.name]: Yup.string().required(`${cidadeEmp.requiredErrorMsg}`),
    [ufEmp.name]: Yup.string().required(`${ufEmp.requiredErrorMsg}`),
    [lgrEmp.name]: Yup.string().required(`${lgrEmp.requiredErrorMsg}`),
    [numEmp.name]: Yup.string().required(`${numEmp.requiredErrorMsg}`),
    [bairroEmp.name]: Yup.string().required(`${bairroEmp.requiredErrorMsg}`),
    [capSocEmp.name]: Yup.string().required(`${capSocEmp.requiredErrorMsg}`),
    [quotasEmp.name]: Yup.string().required(`${quotasEmp.requiredErrorMsg}`),
    [vlNomQuotEmp.name]: Yup.string().required(`${vlNomQuotEmp.requiredErrorMsg}`),
    [proLabore.name]: Yup.string().required(`${proLabore.requiredErrorMsg}`),
    [assAdm.name]: Yup.string().required(`${assAdm.requiredErrorMsg}`),
    [tpInt.name]: Yup.string().required(`${tpInt.requiredErrorMsg}`),
  }),

  /* Socio */
  Yup.object().shape({
    [nomeSoc.name]: Yup.string().required(`${nomeSoc.requiredErrorMsg}`),
    [sexoSoc.name]: Yup.string().required(`${sexoSoc.requiredErrorMsg}`),
    [ufNatSoc.name]: Yup.string().required(`${ufNatSoc.requiredErrorMsg}`),
    [cidadeNatSoc.name]: Yup.string().required(`${cidadeNatSoc.requiredErrorMsg}`),
    [nomePai.name]: Yup.string().required(`${nomePai.requiredErrorMsg}`),
    [nomeMae.name]: Yup.string().required(`${nomeMae.requiredErrorMsg}`),
    [nacSoc.name]: Yup.string().required(`${nacSoc.requiredErrorMsg}`),
    [estCivilSoc.name]: Yup.string().required(`${estCivilSoc.requiredErrorMsg}`),
    [profSoc.name]: Yup.string().required(`${profSoc.requiredErrorMsg}`),
    [dtNascSoc.name]: Yup.string().required(`${dtNascSoc.requiredErrorMsg}`),
    [maioridadeSoc.name]: Yup.string().required(`${maioridadeSoc.requiredErrorMsg}`),
    [rgSoc.name]: Yup.string().required(`${rgSoc.requiredErrorMsg}`),
    [orgExpSoc.name]: Yup.string().required(`${orgExpSoc.requiredErrorMsg}`),
    [cpfSoc.name]: Yup.string().required(`${cpfSoc.requiredErrorMsg}`),
    [cepSoc.name]: Yup.string().required(`${cepSoc.requiredErrorMsg}`),
    [cidadeSoc.name]: Yup.string().required(`${cidadeSoc.requiredErrorMsg}`),
    [ufSoc.name]: Yup.string().required(`${ufSoc.requiredErrorMsg}`),
    [lgrSoc.name]: Yup.string().required(`${lgrSoc.requiredErrorMsg}`),
    [numSoc.name]: Yup.string().required(`${numSoc.requiredErrorMsg}`),
    [bairroSoc.name]: Yup.string().required(`${bairroSoc.requiredErrorMsg}`),
    [telSoc.name]: Yup.string().required(`${telSoc.requiredErrorMsg}`),
    [telOpSoc.name]: Yup.string().required(`${telOpSoc.requiredErrorMsg}`),
    [emailSoc.name]: Yup.string().required(`${emailSoc.requiredErrorMsg}`),
    [quotasSoc.name]: Yup.string().required(`${quotasSoc.requiredErrorMsg}`),
    [pctQuotasSoc.name]: Yup.string().required(`${pctQuotasSoc.requiredErrorMsg}`),
    [funcaoSoc.name]: Yup.string().required(`${funcaoSoc.requiredErrorMsg}`),
    [especieSoc.name]: Yup.string().required(`${especieSoc.requiredErrorMsg}`),
  }),

  /* Comarca */
  Yup.object().shape({
    [ufComarca.name]: Yup.string().required(`${ufComarca.requiredErrorMsg}`),
    [cidadeComarca.name]: Yup.string().required(`${cidadeComarca.requiredErrorMsg}`),
  }),

  /* Testemunhas */
  Yup.object().shape({
    [nomeTest1.name]: Yup.string().required(`${nomeTest1.requiredErrorMsg}`),
    [rgTest1.name]: Yup.string().required(`${rgTest1.requiredErrorMsg}`),
    [orgExpTest1.name]: Yup.string().required(`${orgExpTest1.requiredErrorMsg}`),
    [cpfTest1.name]: Yup.string().required(`${cpfTest1.requiredErrorMsg}`),
    [nomeTest2.name]: Yup.string().required(`${nomeTest2.requiredErrorMsg}`),
    [rgTest2.name]: Yup.string().required(`${rgTest2.requiredErrorMsg}`),
    [orgExpTest2.name]: Yup.string().required(`${orgExpTest2.requiredErrorMsg}`),
    [cpfTest2.name]: Yup.string().required(`${cpfTest2.requiredErrorMsg}`),
  }),
];
