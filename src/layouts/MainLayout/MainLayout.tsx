import { PropsWithChildren } from 'react';

import { PageProps } from '@types';

import { Breadcrumb, Navbar, Sidebar, Title } from './components';
import { Content, Wrap, WrapContent } from './styles';

export const MainLayout: React.FC<PropsWithChildren<PageProps>> = ({ children }) => (
  <Wrap>
    <Sidebar />
    <WrapContent>
      <Navbar />
      <Content>
        <Title />
        <Breadcrumb />
        {children}
      </Content>
    </WrapContent>
  </Wrap>
);
