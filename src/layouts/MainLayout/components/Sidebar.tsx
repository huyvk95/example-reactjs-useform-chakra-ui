import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';

import { EmployeeSvg, LogoSvg } from '@assets/svgs';
import { flexCenter } from '@styles';
import { appSelector } from '@slices';
import { ROUTERS } from '@constants';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

// > Type
type ItemProps = { icon: React.FC; text: string; path: string };

// > Style
const WrapLogo = styled(Link)`
  ${flexCenter}
  height: ${({ theme }) => theme.sizes.header}px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  & > *:not(:first-child) {
    margin-left: 10px;
  }
`;

const WrapContent = styled.div`
  padding: 20px 15px;
`;

const WrapItem = styled(Link, { shouldForwardProp: (prop) => isPropValid(prop) })<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 43px;

  & > *:not(:first-child) {
    margin-left: 10px;
  }

  svg {
    width: 17px;
    height: 17px;
    fill: ${({ active, theme }) => (active ? 'white' : theme.colors.semi)};
  }

  p {
    color: ${({ active, theme }) => (active ? 'white' : theme.colors.semi)};
  }
`;

const Text = styled.p`
  white-space: nowrap;
  overflow: hidden;
`;

const TextLogo = styled(Text)`
  color: white;
  font-size: 1.125rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const Logo = styled(LogoSvg)`
  width: 20px;
  height: 20px;

  path {
    fill: white;
  }
`;

const Wrap = styled.div<{ collapse: boolean }>`
  width: ${({ collapse }) => (collapse ? 80 : 240)}px;
  background-color: ${({ theme }) => theme.colors.sidebar};
  transition: 0.6s ease;

  ${({ collapse }) =>
    collapse &&
    css`
      ${Text}, ${TextLogo} {
        display: none;
      }
      ${WrapItem} {
        justify-content: center;

        svg {
          width: 22px;
          height: 22px;
        }
      }
    `}
`;

// > Data
const items: ItemProps[] = [
  {
    icon: EmployeeSvg,
    text: 'Employee',
    path: ROUTERS.EMPLOYEE,
  },
];

const Item: React.FC<ItemProps> = ({ icon: Icon, text, path }) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname.match(/\/\w+/i)?.[0];
    setIsActive(currentPath === path);
  }, [location]);

  return (
    <WrapItem to={path} active={isActive}>
      <Icon />
      <Text>{text}</Text>
    </WrapItem>
  );
};

export const Sidebar: React.FC = () => {
  const collapse = useSelector(appSelector.selectIsSidebarCollapse);

  return (
    <Wrap collapse={collapse}>
      <WrapLogo to="/">
        <Logo />
        <TextLogo>Employee Manager</TextLogo>
      </WrapLogo>
      <WrapContent>
        {items.map((itemData, i) => (
          <Item {...itemData} key={i} />
        ))}
      </WrapContent>
    </Wrap>
  );
};
