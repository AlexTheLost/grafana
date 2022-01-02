import React from 'react';
import { LoadingPlaceholder } from '@grafana/ui';
import { Page } from './Page';

export interface Props {
  text?: string;
}

export const Loader = ({ text = 'Загрузка...' }: Props) => {
  return (
    <Page>
      <div className="page-loader-wrapper">
        <LoadingPlaceholder text={text} />
      </div>
    </Page>
  );
};
