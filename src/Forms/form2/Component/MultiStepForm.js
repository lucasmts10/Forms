import React, { useState } from 'react';
import { Form, Formik } from 'formik';

import { makeStyles } from '@material-ui/core/styles';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';

import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import StepperProvider from './stepperContext';
import { useStepperContext } from './stepperContext';

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

// Wizard is a single Formik instance whose children are each page of the
// multi-step form. The form is submitted on each forward transition (can only
// progress with valid input), whereas a backwards step is allowed with
// incomplete data. A snapshot of form state is used as initialValues after each
// transition. Each page has an optional submit handler, and the top-level
// submit is called when the final page is submitted.
const MultiStepForm = ({ children, initialValues, onSubmit }) => {
    const classes = useStyles();
    const [stepNumber, setStepNumber] = useState(0);
    const steps = React.Children.toArray(children);
    const [snapshot, setSnapshot] = useState(initialValues);

    const step = steps[stepNumber];
    const totalSteps = steps.length;

    // const handleSubmit = async (values, actions) => {
    //     if (step.props.onSubmit) {
    //         await step.props.onSubmit(values, actions);
    //     }
    //     if (isLastStep()) {
    //         return onSubmit(values, actions);
    //     } else {
    //         actions.setTouched({});
    //         handleNext(values);
    //     }
    // };

    const [completed, setCompleted] = React.useState(new Set());
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 5;
    };

    const handleSkip = () => {
        if (!isStepOptional(stepNumber)) {
            // You probably want to guard against something like this
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setStepNumber((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(stepNumber);
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
        return completedSteps() === totalSteps - skippedSteps();
    };

    const isLastStep = () => {
        return stepNumber === totalSteps - 1;
    };

    const handleNext = (values) => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed
                // find the first step that has been completed
                steps.findIndex((_, i) => !completed.has(i))
                : stepNumber + 1;

        setSnapshot(values);
        setStepNumber(newActiveStep);
    };

    const handleBack = (event, values) => {
        event.preventDefault();
        setSnapshot(values);
        setStepNumber((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step, values) => () => {
        setSnapshot(values);
        setStepNumber(step);
    };

    const handleComplete = (values) => {
        // const newCompleted = new Set(completed);
        // newCompleted.add(stepNumber);
        // setCompleted(newCompleted);

        /**
         * Sigh... it would be much nicer to replace the following if conditional with
         * `if (!this.allStepsComplete())` however state is not set when we do this,
         * thus we have to resort to not being very DRY.
         */
        // if (completed.size !== totalSteps - skippedSteps()) {
        //     handleNext(values);
        // }
    };

    const handleReset = () => {
        setStepNumber(0);
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
        <Formik
            initialValues={snapshot}
            // onSubmit={handleSubmit}
            validationSchema={step.props.validationSchema}
        >
            {formik => (
                <Form autoComplete="off">
                    <StepperProvider>
                        {/* {console.log(formik.values)} */}
                        {/* {console.log('touched',formik.touched)} */}
                        {console.log('errors', formik.errors)}
                        {console.log('snapshot', snapshot)}
                        <div className={classes.root}>

                            <Stepper alternativeLabel nonLinear activeStep={stepNumber}>
                                {steps.map((currentStep, index) => {
                                    const stepProps = {};
                                    const buttonProps = {};
                                    const label = currentStep.props.stepName;
                                    if (isStepOptional(index)) {
                                        buttonProps.optional = <Typography variant="caption">Opcional</Typography>;
                                    }
                                    if (isStepSkipped(index)) {
                                        stepProps.completed = false;
                                    }
                                    return (
                                        <Step key={label} {...stepProps}>
                                            <StepButton
                                                onClick={handleStep(index, formik.values)}
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
                                            Todos os passos completados - você finalizou o formulário para a criação do contrato!
                                    </Typography>
                                        <Button onClick={handleReset}>Resetar</Button>
                                    </div>
                                ) : (
                                        <div>
                                            <Typography className={classes.instructions}>{step}</Typography>
                                            <div>
                                                <Button disabled={stepNumber === 0} onClick={(e) => handleBack(e, formik.values)} className={classes.button}>
                                                    Voltar
                                        </Button>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={() => handleNext(formik.values)}
                                                    className={classes.button}
                                                >
                                                    Próximo
                                        </Button>
                                                {/* <Button onClick={(e) => console.log(formik.values)} className={classes.button}>
                                            Valores
                                        </Button> */}
                                                {isStepOptional(stepNumber) && !completed.has(stepNumber) && (
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={handleSkip}
                                                        className={classes.button}
                                                    >
                                                        Gerar contrato
                                                    </Button>
                                                )}

                                                {/* {stepNumber !== steps.length &&
                                            (completed.has(stepNumber) ? (
                                                <Typography variant="caption" className={classes.completed}>
                                                    O passo {stepNumber + 1} está completo!
                                                </Typography>
                                            ) : (
                                                <Button variant="contained" color="primary" onClick={handleComplete(formik.values)}>
                                                    {completedSteps() === totalSteps - 1 ? 'Finalizar' : 'Completar passo'}
                                                </Button>
                                            ))} */}
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </div >


                        {/* <div style={{ display: 'flex' }}>
                        {stepNumber > 0 && (
                            <button onClick={() => previous(formik.values)} type="button">
                                Back
                            </button>
                        )}
                        <div>
                            <button disabled={formik.isSubmitting} type="submit">
                                {isLastStep() ? 'Submit' : 'Next'}
                            </button>
                        </div>
                    </div> */}
                    </StepperProvider>
                </Form>
            )}
        </Formik>
    );
};

export const FormStep = ({ stepName = '', children }) => children;
/*
const App = () => (
  <div>
                <h1>Formik Multistep Wizard</h1>
                <Wizard
                    initialValues={{
                        email: '',
                        firstName: '',
                        lastName: '',
                    }}
                    onSubmit={async values =>
                        sleep(300).then(() => console.log('Wizard submit', values))
                    }
                >
                    <WizardStep
                        onSubmit={() => console.log('Step1 onSubmit')}
                        validationSchema={Yup.object({
                            firstName: Yup.string().required('required'),
                            lastName: Yup.string().required('required'),
                        })}
                    >
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <Field
                                autoComplete="given-name"
                                component="input"
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                                type="text"
                            />
                            <ErrorMessage className="error" component="div" name="firstName" />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <Field
                                autoComplete="family-name"
                                component="input"
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                type="text"
                            />
                            <ErrorMessage className="error" component="div" name="lastName" />
                        </div>
                    </WizardStep>
                    <WizardStep
                        onSubmit={() => console.log('Step2 onSubmit')}
                        validationSchema={Yup.object({
                            email: Yup.string()
                                .email('Invalid email address')
                                .required('required'),
                        })}
                    >
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field
                                autoComplete="email"
                                component="input"
                                id="email"
                                name="email"
                                placeholder="Email"
                                type="text"
                            />
                            <ErrorMessage className="error" component="div" name="email" />
                        </div>
                    </WizardStep>
                </Wizard>
            </div>
);
*/

export default MultiStepForm;