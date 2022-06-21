import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button } from '@chakra-ui/react';

import { EmployeeModel } from '@types';
import { EMPLOYEE_ROUTERS, ROUTERS, Gender } from '@constants';

const datas: EmployeeModel[] = [
  {
    id: '12312asdasdjal',
    emailAddress: 'haasjdh@gmail.com',
    firstName: 'Vajsd LKjasd akjsdla',
    lastName: 'Vajsd LKjasd akjsdla',
    gender: Gender.FEMALE,
    phoneNumber: '0123456789',
  },
];

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
            {datas.map((data) => (
              <Tr key={data.id}>
                <Td>{data.firstName}</Td>
                <Td>{data.lastName}</Td>
                <Td>{data.emailAddress}</Td>
                <Td>{data.phoneNumber}</Td>
                <Td>{data.gender}</Td>
                <TableColumnActions>
                  <Button colorScheme="teal" onClick={() => onClickEdit(data.id)}>
                    Edit
                  </Button>
                  <Button colorScheme="red" onClick={() => onClickDelete(data.id)}>
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
