import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button } from '@chakra-ui/react';

import { EMPLOYEE_ROUTERS, ROUTERS } from '@constants';
import { useSelector } from 'react-redux';
import { employeesSelector } from '@slices';

const Wrap = styled.div``;

const WrapTableHead = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const TableColumnActions = styled(Td)`
  & > *:not(:last-child) {
    margin-right: 5px;
  }
`;

export const EmployeeList: React.FC = () => {
  const history = useHistory();
  const employees = useSelector(employeesSelector.selectEmployeesData);

  const onClickAdd = () => history.push(`${ROUTERS.EMPLOYEE}${EMPLOYEE_ROUTERS.ADD}`);

  const onClickEdit = (id: string) => {
    console.log(id);
  };

  const onClickDelete = (id: string) => {
    console.log(id);
  };

  return (
    <Wrap>
      <WrapTableHead>
        <Button bg="primary" color="white" colorScheme="purple" onClick={onClickAdd}>
          Add
        </Button>
      </WrapTableHead>
      <TableContainer>
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
      </TableContainer>
    </Wrap>
  );
};
