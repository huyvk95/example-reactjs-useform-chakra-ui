import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  ModalProps,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';

import { employeesActions, employeesSelector } from '@slices';

export const DeleteConfirmModal: React.FC<Omit<ModalProps, 'children'> & { id?: string }> = ({
  isOpen,
  onClose,
  id,
}) => {
  const dispatch = useDispatch<Dispatch<any>>();
  const transactionDeleteEmployee = useSelector(employeesSelector.selectTransactionDeleteEmployee);
  const [loading, setLoading] = useState(false);

  // * Delete employee
  useEffect(() => {
    const status = transactionDeleteEmployee.type === 'pending';
    setLoading(status);
  }, [transactionDeleteEmployee]);

  useEffect(() => {
    if (transactionDeleteEmployee.type === 'finish') {
      dispatch(employeesActions.resetTransactionDeleteEmployee());
      onClose();
    }
  }, [transactionDeleteEmployee]);

  const onClickDelete = () => {
    if (id) dispatch(employeesActions.deleteEmployee(id));
  };

  return (
    <Modal isOpen={isOpen} onClose={loading ? () => {} : onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete employee</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Are you sure to delete this employee data?</ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose} disabled={loading}>
            Close
          </Button>
          <Button colorScheme="red" onClick={onClickDelete} isLoading={loading}>
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
