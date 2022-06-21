import { EmployeeModel } from '@types';

export type Props = {
  buttonTitle: string;
  onSubmit: (value: any) => void;
  loading?: boolean;
  data?: EmployeeModel;
};
