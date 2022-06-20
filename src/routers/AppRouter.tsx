import { Suspense } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import { Loading } from '@components';

import { routes } from './config';
import { SubRoute } from './components';

export const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Switch>
        {routes.map((route, i) => (
          <SubRoute key={i} {...route} />
        ))}
        <Redirect to={routes[0].path} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);
