import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
import { Switch, Route, RouteComponentProps, Redirect } from 'react-router-dom';

import { Overwrite, RouteItem } from '@types';

const SingerRoute: React.FC<RouteComponentProps & RouteItem> = ({ component: Component, ...props }) =>
  Component ? <Component {...props} /> : null;

const MultiRoute: React.FC<RouteComponentProps & Overwrite<RouteItem, { routes: RouteItem[] }>> = ({
  component: Component,
  routes,
  path,
  ...props
}) => {
  const generateWrap: React.FC<PropsWithChildren> = ({ children }) =>
    Component ? (
      <Component {...props}>{children}</Component>
    ) : (
      <div {...(props as DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>)}>{children}</div>
    );

  return generateWrap({
    children: (
      <Switch>
        {routes.map((propsRoute) => (
          <SingerRoute {...props} {...propsRoute} key={propsRoute.path} />
        ))}
        <Redirect to={routes[0].path} />
      </Switch>
    ),
  });
};

export const SubRoute: React.FC<RouteItem> = (props) => (
  <Route
    path={props.path}
    render={(propsRoute) =>
      props.routes ? (
        <MultiRoute {...propsRoute} {...props} routes={props.routes} />
      ) : (
        <SingerRoute {...propsRoute} {...props} />
      )
    }
  />
);
