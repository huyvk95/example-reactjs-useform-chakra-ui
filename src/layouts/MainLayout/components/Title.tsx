import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';

import { appActions, appSelector } from '@slices';
import { routes } from '@routers';

export const Wrap = styled.h1`
  font-size: 1.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const title = useSelector(appSelector.selectRouterTitle);

  useEffect(() => {
    const routeData = routes.find((route) => location.pathname.includes(route.path));
    const subRouteData = routeData?.routes?.find((route) =>
      location.pathname.includes(route.path.replace(/\/\:\w+/g, '')),
    );
    const routeTitle = subRouteData?.title || routeData?.title;
    dispatch(appActions.setRouterTitle(routeTitle));
  }, [location]);

  return <Wrap>{title}</Wrap>;
};
