import React, { FC, ReactElement } from 'react';
import { selectors } from '@grafana/e2e-selectors';

import { FormModel } from './LoginCtrl';
import { Button, Form, Input, Field } from '@grafana/ui';
import { css } from '@emotion/css';
import { PasswordField } from '../PasswordField/PasswordField';

interface Props {
  children: ReactElement;
  onSubmit: (data: FormModel) => void;
  isLoggingIn: boolean;
  passwordHint: string;
  loginHint: string;
}

const wrapperStyles = css`
  width: 100%;
`;

export const submitButton = css`
  justify-content: center;
  width: 100%;
`;

export const LoginForm: FC<Props> = ({ children, onSubmit, isLoggingIn, passwordHint, loginHint }) => {
  return (
    <div className={wrapperStyles}>
      <Form onSubmit={onSubmit} validateOn="onChange">
        {({ register, errors }) => (
          <>
            <Field label={undefined} invalid={!!errors.user} error={errors.user?.message}>
              <Input
                {...register('user', { required: 'Необходимо ввести имя пользователя' })}
                autoFocus
                autoCapitalize="none"
                placeholder={'Имя пользователя'}
                aria-label={selectors.pages.Login.username}
              />
            </Field>
            <Field label={undefined} invalid={!!errors.password} error={errors.password?.message}>
              <PasswordField
                id="current-password"
                autoComplete="current-password"
                passwordHint={'Пароль'}
                {...register('password', { required: 'Необходимо ввести пароль' })}
              />
            </Field>
            <br></br>
            <Button aria-label={selectors.pages.Login.submit} className={submitButton} disabled={isLoggingIn}>
              {isLoggingIn ? 'Вход...' : 'Войти'}
            </Button>
            {children}
          </>
        )}
      </Form>
    </div>
  );
};
