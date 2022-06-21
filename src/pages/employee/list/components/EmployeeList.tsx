import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button } from '@chakra-ui/react';
import type { Dispatch } from '@reduxjs/toolkit';

import { Empty, Loading } from '@components';
import { EMPLOYEE_ROUTERS, ROUTERS } from '@constants';
import { employeesActions, employeesSelector } from '@slices';

import { DeleteConfirmModal } from './DeleteConfirmModal';

const Wrap = styled.div`
  position: relative;
  min-height: 400px;
`;

const WrapTableHead = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const WrapTable = styled(TableContainer)``;

const TableColumnActions = styled(Td)`
  & > *:not(:last-child) {
    margin-right: 5px;
  }
`;

export const EmployeeList: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch<Dispatch<any>>();
  const employees = useSelector(employeesSelector.selectEmployeesData);
  const transactionGetEmployees = useSelector(employeesSelector.selectTransactionGetEmployees);
  const [deletingId, setDeletingId] = useState<string>();
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(employeesActions.getEmployees());
  }, []);

  // * Get employee
  useEffect(() => {
    setIsLoading(transactionGetEmployees.type === 'pending');
  }, [transactionGetEmployees]);

  useEffect(() => {
    if (transactionGetEmployees.type === 'finish') dispatch(employeesActions.resetTransactionGetEmployees());
  }, [transactionGetEmployees]);

  const onClickAdd = () => history.push(`${ROUTERS.EMPLOYEE}${EMPLOYEE_ROUTERS.ADD}`);

  const onClickEdit = (id: string) => history.push(`${ROUTERS.EMPLOYEE}${EMPLOYEE_ROUTERS.EDIT}/${id}`);

  const onClickDelete = (id: string) => {
    setDeletingId(id);
  };

  if (!loading && !employees.length) return <Empty button={{ title: 'Add', onClick: onClickAdd }} />;

  return (
    <Wrap>
      {loading && <Loading />}
      {Boolean(employees.length) && (
        <>
          <WrapTableHead>
            <Button bg="primary" color="white" colorScheme="purple" onClick={onClickAdd}>
              Add
            </Button>
          </WrapTableHead>
          <WrapTable>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>First name</Th>
                  <Th>Last name </Th>
                  <Th>Email address</Th>
                  <Th>Phone number</Th>
                  <Th>Gender </Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {employees.map((employee) => (
                  <Tr key={employee.id}>
                    <Td>{employee.firstName}</Td>
                    <Td>{employee.lastName}</Td>
                    <Td>{employee.emailAddress}</Td>
                    <Td>{employee.phoneNumber}</Td>
                    <Td>{employee.gender}</Td>
                    <TableColumnActions>
                      <Button colorScheme="teal" onClick={() => onClickEdit(employee.id)}>
                        Edit
                      </Button>
                      <Button colorScheme="red" onClick={() => onClickDelete(employee.id)}>
                        Delete
                      </Button>
                    </TableColumnActions>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </WrapTable>
        </>
      )}
      <DeleteConfirmModal isOpen={Boolean(deletingId)} onClose={() => setDeletingId(undefined)} id={deletingId} />
    </Wrap>
  );
};
