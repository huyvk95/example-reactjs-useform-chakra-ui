import { useState, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { Dispatch } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { api } from '@services';
import { Loading } from '@components';
import { EmployeeFormContent } from '@contents';
import { EMPLOYEE_ROUTERS, ROUTERS } from '@constants';
import { employeesActions, employeesSelector } from '@slices';
import type { EmployeeModel, PageProps } from '@types';

export const PageEditEmployee: React.FC<PageProps> = (props) => {
  const toast = useToast();
  const history = useHistory();
  const dispatch = useDispatch<Dispatch<any>>();
  const employeeId = (props.computedMatch?.params as { id: string })?.id;
  const employees = useSelector(employeesSelector.selectEmployeesData);
  const transactionUpdateEmployee = useSelector(employeesSelector.selectTransactionUpdateEmployee);
  const [employee, setEmployee] = useState<EmployeeModel>();
  const [loading, setLoading] = useState<boolean>(false);
  const [isFetchingData, setIsFetchingData] = useState<boolean>(false);

  const getEmployeeData = async (id: string) => {
    try {
      let employeeData = employees.find((data) => data.id === employeeId);
      if (!employeeData) {
        setIsFetchingData(true);
        employeeData = (await api.getEmployee(id)) || undefined;
      }
      setEmployee(employeeData);
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
    } finally {
      setIsFetchingData(false);
    }
  };

  const onSubmit = (value: EmployeeModel) => {
    dispatch(employeesActions.updateEmployee(value));
  };

  useEffect(() => {
    setLoading(transactionUpdateEmployee.type === 'pending');
  }, [transactionUpdateEmployee]);

  useEffect(() => {
    if (transactionUpdateEmployee.type === 'finish') {
      dispatch(employeesActions.resetTransactionUpdateEmployee());
      history.push(`${ROUTERS.EMPLOYEE}${EMPLOYEE_ROUTERS.LIST}`);

      toast({
        title: 'Employee updated.',
        status: 'success',
        isClosable: true,
      });
    }
  }, [transactionUpdateEmployee]);

  useEffect(() => {
    getEmployeeData(employeeId);
  }, [employeeId]);

  return (
    <>
      {isFetchingData && <Loading />}
      <EmployeeFormContent buttonTitle="OK" onSubmit={onSubmit} data={employee} loading={loading} />
    </>
  );
};
