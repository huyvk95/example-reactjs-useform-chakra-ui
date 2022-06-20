import { PropsWithChildren } from 'react';

import { Breadcrumb, Navbar, Sidebar } from './components';
import { Content, Title, Wrap, WrapContent } from './styles';

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <Wrap>
    <Sidebar />
    <WrapContent>
      <Navbar />
      <Content>
        <Title>Welcome To Dashboard</Title>
        <Breadcrumb />
        {children}
      </Content>
    </WrapContent>
  </Wrap>
);
