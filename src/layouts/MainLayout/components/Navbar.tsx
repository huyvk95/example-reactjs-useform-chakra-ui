import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';

import { BarSvg } from '@assets/svgs';
import { appActions } from '@slices';
import { flexCenter } from '@styles';

const Wrap = styled.div`
  ${flexCenter}
  justify-content: space-between;
  padding: 0 25px;
  height: ${({ theme }) => theme.sizes.header}px;
  background-color: white;
`;

const ButtonBar = styled.button`
  svg {
    width: 28px;
    height: 28px;
    fill: #2f395f;
  }
`;

export const Navbar: React.FC = () => {
  const dispatch = useDispatch();

  const onClickButtonBar = () => {
    dispatch(appActions.toggleSidebarCollapse());
  };

  return (
    <Wrap>
      <ButtonBar onClick={onClickButtonBar}>
        <BarSvg />
      </ButtonBar>
    </Wrap>
  );
};
