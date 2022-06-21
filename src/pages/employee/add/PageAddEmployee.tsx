import { Dispatch } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

import { EMPLOYEE_ROUTERS, ROUTERS } from '@constants';
import { EmployeeFormContent } from '@contents';
import { employeesActions, employeesSelector } from '@slices';
import type { EmployeeModel, PageProps } from '@types';

export const PageAddEmployee: React.FC<PageProps> = () => {
  const toast = useToast();
  const history = useHistory();
  const dispatch = useDispatch<Dispatch<any>>();
  const transactionAddEmployee = useSelector(employeesSelector.selectTransactionAddEmployee);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(transactionAddEmployee.type === 'pending');
  }, [transactionAddEmployee]);

  useEffect(() => {
    if (transactionAddEmployee.type === 'finish') {
      dispatch(employeesActions.resetTransactionAddEmployee());
      history.push(`${ROUTERS.EMPLOYEE}${EMPLOYEE_ROUTERS.LIST}`);

      toast({
        title: 'Employee created.',
        status: 'success',
        isClosable: true,
      });
    }
  }, [transactionAddEmployee]);

  const onSubmit = async (value: EmployeeModel) => {
    dispatch(employeesActions.addEmployee(value));
  };

  return <EmployeeFormContent buttonTitle="Submit" onSubmit={onSubmit} loading={loading} />;
};
