import styled from 'styled-components';
import Link from 'next/link';

import { MenuButtonProps } from './modules/models/menu-button.model';

import { COLOR } from '@constants/color.constant';

const Styled = styled.button`
  padding: 2.4rem 8rem;
  text-decoration: underline;
  background-color: ${COLOR.primary};
  border: 0.2rem solid black;
  font-size: 4.8rem;
  box-shadow: 4px 4px 0 0 black;
  transform: skew(-1deg, -10deg);
  transition: 0.1s ease-out;
  cursor: pointer;

  :hover {
    color: ${COLOR.primary};
    background-color: black;
    box-shadow: -7px 7px 0 0 ${COLOR.tertiary};
    transform: skew(0);
  }
`;

const MenuButton: React.FC<MenuButtonProps> = ({ children, link }) => {
  return (
    <Link href={link} passHref>
      <Styled>{children}</Styled>
    </Link>
  );
};

export default MenuButton;
