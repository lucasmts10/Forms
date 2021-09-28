import React from 'react';

import DadosComarca, { COMARCA_STATE, COMARCA_VALIDATION } from './steps/Comarca';
import DadosContrato, { initialValuesContract, validationContract } from './steps/Contrato';
import DadosEmpresa, { EMP_STATE, EMP_VALIDATION } from './steps/Empresa';
import DadosSocio, { SOCIO_STATE, SOCIO_VALIDATION } from './steps/Socio';
import DadosTestemunhas, { TESTEMUNHA_STATE, TESTEMUNHA_VALIDATION } from './steps/Testemunhas';
import ClausulaAdicional, { CL_AD_STATE, CL_AD_VALIDATION } from './steps/clAdicional';


import MultiStepForm, { FormStep } from './MultiStepForm';
import { Typography } from '@material-ui/core';

export default function Form2() {
  return (
    <div>
      <Typography>
        <h2 align="center">Constituição de Empresa Simples Limitada</h2>
      </Typography>
      <MultiStepForm
        initialValues={{
          ...initialValuesContract,
          ...EMP_STATE,
          // ...SOCIO_STATE,
          ...COMARCA_STATE,
          ...TESTEMUNHA_STATE,
          ...CL_AD_STATE
        }}
        onSubmit={async values =>
          console.log('Multi-step-form submit', values)
        }
      >
        <FormStep
          stepName="Dados do Contrato"
          onSubmit={(values) => console.log('Contrato onSubmit')}
          validationSchema={validationContract}
        >
          <DadosContrato />
        </FormStep>

        <FormStep
          stepName="Dados da Empresa"
          onSubmit={(values) => console.log('Empresa onSubmit')}
          validationSchema={EMP_VALIDATION}
        >
          <DadosEmpresa />
        </FormStep>

        <FormStep
          stepName="Dados dos(as) Sócios(as)"
          onSubmit={(values) => console.log('Socios onSubmit')}
          validationSchema={SOCIO_VALIDATION}
        >
          {/* <DadosSocio /> */}
          <div>
            <p>Dados dos(as) Sócios(as):</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            <p>Dados dos(as) Sócios(as):</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
            <p>asdfasdf</p>
          </div>
        </FormStep>

        <FormStep
          onSubmit={() => console.log('Comarca onSubmit')}
          validationSchema={COMARCA_VALIDATION}
          stepName="Dados da Comarca"
        >
          <DadosComarca />
        </FormStep>
        <FormStep
          onSubmit={() => console.log('Testesmunhas onSubmit')}
          validationSchema={TESTEMUNHA_VALIDATION}
          stepName="Dados das Testemunhas"
        >
          <DadosTestemunhas />
        </FormStep>

        <FormStep
          onSubmit={() => console.log('ClAdicional onSubmit')}
          validationSchema={CL_AD_VALIDATION}
          stepName="Cláusulas Adicionais"
        >
          <ClausulaAdicional />
        </FormStep>
      </MultiStepForm>
    </div>
  );
}