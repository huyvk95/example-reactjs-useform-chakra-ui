import { PropsWithChildren } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;

export type RouteItem = {
  path: string;
  title?: string;
  component?: React.LazyExoticComponent<React.FC<PageProps>> | React.FC<PropsWithChildren<PageProps>>;
  routes?: RouteItem[];
};

export type PageProps = RouteComponentProps & {
  routes?: RouteItem[];
  computedMatch?: Pick<RouteComponentProps, 'match'>['match'];
};

export type ErrorType = {
  code: number;
  message: string;
};

export type Transaction = {
  type: 'created' | 'pending' | 'finish';
  error?: ErrorType;
};
