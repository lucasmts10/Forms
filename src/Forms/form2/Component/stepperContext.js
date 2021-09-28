import { StepContent } from '@material-ui/core';
import React, { createContext, useState, useContext } from 'react';

import {
  Divider,
  Container,
  Button,
  Grid,
  Typography
} from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DescriptionIcon from '@material-ui/icons/Description';
import PrintIcon from '@material-ui/icons/Print';

export const StepperContext = createContext();

export default function StepperProvider({ children }) {
  const [step1, setStep1] = useState({
    ufContrato: '',
    cidadeContrato: '',
    dataIniContrato: ''
  });
  const [step2, setStep2] = useState({
    nomeEmpresa: '',
    nomeFantasia: '',
    atividade: '',
    dataIniEmp: '',
    cep: '',
    localidade: '',
    uf: '',
    logradouro: '',
    numero: '',
    bairro: '',
    capitalSocial: '',
    quotas: '',
    vlNominalQuotas: '',
    proLabore: '',
    assEmpContratante: '',
    tipoIntegralizacao: []
  });
  const [step3, setStep3] = useState([{
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
  }, {
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
  }]);
  const [step4, setStep4] = useState({
    ufComarca: '',
    cidadeComarca: ''
  });
  const [step5, setStep5] = useState({
    nomeTestemunha1: '',
    rgTestemunha1: '',
    orgaoEmissor1: '',
    cpfTestemunha1: '',
    nomeTestemunha2: '',
    rgTestemunha2: '',
    orgaoEmissor2: '',
    cpfTestemunha2: ''
  });
  const [step6, setStep6] = useState({
    clAdiconal: ''
  });

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if ((
      //Valida campos vazios (necessário para evitar inicializar todas as variaveis de "Erro" como "true" e carregar tela com todos os campos com erro)
      !step1.ufContrato ||
      !step1.cidadeContrato ||
      !step1.dataIniContrato
    )) {
      setOpen(false)
      alert("Preencha todos os dados corretamente para visualizar o contrato!")
    } else {
      setOpen(true)
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleWindowMedia = () => {
    if (window.matchMedia("(max-width: 1029px)").matches) {
      return 'lg'
    } else {
      return false
    }
  }

  const contratoImp = () => {
    let mywindow = window.open('', '', 'height=700,width=900')
    mywindow.document.write(`${step1.ufContrato} tetetetete ${step1.cidadeContrato} asdfasdfa sdf ${step1.dataIniContrato}`)

    return true;
  };

  return (
    <StepperContext.Provider value={{
      step1, setStep1, step2, setStep2, step3, setStep3,
      step4, setStep4, step5, setStep5, step6, setStep6
    }} >
      {children}
      <form>
        <Button
          variant="contained"
          size="large"
          name="gerarContrato"
          color="primary"
          id="gerarContrato"
          startIcon={<DescriptionIcon />}
          onClick={handleOpen}
        >
          Gerar Contrato
        </Button>
        {open ? (
          <Dialog
            open={open}
            onClose={handleClose}
            scroll='paper'
            aria-describedby="scroll-dialog-description"
            maxWidth={handleWindowMedia}
            disableBackdropClick
          >
            <DialogContent dividers>
              <DialogContentText id="scroll-dialog-description">
                {step1.ufContrato} tetetetete ${step1.cidadeContrato} asdfasdfa sdf {step1.dataIniContrato}
                Nome empresa: {step2.nomeEmpresa}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="contained" color="primary" startIcon={<ArrowBackIcon />}>
                Voltar
                      </Button>
              <Button onClick={contratoImp} variant="contained" color="primary" startIcon={<PrintIcon />}>
                Imprimir
                       </Button>
            </DialogActions>
          </Dialog>
        ) : null
        }
      </form>
    </StepperContext.Provider >
  );
}

export const useStepperContext = () => {
  return useContext(StepperContext);
}