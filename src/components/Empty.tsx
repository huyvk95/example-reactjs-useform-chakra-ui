import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { flexCenter } from '@styles';
import { EmptySvg } from '@assets/svgs';

const Wrap = styled.div`
  ${flexCenter}
  flex-direction: column;
  width: 100%;
  min-height: 400px;

  & > *:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const Icon = styled(EmptySvg)`
  width: 150px;
  fill: ${({ theme }) => theme.colors.primary};
`;

const Text = styled.p`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.primary};
`;

type Props = {
  message?: string;
  button?: {
    title: string;
    onClick: () => void;
  };
};

export const Empty: React.FC<Props> = ({ message, button }) => (
  <Wrap>
    <Icon />
    <Text>{message || 'No data found'}</Text>
    {button && (
      <Button bg="primary" color="white" colorScheme="purple" onClick={button.onClick}>
        {button.title}
      </Button>
    )}
  </Wrap>
);
