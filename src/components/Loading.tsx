import React from 'react';
import { CircularProgress } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Wrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-color: rgba(255, 255, 255, 0.2); */
`;

const Progress = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Loading: React.FC = () => (
  <Wrap>
    <Progress isIndeterminate size={30} color="primary" />
  </Wrap>
);
