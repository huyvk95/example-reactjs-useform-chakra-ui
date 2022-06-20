import { PropsWithChildren } from 'react';

import { Navbar, Sidebar } from './components';
import { Content, Wrap, WrapContent } from './styles';

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <Wrap>
    <Sidebar />
    <WrapContent>
      <Navbar />
      <Content>{children}</Content>
    </WrapContent>
  </Wrap>
);
