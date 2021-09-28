import React, {useState} from 'react';
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

import useStyles from './styles';

function PaymentDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  const { ufContrato, cidadeContrato, dtIniContrato } = formValues;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if ((
      //Valida campos vazios (necessário para evitar inicializar todas as variaveis de "Erro" como "true" e carregar tela com todos os campos com erro)
      !ufContrato ||
      !cidadeContrato ||
      !dtIniContrato 
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
    mywindow.document.write(`${ufContrato} tetetetete ${cidadeContrato} asdfasdfa sdf ${dtIniContrato}`)

    return true;
  };

  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Dados variaveis:
      </Typography>
      <Typography gutterBottom>{`${ufContrato} ${cidadeContrato}`}</Typography>
      <Typography gutterBottom>{`${dtIniContrato}`}</Typography>

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
                {ufContrato} tetetetete ${cidadeContrato} asdfasdfa sdf {dtIniContrato}
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


    </Grid>
  );
}

export default PaymentDetails;
