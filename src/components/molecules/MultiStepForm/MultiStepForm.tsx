import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { IMultiStepForm } from './MultiStep.model';
import MultiStepFormBody from './MultiStepFormBody';

const MultiStepForm = ({
  children,
  title,
  onNext,
  onBack,
  onSubmit,
  onCancel,
  ...props
}: IMultiStepForm): JSX.Element => {
  const methods = useForm();

  return (
    <div style={{ padding: '65px' }} {...props}>
      <FormProvider {...methods}>
        <MultiStepFormBody
          title={title}
          onNext={onNext}
          onBack={onBack}
          onSubmit={onSubmit}
          onCancel={onCancel}
        >
          {children}
        </MultiStepFormBody>
      </FormProvider>
    </div>
  );
};

export default MultiStepForm;
