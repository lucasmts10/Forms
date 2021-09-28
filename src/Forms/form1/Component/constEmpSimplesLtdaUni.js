import React, { createContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import DadosComarca from './steps/Comarca';
import DadosContrato from './steps/Contrato';
import DadosEmpresa from './steps/Empresa';
import DadosSocio from './steps/Socio';
import DadosTestemunhas from './steps/Testemunhas';
import ClausulaAdicional from './steps/clAdicional';
import StepperProvider from './stepperContext';
import { useStepperContext } from './stepperContext';
export const CountContext = createContext();

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Dados Contrato', 'Dados da Empresa', 'Dados do sócio', 'Dados Comarca', 'Dados das Testemunhas', 'Clásulas Adicionais'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <DadosContrato />;
    case 1:
      return <DadosEmpresa />;
    case 2:
      return <DadosSocio />
    case 3:
      return <DadosComarca />
    case 4:
      return <DadosTestemunhas />
    case 5:
      return <ClausulaAdicional />
    default:
      return 'err';
  }
}

export default function Form1() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set());
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const totalSteps = () => {
    return getSteps().length;
  };

  const isStepOptional = (step) => {
    return step === 5;
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const skippedSteps = () => {
    return skipped.size;
  };

  const completedSteps = () => {
    return completed.size;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps() - skippedSteps();
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed
        // find the first step that has been completed
        steps.findIndex((step, i) => !completed.has(i))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const handleBack = (event) => {
    event.preventDefault();
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = new Set(completed);
    newCompleted.add(activeStep);
    setCompleted(newCompleted);

    /**
     * Sigh... it would be much nicer to replace the following if conditional with
     * `if (!this.allStepsComplete())` however state is not set when we do this,
     * thus we have to resort to not being very DRY.
     */
    if (completed.size !== totalSteps() - skippedSteps()) {
      handleNext();
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted(new Set());
    setSkipped(new Set());
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  function isStepComplete(step) {
    return completed.has(step);
  }

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const buttonProps = {};
          if (isStepOptional(index)) {
            buttonProps.optional = <Typography variant="caption">Opcional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepButton
                onClick={handleStep(index)}
                completed={isStepComplete(index)}
                {...buttonProps}
              >
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              Todos os passos completados - você &apos; finalizou a criação do contrato!
            </Typography>
            <Button onClick={handleReset}>Resetar</Button>
          </div>
        ) : (
            <div>
              <StepperProvider>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              </StepperProvider>
              <div>
                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  Voltar
              </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  Próximo
              </Button>
                {isStepOptional(activeStep) && !completed.has(activeStep) && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSkip}
                    className={classes.button}
                  >
                    Gerar contrato
                  </Button>
                )}

                {activeStep !== steps.length &&
                  (completed.has(activeStep) ? (
                    <Typography variant="caption" className={classes.completed}>
                      O passo {activeStep + 1} está completo!
                    </Typography>
                  ) : (
                      <Button variant="contained" color="primary" onClick={handleComplete}>
                        {completedSteps() === totalSteps() - 1 ? 'Finalizar' : 'Completar passo'}
                      </Button>
                    ))}
              </div>
            </div>
          )}
      </div>
    </div >
  );
}