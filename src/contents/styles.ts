import PhoneInput from 'react-phone-number-input';
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const WrapButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const InputPhone = styled(PhoneInput, { shouldForwardProp: (prop) => isPropValid(prop) })<{ error?: boolean }>`
  height: var(--chakra-sizes-10);
  border: 1px solid;
  border-color: inherit;
  border-radius: var(--chakra-radii-md);
  padding: 0 var(--chakra-space-4);
  outline: 2px solid transparent;
  outline-offset: 2px;
  background: inherit;

  /* E53E3E */

  &:hover {
    border-color: var(--chakra-colors-gray-300);
  }

  &.PhoneInput--focus {
    border-color: #3182ce;
    box-shadow: 0 0 0 1px #3182ce;
  }

  &.PhoneInput--disabled {
    opacity: 0.4;
  }

  .PhoneInputInput {
    background-color: unset;
    outline: none;
  }

  ${({ error }) =>
    error &&
    css`
      border-color: #e53e3e;
      box-shadow: 0 0 0 1px #e53e3e;
    `}
`;
