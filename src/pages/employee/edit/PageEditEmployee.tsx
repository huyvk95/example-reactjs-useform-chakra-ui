import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { api } from '@services';
import { employeesSelector } from '@slices';
import type { EmployeeModel, PageProps } from '@types';

export const PageEditEmployee: React.FC<PageProps> = (props) => {
  const employeeId = (props.computedMatch?.params as { id: string })?.id;
  const employees = useSelector(employeesSelector.selectEmployeesData);
  const [employee, setEmployee] = useState<EmployeeModel | null>();

  const getEmployeeData = async (id: string) => {
    let employeeData = employees.find((data) => data.id === employeeId) || null;
    if (!employeeData) employeeData = await api.getEmployee(id);
    setEmployee(employeeData);
  };

  useEffect(() => {
    getEmployeeData(employeeId);
  }, [employeeId]);

  return <div>PageEditEmployee</div>;
};
