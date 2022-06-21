import { PageProps } from '@types';

import { EmployeeList } from './components';
import { Wrap } from './styles';

export const PageListEmployee: React.FC<PageProps> = () => (
  <Wrap>
    <EmployeeList />
  </Wrap>
);
