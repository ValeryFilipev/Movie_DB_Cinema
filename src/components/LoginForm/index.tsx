import React from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

import { H1 } from '../ui/Typography/Heading';
import { LoginFormProps, LoginFormValues } from '../Authentication/types';
import Button from '../ui/Elements/Button/Buttons';
import Box from '../ui/Layout/Box';
import { Text, TextType } from '../ui/Typography/Text';
import { FormContainer, StyledForm } from '../ui/Form/Elements';
import FormikInput from '../ui/Form/Input';

const initialValues: LoginFormValues = {
  email: '',
  password: ''
};

const loginSchema = yup.object().shape<LoginFormValues>({
  email: yup
    .string()
    .min(3, 'Too short')
    .required('Required'),
  password: yup
    .string()
    .min(6, 'Too short')
    .required('Required')
});

const LoginForm: React.FunctionComponent<LoginFormProps> = ({
  onSubmit,
  goToSignup
}) => (
  <FormContainer>
    <H1>Login</H1>
    <Formik
      validationSchema={loginSchema}
      initialValues={initialValues}
      isInitialValid={false}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isSubmitting, isValid }) => (
        <StyledForm onSubmit={handleSubmit}>
          <Field name='email' label='Email' component={FormikInput} />
          <Field name='password' label='Password' component={FormikInput} type='password' />
          <Button
            variant='secondary'
            disabled={isSubmitting || !isValid}
            type='submit'
            mb={3}
            width={100}
            loading={isSubmitting}
          >
            Login
          </Button>
          <Box display='flex' flexWrap='wrap' width='auto'>
            <Text mr={2}>Don&apos;t have an account?</Text>
            <Text type={TextType.INTERACTIVE} onClick={goToSignup}>
              create now
            </Text>
          </Box>
        </StyledForm>
      )}
    </Formik>
  </FormContainer>
);

export default LoginForm;
