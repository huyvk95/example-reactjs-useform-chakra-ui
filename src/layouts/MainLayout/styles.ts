import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const WrapContent = styled.div`
  flex: 1;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.div`
  height: calc(100vh - ${({ theme }) => theme.sizes.header}px);
  padding: 25px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #f00;
  }
`;
