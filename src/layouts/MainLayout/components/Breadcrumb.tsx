import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { Breadcrumb as UIBreadcrumb, BreadcrumbItem } from '@chakra-ui/react';

const Wrap = styled(UIBreadcrumb)`
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const BreadcrumbLink = styled(Link, { shouldForwardProp: (prop) => isPropValid(prop) })<{ isCurrentPage: boolean }>`
  text-transform: capitalize;
  color: ${({ isCurrentPage, theme }) => (isCurrentPage ? theme.colors.primary : theme.colors.secondary)};
`;

export const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const [paths, setPaths] = useState<string[]>();

  useEffect(() => {
    setPaths(location.pathname.split('/'));
  }, [location]);

  return (
    <Wrap>
      {paths?.map((path, i) => {
        const pathName = i === 0 ? 'home' : path;
        const to = paths.slice(0, i + 1).join('/');
        const isCurrentPage = i === paths.length - 1;

        return (
          <BreadcrumbItem key={i}>
            <BreadcrumbLink to={to} isCurrentPage={isCurrentPage}>
              {pathName}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Wrap>
  );
};
