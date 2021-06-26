import Link from 'next/link';
import styled from 'styled-components';

import { HeaderProps } from './modules/models/header.model';

import { COLOR } from '@constants/color.constant';

const Styled = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 18rem;
  background-color: black;
  color: white;

  .title {
    cursor: pointer;
    font-size: 6.2rem;
    font-weight: 800;
    margin-bottom: 1.2rem;
  }

  .button {
    cursor: pointer;
    padding: 0.8rem 1.6rem;
    background: ${COLOR.backgroundSecondary};
    border: 0.2rem solid ${COLOR.yellow};
    border-radius: 0.4rem;
    transition: 0.2s ease-in-out;

    :hover {
      border: 0.2rem dashed ${COLOR.secondary};
      color: ${COLOR.primary};
      background: black;
    }
  }
`;

const Header: React.FC<HeaderProps> = ({ buttonTitle, buttonAction }) => {
  return (
    <Styled>
      <Link href='/' passHref>
        <h1 className='title'>Learn & Grow</h1>
      </Link>
      <button className='button' onClick={buttonAction}>
        {buttonTitle}
      </button>
    </Styled>
  );
};

export default Header;
